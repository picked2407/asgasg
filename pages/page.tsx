import React, { useState } from 'react';
import Header from '../components/Layouts/Header';
import Footer from '../components/Layouts/Footer';

const Page = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
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
            <div className="image-container">
                {/* Display the first image */}
                <img src="/assets/images/large_logo.png" alt="Image 1" className="single-image" />
                {/* Display the second image */}
                <img src="https://media.discordapp.net/attachments/1193183717548638301/1215698798983118909/image-removebg-preview_8.png?ex=65fdb2bc&is=65eb3dbc&hm=9d4c454a4129779cd924be7e03fe28d81f74fb778a4170cabc823a96cfd2220a&=&format=webp&quality=lossless&width=613&height=613" alt="Image 2" className="single-image" />
                {/* Display the third image */}
                <div className="image-row">
                    {/* Display the third image  */}
                    <img src="https://media.discordapp.net/attachments/1193183717548638301/1215696888922120323/Prestamos_4K_Transparent.png?ex=65fdb0f4&is=65eb3bf4&hm=42df2de0dc974cb47393f7b4d0134f8ea104e4ee06ac096c0a5c11a9aae50307&=&format=webp&quality=lossless&width=400&height=400" alt="Image 3" className="single-image" />
                    {/* Display the fourth image */}
                    <img src="https://example.com/image4.jpg" alt="Image 4" className="single-image" />
                </div>
            </div>
            {/* Your remaining content here */}
        </div>
    );
}

export default Page;
