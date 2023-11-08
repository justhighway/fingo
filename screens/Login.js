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
  ActivityIndicator,
  Button,
} from "react-native";
import Modal from "react-native-modal";
import HorizonLine from "../utils/HorizonLine";
import { FB_AUTH } from "../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { isValidEmail, isValidPassword } from "../utils/checkValidation";

export default function Login({ navigation }) {
  const auth = FB_AUTH;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  isValidEmail(email);
  isValidPassword(password);

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      // Home 스크린으로 이동
      // 여기에 토스트로 로그인 성공! 넣기
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } catch (error) {
      console.log(error);
      if (!email.trim() || !password.trim()) {
        // 메세지 모달 표시
        setErrorText("이메일과 비밀번호를 입력해주세요.");
        toggleModal();
        return;
      } else if (!isValidEmail(email) || !isValidPassword(password)) {
        // 유효하지 않은 이메일 또는 비밀번호 메세지 모달 표시
        setErrorText("유효한 이메일과 비밀번호를 입력해주세요.");
        toggleModal();
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    navigation.navigate({
      index: 1,
      routes: [{ name: "SignUpEmail" }],
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
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/splash.png")} style={styles.image} />
        <Text style={styles.fingo}>FinGo</Text>
      </View>

      <View style={styles.ioContainer}>
        <TextInput
          style={[styles.input, styles.shadow]}
          placeholder="이메일"
          placeholderTextColor={"gray"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={[styles.input, styles.shadow]}
          placeholder="비밀번호"
          placeholderTextColor={"gray"}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.useInfo}>
          <TouchableOpacity onPress={signUp}>
            <Text style={styles.useInfoText}>회원가입</Text>
          </TouchableOpacity>
          <Text style={styles.useInfoText}> | </Text>
          <TouchableOpacity>
            <Text style={styles.useInfoText}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.shadow]}
          onPress={signIn}
          disabled={loading} // 버튼이 로딩 중일 때 비활성화
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.socialContainer}>
        <HorizonLine text={"또는"} />
        <View style={styles.socialIcons}>
          <TouchableOpacity>
            <Image
              source={require("../assets/kakao-icon.png")}
              style={styles.socialIcons}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/naver-icon.png")}
              style={styles.socialIcons}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/google-icon.png")}
              style={styles.socialIcons}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/apple-icon.png")}
              style={styles.socialIcons}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* 모달 */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text>{errorText}</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logoContainer: {
    flex: 1,
    // backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  ioContainer: {
    flex: 1,
    // backgroundColor: "magenta",
    justifyContent: "center",
    alignItems: "center",
  },
  socialContainer: {
    flex: 1,
    // backgroundColor: "orange",
    alignItems: "center",
  },
  image: {
    width: "50%",
    height: "50%",
  },
  fingo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "cyan",
    fontSize: 40,
  },
  input: {
    borderColor: "#e0e0e0",
    borderWidth: 2,
    marginBottom: 13,
    width: "90%",
    height: "20%",
    paddingHorizontal: 25,
    borderRadius: 20,
    backgroundColor: "white",
  },
  button: {
    marginTop: 13,
    borderRadius: 20,
    width: "90%",
    height: "20%",
    backgroundColor: "#16E0E8",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  useInfo: {
    flexDirection: "row",
    marginVertical: 5,
  },
  useInfoText: {
    color: "gray",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    height: 60,
    width: 60,
    marginHorizontal: 15,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 40,
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
