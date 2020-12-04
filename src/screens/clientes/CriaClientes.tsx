import React from 'react';
import { postCliente } from '../../api/api';
import { Button, Form, Input, notification } from 'antd'
import { useHistory } from 'react-router-dom'

function CriaClientes(){
    const history = useHistory()
    const onFinish = async values => {
      try {
        await postCliente(values)
        notification.success({
          message: 'Cliente adicionado com sucesso'
        })
        history.push('/clientes')
      } catch (e) {
        notification.error({
          message: e.message || 'Ocorreu um erro'
        })
      }
    };

    return (
        <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >

      <Form.Item
        label="Nome"
        name="nome"
        rules={[{ required: true, message: 'Por favor, insira um nome!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ type: 'email', required: true, message: 'Por favor, insira um email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Criar
        </Button>
      </Form.Item>
    </Form>
    )
}

export default CriaClientes;