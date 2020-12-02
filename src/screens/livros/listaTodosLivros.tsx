import React, { useState, useEffect } from 'react';
import { getAllLivros } from '../../api/api';
import { Table } from 'antd'
import { Link } from 'react-router-dom'

function ListaLivros(){
    const [livros, setLivros] = useState<any>([])

    async function handleFetchLivros() {
        try {
            const livrosApi = await getAllLivros()
            setLivros(livrosApi)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
      handleFetchLivros()
    }, [])

    const columns = [
        {
          title: 'Título',
          dataIndex: 'titulo',
          key: 'titulo',
        },
        {
          title: 'Autor',
          dataIndex: 'autor',
          key: 'autor',
        }
      ];

    return (
        <div>
          <Link to="/clientes">
            Ver todos clientes
          </Link>
          <Link to="/cadastracliente">
            Cadastrar clientes
          </Link>
          <Link to="/cadastralivros">
            Cadastrar livros
          </Link>
            <Table columns={columns} dataSource={livros}/>
        </div>
    )
}

export default ListaLivros;