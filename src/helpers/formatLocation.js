const formatLocation = (locationString) => {
  const parts = locationString.split(", ");
  if (parts.length === 2) {
    return `${parts[1]}, ${parts[0]}`;
  }
  return locationString;
};

export default formatLocation;
