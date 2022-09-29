import { useEffect, useState } from 'react';
import Select from 'react-select';

interface Iacomodacao {
  id: string
  nome: string
}

export default function SelectAcomodacao() {
  const [acomodacao, setAcomodacao] = useState<Iacomodacao[]>([])


  useEffect(()=>{
    fetch('/api/Selects/selectAcomodacao')
    .then(res => res.json())
    .then((data) => setAcomodacao(data))
  },[])


  const acomodacaoOptions = acomodacao.map((acomodacao) => ({
      value: acomodacao.id,
      label: acomodacao.nome
    
  }))
    
 
    return (
        <Select
        placeholder="Acomodação"
        className="basic-single w-full"
        closeMenuOnSelect={true}
        classNamePrefix="acomodacao"
        options={acomodacaoOptions}
      />
    );
  };
