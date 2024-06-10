import Footer from "./componentes/Footer.js"
import Header from "./componentes/Header.js"

export const metadata = {
  title: "Meu Shop.com"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />  
        {children}
        <Footer />
        </body>
    </html>
  );
}