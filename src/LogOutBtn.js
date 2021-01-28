import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'tabler-react';

export default function LogOutBtn() {

    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <Button onClick={() => logout()}>Logout</Button>      
        )
        
    )
}
