import React from 'react'
import {Container, Grid, List, Site} from 'tabler-react';

export default function SiteFooter() {
    return (
        <div className="footer">
        <Container>
          <Grid.Row>
            <Grid.Col lg={8}>
              <Grid.Row>
                <Grid.Col width={6} md={3}>
                  <List unstyled className="mb-0">
                    <List.Item>First Link</List.Item>
                    <List.Item>Second Link</List.Item>
                  </List>
                </Grid.Col>
                <Grid.Col width={6} md={3}>
                  <List unstyled className="mb-0">
                    <List.Item>Third Link</List.Item>
                    <List.Item>Fourth Link</List.Item>
                  </List>
                </Grid.Col>
                <Grid.Col width={6} md={3}>
                  <List unstyled className="mb-0">
                    <List.Item>Fifth Link</List.Item>
                    <List.Item>Sixth Link</List.Item>
                  </List>
                </Grid.Col>
                <Grid.Col width={6} md={3}>
                  <List unstyled className="mb-0">
                    <List.Item>Seventh Link</List.Item>
                    <List.Item>Eigth Link</List.Item>
                  </List>
                </Grid.Col>
              </Grid.Row>
            </Grid.Col>
            <Grid.Col lg={4}>
              Interior Logic Group
            </Grid.Col>
          </Grid.Row>
        </Container>
      
      <Site.Footer copyright="Copyright Â© 2019 Tabler-react. Theme by codecalm.net All rights reserved."/>
      </div>
    )
}
