import Titulo from "./Titulo";

export default function Layout(props) {
 return(
   <div className="flex flex-col w-2/3  bg-white text-gray-500 rounded-md">
     <Titulo>{props.titulo}</Titulo>   
     <div className="p-6">
      {props.children}
     </div>
  </div>

 )
}