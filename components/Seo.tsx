import Head from "next/head"

interface Props {
  title: String
  description?: String
}

export default function Seo({ title, description}: Props){
    return(<><div>
        
        
        <Head>
        <title>Coruss - Bem vindo a liberdade!</title>
        {description && <meta
          name="description"
          content="Gestão completa para o corretor de planos de saúde"
        ></meta>}
        <link rel="shortcut icon" href="/icone2.png" />
      </Head>
        
        
        
        
        
        
        
        </div></>)
}