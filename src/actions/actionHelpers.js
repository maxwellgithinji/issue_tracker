export const actionIsLoading = (type, payload) => {
  return {
    type,
    payload,
  };
};
export const actionHasLoaded = (type, payload) => {
  return {
    type,
    payload,
    loading: false,
  };
};
export const actionHasErrors = (type, payload) => {
  return {
    type,
    payload,
    loading: false,
  };
};
