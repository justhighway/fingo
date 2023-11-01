// Login.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import Modal from "react-native-modal";
import DashedLine from "react-native-dashed-line";

export default function Login({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  const handleLogin = () => {
    // 간단한 유효성 검사
    if (!email.trim() || !password.trim()) {
      // 메세지 모달 표시
      setErrorText("이메일과 비밀번호를 입력해주세요.");
      toggleModal();
      return;
    }

    if (!isValidEmail(email) || !isValidPassword(password)) {
      // 유효하지 않은 이메일 또는 비밀번호 메세지 모달 표시
      setErrorText("유효한 이메일과 비밀번호를 입력해주세요.");
      toggleModal();
      return;
    }

    // 여기서 로그인 로직을 처리하고, 성공 시 아래 코드 실행
    const userData = {
      email,
      password,
    };

    // JSON 형식으로 저장
    const jsonUserData = JSON.stringify(userData);
    console.log("User data:", jsonUserData);

    // Home 스크린으로 이동
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  useEffect(() => {
    // 모달이 2초 후에 자동으로 닫힘
    const timer = setTimeout(() => {
      setModalVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isModalVisible]);

  return (
    <>
      <View style={styles.container}>
        <Image source={require("../assets/splash.png")} style={styles.image} />
        <Text style={styles.fingo}>Fingo</Text>
        <TextInput
          style={[styles.input, styles.shadow]}
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={[styles.input, styles.shadow]}
          placeholder="비밀번호"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <DashedLine
          style={styles.dashedLine}
          dashLength={1}
          dashGap={2}
          dashColor="#a1a1a1"
        />
        <TouchableOpacity
          style={[styles.button, styles.shadow]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text></Text>

        {/* 모달 */}
        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{errorText}</Text>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -120,
  },
  fingo: {
    marginBottom: 100,
    fontSize: 30,
    fontWeight: "bold",
    color: "cyan",
  },
  input: {
    height: 40,
    borderColor: "#e0e0e0",
    borderWidth: 2,
    marginBottom: 13,
    width: "80%",
    height: "8%",
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: "white",
  },
  dashedLine: {
    width: "75%",
    height: 1,
    marginBottom: -25,
  },
  button: {
    padding: 10,
    borderRadius: 25,
    width: "80%",
    height: "8%",
    marginTop: 40,
    marginBottom: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "cyan",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 3,
        },
        shadowOpacity: 0.05,
        shadowRadius: 6,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});
