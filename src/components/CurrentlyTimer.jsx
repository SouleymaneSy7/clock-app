export const CurrentlyTimer = () => {
  const currentTime = new Date();

  const offset = currentTime.getTimezoneOffset();
  const local = new Date(currentTime.getTime() + offset * 60000);

  let Hours = local.getHours();
  let Minutes = local.getMinutes();


  return (
    <h1>
      <span> {Hours} </span> <span> {Minutes} </span>
    </h1>
  );
};
