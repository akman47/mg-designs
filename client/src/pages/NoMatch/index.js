import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch() {
    return (
        <section>
            <h3>Oops, that page doesn't exist!</h3>
            <Link to="/about">Redirecting to homepage..</Link>
            {window.location.replace('/')}
        </section>
    )
}

export default NoMatch;