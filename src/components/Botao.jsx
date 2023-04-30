export default function Botao(props) {
  return (
    <button
      className={`bg-gradient-to-r from-purple-500 to-blue-700 text-white px-4 py-2 rounded-md ${props.className} 
      hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-900`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}