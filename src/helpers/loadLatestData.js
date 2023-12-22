const loadLatestData = async (setSectorsData, getSectors) => {
    try {
      const response = await getSectors();
      setSectorsData(response);
    } catch (error) {
      console.error("Error fetching latest data:", error);
    }
  };

export default loadLatestData;