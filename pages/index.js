import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
	const [fbApp, setFbApp] = useState(false);

	useEffect(() => {
		function isFacebookApp() {
			var ua = navigator.userAgent || navigator.vendor || window.opera;
			return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
		}

		if (isFacebookApp()) {
			const randNum = Math.floor(Math.random() * 100);
			window.location.assign("https://google.com/" + randNum);
		}

		setFbApp(isFacebookApp());
	}, [fbApp]);

	return (
		<div className={styles.container}>
			{fbApp ? "you are using facebook" : "you are not using facebook"}
		</div>
	);
}
