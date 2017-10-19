import firebase from 'firebase/app';
import 'firebase/firestore';

const createDatabase = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyA0PK2EcindVZu8EeWtY6C9dlIXj3RX2xs',
    projectId: 'niceties-b8c96'
  });
  return firebase.firestore();
};

export default createDatabase;
