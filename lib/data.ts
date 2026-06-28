import type { Profile, Project, Skill, SocialLink } from "./types";

export const profile: Profile = {
  headerName:"Portfolio",
  name: "Chatchawal Wasinchatchcawal",
  role: "Developer",
  summary:
    "หน้าเว็บแสดงผลงานที่ผ่านมาของผม",
  location: "39/21 หมู่ 1 PJvillage, Banrakrad, Bangbo, Samutprakarn 10560 ",
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
      "เว็บพอร์ตโฟลิโอส่วนตัว ออกแบบเรียบหรู รองรับ Dark Mode และเข้าถึงได้",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    image: "/images/portfolio.png",
    repoUrl: "https://github.com/Chatchawal1/Portfolio",
    demoUrl: "https://your-portfolio.vercel.app",
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
