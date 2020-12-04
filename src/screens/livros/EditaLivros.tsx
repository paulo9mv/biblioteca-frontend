import React, { useEffect, useState } from 'react';
import { getRegistroLivro, putRegistroLivro } from '../../api/api';
import { Button, Form, Input, notification } from 'antd'
import { useHistory } from 'react-router-dom'

function EditaLivros({ match }){
    const history = useHistory()
    const [registroLivro, setRegistroLivro] = useState<any>()
    const id = match.params.id

    const onFinish = async values => {
      try {
        await putRegistroLivro(id, values)
        notification.success({
          message: 'Livro editado com sucesso'
        })
        history.push('/livros')
      } catch (e) {
        notification.error({
          message: 'Ocorreu um erro'
        })
      }
    };

    async function handleFetchRegistroLivro() {
      try {
        const response = await getRegistroLivro(id)

        setRegistroLivro(response)
      } catch (e) {
        console.error(e)
      }
    }

    useEffect(() => {
      handleFetchRegistroLivro()
    }, [])

    if (!registroLivro) {
      return (
        <div>
          Carregando...
        </div>
      )
    }

    return (
        <Form
          name="basic"
          initialValues={registroLivro}
          onFinish={onFinish}
        >
        <Form.Item
          label="Título"
          name="titulo"
          rules={[{ required: true, message: 'Por favor, insira um título!' }]}
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
            Editar
          </Button>
        </Form.Item>
    </Form>
    )
}

export default EditaLivros;