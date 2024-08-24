import About from "../components/commands/About";
import Bio from "../components/commands/Bio";
import Contact from "../components/commands/Contact";
import Help from "../components/commands/Help";
import NotFound from "../components/commands/NotFound";
import Skills from "../components/commands/Skills";
import Education from "../components/commands/Education";
import CertificatesAndCV from "../components/commands/CertificatesAndCV";
import WorkExperience from "../components/commands/WorkExperience"; // Import the new component
import { CmdHistory } from "../type";

function renderCmd(cmd: string, currentLanguage: string): CmdHistory {
	switch (cmd.toLowerCase()) { // Ensure case-insensitivity
		case "biyografi": // Recognize "biyografi" but return "Bio"
		case "bio": // Also recognize "bio"
			return {
				cmd: "bio", // Keep the command as "bio"
				Component: Bio,
				time: currentLanguage === 'tr' ? "Biyografi" : "Bio",
			};
		case "beceri": // Turkish command for "skill"
		case "skill": // Also recognize "skill"
			return {
				cmd: currentLanguage === 'tr' ? "beceri" : "skill", // Keep the command as "skill" or "beceri"
				Component: Skills,
				time: currentLanguage === 'tr' ? "Beceriler" : "Skills",
			};
		case "iletişim": // Turkish command for "contact"
		case "contact": // Also recognize "contact"
			return {
				cmd: currentLanguage === 'tr' ? "iletişim" : "contact", // Keep the command as "contact" or "iletişim"
				Component: Contact,
				time: currentLanguage === 'tr' ? "İletişim" : "Contact",
			};
		case "hakkında": // Turkish command for "about"
		case "about": // Also recognize "about"
			return {
				cmd: currentLanguage === 'tr' ? "hakkında" : "about", // Keep the command as "about" or "hakkında"
				Component: About,
				time: currentLanguage === 'tr' ? "Hakkında" : "About",
			};
		case "eğitim": // Turkish command for "education"
		case "education": // Also recognize "education"
			return {
				cmd: currentLanguage === 'tr' ? "eğitim" : "education", // Keep the command as "education" or "eğitim"
				Component: Education,
				time: currentLanguage === 'tr' ? "Eğitim" : "Education",
			};
		case "sertifikalar": // Turkish command for "certificates"
		case "certificates": // Also recognize "certificates"
			return {
				cmd: currentLanguage === 'tr' ? "sertifikalar" : "certificates", // Keep the command as "certificates" or "sertifikalar"
				Component: CertificatesAndCV,
				time: currentLanguage === 'tr' ? "Sertifikalar ve CV" : "Certificates and CV",
			};
		case "tecrübe": // Changed Turkish command for "work"
		case "work": // Also recognize "work"
			return {
				cmd: currentLanguage === 'tr' ? "tecrübe" : "work", // Keep the command as "work" or "tecrübe"
				Component: WorkExperience,
				time: currentLanguage === 'tr' ? "İş Tecrübesi" : "Work Experience",
			};
		case "help": // Added case for "help"
		case "yardım": // Added Turkish case for "help"
			return {
				cmd,
				Component: Help,
				time: currentLanguage === 'tr' ? "Yardım" : "Help",
			};
		default:
			return {
				cmd,
				Component: NotFound,
				time: currentLanguage === 'tr' ? "Komut bulunamadı" : "Command not found",
			};
	}
}

export default renderCmd;
