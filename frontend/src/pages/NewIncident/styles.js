import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0 0 80px ${(props) => props.theme.colors.border};
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    margin-top: 20%;

    img {
      margin-top: 15%;
    }

    a {
      margin-left: 0px;
    }

    form {
      margin-top: 10%;
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  input,
  textarea {
    margin-top: 8px;
  }
`;
