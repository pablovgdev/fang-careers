import { CompanyStyle } from "../models/company-style";
import styles from "../styles/tag-label.module.css";

interface TagProps {
	value: string,
	companyStyle: CompanyStyle
}

export default function TagLabel({ value, companyStyle }: TagProps) {
	const cleanValue = value.replace(/PLUS/g, "+").replace(/SHARP/g, "#");
	
	return (
		<div
			className={styles.tagLabel}
			style={{
				color: companyStyle.primary,
				backgroundColor: companyStyle.background
			}}>
			{cleanValue}
		</div>
	);
}