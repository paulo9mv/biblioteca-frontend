import React from 'react';
import { postLivros } from '../../api/api';
import { Button, Form, Input, InputNumber, notification } from 'antd'
import { useHistory } from 'react-router-dom'

function CriaLivros(){
    const history = useHistory()
    const onFinish = async values => {
      try {
        await postLivros(values)
        notification.success({
          message: 'Livro adicionado com sucesso'
        })
        history.push('/livros')
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
        required
        rules={[{ required: true, message: 'Por favor, insira um titulo!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Autor"
        name="autor"
        required
        rules={[{ required: true, message: 'Por favor, insira um autor!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Quantidade de exemplares"
        name="quantidade"
        required
        rules={[{ required: true, message: 'Por favor, insira um autor!' }]}
      >
        <InputNumber />
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