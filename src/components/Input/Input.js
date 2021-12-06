import styled from 'styled-components';

const StyledFormControl = styled.div`
  width: 100%;
  display: flex;
  margin: 7px 0;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 30px;
  input {
    flex-basis: 100%;
    all: unset;
    border-left: 5px solid
      ${(props) => (props.touched && !props.valid ? '#EA2027' : '#000')};

    border-bottom: 5px solid
      ${(props) => (props.touched && !props.valid ? '#EA2027' : '#000')};
    padding: 7px 7px 15px 5px;
    font-size: 14px;
    color: #8b8b8b;
    font-weight: 500;
  }

  textarea {
    all: unset;
    height: 185px;
    border-left: 5px solid
      ${(props) => (props.touched && !props.valid ? '#EA2027' : '#000')};

    border-bottom: 5px solid
      ${(props) => (props.touched && !props.valid ? '#EA2027' : '#000')};
    padding: 15px 7px 7px;
    font-size: 14px;
    color: #8b8b8b;
    font-weight: 500;
  }
  span {
    display: block;
    width: 100%;
    color: #ea2027;
    margin: 10px 0;
  }
  button {
    all: unset;
    align-self: center;
    flex-grow: 0;
    border-right: 2px solid #000;
    border-left: 2px solid #000;
    padding: 10px 40px;
    font-size: 16;
    font-weight: 500;
    letter-spacing: 0.2em;
    color: #000;
    transition: transform 50ms linear;
    cursor: pointer;
    :active {
      transform: scale(0.95);
    }
  }
`;

function Input({
  children,
  identifier,
  type,
  placeholder,
  name,
  value,
  autoFocus,
  changed,
  required,
  error,
  touched,
  valid,
}) {
  // let classname;
  // if (touched && valid) {
  //   classname = classes.success;
  // } else if (touched && !valid) {
  //   classname = classes.error;
  // }

  const changeHandler = (event) => {
    changed(event);
  };

  switch (identifier) {
    case 'input':
      return (
        <StyledFormControl touched={touched} valid={valid}>
          <input
            autoFocus={autoFocus}
            formNoValidate={type === 'email'}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={changeHandler}
          />
          <span>{error && error}</span>
        </StyledFormControl>
      );
    case 'textarea':
      return (
        <StyledFormControl touched={touched} valid={valid}>
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={changeHandler}
          ></textarea>
          <span>{error && error}</span>
        </StyledFormControl>
      );
    case 'button':
      return (
        <StyledFormControl>
          <button type={type} name={name}>
            {children}
          </button>
        </StyledFormControl>
      );

    default:
      return <input />;
  }
}

export default Input;
