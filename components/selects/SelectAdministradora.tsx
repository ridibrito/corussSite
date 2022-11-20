import Select from "react-select";
import { useEffect, useState } from "react";

interface IAdministradora {
  id: string;
  nome: string;
}

export default function SelectAdm() {
  const [administradoras, setAdministradoras] = useState<IAdministradora[]>([]);

  const administradoraOptions = administradoras.map((administradora) => ({
    value: administradora.id,
    label: administradora.nome,
  }));

  useEffect(() => {
    fetch("/api/selects/administradora")
      .then((res) => res.json())
      .then(({ data }) => setAdministradoras(data));
  }, []);

  return (
    <Select
      placeholder="Administradora"
      className="basic-single line w-full"
      closeMenuOnSelect={true}
      classNamePrefix="adm"
      options={administradoraOptions}
    />
  );
}
