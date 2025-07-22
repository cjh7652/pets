import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './cart.scss';
const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCart = async () => {
            const user = auth.currentUser;
            if (!user) {
                navigate('/login');
                return;
            }
            const cartRef = collection(db, "users", user.uid, "cart");
            const cartSnap = await getDocs(cartRef);
            const items = cartSnap.docs.map(doc => doc.data());
            setCartItems(items);
        };
        fetchCart();
    }, [navigate]);

    return (
        <div className="cart">
            <h2>장바구니</h2>
            {cartItems.length === 0 ? (
                <p>장바구니가 비어 있습니다.</p>
            ) : (
                <ul>
                    {cartItems.map((item, idx) => (
                        <li key={item.id || idx}>
                            <img src={process.env.PUBLIC_URL + item.img} alt={item.title} width={50} />
                            <span>{item.title}</span>
                            <span>수량: {item.qty}</span>
                            <span>가격: {item.price}</span>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={() => navigate('/')}>쇼핑 계속하기</button>
        </div>
    );
};

export default Cart;