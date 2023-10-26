import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  margin-top: 2.2rem;
  border-top: 1px solid #bfbbbb69;

  .c-inbox {
    max-width: 14rem;
    width: 100%;
    height: 30rem;
    overflow-y: auto;

    h2 {
      padding: 10px 0 10px 10px;
      border-bottom: 1px solid #bfbbbb69;
      border-right: 1px solid #bfbbbb69;
      font-family: "Roboto";
      cursor: pointer;
    }
  }

  .c-inbox__card:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .c-inbox__email {
    display: flex;
    flex-direction: column;

    padding: 4px 0 4px 4px;
    border-bottom: 1px solid #bfbbbb69;
    border-right: 1px solid #bfbbbb69;
    min-height: 1.4rem;

    cursor: pointer;

    h3 {
      font-family: "Roboto";
      font-weight: 600;
    }

    p {
      font-family: "Roboto";
      font-size: 14px;
      color: gray;
    }
  }

  .c-box-email {
    width: 100%;
    background-color: #f5f5f5;

    .c-box-email__h1_clear {
      min-height: 2.25rem;
      border-bottom: 1px solid #bfbbbb69;
    }

    .c-box-email__h1 {
      min-height: 28px;
      padding: 0.4rem 0 0 0.8rem;
      font-family: "Roboto";
      font-weight: 500;
    }

    .c-box-email__container__info {
      padding: 0.3rem;
      border: 1px solid #bfbbbb69;
      background-color: white;

      overflow-y: auto;

      p {
        font-family: "Roboto";
        font-size: 14px;
      }

      h2 {
        font-family: "Roboto";
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    .c-inbox {
      max-width: 100%;
      height: 15rem;
    }

    .c-box-email__container__info {
      height: 20rem;
      margin: 0.2rem 0.6rem 0.5rem 0.6rem;
    }

    .c-box-email__h1_clear {
      display: none;
    }

    .c-box-email__h1 {
      margin-top: 0.2rem;
    }
  }

  @media screen and (min-width: 600px) {
    .c-box-email__container__info {
      height: 24.2rem;
      margin: 0.2rem 0.6rem 0 0.6rem;
    }
  }
`;
