import axios from "axios";

const options = {
  method: "GET",
  url: "https://corona.lmao.ninja/v2/countries",
  //   headers: {
  //     "x-rapidapi-key": "a72b7c7f92msh256f703513e22f3p1aaad5jsne0cc514c444f",
  //     "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
  //   },
};

export const callAPI = () =>
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
