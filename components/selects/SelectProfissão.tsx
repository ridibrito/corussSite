import { useEffect, useState } from "react";
import Select from "react-select";

interface IProfissao {
  id: string;
  name: string;
}

export default function SelectProfissao() {
  const [profissaos, setProfissaos] = useState<IProfissao[]>([]);

  const profissaoOptions = profissaos.map((profissao) => ({
    value: profissao.id,
    label: profissao.name,
  }));

  useEffect(() => {
    fetch("/api/selects/profissao")
      .then((res) => res.json())
      .then(({ data }) => setProfissaos(data));
  }, []);

  return (
    <Select
      placeholder="Selecione uma profissão"
      className="basic-single ml-2 w-full"
      closeMenuOnSelect={true}
      classNamePrefix="profissao"
      options={profissaoOptions}
    />
  );
}
