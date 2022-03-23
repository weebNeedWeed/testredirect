import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	function isFacebookApp() {
		var ua = navigator.userAgent || navigator.vendor || window.opera;
		return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
	}

	return (
		<div className={styles.container}>
			{isFacebookApp()
				? "you are using facebook"
				: "you are not using facebook"}
		</div>
	);
}
