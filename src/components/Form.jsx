import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  VStack,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

// Sample sectors data from the backend
const sectorsFromBackend = [
  {
    id: 1,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Manufacturing",
    parentId: null,
  },
  {
    id: 2,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Service",
    parentId: null,
  },
  {
    id: 3,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Other",
    parentId: null,
  },
  {
    id: 5,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Printing",
    parentId: 1,
  },
  {
    id: 6,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Food and Beverage",
    parentId: 1,
  },
  {
    id: 7,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Textile and Clothing",
    parentId: 1,
  },
  {
    id: 8,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Wood",
    parentId: 1,
  },
  {
    id: 9,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Plastic and Rubber",
    parentId: 1,
  },
  {
    id: 11,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Metalworking",
    parentId: 1,
  },
  {
    id: 12,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Machinery",
    parentId: 1,
  },
  {
    id: 13,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Furniture",
    parentId: 1,
  },
  {
    id: 18,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Electronics and Optics",
    parentId: 1,
  },
  {
    id: 19,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Construction materials",
    parentId: 1,
  },
  {
    id: 21,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Transport and Logistics",
    parentId: 2,
  },
  {
    id: 22,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Tourism",
    parentId: 2,
  },
  {
    id: 25,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Business services",
    parentId: 2,
  },
  {
    id: 28,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Information Technology and Telecommunications",
    parentId: 2,
  },
  {
    id: 29,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Energy technology",
    parentId: 3,
  },
  {
    id: 33,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Environment",
    parentId: 3,
  },
  {
    id: 35,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Engineering",
    parentId: 2,
  },
  {
    id: 37,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Creative industries",
    parentId: 3,
  },
  {
    id: 39,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Milk & dairy products",
    parentId: 6,
  },
  {
    id: 40,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Meat & meat products",
    parentId: 6,
  },
  {
    id: 42,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Fish & fish products",
    parentId: 6,
  },
  {
    id: 43,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Beverages",
    parentId: 6,
  },
  {
    id: 44,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Clothing",
    parentId: 7,
  },
  {
    id: 45,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Textile",
    parentId: 7,
  },
  {
    id: 47,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Wooden houses",
    parentId: 8,
  },
  {
    id: 51,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Wooden building materials",
    parentId: 8,
  },
  {
    id: 53,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Plastics welding and processing",
    parentId: 559,
  },
  {
    id: 54,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Packaging",
    parentId: 9,
  },
  {
    id: 55,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Blowing",
    parentId: 559,
  },
  {
    id: 57,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Moulding",
    parentId: 559,
  },
  {
    id: 62,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Forgings, Fasteners",
    parentId: 542,
  },
  {
    id: 66,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "MIG, TIG, Aluminum welding",
    parentId: 542,
  },
  {
    id: 67,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Construction of metal structures",
    parentId: 11,
  },
  {
    id: 69,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Gas, Plasma, Laser cutting",
    parentId: 542,
  },
  {
    id: 75,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "CNC-machining",
    parentId: 542,
  },
  {
    id: 91,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Machinery equipment/tools",
    parentId: 12,
  },
  {
    id: 93,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Metal structures",
    parentId: 12,
  },
  {
    id: 94,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Machinery components",
    parentId: 12,
  },
  {
    id: 97,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Maritime",
    parentId: 12,
  },
  {
    id: 98,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Kitchen",
    parentId: 13,
  },
  {
    id: 99,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Project furniture",
    parentId: 13,
  },
  {
    id: 101,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Living room",
    parentId: 13,
  },
  {
    id: 111,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Air",
    parentId: 21,
  },
  {
    id: 112,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Road",
    parentId: 21,
  },
  {
    id: 113,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Water",
    parentId: 21,
  },
  {
    id: 114,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Rail",
    parentId: 21,
  },
  {
    id: 121,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Software, Hardware",
    parentId: 28,
  },
  {
    id: 122,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Telecommunications",
    parentId: 28,
  },
  {
    id: 141,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Translation services",
    parentId: 2,
  },
  {
    id: 145,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Labelling and packaging printing",
    parentId: 5,
  },
  {
    id: 148,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Advertising",
    parentId: 5,
  },
  {
    id: 150,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Book/Periodicals printing",
    parentId: 5,
  },
  {
    id: 224,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Manufacture of machinery",
    parentId: 12,
  },
  {
    id: 227,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Repair and maintenance service",
    parentId: 12,
  },
  {
    id: 230,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Ship repair and conversion",
    parentId: 97,
  },
  {
    id: 263,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Houses and buildings",
    parentId: 11,
  },
  {
    id: 267,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Metal products",
    parentId: 11,
  },
  {
    id: 269,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Boat/Yacht building",
    parentId: 97,
  },
  {
    id: 271,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Aluminium and steel workboats",
    parentId: 97,
  },
  {
    id: 337,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Other (Wood)",
    parentId: 8,
  },
  {
    id: 341,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Outdoor",
    parentId: 13,
  },
  {
    id: 342,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Bakery & confectionery products",
    parentId: 6,
  },
  {
    id: 378,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Sweets & snack food",
    parentId: 6,
  },
  {
    id: 385,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Bedroom",
    parentId: 13,
  },
  {
    id: 389,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Bathroom/sauna",
    parentId: 13,
  },
  {
    id: 390,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Children’s room",
    parentId: 13,
  },
  {
    id: 392,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Office",
    parentId: 13,
  },
  {
    id: 394,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Other (Furniture)",
    parentId: 13,
  },
  {
    id: 437,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Other",
    parentId: 6,
  },
  {
    id: 508,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Other",
    parentId: 12,
  },
  {
    id: 542,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Metal works",
    parentId: 11,
  },
  {
    id: 556,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Plastic goods",
    parentId: 9,
  },
  {
    id: 559,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Plastic processing technology",
    parentId: 9,
  },
  {
    id: 560,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Plastic profiles",
    parentId: 9,
  },
  {
    id: 576,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Programming, Consultancy",
    parentId: 28,
  },
  {
    id: 581,
    createdAt: "2023-12-16T17:35:38.614Z",
    updatedAt: null,
    name: "Data processing, Web portals, E-marketing",
    parentId: 28,
  },
];

