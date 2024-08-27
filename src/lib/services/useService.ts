import { useQuery } from "@tanstack/react-query";

import { genRouteUrl, PageQueries } from "../utils/queries";
import { listService } from "./common.services";

export const useList = <T>(
  routeBase: string,
  queries?: PageQueries,
  optionalRoute?: string
) => {
  const route = genRouteUrl({
    url: `${routeBase}`,
    optionalRoute,
  });

  const query = useQuery({
    queryKey: [routeBase, queries, optionalRoute],
    queryFn: () => listService<T>(route, queries),
  });

  return {
    ...query,
  };
};
