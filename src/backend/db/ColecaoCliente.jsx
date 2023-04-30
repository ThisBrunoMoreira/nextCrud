import { firebaseConfig } from "../config";
import {collection, deleteDoc, doc, getFirestore, setDoc, addDoc, getDocs} from  "firebase/firestore"

const db = getFirestore(firebaseConfig)

export default class ColecaoCliente {
  async salvar(cliente) {
    if (!cliente) {
      return null
    }
    const { id} = cliente
    const clientesColecao = "listaClientes"
    const clientesRef = collection(db, clientesColecao)

    if(id) {
      const clienteRef = doc(clientesRef, id)
      await setDoc(clienteRef, {
        nome: cliente.nome,
        idade: cliente.idade,
        id: cliente.id
      })
    } else {
      
      await addDoc(clientesRef, {
        nome: cliente.nome,
        idade: cliente.idade,
      })
    }
    return cliente
  }

  async excluir(cliente) {
    if (!cliente?.id) return

    const clienteDocRef = doc(db, "listaClientes", cliente.id)
    await deleteDoc(clienteDocRef)
  }

  async obterTodos() {
    const querySnapShot = await getDocs(collection(db, "listaClientes"))
    return querySnapShot.docs.map((doc) => ({...doc.data(), id: doc.id}))
  }
}