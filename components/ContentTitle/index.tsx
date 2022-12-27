import styled from 'styled-components'

const Title = styled.h2`
  color: ${(props) => props.theme.text.point};
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  text-shadow: -2px 0px 0 darkgray;
  padding: 100px 0;
`
export const ContentTitle = ({ title }: { title: string }) => {
  return <Title>{title}</Title>
}
