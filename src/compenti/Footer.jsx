import React from "react";


function Footer() {
    const year = new Date();
    const currentYear = year.getFullYear();
    
    return (
        <footer>
            <p>
               Copyrightâ“’ {currentYear}.
            </p>
        </footer>
    )
}

export default Footer;