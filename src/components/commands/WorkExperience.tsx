// components/commands/WorkExperience.js

import React from "react";
import { useTranslation } from 'react-i18next';

export default function WorkExperience() {
    const { i18n } = useTranslation();
    const isTurkish = i18n.language === 'tr';

    const experiences = [
        {
            position: isTurkish ? "Bilgisayar Mühendisi (Teğmen)" : "Computer Engineer (Lieutenant)",
            company: isTurkish ? "MSB Çorlu İnşaat Emlak Bölge Başkanlığı" : "MSB Çorlu Construction and Real Estate Regional Directorate",
            duration: "01/2023 – 11/2023",
            description: isTurkish 
                ? "Çeşitli yazılım projeleri üzerinde çalıştım ve kurumun bilgi işlem süreçlerine destek sağladım."
                : "Worked on various software projects and supported the institution's IT processes.",
        },
        {
            position: isTurkish ? "Stajyer" : "Intern",
            company: isTurkish ? "Zonguldak Atatürk Devlet Hastanesi" : "Zonguldak Atatürk State Hospital",
            duration: "2017 – 2017",
            description: isTurkish 
                ? "Zorunlu üniversite stajımı Bilgi İşlem biriminde tamamladım (1 Ay)."
                : "Completed mandatory university internship in the IT department (1 month).",
        },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{isTurkish ? "İş Tecrübesi" : "Work Experience"}</h2>
            <ul>
                {experiences.map((experience, index) => (
                    <li key={index} className="mb-4">
                        <h3 className="text-xl font-semibold">{experience.position}</h3>
                        <p className="text-lg">{experience.company}</p>
                        <p className="text-sm text-gray-400">{experience.duration}</p>
                        <p>{experience.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
