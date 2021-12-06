const message = (value) => {
  if (!value.trim()) {
    return {
      valid: false,
      error: 'Message is required!',
    };
  } else if (value.trim().length > 10 && value.trim().length < 120) {
    return {
      valid: true,
      error: null,
    };
  } else {
    return {
      valid: false,
      error: 'Message not acceptable!',
    };
  }
};

const username = (value) => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}[a-zA-Z]+[0-9]*$/;

  if (!value.trim()) {
    return {
      valid: false,
      error: 'Name is required!',
    };
  } else if (usernameRegex.test(value)) {
    return {
      valid: true,
      error: null,
    };
  } else {
    return {
      valid: false,
      error: 'Name not acceptable!',
    };
  }
};

const email = (value) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value.trim()) {
    return {
      valid: false,
      error: 'Email is required!',
    };
  } else if (emailRegex.test(value)) {
    return {
      valid: true,
      error: null,
    };
  } else {
    return {
      valid: false,
      error: 'Email not acceptable',
    };
  }
};

const phoneNumber = (value) => {
  const phoneNumberRegex_1 = /^(|0)?9\d{9}$/;
  const phoneNumberRegex_2 = /^(\+98|0098|98)?9\d{9}$/;

  if (value.length === 0) {
    return {
      valid: false,
      error: 'Phone number is required!',
    };
  }
  if (value.startsWith('98') || value.startsWith('0098')) {
    if (phoneNumberRegex_2.test(value) && value.length > 10) {
      return {
        valid: true,
        error: null,
      };
    } else {
      return {
        valid: false,
        error: 'Phone number not acceptable!',
      };
    }
  } else {
    if (phoneNumberRegex_1.test(value)) {
      return {
        valid: true,
        error: null,
      };
    } else {
      return {
        valid: false,
        error: 'Phone number not acceptable!',
      };
    }
  }
};

const validate = (name, value) => {
  switch (name) {
    case 'username':
      return username(value);

    case 'email':
      return email(value);

    case 'phoneNumber':
      return phoneNumber(value);
    case 'message':
      return message(value);

    default:
      return {
        valid: true,
        error: null,
      };
  }
};

export default validate;
