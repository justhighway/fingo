import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  isValidPassword,
  isPasswordMatch,
} from "../../../utils/checkValidation";

const SignUpPwd = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (inputPassword) => {
    setPassword(inputPassword);
  };

  const handleConfirmPasswordChange = (inputConfirmPassword) => {
    setConfirmPassword(inputConfirmPassword);
  };

  if (!isValidPassword(inputPassword)) {
    setPasswordError(
      "비밀번호는 영문/숫자 조합, 8자 이상 25자 이하여야 합니다."
    );
  } else if (password !== confirmPassword) {
    setPasswordError("비밀번호가 일치하지 않습니다.");

    const handleSignUp = async () => {
      // 비밀번호가 유효하고 일치하다면 데이터를 저장하고 다음 화면으로 이동
      if (!passwordError && isPasswordMatch(password, confirmPassword)) {
        navigation.navigate("SignUpPhone");
      } else {
        // 비밀번호가 유효하지 않거나 일치하지 않는 경우에 대한 처리
        console.log("비밀번호가 일치하지 않습니다.");
      }
    };

    return (
      <View>
        <TextInput
          placeholder="비밀번호 입력"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
        />
        <TextInput
          placeholder="비밀번호 재입력"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
        />
        <Text style={{ color: "red" }}>{passwordError}</Text>
        <Button title="가입하기" onPress={handleSignUp} />
      </View>
    );
  }
};

export default SignUpPwd;
