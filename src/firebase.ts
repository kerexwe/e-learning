import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCBd55dG0O_w1BMv1gH5owsc4hz-moYJ0A',
	authDomain: 'e-learning-da887.firebaseapp.com',
	projectId: 'e-learning-da887',
	storageBucket: 'e-learning-da887.appspot.com',
	messagingSenderId: '415387187128',
	appId: '1:415387187128:web:b7957d54b5b396e704014d',
	measurementId: 'G-RD9GM2BF57',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
