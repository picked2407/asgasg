import React, { useState } from 'react';

const Page = () => {
    const [showHeaderFooter, setShowHeaderFooter] = useState(true);

    const toggleHeaderFooter = () => {
        setShowHeaderFooter(!showHeaderFooter);
    };

    return (
        <div>
            <button onClick={toggleHeaderFooter}>
                {showHeaderFooter ? 'Hide' : 'Show'} Header and Footer
            </button>
            <style>{`
                .image-container {
                    text-align: center;
                    margin-top: 20px;
                }

                .single-image {
                    width: 300px; /* Increase width */
                    height: 200px; /* Adjust height as needed */
                    margin: 20px; /* Adjust spacing as needed */
                    display: inline-block;
                }

                .image-row {
                    margin-top: 20px;
                }
            `}</style>
            {showHeaderFooter && (
                <header>
                    {/* Header content */}
                    Header
                </header>
            )}
            <div className="image-container">
                <div>
                    <img src="/assets/images/large_logo.png" alt="Image 1" className="single-image" />
                    <img src="https://media.discordapp.net/attachments/1193183717548638301/1215698798983118909/image-removebg-preview_8.png?ex=65fdb2bc&is=65eb3dbc&hm=9d4c454a4129779cd924be7e03fe28d81f74fb778a4170cabc823a96cfd2220a&=&format=webp&quality=lossless&width=613&height=613" alt="Image 2" className="single-image" />
                </div>
                <div className="image-row">
                    <img src="https://media.discordapp.net/attachments/1193183717548638301/1215705946140053596/image-removebg-preview_9.png?ex=65fdb964&is=65eb4464&hm=082adccdaa24f5be6d3759b6795a7a72ec9372d4c81a7d0599a8a195272b29af&=&format=webp&quality=lossless&width=400&height=400" alt="Image 3" className="single-image" />
                    <img src="https://t3.ftcdn.net/jpg/01/29/69/84/360_F_129698446_e2kKKd1MgIDJJzxfO1sE0jeUSn88SzKx.jpg" alt="Image 4" className="single-image" />
                </div>
            </div>
            {showHeaderFooter && (
                <footer>
                    {/* Footer content */}
                    Footer
                </footer>
            )}
        </div>
    );
}

export default Page;
 