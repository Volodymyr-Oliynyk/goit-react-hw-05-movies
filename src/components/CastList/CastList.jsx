const CastList = ({ credits }) => {
  return (
    <ul>
      {credits.map(({ id, profile_path, name }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? 'https://image.tmdb.org/t/p/w500' + profile_path
                  : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
              }
              alt={name}
            />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CastList;
