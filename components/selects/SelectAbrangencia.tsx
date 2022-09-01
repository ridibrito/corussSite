import Select from 'react-select';


const abrangencia = [
        {value:'Todas', label:'Todas'},
        {value:'Nacional', label:'Nacional'},
        {value:'Estadual', label:'Estadual'},
        {value:'Regional', label:'Regional'},
        {value:'Local', label:'Local'}
    ]

export default function SelectReembolso() {
    return (
        <Select
        placeholder="Abrangência"
        className="basic-single w-full ml-2"
        closeMenuOnSelect={true}
        classNamePrefix="abrangencia"
        options={abrangencia}
      />
    );
  };
