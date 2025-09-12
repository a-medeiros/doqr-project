type TableItemProps = {
  text: string
}

const TableItem = ({ text }: TableItemProps) => {
  return <td className="p-4 font-normal whitespace-nowrap text-sm text-black">{text}</td>
}

export default TableItem
