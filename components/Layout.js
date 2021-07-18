import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      {/* children_wraps content */}

      {children}

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Vuhze",
  description: "Vuhze specialises in Web Development Services.",
  keywords: "Web Development Services .",
};
