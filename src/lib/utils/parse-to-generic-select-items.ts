export const parseGenericSelectItems = <T>(
  data: T[],
  valueProp: keyof T,
  labelProp?: keyof T,
  cbLabel?: (item: T) => string
) => {
  return data
    ? data?.map((item) => ({
        value: item[valueProp] as string,
        id: item[valueProp] as string,
        label: cbLabel ? cbLabel(item) : (item[labelProp] as string),
      }))
    : [];
};




export const parseEnumToGenericSelectItems = (enumData: Record<string, string>) => {
  return Object.keys(enumData).map((key) => ({
    value: key,
    id: key,
    label: enumData[key],
  }));
};






