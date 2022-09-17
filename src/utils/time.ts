export const sleep = (ms: number) => {
  return new Promise(resolve => {
    //@ts-ignore
    return setTimeout(resolve, ms);
  });
};
