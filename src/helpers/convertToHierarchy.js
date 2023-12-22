const convertToHierarchy = (data) => {
  // Create a new Map to store the sectors
  const map = new Map();
  // Create an empty array to store the hierarchy
  const hierarchy = [];

  // Iterate over the data array
  data.forEach((sector) => {
    // For each sector, create a new entry in the map with the sector's id as the key
    // and an object containing the sector's properties and an empty children array as the value
    map.set(sector.id, { ...sector, children: [] });
  });

  // Iterate over the data array again
  data.forEach((sector) => {
    // Check if the sector has a parentId
    if (sector.parentId !== null) {
      // If it does, get the parent sector from the map using the parentId
      // and push the current sector as a child to the parent's children array
      map.get(sector.parentId).children.push(map.get(sector.id));
    } else {
      // If the sector does not have a parentId, it is a top-level sector
      // Push it to the hierarchy array
      hierarchy.push(map.get(sector.id));
    }
  });

  // Return the hierarchy array
  return hierarchy;
};

export default convertToHierarchy;