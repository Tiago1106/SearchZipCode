import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px
`

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 10px 0 0 10px;
  box-sizing: border-box;

  width: 300px;
  height: 40px;
`;

export const Button = styled.button`
  width: 80px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  border: none;
  border-radius: 0 10px 10px 0;
  background-color: #00C814;
  color: #fff;
  cursor: pointer;

  box-sizing: border-box;
`;