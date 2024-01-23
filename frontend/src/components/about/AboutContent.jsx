// This component is mounted in the page About.jsx
import "./aboutContent.css";

// Importing various icons from react-icons library
import { TbHealthRecognition } from "react-icons/tb";
import { MdOutlineComputer } from "react-icons/md";
import { IoTrailSignOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

// Defining the AboutContent component
export const AboutContent = () => {
    return (
        <div className="about-container">
            <div className="vision-tech-info">
                {/* Vision Section */}
                <div className="about-vision">
                    <div className="about-icons"><TbHealthRecognition /></div>
                    <p>Let's make it easier creating a mocktail/cocktail at home, minimizing waste!</p>
                </div>

                {/* Tech Section */}
                <div className="about-tech">
                    <div className="about-icons"><MdOutlineComputer /></div>
                    <p>
                        Tech: React, JavaScript, Zustand, HTML, OpenAI, MongoDB/Atlas, CSS, React Router, Node, Express, Render, Netlify.
                    </p></div>

                {/* Project Information */}
                <div className="project-info">
                    <div className="about-icons"><IoTrailSignOutline /></div>
                    <p>
                        Explore the <a href="https://github.com/IdahCollin/cocktails/blob/main/README.md">GitHub README</a> mixology for additional details and code for CocktAil.
                    </p></div></div>

            {/* Team Members Cards */}
            <div className="cards-container">
                <div className="card">
                    <div className="card-content">
                        <img src="https://idah-collin-portfolio.netlify.app/assets/profilbildidah.jpeg" alt="Photo of Idah Collin" />
                        <h3>Crafted by: Idah Collin</h3>
                        <div className="contact-idah">
                            <a href="https://idah-collin-portfolio.netlify.app/"><FaBook /></a>
                            <a href="https://www.linkedin.com/in/idah-collin"><FaLinkedin /></a>
                            <a href="https://github.com/IdahCollin"><FaGithub /></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
