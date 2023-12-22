import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import getSectors from "../api/getSectors";
import convertToHierarchy from "../helpers/convertToHierarchy";
import submitEntry from "../api/submitEntry";
import { showErrorToast, showSuccessToast } from "../helpers/showToasts";
import loadLatestData from "../helpers/loadLatestData";

/**
 * FormComponent is a component that renders a form with input fields, checkboxes, and a submit button.
 * It allows the user to enter their name, select sectors, and agree to the terms and conditions.
 * When the form is submitted, it validates the input and calls the submitEntry function with the entered data.
 * After the submission, the user can update the data by submitting the form again.
 *
 * @returns {JSX.Element} The rendered FormComponent.
 */
const FormComponent = () => {
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [termsChecked, setTermsChecked] = useState(false);
  const [sectorsData, setSectorsData] = useState([]);
  const toast = useToast();

  const sectors = convertToHierarchy(sectorsData);

  useEffect(() => {
    loadLatestData(setSectorsData, getSectors);
  }, []);

  // Validate the input and call the submitEntry function with the entered data.
  const handleSubmit = (values) => {
    const hasNumber = /\d/.test(values.name);

    if (
      !values.name ||
      !termsChecked ||
      selectedSectors.length === 0 ||
      hasNumber
    ) {
      showErrorToast(toast);
    } else {
      showSuccessToast(toast);
      const entryData = {
        name: values.name,
        sectors: selectedSectors,
        agreeTerms: termsChecked,
      };
      submitEntry(entryData);
    }
  };

  // Render sectors checkboxes recursively.
  const renderCheckboxes = (data, level = 1) => {
    return (
      <VStack align="start" ml={level * 4} key={data.id}>
        <Checkbox
          isChecked={selectedSectors.includes(data.id)}
          onChange={() => handleSelection(data.id)}
        >
          {data.name}
        </Checkbox>
        {data.children &&
          data.children.map((child) => renderCheckboxes(child, level + 1))}
      </VStack>
    );
  };

  // Handle the selection of a sector.
  const handleSelection = (sectorId) => {
    if (selectedSectors.includes(sectorId)) {
      setSelectedSectors(selectedSectors.filter((id) => id !== sectorId));
    } else {
      setSelectedSectors([...selectedSectors, sectorId]);
    }
  };

  return (
    <VStack
      flexDir={"column"}
      justify={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <Field name="name">
            {({ field }) => (
              <Box>
                <Input
                  {...field}
                  type="text"
                  placeholder="Name"
                  required
                  errorBorderColor="red.400"
                  mb={4}
                ></Input>
                <Box maxW="400px" m="auto">
                  <Box fontSize="lg" mb={4}>
                    {" "}
                  </Box>
                  <Box
                    border="1px solid #ccc"
                    borderRadius="md"
                    maxHeight="300px"
                    overflowY="auto"
                    mb={4}
                  >
                    {/* Render sectors checkboxes */}
                    {sectors.map((sector) => renderCheckboxes(sector))}
                  </Box>
                </Box>
                <Box mb={4}>
                  {" "}
                  <Field
                    {...field}
                    isRequired
                    as={Checkbox}
                    isChecked={termsChecked}
                    onChange={(e) => setTermsChecked(e.target.checked)}
                  >
                    I agree to the terms and conditions
                  </Field>
                  <ErrorMessage name="name" component="div" color="red.400" />
                </Box>
                <Button type="submit" colorScheme="blue" mt={4}>
                  Save
                </Button>
              </Box>
            )}
          </Field>
        </Form>
      </Formik>
    </VStack>
  );
};

export default FormComponent;
