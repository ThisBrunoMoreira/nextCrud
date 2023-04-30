

export default function Entrada(props) {
  return (
    <div className={`flex flex-col ${props?.className}`}>
      <label className="mb-4">{props.texto}</label>
      <input
        className={`
     border-purple-500 rounded-lg focus:outline-none bg-gray-100    p-2 
    ${props.somenteLeitura ? "" : "focus:bg-white"} 
    `}
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props?.somenteLeitura}
        onChange={(e) => props.valorMudou?.(e.target.value)}
      />
    
    </div>
  )
}
