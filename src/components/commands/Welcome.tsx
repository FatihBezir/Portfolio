import React from "react";
import { useTranslation } from 'react-i18next';

export default function Welcome() {
    const { t } = useTranslation(); // Initialize translation

    return (
        <div className="welcome-container">
            <h1 className="font-fascinate text-8xl font-bold uppercase welcome-text">
                {t('welcome')}
            </h1>
            <p className="text-lg text-gray-400">
                {t('welcomeMessage')}
            </p>
        </div>
    );
}
