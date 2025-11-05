import "./globals.css";
import ThreeBackground from "../components/ThreeBackground";
import ContactSection from "../components/Contact";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="relative">
        <div
            className="fixed inset-0 z-0"
            style={{
                background: `
      linear-gradient(
        90deg,
        transparent 5%,
        rgba(280, 280, 280, 0.9) 48%,
        rgba(280, 280, 280, 0.9) 52%,
        transparent 95%
      )
    `,
            }}
        ></div>
        <ThreeBackground/>

        <main className="relative z-10 max-w-[1300px] mx-auto w-full px-6">{children}</main>
        </body>
        </html>
    );
}
