import bcrypt from "bcrypt";

const saltRounds = 14;
const plaintextPassword = "Hunter123";
const passwordHash = "$2b$14$9UYq9q.Ktz1I5C3FNQLsbejbc7v.B0IWEfSuHjb5.GumjZ46xCqSm";

// /signup /forgotpassword
const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);

console.log(hashedPassword);

// login
const isSame = await bcrypt.compare(plaintextPassword, passwordHash);

console.log(isSame);