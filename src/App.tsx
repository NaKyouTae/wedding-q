import React, {useEffect} from 'react';
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'swiper/css';
import 'swiper/css/pagination';

import AOS from 'aos';
import 'aos/dist/aos.css';

import {initDraw} from "./model/initDraw";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";
import Account from "./components/Account";
import Contact from "./components/Contact";
import LocationInfo from "./components/LocationInfo";
import Photos from "./components/Photos";
import Content from "./components/Content";
import FloatingButton from "./components/FloatingButton";
import Opening from "./components/Opening";

// Firebase Storage 가져오기
import { getStorage, ref, getDownloadURL } from "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj8sXZm7Zo7tCZ8ER5-Ud4cseFHuF5e0s",
  authDomain: "wedding-q.firebaseapp.com",
  projectId: "wedding-q",
  storageBucket: "wedding-q.appspot.com",
  messagingSenderId: "668039281071",
  appId: "1:668039281071:web:7f4921a6b504588a7f575a",
  measurementId: "G-77Z35ZZPSY"
};
const app = initializeApp(firebaseConfig);
// const storage = getStorage(app)
// const url = getDownloadURL(ref(storage, 'gs://wedding-9b3cb.appspot.com/train.MP4'));
// url.then((res: any) => {
//     console.log('aaa2', res)
// })

declare const Kakao: any;

function App() {
  useEffect(() => {
    AOS.init();
    getAnalytics(app);
  }, [])

  useEffect(() => {
    const initKakao = () => {
      Kakao.init('5a6eb9e30f5c017444702a8e4e9afb70');
    }

    if (!Kakao.isInitialized()) {
      initKakao();
    }
  }, [Kakao])

  useEffect(() => {
    function setScreenSize() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // 컴포넌트가 마운트될 때 resize 이벤트 등록
    // window.addEventListener('resize', setScreenSize);

    // 컴포넌트가 언마운트될 때 resize 이벤트 정리
    return () => {
      // window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  useEffect(() => {
    console.log(initDraw);
  }, []);

  // 재생 정지 버튼 스타일
  return (
      <div className="App">
        <div className="container">
          <div className="contents">
            <FloatingButton />
            <Opening />
            <Content />
            <Photos />
            <LocationInfo />
            <Contact />
            <Account />
            <Calendar />
            <Footer />
          </div>
        </div>
      </div>
  );
}

export default App;
