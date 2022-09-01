import Select from 'react-select';


const reembolso = [
        {value:'Todos', label:'Todos'},
        {value:'Sim', label:'Sim'},
        {value:'Não', label:'Não'}
    ]

export default function SelectReembolso() {
    return (
        <Select
        placeholder="Reembolso"
        className="basic-single w-full ml-2"
        closeMenuOnSelect={true}
        classNamePrefix="reembolso"
        options={reembolso}
      />
    );
  };
