import React from 'react'
import { useLocation } from 'react-router-dom'

function Topbar() {
    const location = useLocation()

    if (location.pathname === "/adminPanel/addblog" || location.pathname === "/adminPanel/allposts" || location.pathname === "/adminPanel/allcategory" || location.pathname === "/adminPanel/addcategory" || location.pathname === "/adminPanel/board" || location.pathname === "/adminPanel/demoUsers" || location.pathname === "/adminPanel/allTickets") {
        return null;
    }
    return (
        <div>
            <div className="top-bar d-none d-md-block">
                <div className="container-fluid px-4">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="top-bar-left">
                                <div className="text mt-2">
                                    
                                    <h2 style={{ fontFamily: 'poppins' }}> For Demo: <i className="fab fa-whatsapp"></i>&nbsp;+923 111 122 144</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="top-bar-right">
                                <div className="social mt-2">
                                    <a href="/#"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/CapoBiz"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/capobiz/"><i className="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/TechnicMentors"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.youtube.com/c/TechnicMentors"><i className="fab fa-youtube"></i></a>
                                    <a href="https://www.linkedin.com/in/TechnicMentors/"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
