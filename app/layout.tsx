import "./globals.css";
import ThreeBackground from "../components/ThreeBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="relative bg-black text-white overflow-hidden">
        <ThreeBackground />
        <main className="relative z-10">{children}</main>
        </body>
        </html>
    );
}
