// signUp/screens/SignUpEmail.js

import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  checkDuplicateEmail,
  isValidEmail,
} from "../../../utils/checkValidation";
import { handleEmailInput } from "../vm/GetData";

const SignUpEmail = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = async (inputEmail) => {
    setEmail(inputEmail);
    setEmailError(""); // 에러 메시지 초기화

    // 이메일 중복 여부 확인
    const isDuplicate = await checkDuplicateEmail(inputEmail);

    if (isDuplicate) {
      setEmailError("중복된 이메일입니다.");
    } else if (!isValidEmail(inputEmail)) {
      setEmailError("유효하지 않은 이메일 형식입니다.");
    } else {
      handleEmailInput(inputEmail);
    }
  };

  const goToNextScreen = () => {
    // 이메일이 유효하다면 다음 화면으로 이동
    if (!emailError) {
      navigation.navigate("SignUpPwd");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="이메일 입력"
        value={email}
        onChangeText={handleEmailChange}
      />
      <Text style={{ color: "red" }}>{emailError}</Text>
      <Button title="다음으로" onPress={goToNextScreen} />
    </View>
  );
};

export default SignUpEmail;
