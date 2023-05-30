import { useState } from 'react';
import { collection, doc, DocumentData, getDoc, getDocs, query, orderBy, Timestamp, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const useBlogs = () => {
	const [blog, setBlog] = useState<Array<object>>([]);
	const [isLoading, setLoading] = useState(true);

	const getBlog = async () => {
		const touSliderData: Array<object> | ((prevState: never[]) => never[]) = [];
		const getFireStore = query(collection(db, 'blogs'));
		const querySnapshot = await getDocs(getFireStore);
		querySnapshot.forEach((doc: DocumentData) => touSliderData.push({ tid: doc.id, ...doc.data() }));
		setBlog(touSliderData);
		setLoading(false);
	};

	const addBlog = async (data: object) => {
		const res = await addDoc(collection(db, 'blogs'), {
			...data,
			id: Timestamp.fromDate(new Date()),
		});
		return res;
	};

	return {
		blog,
		getBlog,
		isLoading,
		addBlog,
	};
};

export default useBlogs;
