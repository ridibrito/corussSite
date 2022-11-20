import Select from 'react-select';




export default function SelectCoparticipação() {


  const options = [
    {value:'Todos', label:'Todos'},
    {value:'Sim', label:'Sim'},
    {value:'Não', label:'Não'}
]

    return (
        <Select
        placeholder="Coparticipação"
        className="basic-single w-full ml-2"
        closeMenuOnSelect={true}
        classNamePrefix="coparticipacao"
        options={options}
      />
    );
  };
