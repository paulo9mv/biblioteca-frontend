export const BASE_URL = 'http://localhost:8080/api'

export async function getAllClientes() {
    try {
        const response = await fetch(BASE_URL + '/clientes')
        const data = await response.json()
    
        return data
    } catch (e) {
        throw e
    }
}

export interface ICreateCliente {
    nome: string,
    email: string
}

export async function postCliente(data: ICreateCliente) {
    try {
        const response =  await fetch(BASE_URL + '/clientes', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        return response
    } catch (e) {
        throw e
    }
}