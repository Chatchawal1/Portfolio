import type { Profile, Project, SocialLink } from "./types";

export const profile: Profile = {
  headerName: "Portfolio",
  name: "Chatchawal Wasinchatchawal",
  role: "Developer",
  summary:
    "จบการศึกษาระดับปริญญาตรี สาขาเทคโนโลยีสารสนเทศและดิจิทัล จากสถาบันการจัดการปัญญาภิวัฒน์ (2565) มีประสบการณ์การทำงานจริง มีความรู้และสกิลหลากหลายทั้ง Frontend และ Backend รวมถึง Database SQL และ การ Test ทั้ง Manual และ Automate ชื่นชอบการพัฒนาเว็บแอปพลิเคชัน พร้อมเรียนรู้และพัฒนาทักษะใหม่ๆเสมอ",
  location: "39/21 หมู่ 1 PJvillage, Banrakrad, Bangbo, Samutprakarn, 10560, Tel.061-428-2968",
  email: "chatchawal.wasin@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/Chatchawal1" },
    { label: "LINE", href: "https://line.me/ti/p/0993947624" },
    { label: "facrbook", href: "https://www.facebook.com/Powchatchawal" }
  ] satisfies SocialLink[],
};

// export const skills: Skill[] = [
//   { name: "TypeScript", level: "advanced" },
//   { name: "React / Next.js", level: "advanced" },
//   { name: "Tailwind CSS", level: "advanced" },
//   { name: "Node.js", level: "intermediate" },
//   { name: "Testing (Jest, RTL)", level: "intermediate" },
// ];

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "เว็บพอร์ตโฟลิโอส่วนตัว แนะนำตัวและผลงาน รวมถึงบอกช่องทางการติดต่อ",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    image: "/Image/Portfolio.png",
    repoUrl: "https://github.com/Chatchawal1/Portfolio",
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    description: "แดชบอร์ดแสดงข้อมูลแบบเรียลไทม์ พร้อมกราฟและตาราง",
    tags: ["React", "Chart.js", "API"],
    image: "/images/dashboard.png",
  },
  {
    id: "shop",
    title: "Mini Shop",
    description: "เว็บขายสินค้าขนาดเล็ก พร้อมตะกร้าสินค้าและชำระเงินจำลอง",
    tags: ["Next.js", "Stripe (mock)", "Zustand"],
    image: "/images/shop.png",
  },

];
