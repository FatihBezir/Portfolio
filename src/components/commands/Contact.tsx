import React from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Contact() {
    const { i18n } = useTranslation(); // Initialize translation
    const isTurkish = i18n.language === 'tr'; // Check if the current language is Turkish

    const contacts = [
        {
            text: isTurkish ? "Telefon numarası" : "Phone number",
            value: "+90 0507 958 9599",
            href: "tel:+90 0507 958 9599",
        },
        {
            text: isTurkish ? "E-posta" : "Email",
            value: "fatihbezir@hotmail.com",
            href: "mailto:fatihbezir@hotmail.com",
        },
    ];

    return (
        <div className="w-11/12 mx-auto">
            {contacts.map(({ text, value, href }, index) => {
                return (
                    <div className="flex items-center gap-20 mt-3" key={index}>
                        <h1 className="text-yellow-200 w-36">{text}</h1>
                        <a href={href} className="flex-1 underline text-blue-300 ">
                            {value}
                        </a>
                    </div>
                );
            })}
        </div>
    );
}