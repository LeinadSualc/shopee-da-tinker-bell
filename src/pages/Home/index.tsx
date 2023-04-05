import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '../../components/Card'
import { Menu } from '../../components/Menu'

interface interfData {
    "id": string,
    "id_categoria": number,
    "nome": string,
    "valor": string,
    "promo": string,
    "promoNumber": string,
    "imagemg": string,
    "imagemp": string
}

export const Home = () => {

    const [dataProduto, setProduto] = useState<Array<interfData>>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/produtos')
            .then((response) => {
                setProduto(response.data)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }, [])

    return (
        <>
            <Menu />
            <div
                style={{
                    paddingLeft: '6%',
                    paddingRight: '6%'
                }}
            >
                <h2>Produtos em destaque</h2>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    {
                        dataProduto.map((produto) => (
                            <Card
                                id={produto.id}
                                nome={produto.nome}
                                valor={produto.valor}
                                promo={produto.promo}
                                imagem={produto.imagemp}
                            />
                        ))
                    }

                </div>

            </div>
        </>
    )
}
