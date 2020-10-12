import React from 'react';
import { Link } from 'gatsby';

export default () => {
    return (
        <div>
            <meta charSet="utf-8" />
            <title>Page not found</title>
            <html lang= 'en' />
            <meta name="description" content="Page not found" />
            <section className="error">
                <h1>Ooops...</h1>
                <h1> Sorry, this path does not exist</h1>
                <Link  to="/">
                Go back
                </Link>
            </section>
        </div>
    )
}


