import styled from 'styled-components';
import {useAuth0} from '@auth0/auth0-react'
function Header() {
  return (
    <Wrapper>
      <h1>Profile finder for GitHub</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding: 1.5rem;
margin-bottom: 4rem;
background-color: #535bf2;
color: white;
text-align: center;
display: grid;
justify-items: center;
justify-content: center;
gap: 2rem;

h4{
    margin-bottom: 0;
    font-weight: 500;
}

img{
    width: 35px;
    height: 35px;
}

`

export default Header
