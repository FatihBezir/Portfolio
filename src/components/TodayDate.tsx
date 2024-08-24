import { useTranslation } from 'react-i18next';

export default function TodayDate() {
	const { i18n } = useTranslation();

	const renderDate = () => {
		const date = new Date();
		return date.toLocaleDateString(i18n.language, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
	};

	return (
		<div>
			<h1>{i18n.language === 'tr' ? "Bugün: " : "Today is: "} {renderDate()}</h1>
		</div>
	);
}