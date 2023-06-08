import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Home3 from "./home3";

export default function Home() {
  return <Home3 />;
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});
