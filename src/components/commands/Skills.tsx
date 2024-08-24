import ProgressBar from "../ProgressBar";
import {
    SiCsharp,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiPython,
    SiExpress,
    SiMongodb,
    SiNodedotjs,
    SiC,
    SiPostgresql, // SQL için kullanılıyor
} from "react-icons/si";
import { useTranslation } from 'react-i18next'; // useTranslation'ı içe aktarıyoruz

export default function Skills() {
    const { i18n } = useTranslation(); // useTranslation ile çeviri başlatılıyor
    const isTurkish = i18n.language === 'tr'; // Geçerli dilin Türkçe olup olmadığını kontrol ediyoruz

    const listOfSkills = [
        // Diller
        {
            Icon: SiC,
            barWidth: "75%", // Tailwind CSS yerine inline style kullanılacak
            percentageValue: "75%",
            text: isTurkish ? "C" : "C",
        },
        {
            Icon: SiCsharp,
            barWidth: "80%",
            percentageValue: "80%",
            text: isTurkish ? "C#" : "C#",
        },
        {
            Icon: SiJavascript,
            barWidth: "85%",
            percentageValue: "85%",
            text: isTurkish ? "JavaScript" : "JavaScript",
        },
        {
            Icon: SiTypescript,
            barWidth: "80%",
            percentageValue: "80%",
            text: isTurkish ? "TypeScript" : "TypeScript",
        },
        {
            Icon: SiPython,
            barWidth: "80%",
            percentageValue: "80%",
            text: isTurkish ? "Python" : "Python",
        },
        // Frameworkler
        {
            Icon: SiReact,
            barWidth: "90%",
            percentageValue: "90%",
            text: isTurkish ? "React" : "React",
        },
        {
            Icon: SiNextdotjs,
            barWidth: "85%",
            percentageValue: "85%",
            text: isTurkish ? "Next.js" : "Next.js",
        },
        {
            Icon: SiExpress,
            barWidth: "80%",
            percentageValue: "80%",
            text: isTurkish ? "Express.js" : "Express.js",
        },
        {
            Icon: SiNodedotjs,
            barWidth: "85%",
            percentageValue: "85%",
            text: isTurkish ? "Node.js" : "Node.js",
        },
        // Veritabanları
        {
            Icon: SiMongodb,
            barWidth: "75%", // Bu alanı düzelttik
            percentageValue: "75%",
            text: isTurkish ? "MongoDB" : "MongoDB",
        },
        {
            Icon: SiPostgresql,
            barWidth: "70%", // Bu alanı düzelttik
            percentageValue: "70%",
            text: isTurkish ? "SQL" : "SQL",
        },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{isTurkish ? "Yetenekler" : "Skills"}</h2>
            <h3 className="text-xl font-semibold">{isTurkish ? "Diller" : "Languages"}</h3>
            {listOfSkills.slice(0, 5).map(({ Icon, barWidth, percentageValue, text }, index) => (
                <ProgressBar
                    Icon={Icon}
                    barWidth={barWidth}
                    percentageValue={percentageValue}
                    key={index}
                    text={text}
                />
            ))}
            <h3 className="text-xl font-semibold">{isTurkish ? "Frameworkler" : "Frameworks"}</h3>
            {listOfSkills.slice(5, 9).map(({ Icon, barWidth, percentageValue, text }, index) => (
                <ProgressBar
                    Icon={Icon}
                    barWidth={barWidth}
                    percentageValue={percentageValue}
                    key={index + 5} // Key için index ayarı
                    text={text}
                />
            ))}
            <h3 className="text-xl font-semibold">{isTurkish ? "Veritabanları" : "Databases"}</h3>
            {listOfSkills.slice(9).map(({ Icon, barWidth, percentageValue, text }, index) => (
                <ProgressBar
                    Icon={Icon}
                    barWidth={barWidth}
                    percentageValue={percentageValue}
                    key={index + 9} // Key için index ayarı
                    text={text}
                />
            ))}
        </div>
    );
}
