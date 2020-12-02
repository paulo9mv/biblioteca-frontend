import { useEffect, useState } from "react";

import React from 'react';
import { getAllClientes } from "../api/api";
import { Select } from "antd";
const Option = Select.Option

export default function SelectCliente(props) {
    const [clientes, setClientes] = useState<any>([])

    async function handleFetchClientes() {
        try {
            const clientesApi = await getAllClientes()
            setClientes(clientesApi)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        handleFetchClientes()
    }, [])

    function onChangeValue(value: string) {
      return props.onChange(clientes.find(s => s.id === value)!)
    }

    const options = clientes.map(item => {
        return <Option key={item.id.toString()} value={item.id}>
          {item.nome}
        </Option>
    })

    return (
        <Select
            onChange={onChangeValue}
            value={props.value && props.value.id}
            placeholder={'Selecione um cliente'}
        >
            {options}
        </Select>
    )

}