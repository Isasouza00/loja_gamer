import { CarouselConfig } from './config';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Container } from './styled'

import Produto from '../produto'
import {useState } from 'react'




export default function Home() {
    const [produtos, setProdutos] = useState([]);

    function listar() {
        const r = [
            {
                id:10001,
                imagem: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
                titulo: "PC Gamer",
                preco: "R$ 12.584,00",
                descricao: "Produto útil para seu dia a dia, fácil para manuzeio.",
                especificacoes: "Produto de qualidade fenomenal, não haverá arrependimentos após a compra"
            },
            {
                id:10002,
                imagem: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-fnr-pp0131.jpg",
                titulo: "Poltrona Gamer",
                preco: "R$ 1.350,00",
                descricao: "Produto útil para seu dia a dia, fácil para manuzeio.",
                especificacoes: "Produto de qualidade fenomenal, não haverá arrependimentos após a compra"
            },
            {
                id:10004,
                imagem: "https://images-americanas.b2w.io/produtos/1846627018/imagens/teclado-gamer-de-uma-mao-hxsj-j50-com-led-mouse-gamer-iluminado-com-fio/1846627018_1_large.jpg",
                titulo: "Teclado Gamer",
                preco: "R$ 680,00",
                descricao: "Produto útil para seu dia a dia, fácil para manuzeio.",
                especificacoes: "Produto de qualidade fenomenal, não haverá arrependimentos após a compra"
            },
            {
                id:10005,
                imagem: "https://images-americanas.b2w.io/produtos/1846627018/imagens/teclado-gamer-de-uma-mao-hxsj-j50-com-led-mouse-gamer-iluminado-com-fio/1846627018_1_large.jpg",
                titulo: "Teclado Gamer",
                preco: "R$ 680,00",
                descricao: "Produto útil para seu dia a dia, fácil para manuzeio.",
                especificacoes: "Produto de qualidade fenomenal, não haverá arrependimentos após a compra"
            },
            {
                id:10006,
                imagem: "https://images-americanas.b2w.io/produtos/1846627018/imagens/teclado-gamer-de-uma-mao-hxsj-j50-com-led-mouse-gamer-iluminado-com-fio/1846627018_1_large.jpg",
                titulo: "Teclado Gamer",
                preco: "R$ 680,00",
                descricao: "Produto útil para seu dia a dia, fácil para manuzeio.",
                especificacoes: "Produto de qualidade fenomenal, não haverá arrependimentos após a compra"
            },
            {
                id:10007,
                imagem: "https://images-americanas.b2w.io/produtos/1846627018/imagens/teclado-gamer-de-uma-mao-hxsj-j50-com-led-mouse-gamer-iluminado-com-fio/1846627018_1_large.jpg",
                titulo: "Teclado Gamer",
                preco: "R$ 680,00",
                descricao: "Produto útil para seu dia a dia, fácil para manuzeio.",
                especificacoes: "Produto de qualidade fenomenal, não haverá arrependimentos após a compra"
            },
            {
                id:10008,
                imagem: "https://images-americanas.b2w.io/produtos/1846627018/imagens/teclado-gamer-de-uma-mao-hxsj-j50-com-led-mouse-gamer-iluminado-com-fio/1846627018_1_large.jpg",
                titulo: "Teclado Gamer",
                preco: "R$ 680,00",
                descricao: "Produto útil para seu dia a dia, fácil para manuzeio.",
                especificacoes: "Produto de qualidade fenomenal, não haverá arrependimentos após a compra"
            },
            {
                id:10009,
                imagem: "https://images-americanas.b2w.io/produtos/1846627018/imagens/teclado-gamer-de-uma-mao-hxsj-j50-com-led-mouse-gamer-iluminado-com-fio/1846627018_1_large.jpg",
                titulo: "Teclado Gamer",
                preco: "R$ 680,00",
                descricao: "Produto útil para seu dia a dia, fácil para manuzeio.",
                especificacoes: "Produto de qualidade fenomenal, não haverá arrependimentos após a compra"
            },
        ]

        setProdutos(r);
        }
        
        

        return (
            <Container> 

                <h1> Eai, meu povo! </h1>
                <br/>

                <button onClick={listar}> Listar </button>
                <br/>

                <div className="lista-produtos">

                   <Carousel
                       responsive={ CarouselConfig }
                       indefinite={ true }
                       showDots={ true }
                       containerClass="carousel-container"
                    >

                    {produtos.map(item =>
                       <Produto key={item.id}
                                info={ item }/>
                    )}

                    </Carousel>

                </div>


            </Container>
    )

}