const getHoursAndMins = (duration) => {
  if (!duration) return;
  const hours = Math.floor(duration/60);
  const minutes = duration % 60;
  if (hours === 0) return `${minutes}м`;
  return `${hours}ч ${minutes}м`;
};

export default getHoursAndMins;
