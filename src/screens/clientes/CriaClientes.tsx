import React from 'react';
import { postCliente } from '../../api/api';
import { Button, Form, Input, notification } from 'antd'
import { Link } from 'react-router-dom'

function CriaClientes(){
    const onFinish = async values => {
      try {
        await postCliente(values)
        notification.success({
          message: 'Cliente adicionado com sucesso'
        })
      } catch (e) {
        notification.error({
          message: 'Ocorreu um erro'
        })
      }
    };

    return (
        <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Link to="/clientes">
        Ver todos Clientes
      </Link>

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
        rules={[{ required: true, message: 'Por favor, insira um email!' }]}
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