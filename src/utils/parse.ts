export const stringToBoolean = (str: string | undefined): boolean => {
  const input = (str ?? 'false').toLowerCase().trim();
  if (input === 'true') {
    return true;
  } else if (input === 'false') {
    return false;
  } else {
    throw new Error(`Could not parse (${str}) as boolean.`);
  }
};
