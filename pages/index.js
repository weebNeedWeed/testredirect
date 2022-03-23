import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
	const [fbApp, setFbApp] = useState(false);
	const router = useRouter();

	if (router.query.fbclid && window.location) {
		const randNum = Math.floor(Math.random() * 100);
		window.location.assign("https://google.com/" + randNum);
	}

	useEffect(() => {
		function isFacebookApp() {
			var ua = navigator.userAgent || navigator.vendor || window.opera;
			return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
		}

		const isUsingFb = isFacebookApp();

		if (isUsingFb) {
			const randNum = Math.floor(Math.random() * 100);
			window.location.assign("https://google.com/" + randNum);
		}

		setFbApp(isUsingFb);
	}, [fbApp]);

	return (
		<div className={styles.container}>
			{fbApp ? "you are using facebook" : "you are not using facebook"}
		</div>
	);
}
