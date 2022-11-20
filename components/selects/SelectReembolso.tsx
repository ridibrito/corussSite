import Select from 'react-select';




export default function SelectReembolso() {


  const options = [
    {value:'Todos', label:'Todos'},
    {value:'Sim', label:'Sim'},
    {value:'Não', label:'Não'}
]
    return (
        <Select
        placeholder="Reembolso"
        className="basic-single w-full ml-2"
        closeMenuOnSelect={true}
        classNamePrefix="reembolso"
        options={options}
      />
    );
  };
