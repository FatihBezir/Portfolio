import React, { useEffect, useState } from "react";
import { SiNetlify, SiReact, SiTailwindcss } from "react-icons/si";
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function About() {
    const { i18n } = useTranslation(); // Initialize translation
    const isTurkish = i18n.language === 'tr'; // Check if the current language is Turkish

    const techs = [
        { Icon: SiReact, color: "text-blue-500", duration: "duration-500" },
        { Icon: SiTailwindcss, color: "text-blue-300", duration: "duration-700" },
        { Icon: SiNetlify, color: "text-green-400", duration: "duration-1000" },
    ];
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div>
            <h1 className="text-2xl text-yellow-200 animate-reveal-0.5">{isTurkish ? "Neden?" : "Why?"}</h1>
            <p className="text-lg mb-3 animate-reveal-0.5">
                {isTurkish 
                    ? "Bu mesajı okuyacak kadar bu terminalde kod yazmayı başarabildiyseniz, sizi ciddiye almam için yeterli bir seviyedesiniz demektir. Ancak, buraya kadar gelemeyenler için üzgünüm; onlar benim için zaman kaybı. Ben sadece işini bilen, gerçekten profesyonel olanlarla çalışırım. Eğer bu mesajı okuyabiliyorsanız, tebrikler; doğru yerdesiniz. Ama buraya kadar gelemeyenler için, onlar gerçekten kaybettiler. :D"
                    : "If you’ve managed to write code in this terminal and read this message, then you’re at a level where I can take you seriously. However, for those who didn’t make it this far, I’m sorry, but they’re a waste of my time. I only work with those who truly know what they’re doing. If you’re reading this, congratulations, you’re in the right place. But for those who didn’t get this far, they really missed out. :D"
                }
            </p>
            <h1 className="text-2xl text-yellow-200 animate-reveal-0.7">
                {isTurkish ? "Site Hakkında" : "About This Site"}
            </h1>
            <p className="text-lg animate-reveal-0.7">
                {isTurkish 
                    ? "Bu site, React ve Tailwindcss kullanılarak yazıldı ve Netlify üzerinde dağıtıldı. Basit ve etkili, tıpkı sevdiğim gibi."
                    : "This site was built using React and Tailwindcss, and deployed on Netlify. Simple and effective, just the way I like it."
                }
            </p>
            <div className="flex gap-5 text-4xl">
                {techs.map(({ Icon, color, duration }, index) => {
                    return (
                        <Icon
                            key={index}
                            className={`${color} ${animate ? "scale-100" : "scale-0"} transform transition-all ${duration}`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
