import { useEffect, useState } from 'react';
import Select from 'react-select';


interface IEntidades {
  id: string
  name: string
}


export default function SelectEntidade() {
 const [entidades, setEntidades] = useState<IEntidades[]>([])

  const entidadeOptions = entidades.map((entidade) => ({
    value: entidade.id,
    label: entidade.name,
  }))

  useEffect(() => {
    fetch('/api/selects/entidade').then(res => res.json()).then(({ data }) => setEntidades(data))
  },[])

    return (
        <Select
        placeholder="Selecione uma entidade"
        className="basic-single ml-2 w-full"
        closeMenuOnSelect={true}
        classNamePrefix="entidade"
        options={entidadeOptions}
      />
    );
  };
