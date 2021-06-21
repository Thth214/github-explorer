import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #444;
`;

export const Icon = styled.img`
    height: 48px;
    width: 48px;
`;

export const Title = styled.div`
    margin-left: 10px;
`;

export const Input = styled.input`
    width: 300px;
    height: 40px;
    margin-bottom: 40px;
    border-radius: 5px;
    box-shadow: none;
    border-color: #D0D0D0;
`;

export const Repository = styled.div`
  margin-top: 10px; 
  max-width: 500px;

  a {
    border: solid 1px #D0D0D0;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 0.2s;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;