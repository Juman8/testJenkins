import styled from 'styled-components';

export const StyledSignUpForm = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border-radius: 0.5rem;
  @media (min-width: 1280px) {
    min-width: 41rem;
  }
  .heading {
    margin-bottom: 3.6rem;
    .heading__title {
      text-align: center;
      font-size: 3.2rem;
      font-weight: 700;
      margin-bottom: 0.8rem;
      color: ${(p) => p.theme.colors.text};
    }
    .desc {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${(p) => p.theme.colors.subText};
    }
  }

  .actions {
    @media (min-width: 1280px) {
      display: flex;
      align-items: center;
      .btn {
        width: 12.8rem;
      }
    }
  }

  .signUp-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    .shared-input {
      margin-bottom: 2rem;
      .inner-input {
        height: 4.6rem;
      }
    }
    .submit__btn {
      @media (min-width: 1280px) {
        margin-right: 1.2rem;
        margin-bottom: 0;
      }
      margin-bottom: 1.2rem;
    }
    .forgot-password {
      display: flex;
      justify-content: flex-end;
      text-align: right;
      .forgot-text {
        font-size: 1em;
        font-weight: 400;
        color: ${(p) => p.theme.colors.authText};
        margin-bottom: 3.6rem;
      }
    }

    .inner-input {
      width: 100%;
      height: 4.6rem;
    }

    .agree-policy__cb {
      margin-bottom: 1.8rem;
    }
  }
`;
