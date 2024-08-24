import { GoVerified } from "react-icons/go";
import { SiGithub } from "react-icons/si";
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Bio() {
    const { i18n } = useTranslation(); // Initialize translation
    const isTurkish = i18n.language === 'tr'; // Check if the current language is Turkish

    const links = [
        {
            title: isTurkish ? "Github" : "Github",
            Icon: SiGithub,
            href: "https://github.com/FatihBezir/",
            text: isTurkish ? "@FatihBezir" : "@FatihBezir",
        },
        {
            title: isTurkish ? "LinkedIn" : "LinkedIn",
            Icon: SiGithub,
            href: "https://www.linkedin.com/in/mehmet-fatih-bezir/",
            text: "@mehmet-fatih-bezir",
        },
    ];

    return (
        <div className="mt-2 mb-2 w-11/12 mx-auto">
            <div className="flex items-center gap-3 mb-3 ">
                <img
                    src="https://media.licdn.com/dms/image/C4D03AQEAieha38Xeng/profile-displayphoto-shrink_800_800/0/1660556968047?e=1729123200&v=beta&t=CLG8FKkYrGWprhwMB_0J7UuY86rMmNeOn4uOrpZRCgg"
                    alt="M.Fatih_BEZİR"
                    className="w-40 h-40 rounded-full border-2 border-yellow-200"
                />
                <div>
                    <div className="flex items-center gap-1">
                        <h1 className="text-2xl">M.Fatih_BEZİR</h1>
                        <GoVerified className="text-blue-500 text-2xl" />
                    </div>
                    <p className="text-lg text-gray-400">{isTurkish ? "26 yıl önce dünyaya katıldım." : "Join the world 26 years ago."}</p>
                </div>
            </div>
            <p>
    {isTurkish 
        ? "Merhaba, ben bir yazılım geliştiriciyim. Web kodlama konusunda tutkuluyum ve kodlama ile ilgili yeni şeyler öğrenmeyi ve bunları kendi projelerimde denemeyi severim. Projelerimin bazılarını GitHub'da paylaşıyorum."
        : "Hi there, I am a software developer. I am passionate about web coding and enjoy learning new things related to coding and experimenting with them in my own projects. I share some of my projects on GitHub."
    }
</p>

            <div className="grid grid-cols-2">
                {links.map(({ Icon, text, href, title }, index) => {
                    return (
                        <div className="flex items-center gap-1 mt-3" key={index}>
                            <div className="text-lg flex items-center gap-1 text-yellow-200">
                                <Icon />
                                <h1>{title}</h1>
                            </div>
                            <a
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 underline text-blue-300 "
                            >
                                {text}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}