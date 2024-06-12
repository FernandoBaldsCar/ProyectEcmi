import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="center">
        <div className="row">
          <div className="col">
          
            <p>Síguenos en redes sociales:</p>
            <ul className="list-unstyled">
              <li >
                <a href="https://www.facebook.com/TuPaginaDeFacebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/TuPaginaDeTwitter" target="_blank" rel="noopener noreferrer">
                  <FaTwitter /> Twitter
                  
                </a>
              </li>
              <a href='https://wa.me/527121840585'><img></img></a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

