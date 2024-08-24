// components/commands/Education.js

import React from "react";
import { useTranslation } from 'react-i18next';

export default function Education() {
    const { i18n } = useTranslation();
    const isTurkish = i18n.language === 'tr';

    const educationDetails = [
        {
            program: isTurkish ? "Bilgisayar Mühendisliği" : "Computer Engineering",
            institution: "Bülent Ecevit Üniversitesi",
            duration: "2018 – 2022",
            link: "https://w3.beun.edu.tr/",
        },
        {
            program: isTurkish ? "Yönetim Bilişim Sistemleri" : "Management Information Systems",
            institution: "Anadolu Üniversitesi",
            duration: "2018 – 2022",
            link: "https://www.anadolu.edu.tr/",
        },
        {
            program: isTurkish ? "Bilgisayar Programcılığı" : "Computer Programming",
            institution: "Uludağ Gemlik Asım Kocabıyık Meslek Yüksekokulu",
            duration: "2016 – 2018",
            link: "https://www.uludag.edu.tr/",
        },
        {
            program: isTurkish ? "Web Tasarımı ve Kodlama" : "Web Design and Coding",
            institution: "Anadolu Üniversitesi",
            duration: "2018 – 2020",
            link: "https://www.anadolu.edu.tr/",
        },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{isTurkish ? "Eğitim Bilgilerim" : "My Education"}</h2>
            <ul>
                {educationDetails.map((education, index) => (
                    <li key={index} className="mb-4">
                        <h3 className="text-xl font-semibold">
                            <a href={education.link} target="_blank" rel="noreferrer" className="underline text-blue-300">
                                {education.program}, {education.institution}
                            </a>
                        </h3>
                        <p className="text-sm text-gray-400">{education.duration}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
