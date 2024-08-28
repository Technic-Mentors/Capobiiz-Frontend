import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import UserNavbar from './UserNavbar'

export default function UserProfile() {
    return (
        <div>
            <UserNavbar/>
            <div className="container-fluid">
                <div className="row py-3">
                    <div className="col-md-3 profileLink">
                        <Link to="ticket-generate">  <h5 className='text-dark'><i class="fas fa-plus-square"></i> Generate Ticket</h5> </Link>
                        <Link to="generated-tickets">  <h5 className='text-dark'><i class="fas fa-arrow-right"></i> Generated Tickets</h5> </Link>
                        <Link to="open-status-tickets">  <h5 className='text-dark'><i class="fas fa-arrow-right"></i> OpenStatus Tickets</h5> </Link>
                        <Link to="close-status-tickets">  <h5 className='text-dark'><i class="fas fa-arrow-right"></i> CloseStatus Tickets</h5> </Link>
                        {/* <Link to="messages"> <h5 className='text-dark'><i class="fas fa-plus-square"></i> Messages</h5> </Link> */}
                    </div>
                    <div className="col-md-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div >
    )
}
