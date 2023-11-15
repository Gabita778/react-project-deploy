import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

function Error() {
  return (
    <Container>
      <div>
        <span className="title-letter letter-1">4</span>
        <span className="title-letter letter-2">0</span>
        <span className="title-letter letter-3">4</span>
        <h3>Page Not Found</h3>
      </div>
      <Link to='/' className='button'>Home</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12em;

  h3{
    font-family: "Lato", sans-serif;
    color:#646cff;
    font-weight: 800;
    font-size: 24px;
    text-transform: uppercase;
  }

  .title-letter {
    font-family: "Lato", sans-serif;
    color: #484848;
    font-weight: 800;
    text-transform: uppercase;
    animation: shadow 1.6s linear infinite;
  }

  .letter-1 {
    animation-delay: 0.1s;
  }

  .letter-2 {
    animation-delay: 0.2s;
  }

  .letter-3 {
    animation-delay: 0.3s;
  }

  @keyframes shadow {
    0% {
      color: #484848;
      text-shadow: none;
    }

    90% {
      color: #484848;
      text-shadow: none;
    }

    100% {
      color: #fff900;
      text-shadow: #fff900 0px 0px 5px, #fff900 0px 0px 10px,
        #fff900 0px 0px 15px, #ff6c00 0px 0px 20px, #ff6c00 0px 0px 30px,
        #ff6c00 0px 0px 40px;
    }
  }

  .button {
    font-size: 20px;
  }
`;
export default Error
