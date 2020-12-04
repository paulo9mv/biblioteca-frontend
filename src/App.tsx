import React, { useEffect, useState } from 'react';
import './App.css';
import { Breadcrumb, Table } from 'antd';
import { fetchTopClientes } from './api/api';

function App() {

  const [topClientes, setTopClientes] = useState()
  const columns = [
    {
      title: 'Nome',
      dataIndex: ['cliente', 'nome'],
      key: 'nome'
    },{
      title: 'Livros emprestados',
      dataIndex: 'livrosEmprestados',
      key: 'quantidade'
    }
  ]

  async function handleFetchTopClientes() {
    try {
      const response = await fetchTopClientes()

      setTopClientes(response)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    handleFetchTopClientes()
  }, [])

  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      Sistema de biblioteca

      <div style={{margin: 16, fontSize: 18, fontWeight: 'bold'}}>Maiores leitores</div>


      <Table columns={columns} dataSource={topClientes}/>
    </div>
  );
}

export default App;
