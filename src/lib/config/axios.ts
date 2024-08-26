import axios from "axios";
import { getCookie } from "typescript-cookie";
import { useServicesConfigStore } from "../stores/useServicesConfigStore";

export const noAuthApi = () => {
  const { APP_CONFIG } = useServicesConfigStore();

  return axios.create({
    baseURL: APP_CONFIG.LOCALE_ENVS.API_URL,
  });
};
export const apiWithAuth = () => {
  const { APP_CONFIG } = useServicesConfigStore();

  const accessToken = getCookie("accessToken");
  return axios.create({
    baseURL: APP_CONFIG.LOCALE_ENVS.API_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
