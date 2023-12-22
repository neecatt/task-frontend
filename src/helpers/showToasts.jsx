const showErrorToast = (toast) => {
  toast({
    title: "Form Incomplete",
    description:
      "Please enter your name, select at least one sector, and agree to the terms.",
    status: "error",
    duration: 2000,
    isClosable: true,
  });
};

const showSuccessToast = (toast) => {
  toast({
    title: "Form Submitted",
    description: "Form submitted successfully",
    status: "success",
    duration: 2000,
    isClosable: true,
  });
};

export { showErrorToast, showSuccessToast };
