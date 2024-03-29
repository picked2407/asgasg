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
           
            <div className="container">
                <div className="image-container">
                    <div className="text">
                        <h2>Select the company</h2>
                    </div>
                    <div className="image-row">
                    <a href="https://asgasg-cyan.vercel.app/">
                        <img src="/assets/images/log.png" alt="Image 2" className="single-image" />
                    </a>
                        <a href="https://asgasg-cyan.vercel.app/prestamos4k">
  <img src="/assets/images/2.png" alt="Image 3" className="single-image" />
</a>

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Page;
