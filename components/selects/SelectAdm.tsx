import Select from 'react-select';


const adms = [
        {value:'Allcare', label:'Allcare'},
        {value:'Qualicorp', label:'Qualicorp'},
        {value:'Affix', label:'Affix'}
    ]

export default function SelectAdm() {
    return (
        <Select
        placeholder="Selecione uma administradora"
        className="basic-single line w-full"
        closeMenuOnSelect={true}
        classNamePrefix="adm"
        options={adms}
      />
    );
  };
