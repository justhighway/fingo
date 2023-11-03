import { collection, addDoc } from "firebase/firestore";

const userDataCollection = collection(db, "users");

let userData = {};

const handleEmailInput = (email) => {
  userData.email = email;
};

const handlePhoneInput = (phone) => {
  userData.phone = phone;
};

const handleNameAndTermInput = (name, agreedToTerms) => {
  userData.name = name;
  userData.agreedToTerms = agreedToTerms;
};

const saveUserDataToFirestore = async () => {
  try {
    // 데이터를 파이어스토어에 저장
    const docRef = await addDoc(userDataCollection, userData);
    console.log("사용자 데이터가 성공적으로 저장되었습니다.", docRef.id);
  } catch (error) {
    console.error("사용자 데이터 저장 중 에러 발생:", error);
  }
};

export {
  handleEmailInput,
  handlePhoneInput,
  handleNameAndTermInput,
  saveUserDataToFirestore,
};
