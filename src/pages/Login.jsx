import styled from "styled-components";
import gatogit from "../../public/images/gatogit.jpg";

function Login() {
  return (
    <Wrapper>
          <div className="container">
              <img src={gatogit} alt="github-symbol-neon"></img>
              <h1>github user</h1>
              <button className="button">Login</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 1rem;
  }
  h1 {
    margin-bottom: 1rem;
  }
`;

export default Login;
