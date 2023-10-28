import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "GIVI Agence Digitale",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
