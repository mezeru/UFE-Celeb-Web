import jwt from 'jsonwebtoken';

const isValidToken = () => {
  const token = localStorage.getItem('token'); 
  if (token) {
    try {
      const validate = jwt.verify(token, process.env.JWTSCRT);
      return validate

    } catch (error) {
      return false;
    }
  }
};

export default isValidToken;

