import React, { useEffect } from 'react';
import '../css/Menu.css';
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
                <div className='div_avaliation_menu' />
                <div className='div_btn_menu'>
                    <button className='btn_menu'>Pedir</button>
                </div>
            </div>
        </div>
    );
}

export default MenuComponent;