import React, { useState, useEffect } from 'react';
import { getAllClientes } from '../../api/api';
import { Col, Table } from 'antd'
import { Link } from 'react-router-dom'

function ListaClientes(){
    const [clientes, setClientes] = useState<any>([])

    async function handleFetchClientes() {
        try {
            const clientesApi = await getAllClientes()
            setClientes(clientesApi)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
      console.log('useEffect')
      handleFetchClientes()
    }, [])

    const columns = [
        {
          title: 'Nome',
          dataIndex: 'nome',
          key: 'nome',
        },
        {
          title: 'E-mail',
          dataIndex: 'email',
          key: 'email',
        }
      ];

    return (
        <div>
          <Table columns={columns} dataSource={clientes}/>
        </div>
    )
}

export default ListaClientes;