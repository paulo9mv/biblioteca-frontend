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
            <Table columns={columns} dataSource={livros}/>
        </div>
    )
}

export default ListaLivros;