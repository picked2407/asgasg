import React, { useState } from 'react';

const Page = () => {
    const [showHeaderFooter, setShowHeaderFooter] = useState(true);

    const toggleHeaderFooter = () => {
        setShowHeaderFooter(!showHeaderFooter);
    };

    return (
        <div>
            <button onClick={toggleHeaderFooter} className="toggle-button">
                {showHeaderFooter ? 'Hide' : 'Show'} Header and Footer
            </button>
            <style>{`
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .image-container {
                    text-align: center;
                    margin-top: 120px;
                }

                .single-image {
                    width: 320px; /* Set maximum width */
                    height: 300px; /* Maintain aspect ratio */
                    margin: 20px auto; /* Center image horizontally */
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease-in-out;
                }

                .single-image:hover {
                    transform: translateY(-5px); /* Move up on hover */
                }

                .image-row {
                    display: flex;
                    flex-wrap: wrap; /* Allow images to wrap to next line */
                    justify-content: center; /* Horizontally center the images */
                    gap: 20px; /* Adjust spacing between images */
                    margin-top: 40px;
                }

                .text {
                    text-align: center;
                    margin-top: 20px;
                }

                h2 {
                    font-size: 32px;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 20px;
                }

                footer {
                    text-align: center;
                    margin-top: 20px;
                    font-weight: bold;
                }

                .toggle-button {
                    display: block;
                    margin: 20px auto;
                    padding: 10px 20px;
                    font-size: 16px;
                    font-weight: bold;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .toggle-button:hover {
                    background-color: #0056b3;
                }
            `}</style>
            {showHeaderFooter && (
                <header>
                    {/* Header content */}
                    <div className="container">
                        <h1 style={{ textAlign: 'center' }}>Header</h1>
                    </div>
                </header>
            )}
            <div className="container">
                <div className="image-container">
                    <div className="text">
                        <h2>Select the company</h2>
                    </div>
                    <div className="image-row">
                        <img src="/assets/images/large_logo.png" alt="Image 1" className="single-image" />
                        <img src="https://media.discordapp.net/attachments/1193183717548638301/1217887367516655696/image-removebg-preview_10.png?ex=6605a8ff&is=65f333ff&hm=4bc0e797de6da35960295d7538d81b058b1d0386a4ae8a5a29d69fdf5d34d673&=&format=webp&quality=lossless&width=613&height=613" alt="Image 2" className="single-image" />
                        <img src="https://media.discordapp.net/attachments/1193183717548638301/1215705946140053596/image-removebg-preview_9.png?ex=65fdb964&is=65eb4464&hm=082adccdaa24f5be6d3759b6795a7a72ec9372d4c81a7d0599a8a195272b29af&=&format=webp&quality=lossless&width=400&height=400" alt="Image 3" className="single-image" />
                        <img src="https://t3.ftcdn.net/jpg/01/29/69/84/360_F_129698446_e2kKKd1MgIDJJzxfO1sE0jeUSn88SzKx.jpg" alt="Image 4" className="single-image" />
                    </div>
                </div>
            </div>
            {showHeaderFooter && (
                <footer>
                    {/* Footer content */}
                    <div className="container">
                        <h3>Footer</h3>
                    </div>
                </footer>
            )}
        </div>
    );
}

export default Page;
