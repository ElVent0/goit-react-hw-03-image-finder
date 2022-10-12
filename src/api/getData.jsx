const getData = async (name, page) => {
  const data = await fetch(
    `https://pixabay.com/api/?q=${name}&page=1&key=15486639-fb36d9e164edb7a2c5eb45855&image_type=photo&orientation=horizontal&per_page=${
      page * 12
    }`
  );
  const parsedData = await data.json();
  console.log('api', parsedData);
  return parsedData.hits;
};

export default getData;
