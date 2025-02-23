import React from 'react';

export const Contact = () => {
    const whatsappNumber = '919907418261'; 

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 text-center shadow" style={{ maxWidth: '400px', borderRadius: '15px' }}>
                <h3>Contact Me</h3>
                <p>Click below to chat on WhatsApp!</p>
                <a 
                    href={`https://wa.me/${whatsappNumber}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-success"
                >
                    <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>
            </div>
        </div>
    );
};



