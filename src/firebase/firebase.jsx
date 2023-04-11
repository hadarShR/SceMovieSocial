// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBShxULsM6ICme75H1TitjSF7Lh-pN1NX0",
  authDomain: "sce-movie-social.firebaseapp.com",
  projectId: "sce-movie-social",
  storageBucket: "sce-movie-social.appspot.com",
  messagingSenderId: "1077333995909",
  appId: "1:1077333995909:web:b4fdc8a279236ec6b654ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage();

export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + ".png");
  setLoading(true);
  const snapshot = await uploadBytes(fileRef, file);

  const photoUrl = await getDownloadURL(fileRef);
  console.log(photoUrl);
  updateProfile(currentUser, {
    photoURL: photoUrl,
  }).catch((error) => console.log(error));

  setLoading(false);
  alert("uploaded file");
}
