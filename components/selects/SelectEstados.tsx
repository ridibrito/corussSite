import { useEffect, useState } from 'react';
import Select from 'react-select';

interface IEstados {
  id: string
  nome: string
}


export default function SelectEstados() {
  const [estados, setEstados] = useState<IEstados[]>([])
  

  useEffect(() => {
    fetch('/api/Selects/selectEstados')
    .then((response) => response.json())
    .then((data)=> setEstados(data))
  },[])
 


//   const abrangenciaOptions = abrangencia.map(abrangencia => ({

//     value: abrangencia.id,
//     label: abrangencia.nome,
// }));


    return  (
      
        <Select
        
        placeholder="Estado"
        className="basic-single w-full ml-2 dark:bg-gray-700 dark:text-gray-400"
        closeMenuOnSelect={true}
        classNamePrefix="Estados"
        // options={abrangenciaOptions}
        
      />
      
    );
    
  };
