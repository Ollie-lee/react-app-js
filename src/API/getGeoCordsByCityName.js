import OpenWeatherMapGeo from "./service/OpenWeatherMapGeo";

export const getGeoCordsByCityName = async (name) => {
  const { data } = await OpenWeatherMapGeo.get("/direct", {
    params: {
      q: name,
      limit: 1,
    },
  });
  return data;
};
