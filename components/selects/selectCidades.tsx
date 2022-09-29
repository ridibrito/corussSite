import Select from 'react-select';


const cidades = [
        {value:'Brasília', label:'Brasília'},
       
    ]

export default function SelectCidade() {
    return (
        <Select
        placeholder="Brasília"
        className="basic-single line w-full"
        closeMenuOnSelect={true}
        classNamePrefix="Cidades"
        options={cidades}
        isDisabled={true}
      />
    );
  };
