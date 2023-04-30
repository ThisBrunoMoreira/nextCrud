import { useEffect, useState } from "react";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import ColecaoCliente from "@/backend/db/ColecaoCliente";
import useTabelaOuForm from "@/hooks/useTabelaOuForm";

export default function Home() {
  const repo = new ColecaoCliente()
 
  const [cliente, setCliente] = useState(Cliente.vazio())
  const [clientes, setClientes] = useState([])
  const { 
    tabelaVisivel,
    exibirTabela,
    exibirFormulario} = useTabelaOuForm()
 


async function obterTodos() {
  const clientes = await repo.obterTodos()
  setClientes(clientes)
  exibirTabela() 
}



  useEffect(() => {  obterTodos() }, [])

  

  function salvarCliente(cliente) {
    repo.salvar(cliente)
    obterTodos()
  }

  function clienteSelecionado(cliente) {
    exibirFormulario()
    setCliente(cliente)
  }
  

  function novoCliente() {
    setCliente(Cliente.vazio())
     exibirFormulario()
  }

  function clienteExcluido(cliente) {
     repo.excluir(cliente)
     obterTodos()
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-400 to-blue-900">
      <Layout titulo="Crud">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          ></Formulario>
        )}
      </Layout>
    </div>
  )
}
