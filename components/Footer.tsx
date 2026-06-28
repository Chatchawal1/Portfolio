import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="w-full px-8 py-6 text-sm text-center text-foreground/70 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
