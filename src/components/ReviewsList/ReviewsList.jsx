import styled from 'styled-components';

const Item = styled.li`
  border-bottom: 1px solid black;
  margin: 0px;
  &:not(last-child) {
    margin-bottom: 20px;
  }
`;

const ReviewsList = ({ reviews }) => {
  return reviews.length < 0 ? (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <Item key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </Item>
        );
      })}   
    </ul>
  ) : (
    <p> Sorry, there are currently no reviews </p>
  );
};

export default ReviewsList;
