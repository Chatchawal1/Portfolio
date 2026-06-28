import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import { SiLine } from "react-icons/si";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: FaGithub,
  LINE: SiLine,
  facrbook: FaFacebook, // หรือเปลี่ยน label ใน data เป็น "Facebook"
  Email: FaEnvelope,
};

export function SocialIcon({ label }: { label: string }) {
  const Icon = icons[label];
  if (!Icon) return null;
  return <Icon className="h-4 w-4" aria-hidden />;
}