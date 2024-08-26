export interface ITableFilterOption {
  id: string;
  label: string;
  value: string | boolean;
  icon?: React.ReactNode;
  selected?: boolean;
}
export interface ITableFilter {
  id: string;
  label: string;
  icon?: React.ReactNode;
  options: ITableFilterOption[];
}

export interface ITableQuery {
  id: string;
  label: string;
}

export interface IGetAllPageQueries {
  skip?: number;
  limit?: number;
  filters?: ITableFilter[];
  queries?: ITableQuery[];
}
export type PageQueries = {
  filters?: Record<string, string | boolean | string[]>;
  queries?: { field: string; text: string }[];
  skip?: number;
  limit?: number;
};

export const defaultPageQueries: IGetAllPageQueries = {
  skip: 1,
  limit: 5,
};

export const genQueriesUrl = (url: string, q: PageQueries) => {
  let queryUrl = `${url}?paginate={"skip":${
    q.skip || defaultPageQueries.skip
  },"limit":${q.limit || defaultPageQueries.limit}}&`;

  if (q) {
    if (q?.queries?.length) {
      const stringify = JSON.stringify(q.queries);

      queryUrl = queryUrl.concat(`queries=${stringify}`);

      if (q.filters) {
        const str = JSON.stringify(q.filters);

        queryUrl = queryUrl.concat(`&filters=${str}`);
      }
    }

    if (q?.filters && !q?.queries?.length) {
      const str = JSON.stringify(q.filters);

      queryUrl = queryUrl.concat(`&filters=${str}`);
    }

    return queryUrl;
  }

  return url;
};
