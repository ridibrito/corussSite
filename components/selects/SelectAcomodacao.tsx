import Select from 'react-select';


const acomodacao = [
        {value:'Apartamento', label:'Apartamento'},
        {value:'Enfermaria', label:'Enfermaria'},
        {value:'Ambulatorial', label:'Ambulatorial'}
    ]

export default function SelectAcomodacao() {
    return (
        <Select
        placeholder="Acomodação"
        className="basic-single w-full"
        closeMenuOnSelect={true}
        classNamePrefix="acomodacao"
        options={acomodacao}
      />
    );
  };
