import { Button, notification, Table, Tag } from 'antd';
import Column from 'antd/lib/table/Column';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { devolverLivro, getAllEmprestimos } from '../../api/api';
import { useHistory } from 'react-router-dom'

function ListaEmprestimo(){
  const history = useHistory()
  const [emprestimos, setEmprestimos] = useState<any>([])

  async function handleFetchEmprestimos() {
      try {
          const emprestimosApi = await getAllEmprestimos()
          setEmprestimos(emprestimosApi)
      } catch (e) {
          console.error(e)
      }
  }

  useEffect(() => {
    handleFetchEmprestimos()
  }, [])

    async function handleDevolution(id) {
      try {
        await devolverLivro(id)
        notification.success({
          message: 'Livro devolvido com sucesso'
        })
        history.go(0)
      } catch (e) {
        notification.error({
          message: 'Erro ao devolver livro'
        })
      }
    }

    return (
        <Table dataSource={emprestimos}>
          <Column title='Cliente' dataIndex={['cliente', 'nome']} key='clienteId'/>
          <Column title='Livro emprestado' dataIndex={['livro', 'titulo']} key='livroId'/>
          <Column title='Status' key='atraso' render={(_, record: any) => {
            const createdTime = record.emprestimo.createdAt
            const startTime = moment(createdTime)
            const end = moment()
            var duration = moment.duration(end.diff(startTime));
            var minutes = duration.asMinutes();

            const isDelayed = minutes > 5

            return isDelayed ? <Tag color="magenta">Em atraso</Tag> : <Tag color="green">Regular</Tag>
          }}/>
          <Column
            title='Ações'
            key='acoes'
            render={(_, record: any) =>{
              return (
                <Button
                  type='primary'
                  onClick={() => handleDevolution(record.emprestimo.id)}
                >
                  Devolver
                </Button>
              )
            }
          }/>
        </Table>
    )
}

export default ListaEmprestimo;