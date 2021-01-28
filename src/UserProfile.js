import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Card, Profile, Alert, Button, Header, ContactCard, Avatar } from 'tabler-react'
import LoginBtn from './LoginBtn';

export default function UserProfile() {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated ?
            <Card>
            <Profile
              name={user.name}
              avatarURL={user.picture}
              backgroundURL={'http://tabler-react.com/demo/photos/eberhard-grossgasteiger-311213-500.jpg'}
              bio={[user.email]}
              twitterURL={""}
            />
       
          </Card>
        :
        <Alert type="primary" isDismissible>
        <Header.H4>Welcome To ILG Forum</Header.H4>
        <p>
          Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore
          minim voluptate.
        </p>
        <Button.List>
          <LoginBtn />
          <Button color="secondary" RootComponent="button">
            No, thanks
          </Button>
        </Button.List>
      </Alert>
    )
        
    
}
