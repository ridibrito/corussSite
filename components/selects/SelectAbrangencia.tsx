import Select from 'react-select';


export default function SelectAbrangencia() {

  const options = [
    {value:'Nacional', label:'Nacional'},
    {value:'Regional', label:'Regional'},
    {value:'Grupo de municipios', label:'Grupo de municipios'}
  ]


    return  (
      
        <Select
        
        placeholder="Abrangência"
        className="basic-single w-full ml-2 dark:bg-gray-700 dark:text-gray-400"
        closeMenuOnSelect={true}
        classNamePrefix="abrangencia"
        options={options}
        
      />
      
    );
    
  };
