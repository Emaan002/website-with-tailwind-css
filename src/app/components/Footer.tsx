import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-2">
      <div className="container mx-auto flex flex-col items-center">
        

       
        <div className="flex space-x-6 gap-6 ">
          <a
            href="https://github.com/Emaan002"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagra.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/hafsa-sagheer-ahmed-737251311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>

        <p className="text-sm py-0">&copy; {new Date().getFullYear()} Cricket Accessories. All rights reserved.</p>
      </div>
    </footer>
  );
}

