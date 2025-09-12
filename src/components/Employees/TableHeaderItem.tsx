const TableHeaderItem = () => {
  const headerItems = [
    'Nome',
    'E-mail',
    'CPF',
    'Celular',
    'Data de Nascimento',
    'Tipo Contratação',
    'Status',
    'Ação',
  ]
  return (
    <tr>
      {headerItems.map(item => (
        <th key={item} className="p-4 text-left text-base font-bold text-[#58575A] tracking-wider">
          {item}
        </th>
      ))}
    </tr>
  )
}

export default TableHeaderItem
