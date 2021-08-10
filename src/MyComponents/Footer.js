import React from 'react'

export const Footer = () => {
    let footerStyle =
    {        
        width: "100%",     
        height: "100px"   
    }
    return (
        <footer className="bg-dark text-light" style= {footerStyle}>
            <p className="text-center">
                Copyright &copy; MyTodosList.com
            </p>            
        </footer>
    )
}
