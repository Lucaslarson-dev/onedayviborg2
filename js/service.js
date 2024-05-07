const service = {};

service.getmoments = async () => {
  try {
    //const response = await fetch("https://onedayviborg.webmcdm.dk/api/moments");
    const response = await fetch("./data/moments.json");
    const moments = await response.json();
    return moments;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};
export default service;
