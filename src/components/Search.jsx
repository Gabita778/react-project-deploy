import styled from 'styled-components';
// import {GithubContext} from '../context/GithubContext.jsx'



function Search() {
  return (
    <Wrapper>
      <h2>Search Component</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position:relative;
display: grid;
gap: 1rem 1.75 rem;

@media (min-width: 768px){
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3{
        padding: 0 0.5rem;
    }
}

.form-control{
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
}
 
`

export default Search

