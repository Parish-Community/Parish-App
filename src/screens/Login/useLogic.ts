import { useState } from 'react';

export function useLoginLogic() {
  const [phonenumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [emailError, setEmailError] = useState(null || '');
  const [passwordError, setPasswordError] = useState(null || '');

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const resetErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const validateInputs = () => {
    resetErrors();

    if (!phonenumber && !password) {
      setEmailError('Please enter your phone number');
      setPasswordError('Please enter your password');
      return false;
    }

    if (!phonenumber) {
      setEmailError('Please enter your phone number');
      return false;
    }

    if (!password) {
      setPasswordError('Please enter your password');
      return false;
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    }

    // if (!email.includes('@')) {
    //   setEmailError('Please enter a valid email');
    //   return false;
    // }

    return phonenumber && password;
  };

  // const handleLogin = () => {
  //   validateInputs();

  //   // if (isValid) {
  //   //   props.navigation.navigate('HomeScreen');
  //   // }
  // };

  return {
    phonenumber,
    setPhoneNumber,
    password,
    setPassword,
    isPasswordVisible,
    togglePasswordVisibility,
    emailError,
    passwordError,
    validateInputs,
    setPasswordError,
  };
}
