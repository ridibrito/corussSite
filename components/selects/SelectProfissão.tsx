import Select from 'react-select';


const profissão = [
        {value:'Servidor público', label:'Servidor Público'},
        {value:'Administrador', label:'Administrador'},
        {value:'Profissional liberal', label:'Profissional liberal'}
    ]

export default function SelectProfissao() {
    return (
        <Select
        placeholder="Selecione uma profissão"
        className="basic-single ml-2 w-full"
        closeMenuOnSelect={true}
        classNamePrefix="profissao"
        options={profissão}
      />
    );
  };
