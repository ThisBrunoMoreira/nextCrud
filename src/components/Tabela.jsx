import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
export default function Tabela(props) {
  const elementEdit = <FontAwesomeIcon icon={faPenToSquare} />
   const elementTrash = <FontAwesomeIcon icon={faTrash} />
   const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4 ">Código</th>
        <th className="text-left p-4 ">Nome</th>
        <th className="text-left p-4 ">Idade</th>
        {exibirAcoes ? ( <th className="text-center p-4"> Ações</th>): false}
      </tr>
    )
  }

  function renderizarAcoes(cliente) {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ? (
          <button
            onClick={() => props.clienteSelecionado?.(cliente)}
            className=" p-4 hover:text-green-600 text-green-400"
          >
            {elementEdit}
          </button>
        ) : (
          false
        )}

        {props.clienteExcluido ? (
          <button
            onClick={() => props.clienteExcluido?.(cliente)}
            className=" p-4 hover:text-red-600 text-red-400"
          >
            {elementTrash}
          </button>
        ) : (
          false
        )}
      </td>
    )
  }

function renderizarDados() {
  
  return props.clientes?.map((cliente, i) => (
    <tr
 
      className={`${
        i % 2 === 0
          ? "bg-purple-200 hover:bg-purple-100"
          : "bg-purple-300 hover:bg-purple-50"
      }`}
    >
      <td className="text-left p-4">{cliente.id}</td>
      <td className="text-left p-4">{cliente.nome}</td>
      <td className="text-left p-4">{cliente.idade}</td>

      {exibirAcoes ? renderizarAcoes(cliente) : false}
    </tr>
  ))
}


  return (
    <table className="w-full rounded-xl overflow-hidden ">
      <thead
        className={`text-gray-100 bg-gradient-to-tr from-purple-300 to-purple-600`}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  )
}
