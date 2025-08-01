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
  else if (new Date(values.date) < new Date()) {
    errors.date = "Date must be in the future";
  }
  if (!values.time) {
    errors.time = "Required";
  }
  else if(values.time < "09:00" || values.time > "21:00"){
    errors.time = "Time must be between 9am and 9pm";
  }
  return errors;
};