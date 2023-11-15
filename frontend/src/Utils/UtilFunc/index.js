export const detectLabelField = (data) => {
  // Iterate through the keys of the first entry and find the first key with a string value
  for (const key in data[0]) {
    if (typeof data[0][key] === "string") {
      return key;
    }
  }
  console.error("No suitable label field found.");
  return null;
};

export const detectValueField = (data) => {
  // Iterate through the keys of the first entry and find the first key with a numeric value
  for (const key in data[0]) {
    const value = parseFloat(data[0][key]);
    if (!isNaN(value)) {
      return key;
    }
  }
  console.error("No suitable value field found.");
  return null;
};
