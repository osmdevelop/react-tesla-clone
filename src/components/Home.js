import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model 3"
                description="Order Online for"
                span="Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory" />
            <Section
                title="Model Y"
                description="Order Online for"
                span="Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory" />
            <Section
                title="Model S"
                description="Order Online for"
                span="Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory" />
            <Section
                title="Model X"
                description="Order Online for"
                span="Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory" />
            <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more" />
            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more" />
            <Section
                title="Accessories"
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
            />
            <Footer>
                <ul>
                    <li><a href='#'>Tesla 2022</a></li>
                    <li><a href='#'>Privacy and Legal</a></li>
                    <li><a href='#'>Vehicle Recalls</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>News</a></li>
                    <li><a href='#'>Engage</a></li>
                    <li><a href='#'>Locations</a></li>
                </ul>
            </Footer>
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    h1 {
        font-weight: 600;
        font-size: 2.5rem;
    }
`

const Footer = styled.div`
    ul {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
    }
    li {
        list-style: none;
        padding: 3px 10px;
    }
    
    a {
        color: #5c5e62;
        font-size: 12px;
        font-weight: 600;

    }
`