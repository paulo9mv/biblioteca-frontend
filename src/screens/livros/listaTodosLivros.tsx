import React, { useState, useEffect } from 'react';
import { fetchDeleteLivro, getAllLivros } from '../../api/api';
import { Button, notification, Popconfirm, Row, Table } from 'antd'
import { useHistory } from 'react-router-dom'
import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import Column from 'antd/lib/table/Column';

function ListaLivros(){
    const [livros, setLivros] = useState<any>([])
    const history = useHistory()

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

    async function deleteLivro(id) {
      try {
        await fetchDeleteLivro(id)
        notification.error({
          message: 'Livro apagado com sucesso'
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
          <Table dataSource={livros}>
          <Column title='Título' dataIndex='titulo' key='titulo'/>
          <Column title='Autor' dataIndex='autor' key='autor'/>
          <Column title='Exemplares' dataIndex='quantidade' key='quantidade'/>
          <Column
            title='Ações'
            key='acoes'
            render={(_, record: any) => {
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
                      pathname: `/editalivro/${record.id}`,
                      state: { detail: record.id }
                    })
                  }}
                />
                  <Popconfirm
                    title='Tem certeza que deseja deletar?'
                    onConfirm={() => deleteLivro(record.id)}
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

export default ListaLivros;