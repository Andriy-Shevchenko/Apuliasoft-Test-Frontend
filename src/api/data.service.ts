import axiosClient from "./axiosClient";

export async function getActivities(aggregations: string[]) {
  return axiosClient
    .post('/activities', {
      aggregations
    })
    .then((res) => res)
    .catch((err) => Promise.reject(err));
}
