import React,{useContext} from 'react';
import {DataFreshContext} from '../App'
import {useParams} from 'react-router-dom';
import './freshBox.scss';


const FreshDetail = () => {
    const {id} = useParams();
    console.log(id)
    const { freshData } = useContext(DataFreshContext);

    console.log(freshData)
    const item=freshData.find((item)=>String(item.id)===String(id) );

    if(!item) {
        return <div>해당 상품을 찾을수 없습니다.</div>
    }
    
    return (
        <div className='freshBox'>
            <h2>{item.title}</h2>
            <div className="freshBoxItem">
                <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                <div className="price">{item.price}</div>
                <div className="description">{item.desc}</div>
            </div>
        </div>
    );
};

export default FreshDetail;