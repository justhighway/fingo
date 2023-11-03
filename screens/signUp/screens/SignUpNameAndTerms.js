// signUp/screens/SignUpNameAndTerms.js

import React, { useState } from "react";
import { View, TextInput, Button, CheckBox } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { handleNameAndTermInput } from "../vm/GetData";

const SignUpNameAndTerms = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleNameChange = (inputName) => {
    setName(inputName);
  };

  const handleTermsCheck = () => {
    setIsTermsChecked(!isTermsChecked);
  };

  const handleSignUp = () => {
    if (name && isTermsChecked) {
      handleNameAndTermInput(name, true);
      navigation.navigate("Login"); // 회원가입이 완료되면 로그인 화면으로 이동
    } else {
      // 사용자에게 모든 필수 정보를 입력하고 동의해야 한다는 메시지를 표시
      console.log("모든 필수 정보를 입력하고 동의해야 합니다.");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="이름 입력"
        value={name}
        onChangeText={handleNameChange}
      />
      <CheckBox
        value={isTermsChecked}
        onValueChange={handleTermsCheck}
        style={{ alignSelf: "center" }}
      />
      <Button
        title="가입하기"
        onPress={handleSignUp}
        disabled={!isTermsChecked}
      />
    </View>
  );
};

export default SignUpNameAndTerms;
