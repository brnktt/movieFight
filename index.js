const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "7739540f",
      i: "tt0848228"
    }
  });

  console.log(response.data);
};

fetchData();
