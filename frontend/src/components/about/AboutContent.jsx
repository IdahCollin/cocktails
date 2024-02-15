// This component is mounted in the page About.jsx
import "./aboutContent.css";

// Importing various icons from react-icons library
import { FaGlassMartiniAlt } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { ImLab } from "react-icons/im";
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
                    <div className="about-icons"><FaGlassMartiniAlt /></div>
                    <p>Let's make it easier creating a mocktail at home. Minimizing waste, maximizing taste!</p>
                </div>

                {/* Tech Section */}
                <div className="about-tech">
                    <div className="about-icons"><MdOutlineComputer /></div>
                    <p>
                        Tech: React, JavaScript, Zustand, HTML, OpenAI, MongoDB/Atlas, CSS, React Router, Node, Express, Render, Netlify.
                    </p></div>

                {/* Project Information */}
                <div className="project-info">
                    <div className="about-icons"><ImLab /></div>
                    <p>
                        Explore the <a href="https://github.com/IdahCollin/cocktails/blob/main/README.md">GitHub README</a> mixology for additional details and code for Pure Pour.
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
