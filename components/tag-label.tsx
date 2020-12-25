import styles from "../styles/tag-label.module.css";

interface TagProps {
	value: string,
}

export default function TagLabel({ value }: TagProps) {
	return <span className={styles.tagLabel} key={value}>{value}</span>;
}