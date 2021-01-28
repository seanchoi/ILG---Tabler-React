import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Grid, Media, List, Form, Card, Alert, Text, Header, Button} from 'tabler-react';
import UserProfile from './UserProfile.js'
import LoginBtn from './Login.js'

export default function Forum() {
    const {user,isAuthenticated } = useAuth0();
    return (
        isAuthenticated? 
        <Container>
        <Grid.Row>
          <Grid.Col lg={4}>
            <UserProfile />               
          </Grid.Col>
          <Grid.Col lg={8}>
            <Card>
              <Card.Header>
                <Form.InputGroup append={<Button
                        RootComponent="a"
                        href="#"
                        icon="fe fe-camera"
                    >
                    </Button>}>
                    <Form.Input placeholder="Message" />
                </Form.InputGroup>
              </Card.Header>
              <List.Group>
                <List.GroupItem className="py-5">
                  <Media>
                    <Media.Object 
                      avatar={true} 
                      objectURL={user.picture} 
                      size="md" 
                      className="mr-4"
                    />
                    <Media.Body>
                      <Media.Heading>
                        <Text.Small muted className="loat-right">4 min</Text.Small>
                        <Header.H5>Peter Richards</Header.H5>
                      </Media.Heading>
                      <div>
                        Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta 
                        felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum 
                        at eros. 
                      </div>
                      <Media.List>
                        <Media.ListItem>
                          <Media.Object 
                            avatar={true} 
                            objectURL={'http://tabler-react.com/demo/faces/male/21.jpg'} 
                            size="md" 
                            className="mr-4"
                          />
                          <Media.Body>
                            <strong>Debra Beck:</strong>
                            Donec id elit non mi porta gravida at eget metus. 
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
                            Donec ullamcorper nulla non metus auctor fringilla. 
                          </Media.Body>
                        </Media.ListItem>
                      </Media.List>
                    </Media.Body>
                  </Media>
                </List.GroupItem>
              </List.Group>
            </Card>               
          </Grid.Col>
        </Grid.Row>
      </Container>
        :
        <Container>
        <Grid.Row>
          <Grid.Col lg={4}>
            <UserProfile />               
          </Grid.Col>
          <Grid.Col lg={8}>
        <Card>
            <Alert type="secondary" isDismissible>
                <Header.H4>Interior Logic Community Board</Header.H4>           
                <p>
                Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore
                minim voluptate.
                </p>
         
            </Alert>
        </Card>
        </Grid.Col>
        </Grid.Row>
      </Container>

    )
}
