export default function Titulo(props)  {
  return ( 
    <div className="flex flex-col justify-center">
      <h1 className="text-2xl px-5 py-2">{props.children}</h1>
      <hr className="border-2 border-purple-400"></hr>
    </div>
  )
}