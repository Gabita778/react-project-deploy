import styled from "styled-components";
// import Card from './Card.jsx';
// import Followers from './Followers.jsx';

function User() {
  return (
    <Wrapper>
      <h2>User Component</h2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2 rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1 fr;
  }
`;

export default User;
