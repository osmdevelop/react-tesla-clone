import React from 'react'
import styled from 'styled-components'
// import arrow from '../imgs/down-arrow.svg'

function Section({ title, description, span, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description} <span>{span}</span></p>
            </ItemText>

            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                {/* <DownArrow /> */}
            </Buttons>
        </Wrap >
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url('/images/${props.bgImage}')`};
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    p {
        margin-top: 5px;
    }
    span {
        cursor: pointer;
        border-bottom: 1px solid #000;
    }

    span:hover {
        border-bottom: 2px solid #000;
    }
`

const Buttons = styled.div``

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media(max-width: 768px) {
        flex-direction: column;
    };
`

const LeftButton = styled.div`
    background-color: #23252A;
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: #fff;
    opacity: 0.65;
    color: #000;
`

// const DownArrow = styled.img`
//     background-image: url(${arrow});
//     margin-top: 20px;
//     height: 40px;
//     animation: animateDown infinite 1.5s;
//     overflow-x: hidden;
//     opacity: 0.7;
//     width: 25px;
// `
