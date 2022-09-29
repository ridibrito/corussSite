import Select from 'react-select';


const coparticipacao = [
    {value:'Todos', label:'Todos'},
    {value:'Sim', label:'Sim'},
    {value:'Não', label:'Não'}
]

export default function SelectCoparticipação() {
    return (
        <Select
        placeholder="Coparticipação"
        className="basic-single w-full ml-2"
        closeMenuOnSelect={true}
        classNamePrefix="coparticipacao"
        options={coparticipacao}
      />
    );
  };
