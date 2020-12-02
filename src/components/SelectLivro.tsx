import { useEffect, useState } from "react";

import React from 'react';
import { getAllClientes, getAllLivros } from "../api/api";
import { Select } from "antd";
const Option = Select.Option

export default function SelectLivros(props) {
    const [livros, setLivros] = useState<any>([])

    async function handleFetchLivros() {
        try {
            const livrosApi = await getAllLivros()
            setLivros(livrosApi)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        handleFetchLivros()
    }, [])

    function onChangeValue(value: string) {
      return props.onChange(livros.find(s => s.id === value)!)
    }

    const options = livros.map(item => {
        return <Option key={item.id.toString()} value={item.id}>
          {item.titulo}
        </Option>
    })

    return (
        <Select
            onChange={onChangeValue}
            value={props.value && props.value.id}
            placeholder={'Selecione um livro'}
        >
            {options}
        </Select>
    )

}