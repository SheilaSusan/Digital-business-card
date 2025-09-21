import { FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa"

export default function Footer(){
    return(
        <footer>
            <a href="https://www.instagram.com/itz_shillah?igsh=MXJ5bnMzMXI1OHVhbQ==" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare className="icon"/>
            </a>
            <a href="https://github.com/SheilaSusan" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare className="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/sheila-susan-14111a2b8/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon"/>
            </a>
        </footer>
    )
}