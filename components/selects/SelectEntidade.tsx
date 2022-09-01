import Select from 'react-select';


const entidade = [
        {value:'ABRACEM', label:'ABRACEM'},
        {value:'ANCEPLA', label:'ANCEPLA'},
        {value:'AMB', label:'AMB'}
    ]

export default function SelectEntidade() {
    return (
        <Select
        placeholder="Selecione uma entidade"
        className="basic-single ml-2 w-full"
        closeMenuOnSelect={true}
        classNamePrefix="entidade"
        options={entidade}
      />
    );
  };
