import styled  from 'styled-components'

export const Container = styled.div`

height: 100vh;
width: 100vw;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1{ 
    font-size:54px;
    color: ${props=>props.theme.colors.primary};
}

`