'use client';

import React from 'react';
import SubscribeBox from '../ui/SubscribeBox';

export default function Newsletter() {
    const handleSubscribe = (email: string) => {
        console.log('Subscribed with email:', email);
        // TODO: Add actual subscription logic later
    };

    return (
        <section className="py-20 bg-neo-white">
            <div className="container-neo">
                <div className="space-y-6">
                    <SubscribeBox variant="coral" onSubmit={handleSubscribe} />
                    <SubscribeBox variant="orange" onSubmit={handleSubscribe} />
                    <SubscribeBox variant="blue" onSubmit={handleSubscribe} />
                </div>
            </div>
        </section>
    );
}
