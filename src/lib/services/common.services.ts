import { AxiosError } from "axios";
import { apiWithAuth } from "../config/axios";
import { genQueriesUrl, PageQueries } from "../utils/queries";

export const listService = async <T>(
  route: string,
  queries?: PageQueries
): Promise<T[]> => {
  const axios = apiWithAuth();

  const url = genQueriesUrl(`/${route}`, { ...queries });

  try {
    const { data } = await axios?.get(url);

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      // toast.error(error.response?.data?.info?.message_to_show);
    }
  }
};
