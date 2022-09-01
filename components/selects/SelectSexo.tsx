import Select from 'react-select';


const genero = [
        {value:'Masculino', label:'Masculino'},
        {value:'Feminino', label:'Feminino'},
        {value:'Não definido', label:'Não definido'},
     
    ]

export default function SelectSexo() {
    return (
        <Select
        placeholder="genero"
        className="basic-single w-full ml-2"
        closeMenuOnSelect={true}
        classNamePrefix="genero"
        options={genero}
      />
    );
  };
