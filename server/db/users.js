import { prisma } from ".";
import bcrypt from "bcrypt";

/* Send Create User Request */

export const createUser = (userData) => {
  // Hash the password
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };
  
  return prisma.user.create({
    data: finalUserData,
  });
};

export const getUserByUsername = (username) => {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
};
