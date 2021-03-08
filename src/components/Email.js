import React from "react"
import styled from "styled-components"
import EmailBg from "../assets/images/email-1.jpg"
import { Button } from "./Button"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get Access to Exclusive Offers</h1>
        <p>
          Sign up for your newsletter below to get $100 off your first trip!
        </p>
      </EmailContent>
      <form action="#">
        <FormWrap>
          <label htmlFor="email">
            <input type="email" placeholder="Enter your email" id="email" />
          </label>
          <Button
            as="button"
            type="submit"
            primary="true"
            round="true"
            css={`
              height: 48px;

              @media screen and (max-width: 868px) {
                width: 100%;
                min-width: 350px;
              }
              @media screen and (max-width: 400px) {
                width: 100%;
                min-width: 250px;
              }
            `}
          >
            Sign Up
          </Button>
        </FormWrap>
      </form>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${EmailBg}) no-repeat center;
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`
const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }
  p {
    text-align: center;
    margin-bottom: 2rem;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
  }

  form {
    z-index: 10;
  }
`
const FormWrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    margin-right: 1rem;
  }
  @media screen and (max-width: 868px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }
`
