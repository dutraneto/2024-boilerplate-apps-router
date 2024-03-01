import * as S from './styles'

const Main = ({
    title = 'React Avançado',
    description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
    return (
        <S.Wrapper>
            <h1>{title}</h1>
            <p>{description}</p>
        </S.Wrapper>
    )
}

export default Main
