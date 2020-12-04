import { Button, message, notification, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import React, { useEffect, useState } from 'react';
import { devolverLivro, getAllEmprestimos } from '../../api/api';

function ListaEmprestimo(){
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
      } catch (e) {
        notification.error({
          message: 'Erro ao devolver livro'
        })
      }
    }

    return (
        <Table dataSource={emprestimos}>
          <Column title='Quem emprestou' dataIndex='clienteId' key='clienteId'/>
          <Column title='Qual livro emprestou' dataIndex='livroId' key='livroId'/>
          <Column
            title='Ações'
            key='acoes'
            render={(_, record: any) =>{
              return (
                <Button
                  type='primary'
                  onClick={() => handleDevolution(record.id)}
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