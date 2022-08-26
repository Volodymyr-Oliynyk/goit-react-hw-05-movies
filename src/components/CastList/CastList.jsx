import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Image = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 4px;
`;

const CastList = ({ credits }) => {
  return (
    <List>
      {credits.map(({ id, profile_path, name }) => {
        return (
          <li key={id}>
            <Image
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
    </List>
  );
};

export default CastList;
