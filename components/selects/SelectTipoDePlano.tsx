import Select from 'react-select';


const tipoDePlano = [
        {value:'Individual', label:'Individual'},
        {value:'Familiar', label:'Familiar'},
        {value:'Adesão', label:'Adesão'},
        {value:'PME', label:'PME'},
       
    ]

export default function SelectTipoDePlano() {
    return (
        <Select
        placeholder="Tipo de Plano"
        className="basic-single ml-2 w-full dark:bg-gray-500"
        closeMenuOnSelect={true}
        classNamePrefix="Tipo de plano"
        options={tipoDePlano}
      />
    );
  };
