import EmployeesList from '@/components/Employees/List'
import NewEmployee from '@/components/Employees/NewEmployee'
import Search from '@/components/Employees/Search'

type HomeProps = {
  searchParams?: { name?: string }
}

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = await searchParams

  return (
    <div className="md:px-[130px] px-4 pt-8 pb-8 gap-16">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold text-black">Controle de Funcionários</h1>
        <p className="text-xl font-bold text-graphite">Empresa DoQR Tecnologia</p>
      </div>

      <div className="mb-3 flex flex-col md:flex-row justify-between gap-3">
        <Search />
        <NewEmployee />
      </div>

      <EmployeesList searchParams={resolvedSearchParams ?? {}} />
    </div>
  )
}
