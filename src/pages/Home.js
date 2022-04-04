import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import Cow from '../assets/cow.svg';
import Twitter from '../assets/twitter_logo.svg';
import Facebook from '../assets/facebook_logo.svg';
import Instagram from '../assets/instagram_logo.svg';
import Youtube from '../assets/youtube_logo.svg';
import MenuComponent from '../components/MenuComponent';
import Plate1 from '../assets/plate1.svg';
import Plate2 from '../assets/plate2.svg';
import Plate3 from '../assets/plate3.svg';
import '../css/Home.css';

function Home() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [plates, setPlates] = useState([
        {
            name: 'Teste 1',
            price: 22,
            avaliation: 3,
            photo: Plate1,
        },
        {
            name: 'Teste 2',
            price: 45,
            avaliation: 1,
            photo: Plate2,
        },
        {
            name: 'Teste 3',
            price: 18,
            avaliation: 5,
            photo: Plate3,
        }
    ]);

    return (
        <div className='Home'>
            <section className='header_home'>
                <img src={Logo} alt='Logo do Restaurante' className='img_logo' />
                <div className='div_topic_header'>
                    <a href='.menu' className='topic_header'>Cardápio</a>
                    <a href='.about_us' className='topic_header'>Sobre Nós</a>
                    <a href='.contact' className='topic_header'>Contato</a>
                </div>
            </section>
            <section className='slogan_home'>
                <div className='div_body_slogan'>
                    <h1>O Restaurante Vegano feito para você!</h1>
                    <h5>O lugar onde o respeito e qualidade andam juntos.</h5>
                </div>
            </section>
            <section className='menu'>
                <div className='div_title_menu'>
                    <h1>Cardápio</h1>
                </div>
                <div className='div_carrosel'>
                    {
                        plates.map((plate) => {
                            return <MenuComponent info={plate} />;
                        })
                    }
                </div>
            </section>
            <section className='about_us'>
                <div className='div_info_about'>
                    <div className='div_text_info'>
                        <h1>Quem Somos?</h1>
                        <img src={Cow} className='img_cow_logo' alt='Icone da vaca mascote do logo do restaurante' />
                        <p>O restaurante Contra o Filé é um restaurante vegano com a proposta de ser saudável e com custo acessível. Buscamos sempre a melhor maneira de atender nossos clientes, visando o respeito e qualidade. Aqui você pode se alimentar respeitando a vida dos animais.</p>
                    </div>
                </div>
            </section>
            <section className='contact'>
                <div className='div_form_contact'>
                    <img src='email_icon' alt='Icone de um email' />
                    <input type='text' className='field_form_contact' onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                    <img src='password_icon' alt='Icone de um telefone' />
                    <input type='text' className='field_form_contact' onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Telefone' />
                    <label htmlFor='text_questions' value='Mande suas dúvidas' />
                    <textarea id='text_questions' placeholder='Escreva aqui...' />
                    <button type='button'>Enviar</button>
                </div>
            </section>
            <section className='rodape'>
                    <div className='div_column_rodape'>
                        <img src={Logo} alt='Logo do Restaurante' className='img_logo' />
                    </div>
                    <div className='div_column_rodape'>
                        <p>
                            Horário de funcionamento:<br />
                            11:00 _  15:00 de Seg a Sáb.
                        </p>
                        <p>
                            Localização:<br />
                            Rua Alfredo Lopes 1717 _ CEP 13560460
                        </p>
                    </div>
                    <div className='div_column_rodape'>
                        <p>Navegação</p>
                        <a href='.menu'>Cardápio</a>
                        <a href='.about_us'>Sobre Nós</a>
                        <a href='.contact'>Contato</a>
                    </div>
                    <div className='div_column_rodape'>
                        <p>Redes Sociais:</p>
                        <div className='div_social_media'>
                            <img src={Instagram} alt='Logo do Instagram' />
                            <img src={Facebook} alt='Logo do Facebook' />
                            <img src={Youtube} alt='Logo do Youtube' />
                            <img src={Twitter} alt='Logo do Twitter' />
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default Home;