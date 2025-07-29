export const validatingRegister = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

export const validatingLogin = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

export const validatingNewAppointment = (values) => {
  const errors = {};
  if (!values.date) {
    errors.date = "Required";
  }
  if (!values.time) {
    errors.time = "Required";
  }
  return errors;
};