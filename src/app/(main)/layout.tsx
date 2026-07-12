import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <body className="min-h-full flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </body>

    );
};

export default MainLayout;