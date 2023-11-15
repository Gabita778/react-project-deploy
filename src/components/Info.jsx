import styled from 'styled-components'

function Info() {
  return (
    <Wrapper>
      <h2>Info</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2 rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1 fr;
  }
`;

export default Info
