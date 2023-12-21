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

export default convertToHierarchy;