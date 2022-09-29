import { useEffect, useState } from 'react';
import Select from 'react-select';

interface Iabrangencia {
  id: string
  nome: string
}


export default function SelectAbrangencia() {
  const [abrangencia, setAbrangencia] = useState<Iabrangencia[]>([])
  

  useEffect(() => {
    fetch('/api/Selects/selectAbrangencia')
    .then((response) => response.json())
    .then((data)=> setAbrangencia(data))
  },[])
 


//   const abrangenciaOptions = abrangencia.map(abrangencia => ({

//     value: abrangencia.id,
//     label: abrangencia.nome,
// }));


    return  (
      
        <Select
        
        placeholder="Abrangência"
        className="basic-single w-full ml-2 dark:bg-gray-700 dark:text-gray-400"
        closeMenuOnSelect={true}
        classNamePrefix="abrangencia"
        // options={abrangenciaOptions}
        
      />
      
    );
    
  };
