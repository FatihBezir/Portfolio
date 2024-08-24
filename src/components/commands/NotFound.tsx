import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function NotFound() {
    const { i18n } = useTranslation(); // Initialize translation
    const isTurkish = i18n.language === 'tr'; // Check if the current language is Turkish

    return (
        <div className="text-gray-300 mt-2 mb-2">
            <h1 className="text-red-400">{isTurkish ? "Komut bulunamadı" : "Command not found"}</h1>
            <h1>{isTurkish ? "Deneyin: ls" : "Try: ls"}</h1>
        </div>
    );
}