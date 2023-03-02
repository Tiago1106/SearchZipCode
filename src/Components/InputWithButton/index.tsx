import React from 'react';

import ReactLoading from 'react-loading';

import { Container, Input, Button } from './styles';

interface InputWithButtonProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonText: string;
  isLoading: boolean;
}

const InputWithButton: React.FC<InputWithButtonProps> = ({
  value,
  onChange,
  onClick,
  buttonText,
  isLoading
}) => {

  function formatCEP(cep: string) {
    cep = cep.replace(/\D/g, '');
    cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
    
    return cep;
  }

  return (
    <Container>
      <Input type="text" value={formatCEP(value)} onChange={onChange} placeholder="Digite seu CEP" maxLength={9}/>
      {isLoading ? (
        <Button disabled={isLoading}>
          <ReactLoading type="spin" color="#fff" height={20} width={20} />
        </Button>
      ) : (
        <Button onClick={onClick}>{buttonText}</Button>
      )}
    </Container>
  );
};

export default InputWithButton;