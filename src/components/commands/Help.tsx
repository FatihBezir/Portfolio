import React from "react";
import { useTranslation } from 'react-i18next'; // Ensure this import is present

type HelpCmd = {
    cmd: string;
    detail: string;
};

export default function Help() {
    const { i18n } = useTranslation(); // Initialize translation
    const isTurkish = i18n.language === 'tr'; // Check if the current language is Turkish

    const listOfHelpCommands: HelpCmd[] = [
        { cmd: "bio", detail: isTurkish ? "Biyografi" : "Bio" }, // Both languages
        { cmd: isTurkish ? "beceri" : "skill", detail: isTurkish ? "Beceriler" : "Skills" }, // Fixed command
        { cmd: isTurkish ? "iletişim" : "contact", detail: isTurkish ? "İletişim" : "Contact" }, // Fixed command
        { cmd: isTurkish ? "hakkında" : "about", detail: isTurkish ? "Hakkında" : "About" }, // Fixed command
        { cmd: isTurkish ? "eğitim" : "education", detail: isTurkish ? "Eğitim" : "Education" }, // Added command
        { cmd: isTurkish ? "sertifikalar" : "certificates", detail: isTurkish ? "Sertifikalar ve CV" : "Certificates and CV" }, // Added command
        { cmd: isTurkish ? "tecrübe" : "work", detail: isTurkish ? "İş Tecrübesi" : "Work Experience" }, // Updated command
        { cmd: isTurkish ? "ctrl + l" : "ctrl + l", detail: isTurkish ? "Geçmişi temizle" : "Clear history" }, // Both languages
        { cmd: isTurkish ? "yardım" : "help", detail: isTurkish ? "Yardım" : "Help" }, // Both languages
    ];

    return (
        <div className="w-11/12 mx-auto">
            {listOfHelpCommands.map(({ cmd, detail }, index) => (
                <div className="flex items-center gap-20 mt-3" key={index}>
                    <h1 className="text-yellow-200 w-20">{cmd}</h1>
                    <p className="text-gray-300 flex-1">{detail}</p>
                </div>
            ))}
        </div>
    );
}
