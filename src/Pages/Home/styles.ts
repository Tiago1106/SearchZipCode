import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 800px;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 20px;
  box-sizing: border-box;

  background-color: #EEEEEE;

  box-shadow: 3px 3px 3px #00000025;
  border-radius: 20px;
`

export const Title = styled.span`
  font-size: 24px;
  text-align: center;
  color: #1F1F1F;

  margin: 10px 0;
`;

export const DivTexts = styled.div`
  display: flex;
  align-items: center;
  
  width: 50%;

  flex-direction: row;

  margin: 5px 0;
`

export const Text = styled.span`
  font-size: 16px;  
  color: #1F1F1F;

  margin-right: 5px;
`;
