export const BASE_URL = 'http://localhost:8080/api'

/**
 * CLIENTES
 */

export async function fetchDeleteClient(id) {
    try {
        const response = await fetch(BASE_URL + '/clientes/' + id, {
            method: 'DELETE'
        })
        const data = await response.json()
    
        return data
    } catch (e) {
        throw e
    }
}

export async function getAllClientes() {
    try {
        const response = await fetch(BASE_URL + '/clientes')
        const data = await response.json()
    
        return data
    } catch (e) {
        throw e
    }
}

export async function getClient(id) {
    try {
        const response = await fetch(BASE_URL + '/clientes/' + id)
        const data = await response.json()
    
        return data
    } catch (e) {
        throw e
    }
}

export async function putClient(id, data) {
    try {
        const response = await fetch(BASE_URL + '/clientes/' + id, {
            method: 'PUT',
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

        if (response.status !== 200) {
            const error = await response.json()
            throw error
        }

        return response
    } catch (e) {
        throw e
    }
}

export async function fetchTopClientes() {
    try {
        const response =  await fetch(BASE_URL + '/clientes/top/top')

        if (response.status !== 200) {
            const error = await response.json()
            throw error
        }

        const data = await response.json()
        return data
    } catch (e) {
        throw e
    }
}

/**
 * LIVROS
 */

export async function getAllLivros() {
    try {
        const response = await fetch(BASE_URL + '/livros')
        const data = await response.json()
    
        return data
    } catch (e) {
        throw e
    }
}

export async function putRegistroLivro(id, data) {
    try {
        const response = await fetch(BASE_URL + '/livros/' + id, {
            method: 'PUT',
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

export async function getRegistroLivro(id: string) {
    try {
        const response = await fetch(BASE_URL + '/livros/' + id)
        const data = await response.json()
    
        return data
    } catch (e) {
        throw e
    }
}

export async function fetchDeleteLivro(id) {
    try {
        const response = await fetch(BASE_URL + '/clientes/' + id, {
            method: 'DELETE'
        })
        const data = await response.json()
    
        return data
    } catch (e) {
        throw e
    }
}

export interface ICreateLivro {
    titulo: string,
    autor: string
}

export async function postLivros(data: ICreateLivro) {
    try {
        const response =  await fetch(BASE_URL + '/livros', {
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

/**
 * EMPRÉSTIMO
 */

export async function getAllEmprestimos() {
    try {
        const response = await fetch(BASE_URL + '/livros/emprestimo/all')

        const data = await response.json()
        return data
    } catch (e) {
        throw e
    }
}

export async function postEmprestimo(clienteId: string, livroId: string) {
    try {
        const response =  await fetch(BASE_URL + `/livros/emprestimo/${clienteId}/${livroId}`, {
            method: 'POST'
        })

        if (response.status !== 200) {
            const error = await response.json()
            throw error
        }

        return response
    } catch (e) {
        throw e
    }
}

export async function devolverLivro(id: string) {
    try {
        const response = await fetch(BASE_URL + '/livros/emprestimo/' + id, {
            method: 'DELETE'
        })
        return response
    } catch (e) {
        throw e
    }
}
