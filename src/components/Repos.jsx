import styled from 'styled-components';
import {GithubContext} from '../context/GithubContext.jsx'



function Repos() {
  return (
    <div>
      <h2>Repos Component</h2>
    </div>
  )
}

const Wrapper = styled.div`
display: grid;
justify-items: center;
gap: 2rem;

@media (min-width: 800px){
    grid-template-columns: 1fr 1fr;
}

@media (min-width: 1200px){
    grid-template-columns: 2fr 3fr;
}

div{
    width: 100%;
}

.charts-container{
    width: 100%;
}
 
`;

export default Repos
