import React from "react";
import { ChildrenProps } from "../models/props";
import styles from "../styles/container.module.css";

export default function Container({ children }: ChildrenProps) {
	return <div className={styles.container}>{children}</div>
}