'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        setStatus('sending');
        setError(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
                setError('Er is iets misgegaan. Probeer het later opnieuw.');
            }
        } catch (err) {
            setStatus('error');
            setError('Er is een fout opgetreden. Controleer je internetverbinding.');
        }
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Naam</label>
                    <input type="text" id="name" name="name" placeholder="Uw naam" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mailadres</label>
                    <input type="email" id="email" name="email" placeholder="Uw e-mailadres" required />
                </div>
                <div className="form-group">
                    <label htmlFor="service">Dienst</label>
                    <select id="service" name="service" required defaultValue="">
                        <option value="" disabled>Kies een dienst</option>
                        <option value="Grondige Algemene Schoonmaak">Grondige Algemene Schoonmaak</option>
                        <option value="Glasbewassing">Glasbewassing</option>
                        <option value="Opleveringsschoonmaak">Opleveringsschoonmaak</option>
                        <option value="Tapijt- en Meubelreiniging">Tapijt- en Meubelreiniging</option>
                        <option value="Zakelijke en Huishoudelijke Ondersteuning">Zakelijke en Huishoudelijke Ondersteuning</option>
                        <option value="Anders">Anders</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">bericht</label>
                    <textarea id="message" name="message" rows={5} placeholder="Uw bericht" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary full-width" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Verzenden...' : 'Verstuur bericht'}
                </button>
                {status === 'success' && (
                    <p style={{ color: 'green', marginTop: '10px' }}>Bedankt! Uw bericht is verzonden.</p>
                )}
                {status === 'error' && (
                    <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
                )}
            </form>
        </div>
    );
}
