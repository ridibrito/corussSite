import { useEffect, useState } from 'react';
import Select from 'react-select';



export default function SelectAcomodacao() {


  const options = [
     {value:'Apartamento', label: 'Apartamento'},
     {value:'Enfermaria', label: 'Enfermaria'},
     {value: 'Ambulatorial', label: 'Ambulatorial'}
   
    
  ]
    
 
    return (
        <Select
        placeholder="Acomodação"
        className="basic-single w-full"
        closeMenuOnSelect={true}
        classNamePrefix="acomodacao"
        options={options}
      />
    );
  };
