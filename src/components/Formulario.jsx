import { useState } from "react";
import Entrada from "./Entrada";
import Botao from "./Botao";
import Cliente from "@/core/Cliente";
export default function Formulario(props) {
  const id = props.cliente?.id 
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

  return (
    <div>
      {id ? (
        <Entrada
          somenteLeitura
          texto="Código"
          valor={id}
          className="mb-4"
        ></Entrada>
      ) : (
        false
      )}
      <Entrada
        texto="nome"
        valor={nome}
        valorMudou={setNome}
        className="mb-4"
      ></Entrada>
      <Entrada
        texto="idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      ></Entrada>
      <div className="flex justify-end mt-4">
        <Botao
          className="mr-2"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {props.id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props?.cancelado}>Cancelar</Botao>
      </div>
    </div>
  )
}