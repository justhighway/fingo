// signUp/screens/SignUpPhone.js

import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  sendVerificationCode,
  verifyCode,
} from "../../../utils/checkValidation";
import { handlePhoneInput } from "../vm/GetData";

const SignUpPhone = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationError, setVerificationError] = useState("");

  const handlePhoneChange = (inputPhoneNumber) => {
    setPhoneNumber(inputPhoneNumber);
    setVerificationError(""); // 에러 메시지 초기화
  };

  const handleVerificationCodeChange = (inputVerificationCode) => {
    setVerificationCode(inputVerificationCode);
  };

  const handleSendVerificationCode = async () => {
    try {
      const confirmationResult = await sendVerificationCode(
        phoneNumber,
        "recaptcha-container"
      );
      console.log("SMS 인증 전송 성공:", confirmationResult);
    } catch (error) {
      console.log("SMS 인증 전송 실패:", error.message);
    }
  };

  const handleVerifyCode = async () => {
    const isSuccess = await verifyCode(confirmationResult, verificationCode);

    if (isSuccess) {
      handlePhoneInput(phoneNumber);
      navigation.navigate("SignUpNameAndTerms");
    } else {
      setVerificationError("인증 코드가 올바르지 않습니다.");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="전화번호 입력"
        value={phoneNumber}
        onChangeText={handlePhoneChange}
      />
      <Button title="인증 코드 전송" onPress={handleSendVerificationCode} />
      <TextInput
        placeholder="인증 코드 입력"
        value={verificationCode}
        onChangeText={handleVerificationCodeChange}
      />
      <Text style={{ color: "red" }}>{verificationError}</Text>
      <Button title="가입하기" onPress={handleVerifyCode} />
    </View>
  );
};

export default SignUpPhone;
