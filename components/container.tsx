import React from "react";
import styles from "../styles/container.module.css";

interface ContainerProps {
	children: JSX.Element;
}

export default function Container({ children }: ContainerProps) {
	return <div className={styles.container}>{children}</div>
}