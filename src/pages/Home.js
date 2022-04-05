/* eslint-disable no-restricted-globals */
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
import Plate4 from '../assets/plate4.svg';
import Plate5 from '../assets/plate5.svg';
import FoodIcon from '../assets/foodicon.svg';
import ProductIcon from '../assets/producticon.svg';
import MoneyIcon from '../assets/moneyicon.svg';
import EmailIcon from '../assets/email_icon.svg';
import PhoneIcon from '../assets/phone_icon.svg';
import '../css/Home.css';

function Home() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [plates, setPlates] = useState([
        {
            name: 'Prato 1',
            price: 22,
            avaliation: 3,
            photo: Plate1,
        },
        {
            name: 'Prato 2',
            price: 45,
            avaliation: 1,
            photo: Plate2,
        },
        {
            name: 'Prato 3',
            price: 18,
            avaliation: 5,
            photo: Plate3,
        },
        {
            name: 'Prato 4',
            price: 55,
            avaliation: 2,
            photo: Plate4,
        },
        {
            name: 'Prato 5',
            price: 12,
            avaliation: 5,
            photo: Plate5,
        },
    ]);

    return (
        <div className='Home'>
            <section className='header_home'>
                <img src={Logo} alt='Logo do Restaurante' className='img_logo' />
                <div className='div_topic_header'>
                    <a href='#menu' className='topic_header'>Cardápio</a>
                    <a href='#about_us' className='topic_header'>Sobre Nós</a>
                    <a href='#contact' className='topic_header'>Contato</a>
                </div>
            </section>
            <section className='slogan_home'>
                <div className='div_body_slogan'>
                    <h1>O Restaurante Vegano feito para você!</h1>
                    <h5>O lugar onde o respeito e qualidade andam juntos.</h5>
                </div>
            </section>
            <section className='menu' id='menu'>
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
                <div className='div_btn_call'>
                    <button className='btn_menu' onClick={() => parent.location='https://wa.me/5511111111111'}>Peça Já</button>
                </div>
                <div className='div_warning'>
                    <p><b>Importante:</b> Devido a pandemia temos atendido apenas por delivery, mas quando normalizar voltaremos a atender na loja presencial.<br />
                    <b>Whatsapp</b> - (16) 98765-1234</p>
                </div>
            </section>
            <section className='about_us' id='about_us'>
                <div className='div_info_about'>
                    <div className='div_text_info'>
                        <div className='div_title_about'>
                            <h1 className='title_about'>Quem Somos?</h1>
                            <img src={Cow} className='img_cow_logo' alt='Icone da vaca mascote do logo do restaurante' />
                        </div>
                        <p>O restaurante Contra o Filé é um restaurante vegano com a proposta de ser saudável e com custo acessível. Buscamos sempre a melhor maneira de atender nossos clientes, visando o respeito e qualidade. Aqui você pode se alimentar respeitando a vida dos animais.</p>
                    </div>
                </div>
            </section>
            <section className='goals'>
                <div className='div_title_goals'>
                    <h1>Nossos Valores</h1>
                </div>
                <div className='div_cards_goals'>
                    <div className='card_food'>
                        <h3>Comida Vegana Saudável e Fresca</h3>
                        <p>Não importa se você começou ontem no veganismo ou já está no caminho a tempos, temos algo que vai agradar o seu paladar.</p>
                        <img src={FoodIcon} alt='Icone de um prato' className='icon_goals' />
                    </div>
                    <div className='card_product'>
                        <h3>Produtores locais e orgânicos</h3>
                        <p>Trabalhamos com produtos de agricultura familiar e incentivamos a produção de comida local.</p>
                        <img src={ProductIcon} alt='Icone de um prato' className='icon_goals' />
                    </div>
                    <div className='card_money'>
                        <h3>Acessível a todos</h3>
                        <p>Comida vegana não precisa ser cara e inacessível, o Contra o Filé tenta democratizar o acesso a esse tipo de produto.</p>
                        <img src={MoneyIcon} alt='Icone de um prato' className='icon_goals' />
                    </div>
                </div>
            </section>
            <section className='contact' id='contact'>
                <div className='div_form_contact'>
                    <div className='div_title_contact'>
                        <h1>Entre em contato</h1>
                    </div>
                    <div className='div_field_form'>
                        <img src={EmailIcon} alt='Icone de um email' className='icon_form' />
                        <input type='text' className='field_form_contact' onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                    </div>
                    <div className='div_field_form'>
                        <img src={PhoneIcon} alt='Icone de um telefone' className='icon_form' />
                        <input type='text' className='field_form_contact' onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Telefone' />
                    </div>
                    <div className='div_textarea'>
                        <label htmlFor='text_questions'>Mande suas dúvidas</label>
                        <textarea id='text_questions' />
                    </div>
                    <div className='div_btn_form'>
                        <button type='button'>Enviar</button>
                    </div>
                </div>
            </section>
            <section className='rodape'>
                <div className='div_body_rodape'>
                    <div className='div_column_rodape_img'>
                        <img src={Logo} alt='Logo do Restaurante' className='img_logo_rodape' />
                    </div>
                    <div className='div_column_rodape'>
                        <p>
                            <b>Horário de funcionamento:</b><br />
                            11:00 -  15:00 de Seg a Sáb.
                        </p>
                        <p>
                            <b>Localização:</b><br />
                            Rua Alfredo Lopes 1717 - CEP 13560460
                        </p>
                    </div>
                    <div className='div_column_rodape_nav'>
                        <div className='div_nav'>
                            <p><b>Navegação</b></p>
                            <a href='#menu'>Cardápio</a>
                            <a href='#about_us'>Sobre Nós</a>
                            <a href='#contact'>Entre em Contato</a>
                        </div>
                        <p>
                            <b>Telefone:</b><br />
                            (16) 98765-1234 - Whatsapp
                        </p>
                    </div>
                    <div className='div_column_rodape'>
                        <p>Redes Sociais:</p>
                        <div className='div_social_media'>
                            <img src={Instagram} alt='Logo do Instagram' className='img_logo_social' onClick={() => parent.location='https://www.instagram.com/'} />
                            <img src={Facebook} alt='Logo do Facebook' className='img_logo_social' onClick={() => parent.location='https://pt-br.facebook.com/'} />
                            <img src={Youtube} alt='Logo do Youtube' className='img_logo_social' onClick={() => parent.location='https://www.youtube.com/'} />
                            <img src={Twitter} alt='Logo do Twitter' className='img_logo_social' onClick={() => parent.location='https://twitter.com/'} />
                        </div>
                    </div>
                </div>
                <div className='div_copyright'>
                    <p>Copyright © Todos os direitos reservados</p>
                </div>
            </section>
        </div>
    );
}

export default Home;