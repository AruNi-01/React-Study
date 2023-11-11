import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    function back() {
        navigate(-1);
    }

    function forward() {
        navigate(1);
    }

    function go(n) {
        navigate(n);
    }

    return (
        <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={back}>回退</button> &nbsp;
            <button onClick={forward}>前进</button> &nbsp;
            <button onClick={() => go(2)}>Go 2</button>
        </div>
    );
}

export default Header;