// Function to convert flat array data into a hierarchical structure
const convertToHierarchy = (data) => {
  const map = new Map();
  const hierarchy = [];

  data.forEach((sector) => {
    map.set(sector.id, { ...sector, children: [] });
  });

  data.forEach((sector) => {
    if (sector.parentId !== null) {
      map.get(sector.parentId).children.push(map.get(sector.id));
    } else {
      hierarchy.push(map.get(sector.id));
    }
  });

  return hierarchy;
};

const FormComponent = () => {
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [termsChecked, setTermsChecked] = useState(false);

  // Convert flat array data into a hierarchical structure
  const sectors = convertToHierarchy(sectorsFromBackend);

  const handleSelection = (sectorId) => {
    if (selectedSectors.includes(sectorId)) {
      setSelectedSectors(selectedSectors.filter((id) => id !== sectorId));
    } else {
      setSelectedSectors([...selectedSectors, sectorId]);
    }
  };

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

  return (
    <VStack
      flexDir={"column"}
      justify={"center"}
      columnGap={"4"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Box>
        <Input isRequired placeholder="Name" errorBorderColor="red.400"></Input>
        <FormErrorMessage>Name Is Required</FormErrorMessage>
      </Box>
      <Box maxW="400px" m="auto">
        <Box fontSize="lg" mb="4">
          Please select the sectors you are involved in.
        </Box>
        <Box
          border="1px solid #ccc"
          borderRadius="md"
          maxHeight="300px"
          overflowY="auto"
        >
          {sectors.map((sector) => renderCheckboxes(sector))}
        </Box>
        <VStack mt="4em" align="start">
          <Checkbox
            isChecked={termsChecked}
            onChange={(e) => setTermsChecked(e.target.checked)}
          >
            I agree to the terms and conditions
          </Checkbox>
          <Button type="submit" colorScheme="blue" mt="4">
            Save
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default FormComponent;
