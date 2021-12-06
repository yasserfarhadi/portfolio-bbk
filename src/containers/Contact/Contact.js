import { useReducer } from 'react';
import Input from '../../components/Input/Input';
import validate from './validate';

import styled from 'styled-components';
import { StyledContainer, BGColor } from '../../GlobalStyles';
import spacer from '../../assets/spacer.png';

import React from 'react';

export const initialState = {
  username: {
    value: '',
    error: null,
    valid: false,
    touched: false,
    required: true,
  },
  email: {
    value: '',
    error: null,
    valid: false,
    touched: false,
    required: true,
  },
  phoneNumber: {
    value: '',
    error: null,
    valid: false,
    touched: false,
    required: true,
  },
  message: {
    value: '',
    error: null,
    valid: false,
    touched: false,
    required: true,
  },
};

function reducer(state = initialState, action) {
  return {
    ...state,
    [action.type]: {
      ...state[action.type],
      ...action.payload,
    },
  };
}

const StyledContact = styled.div`
  background-color: ${BGColor};
  padding: 140px 0;
  overflow: hidden;
  .header {
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
    .contact {
      border: 8px solid #000;
      padding: 20px 40px;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.35em;
      @media (min-width: 768px) {
        font-size: 26px;
      }
      @media (min-width: 1170px) {
        font-size: 38px;
      }
    }
  }

  .introduction {
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
    .text {
      width: 70%;
      max-width: 760px;
      text-align: center;
    }
  }
  .spacer {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  .form-container {
    width: 60%;
    max-width: 760px;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    form {
      width: 610px;
    }
  }
`;

function Contact() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    const { valid, error } = validate(name, value);
    dispatch({
      type: name,
      payload: {
        value,
        valid,
        error,
        touched: true,
      },
    });
  };

  const submitHandler = (e) => {
    console.log('shit');
    e.preventDefault();
    const formValues = {};
    let validationPassed = true;
    for (const item in state) {
      formValues[item] = state[item].value;
      if (state[item].required)
        validationPassed = state[item].valid && validationPassed;
      const { valid, error } = validate(
        item,
        state[item].value,
        item === 'confirmPassword' ? state['password'].value : null
      );
      dispatch({
        type: item,
        payload: {
          valid,
          error,
          touched: true,
        },
      });
    }
    if (validationPassed) console.log(formValues);
  };

  return (
    <StyledContact id="contact">
      <StyledContainer>
        <div className="header">
          <div className="contact">CONTACT</div>
        </div>
        <div className="introduction">
          <div className="text">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est.
          </div>
        </div>
        <div className="spacer">
          <img src={spacer} />
        </div>

        <div className="form-container">
          <form noValidate onSubmit={submitHandler}>
            <Input
              label="Name"
              identifier="input"
              type="text"
              name="username"
              placeholder="Name*"
              value={state.username.value}
              required={state.username.required}
              changed={changeHandler}
              error={state.username.error}
              touched={state.username.touched}
              valid={state.username.valid}
            />
            <Input
              label="Email"
              identifier="input"
              type="email"
              name="email"
              placeholder="Email Address*"
              value={state.email.value}
              required={state.email.required}
              changed={changeHandler}
              error={state.email.error}
              touched={state.email.touched}
              valid={state.email.valid}
            />
            <Input
              label="phone number"
              identifier="input"
              type="number"
              name="phoneNumber"
              placeholder="Phone Number*"
              value={state.phoneNumber.value}
              required={state.phoneNumber.required}
              changed={changeHandler}
              error={state.phoneNumber.error}
              touched={state.phoneNumber.touched}
              valid={state.phoneNumber.valid}
            />
            <Input
              label="Message"
              identifier="textarea"
              type="text"
              name="message"
              placeholder="Your Message*"
              value={state.message.value}
              required={state.message.required}
              changed={changeHandler}
              error={state.message.error}
              touched={state.message.touched}
              valid={state.message.valid}
            />
            <Input identifier="button" type="submit" name="submit">
              SUBMIT
            </Input>
          </form>
        </div>
      </StyledContainer>
    </StyledContact>
  );
}

export default Contact;
