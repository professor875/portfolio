import "./globals.css";
import ThreeBackground from "../components/ThreeBackground";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="relative overflow-hidden">
        <div
            className="fixed inset-0 z-0"
            style={{
                background: `
      linear-gradient(
        90deg,
        transparent 0%,
        rgba(22, 189, 174, 0.9) 35%,
        rgba(22, 189, 174, 0.9) 65%,
        transparent 100%
      )
    `,
            }}
        ></div>
        <ThreeBackground/>
        <main className="relative z-10">{children}</main>
        </body>
        </html>
    );
}
