import Select from 'react-select';


const tipodeProduto = [
        {value:'Saúde', label:'Saúde'},
        {value:'Odonto', label:'Odonto'},
        
       
    ]

export default function SelectTipoDeProduto() {
    return (
        <Select
        placeholder="Saúde"
        className="basic-single line ml-2 w-full"
        closeMenuOnSelect={true}
        classNamePrefix="Tipo de produto"
        options={tipodeProduto}
        isDisabled={true}
      />
    );
  };
