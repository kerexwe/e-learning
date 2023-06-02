import { useCallback, useEffect, useState } from 'react';
import { collection, doc, DocumentData, getDoc, getDocs, query, orderBy, Timestamp, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useTranslation } from 'react-i18next';
import { PostType } from './../types/types';

const useBlogs = () => {
	const [blog, setBlog] = useState<Array<PostType>>([]);
	const [isLoading, setLoading] = useState(true);
	const { i18n } = useTranslation();
	const langauge = i18n.resolvedLanguage

	console.log(langauge)
	console.log(blog)

	const getBlog = useCallback(async () => {
		const touSliderData: Array<any> | ((prevState: never[]) => never[]) = [];
		const getFireStore = query(collection(db, `${langauge === 'en' ? 'blogs' : 'blogs_ru'}`));
		const querySnapshot = await getDocs(getFireStore);
		querySnapshot.forEach((doc: DocumentData) => touSliderData.push({ tid: doc.id, ...doc.data() }));
		setBlog(touSliderData);
		setLoading(false);
	}, [langauge]);

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
		langauge,
	};
};

export default useBlogs;
