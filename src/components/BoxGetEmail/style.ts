import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 0.2rem 0 0.2rem;
  margin-top: 2rem;

  .c-box-title {
    max-width: 20rem;
    width: 100%;

    p {
      padding-bottom: 2px;
      padding-left: 2px;
      color: gray;
      font-family: "Roboto";
      font-size: 14px;
    }
  }

  .c-box {
    display: flex;
    max-width: 20rem;
    width: 100%;
  }

  .c-box__input {
    width: 100%;
    height: 1.8rem;
    border: 1px solid #bfbbbb69;
    border-radius: 3px 0px 0px 3px;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 16px;
    color: gray;
  }

  .c-box__input:focus-visible {
    outline: none;
  }

  .c-box__button {
    display: flex;
    align-items: center;
    cursor: pointer;

    color: gray;
    width: 4.4rem;
    border: 1px solid #bfbbbb69;
    border-left: 0;
    border-radius: 0px 3px 3px 0px;
  }

  .c-box-refresh {
    display: flex;
    align-items: center;
    padding-top: 0.4rem;

    h2 {
      color: gray;
      font-family: "Roboto";
    }
  }

  .c-box__button__refresh {
    display: flex;
    align-items: center;

    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .c-box__button__autorefresh {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border: 2px solid blue;
    background-color: white;
    color: gray;

    font-family: "Roboto";
    font-size: 13px;
    font-weight: 500;

    width: 20px;
    height: 20px;
    padding: 10px;
  }

  @media screen and (max-width: 296px) {
    .c-box-refresh {
      flex-direction: column;
    }
  }
`;
