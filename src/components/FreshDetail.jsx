import React, { useContext, useState } from 'react';
import { DataFreshContext } from '../App';
import { useParams, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import './freshBox.scss';


const FreshDetail = () => {
    const { id } = useParams();
    const { freshData } = useContext(DataFreshContext);
    const item = freshData.find((item) => String(item.id) === String(id));
    const [added, setAdded] = useState(false);
    const navigate = useNavigate();

    if (!item) {
        return <div>해당 상품을 찾을수 없습니다.</div>
    }

    const handleAddToCart = async () => {
        const user = auth.currentUser;
        if (!user) {
            navigate('/login');
            return;
        }
        // Firestore에 장바구니 추가 (users/{uid}/cart/{itemId})
        const cartItemRef = doc(db, "users", user.uid, "cart", String(item.id));
        const cartItemSnap = await getDoc(cartItemRef);
        if (cartItemSnap.exists()) {
            // 이미 장바구니에 있으면 수량 증가
            const prevQty = cartItemSnap.data().qty || 1;
            await setDoc(cartItemRef, { ...item, qty: prevQty + 1 });
        } else {
            await setDoc(cartItemRef, { ...item, qty: 1 });
        }
        setAdded(true);
    };
    
    return (
        <div className='freshBox'>
            <h2>{item.title}</h2>
            <div className="freshBoxItem">
                <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
                <div className="price">{item.price}</div>
                <div className="description">{item.desc}</div>
            </div>
            {!added ? (
                <button onClick={handleAddToCart}>장바구니 담기</button>
            ) : (
                <div>
                    <button onClick={() => navigate('/')}>쇼핑 계속하기</button>
                    <button onClick={() => navigate('/cart')}>장바구니로 이동</button>
                </div>
            )}
        </div>
    );
};

export default FreshDetail;