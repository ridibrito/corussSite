import Select from 'react-select';


const cidades = [
        {value:'Brasília', label:'Brasília'},
        {value:'Goiânia', label:'Goiânia'},
        {value:'Belo Horizonte', label:'Belo Horizonte'}
    ]

export default function SelectCidade() {
    return (
        <Select
        placeholder="Cidades"
        className="basic-single line w-full"
        closeMenuOnSelect={true}
        classNamePrefix="Cidades"
        options={cidades}
      />
    );
  };
