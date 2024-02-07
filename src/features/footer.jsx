import React from 'react';

export const Footer = () => {
    return (
        <footer className="footer-conatainer">
            <div className="footer-content">
                <div >
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="https://www.google.com">About Us</a></li>
                        <li><a href="https://www.google.com">Services</a></li>
                        <li><a href="https://www.google.com">Contact Us</a></li>
                        <li><a href="https://www.google.com">Privacy Policy</a></li>
                    </ul>
                </div>
                <div >
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://www.facebook.com">Facebook</a></li>
                        <li><a href="https://www.twitter.com">Twitter</a></li>
                        <li><a href="https://www.instagram.com">Instagram</a></li>
                    </ul>
                </div>
                <div >
                    <h3>Contact Us</h3>
                    <ul style={{
                        fontSize: "0.8em  !important"
                    }}>
                        <li>Taste of Nature</li>
                        <li>Ph.:123-456-7890</li>
                        <li>Em.:info@taste.com</li>
                        <li> 1 x Street, Wellington</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <span >&copy; 2023 Taste of Nature. All rights reserved.</span>
            </div>
        </footer>
    )
}