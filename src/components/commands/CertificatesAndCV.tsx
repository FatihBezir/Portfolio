// components/commands/CertificatesAndCV.js

import React from "react";
import { useTranslation } from 'react-i18next';

export default function CertificatesAndCV() {
    const { i18n } = useTranslation();
    const isTurkish = i18n.language === 'tr';

    const certificates = [
        {
            name: "Node.js ile Web Programlama",
            institution: "BTK Akademi",
            link: "#", // Placeholder link, replace with actual link if available
        },
        {
            name: "C#",
            institution: "BTK Akademi",
            link: "#", // Placeholder link, replace with actual link if available
        },
        {
            name: "Sıfırdan İleri Seviye Python Programlama",
            institution: "BTK Akademi",
            link: "#", // Placeholder link, replace with actual link if available
        },
        {
            name: "JAVASCRIPT",
            institution: "BTK Akademi",
            link: "#", // Placeholder link, replace with actual link if available
        },
        {
            name: "REACT İle Web Programcılığı",
            institution: "BTK Akademi",
            link: "#", // Placeholder link, replace with actual link if available
        },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{isTurkish ? "Sertifikalar ve CV" : "Certificates and CV"}</h2>
            
            <h3 className="text-xl font-semibold">{isTurkish ? "Sertifikalar" : "Certificates"}</h3>
            <ul className="mb-4">
                {certificates.map((certificate, index) => (
                    <li key={index} className="mb-2">
                        <a href={certificate.link} target="_blank" rel="noreferrer" className="underline text-blue-300">
                            {certificate.name}, {certificate.institution}
                        </a>
                    </li>
                ))}
            </ul>

            <h3 className="text-xl font-semibold">{isTurkish ? "CV" : "CV"}</h3>
            <p>
                <a href="#" target="_blank" rel="noreferrer" className="underline text-blue-300">
                    {isTurkish ? "CV'imi buradan indirebilirsiniz" : "You can download my CV here"}
                </a>
            </p>

            <h3 className="text-xl font-semibold mt-4">{isTurkish ? "Ehliyet Bilgileri" : "Driver's License Information"}</h3>
            <p>
                {isTurkish ? "Ehliyet Sınıfı: B" : "Driver's License Class: B"}
            </p>
        </div>
    );
}
