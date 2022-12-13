import Link from "next/link";
import { useRouter } from "next/router";

export default function Lead() {
  return (
    <>
      <div className="pl-60 pt-20">
        <Link href={`/app/${router?.query?.tenantId}/crm/`}>Voltar</Link>
        <h1>{LeadId}</h1>
      </div>
    </>
  );
}
