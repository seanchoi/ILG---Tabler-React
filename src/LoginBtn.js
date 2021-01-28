import React from 'react'
import { Button } from 'tabler-react';
import { useAuth0 } from '@auth0/auth0-react'

export default function LoginBtn() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <Button onClick={() => loginWithRedirect()}>Login</Button>    
        )
        
    )
}
