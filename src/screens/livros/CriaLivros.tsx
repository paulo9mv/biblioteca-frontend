import React from 'react';
import { postLivros } from '../../api/api';
import { Button, Form, Input, notification } from 'antd'
import { Link } from 'react-router-dom'

function CriaLivros(){
    const onFinish = async values => {
      try {
        await postLivros(values)
        notification.success({
          message: 'Livro adicionado com sucesso'
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

      <Form.Item
        label="Título"
        name="titulo"
        rules={[{ required: true, message: 'Por favor, insira um titulo!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Autor"
        name="autor"
        rules={[{ required: true, message: 'Por favor, insira um autor!' }]}
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

export default CriaLivros;