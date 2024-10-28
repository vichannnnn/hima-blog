import { Suspense, ReactNode } from "react";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Providers } from "@providers/Providers";
import Loading from "./loading";
import "./globals.css";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.locale}>
      <body>
        <Providers>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
