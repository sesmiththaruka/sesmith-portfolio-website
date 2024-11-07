import React from "react";
import backgroundImage from "../assets/christoph-theisinger-9PPYa3LK6II-unsplash.jpg";

const HireMeSection = () => {
    return (
        <section
            className="w-full py-24 bg-cover bg-center text-white my-20"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="w-full max-w-none flex justify-center pb-12 pt-2">
                <div className="text-center max-w-xl px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        I'm <span className="text-purple-300">Available</span> for freelancing
                    </h2>
                    <p className="mb-12  text-lg leading-relaxed">
                        If you have a project that could benefit from my expertise, please get in touch. I look forward
                        to collaborating with you.
                    </p>
                    <a
                        href="#contact-section"
                        className="py-3 px-8 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
                    >
                        Hire me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HireMeSection;
