import React, { useState, useEffect } from 'react';
import { fetchDeleteClient, getAllClientes } from '../../api/api';
import { Button, notification, Popconfirm, Row, Table } from 'antd'
import { useHistory } from 'react-router-dom'
import Column from 'antd/lib/table/Column';
import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons';

function ListaClientes(){
    const [clientes, setClientes] = useState<any>([])
    const history = useHistory()

    async function handleFetchClientes() {
        try {
            const clientesApi = await getAllClientes()
            setClientes(clientesApi)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
      handleFetchClientes()
    }, [])

    async function deleteClient(id) {
      try {
        await fetchDeleteClient(id)
        notification.error({
          message: 'Cliente apagado com sucesso'
        })
        history.go(0)
      } catch (e) {
        notification.error({
          message: 'Ocorreu um erro'
        })
      }
    }

    return (
        <div>
          <Table dataSource={clientes}>
          <Column title='Nome' dataIndex='nome' key='nome'/>
          <Column title='Email' dataIndex='email' key='email'/>
          <Column
            title='Ações'
            key='acoes'
            render={(_, record: any) =>{
              return (
                <Row>
                  <Button
                  size='small'
                  type='default'
                  shape='circle'
                  icon={<EditOutlined />}
                  style={{ marginRight: 8 }}
                  onClick={() => {
                    history.push({
                      pathname: `/editacliente/${record.id}`,
                      state: { detail: record.id }
                    })
                  }}
                />
                  <Popconfirm
                    title='Tem certeza que deseja deletar?'
                    onConfirm={() => deleteClient(record.id)}
                    okText='Deletar'
                    cancelText='Cancelar'
                  >
                    <Button
                      size='small'
                      danger
                      shape='circle'
                      icon={<DeleteOutlined />}
                    />
                  </Popconfirm>
                </Row>
              )
            }
          }/>
        </Table>
        </div>
    )
}

export default ListaClientes;