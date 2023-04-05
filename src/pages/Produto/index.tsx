import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Menu } from "../../components/Menu"
import { Button, Col4, Col6, Input, Row, TextButton } from "./styles"
import { stringify } from 'querystring'

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

export const Produto = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const caminho = 'https://raw.githubusercontent.com/profchines/imagensProjetoU2/main/'

    const [dataProduto, setProduto] = useState<interfData>();

    useEffect(() => {
        axios.get('http://localhost:3001/produtos?id=' + id)
            .then((response) => {
                setProduto(response.data[0])
            })
            .catch((erro) => {
                console.log(erro)
            })
    }, [id])

    function onSubmit(e: any) {

        e.preventDefault();

        if (dataProduto) {
            let qtd = e.target.quantidade.value

            if (qtd > 0) {

                let obj = {
                    ...dataProduto,
                    quantidade: qtd,
                    total: Number(dataProduto.promo) * qtd
                }

                let lsCarrinho = localStorage.getItem(
                    '@shoowpy:carrinho',
                )

                let carrinho: any = null

                if (typeof lsCarrinho === 'string') {
                    carrinho = JSON.parse(lsCarrinho)

                }

                if (carrinho) {

                    let igual = false

                    carrinho.forEach((prodt: any) => {

                        if (prodt.id === obj.id) {
                            igual = true
                        }
                    })

                    if (igual) {
                        //soma caso for o mesmo produto
                    } else {

                        //diferente
                        carrinho.push(obj)

                        localStorage.setItem(
                            '@shoowpy:carrinho',
                            JSON.stringify(carrinho)

                        )

                    }

                } else {
                    localStorage.setItem(
                        '@shoowpy:carrinho',
                        JSON.stringify([obj])

                    )
                }

                navigate ('/carrinho')
            }
        }
    }
    return (
        <>
            <Menu />
            <div
                style={{
                    paddingTop: 20,
                    paddingBottom: 40,
                    paddingLeft: '6%',
                    paddingRight: '6%',
                }}
            >

                {
                    dataProduto ?

                        <>
                            <h2>Produto: </h2>
                            <Row>
                                <Col4>
                                    <img
                                        style={{
                                            width: '100%'
                                        }}
                                        src={caminho}
                                    />

                                </Col4>
                                <Col6>
                                    <h3>{dataProduto?.nome}</h3>
                                    <p
                                        style={{
                                            textDecoration: 'line-through'
                                        }}
                                    >
                                        {`R$`}
                                    </p>
                                    <p
                                        style={{
                                            fontWeight: 'bold',
                                            color: 'red'
                                        }}
                                    >
                                        {`R$` + dataProduto?.promo}
                                    </p>
                                    <form
                                        onSubmit={onSubmit}
                                    >
                                        <Input
                                            type='number'
                                            name="quantidade"
                                            defaultValue={1}
                                            min="1"
                                            required
                                        />
                                        <Button
                                            type="submit"
                                        >
                                            <TextButton>
                                                Adicionar ao Carrinho
                                            </TextButton>
                                        </Button>
                                    </form>
                                </Col6>

                            </Row>
                        </>
                        :
                        <h2>Nenhum produto encontrado.</h2>
                }

            </div>
        </>
    )
}
