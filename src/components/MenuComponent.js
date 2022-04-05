import React from 'react';
import '../css/MenuComponent.css';
import YellowStar from '../assets/yellowstar.svg';
import WhiteStar from '../assets/whitestar.svg';

function MenuComponent({ info }) {
    return (
        <div className='MenuComponent'>
            <div className='div_image_menu'>
                <img src={info.photo} alt='Imagem de um prato' className='img_photo_menu' />
            </div>
            <div className='div_info_menu'>
                <p className='txt_info_menu'>{info.name} - R$ {info.price}</p>
            </div>
            <div className='div_align_menu'>
                <div className='div_avaliation_menu'>
                    <img src={YellowStar} alt='Imagem de uma estrela' />
                    <img src={YellowStar} alt='Imagem de uma estrela' />
                    <img src={YellowStar} alt='Imagem de uma estrela' />
                    <img src={WhiteStar} alt='Imagem de uma estrela' />
                    <img src={WhiteStar} alt='Imagem de uma estrela' />
                </div>
            </div>
        </div>
    );
}

export default MenuComponent;