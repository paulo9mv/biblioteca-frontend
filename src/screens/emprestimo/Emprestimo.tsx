import React, { useState } from 'react';
import { postEmprestimo, postLivros } from '../../api/api';
import { Button, Form, Input, notification } from 'antd'
import { Link } from 'react-router-dom'
import SelectCliente from '../../components/SelectCliente';
import SelectLivro from '../../components/SelectLivro';

function Emprestimo(){
    const [cliente, setClienteId] = useState<string>()
    const [livro, setLivroId] = useState<string>()

    const onFinish = async values => {
      try {
        const { cliente, livro } = values
        console.log(values)
        console.log(cliente, livro)
        const clienteId = cliente.id
        const livroId = livro.id
        const response = await postEmprestimo(clienteId, livroId)

        notification.success({
          message: 'Emprestimo registrado com sucesso'
        })
      } catch (e) {
        notification.error({
          message: 'Ocorreu um erro'
        })
      }
    };

    function handleOnChange(value) {
      const id = value.id
      setClienteId(id)
    }

    function handleLivroOnChange(value) {
      const id = value.id
      setLivroId(id)
    }

    return (
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >

      <Form.Item
        label="Clientes"
        name="cliente"
      >
        <SelectCliente value={cliente} onChange={handleOnChange}/>
      </Form.Item>

      <Form.Item
        label="Livros"
        name="livro"
      >
        <SelectLivro value={livro} onChange={handleLivroOnChange}/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Emprestar
        </Button>
      </Form.Item>
    </Form>
    )
}

export default Emprestimo;