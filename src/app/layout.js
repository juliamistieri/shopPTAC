import Footer from "./componentes/Footer.js"
import Header from "./componentes/Header.js"
import Main from "./componentes/Main.js"

export const metadata = {
  title: "Meu Shop.com"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />  
        <Main />
        {children}
        <Footer />
        </body>
    </html>
  );
}