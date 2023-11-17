import html2canvas from "html2canvas";

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

export const handleDownload = async (format, fileName, id) => {
  const component = document.getElementById(id);

  if (!component) {
    console.error("Component element not found");
    return;
  }

  const canvas = await html2canvas(component);
  const dataURL = canvas.toDataURL(`image/${format}`);
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = `${fileName}.${format}`;
  link.click();
};
