import { useEffect, useState } from 'react';
import Select from 'react-select';


interface IAdministradora {
  id: string
  name: string
}


export default function SelectEntidade() {
 const [administradoras, setadministradoras] = useState<IAdministradora[]>([])

  const administradoraOptions = administradoras.map((administradora) => ({
    value: administradora.id,
    label: administradora.name,
  }))

  useEffect(() => {
    fetch('/api/selects/administradora').then(res => res.json()).then(({ data }) => setadministradoras(data))
  },[])

    return (
        <Select
        placeholder="Selecione uma administradora"
        className="basic-single ml-2 w-full"
        closeMenuOnSelect={true}
        classNamePrefix="administradora"
        options={administradoraOptions}
      />
    );
  };
