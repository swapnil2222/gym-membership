export const validateUser = (user) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    role,
    address,
    userName,
    password,
  } = user;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !role ||
    !address ||
    !userName ||
    !password
  ) {
    return new Error("all fields are mandatory!");
  }
  return null;
};
