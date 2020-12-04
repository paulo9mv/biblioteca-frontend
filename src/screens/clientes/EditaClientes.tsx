import React, { useEffect, useState } from 'react';
import { getClient, putClient } from '../../api/api';
import { Button, Form, Input, notification } from 'antd'
import { useHistory } from 'react-router-dom'

function EditaClientes({ match }){
    const history = useHistory()
    const [cliente, setCliente] = useState<any>()
    const id = match.params.id

    const onFinish = async values => {
      try {
        await putClient(id, values)
        notification.success({
          message: 'Cliente editado com sucesso'
        })
        history.push('/clientes')
      } catch (e) {
        notification.error({
          message: 'Ocorreu um erro'
        })
      }
    };

    async function handleFetchCliente() {
      try {
        const response = await getClient(id)

        setCliente(response)
      } catch (e) {
        console.error(e)
      }
    }

    useEffect(() => {
      handleFetchCliente()
    }, [])

    if (!cliente) {
      return (
        <div>
          Carregando...
        </div>
      )
    }

    return (
        <Form
          name="basic"
          initialValues={cliente}
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
          rules={[{ required: true, message: 'Por favor, insira um email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Editar
          </Button>
        </Form.Item>
    </Form>
    )
}

export default EditaClientes;