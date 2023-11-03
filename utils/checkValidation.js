import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
const auth = getAuth();

const sendVerificationCode = async (phoneNumber, recaptchaContainer) => {
  const appVerifier = new RecaptchaVerifier(recaptchaContainer, {
    size: "invisible",
  });

  try {
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );
    return confirmationResult;
  } catch (error) {
    console.error("SMS 인증 전송 중 에러 발생:", error);
    throw error;
  }
};

const verifyCode = async (confirmationResult, verificationCode) => {
  try {
    await confirmationResult.confirm(verificationCode);
    return true; // 인증 성공
  } catch (error) {
    console.error("SMS 인증 확인 중 에러 발생:", error);
    return false; // 인증 실패
  }
};

const checkDuplicateEmail = async (email) => {
  try {
    // 이메일 중복 여부 확인
    await createUserWithEmailAndPassword(
      auth,
      email,
      "password_for_validation"
    );
    return true; // 중복되지 않은 이메일
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      return false; // 중복된 이메일
    } else {
      console.error("이메일 중복 확인 중 에러 발생:", error);
      return false; // 에러 발생 시 중복된 이메일로 처리
    }
  }
};

const isValidEmail = (email) => {
  const reg =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return reg.test(email);
};

// utils/checkValidation.js

const isValidPassword = (password) => {
  // 비밀번호는 영문, 숫자 조합이고 8자 이상 25자 이하여야 함
  const reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return reg.test(password);
};

const isPasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

export {
  sendVerificationCode,
  verifyCode,
  checkDuplicateEmail,
  isValidEmail,
  isValidPassword,
  isPasswordMatch,
};
