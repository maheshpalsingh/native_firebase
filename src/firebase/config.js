import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB_uldQmRawk_d6AjVEccV-G0G11l4hz2Y',
  authDomain: 'demo2-fa6e6.firebaseapp.com',
  databaseURL: 'https://demo2-fa6e6-default-rtdb.firebaseio.com',
  projectId: 'demo2-fa6e6',
  storageBucket: 'demo2-fa6e6.appspot.com',
  //messagingSenderId: '12345-insert-yourse',
  appId: '1:359864881846:android:122443b5e0cbb29432cc17',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
