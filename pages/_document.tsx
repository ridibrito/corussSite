import { Html, Head, Main, NextScript } from "next/document";
import { resetServerContext } from "react-beautiful-dnd";

interface DocumentProps {
  locale: string;
}

export default function Document({ locale }: DocumentProps): JSX.Element {
  resetServerContext();
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
