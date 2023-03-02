import React, { useCallback, useState } from 'react';
import axios from 'axios';

import { Container, Content, Title, Text, DivTexts } from './styles';

import InputWithButton from '../../Components/InputWithButton';

interface PropsCep {
  cep: string,
  logradouro: string,
  complemento: string
  bairro: string,
  localidade: string,
  uf: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string,
}

const Home: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [data, setData] = useState<PropsCep>({} as PropsCep)
  const [showCep, setShowCep] = useState<boolean>(false)
  
  const handleButtonClick = useCallback(async (value: string) => {
    setIsLoading(true)
    console.log(value)
    await axios.get(`https://viacep.com.br/ws/${value}/json/`)
      .then(function (response) {
        if(response.data.erro === true) {
          setIsError(true)
          setIsLoading(false)
        } else {
          setIsError(false)
          setIsLoading(false)
          console.log(response.data)
          setData(response.data)
          setShowCep(true)
        }
      })
      .catch(function (error) {
        setIsError(true)
        setIsLoading(false)
      })
  }, [])

  return (
    <Container>
      <Content>
        <Title>BUSQUE SEU CEP</Title>
        <InputWithButton 
          value={value} 
          onChange={(e) => {setValue(e.target.value); console.log(e.target.value)}} 
          onClick={() => handleButtonClick(value)} 
          buttonText="BUSCAR"
          isLoading={isLoading}
        />
        {isError ? (
          <DivTexts>
            <Text>CEP não encontrado</Text>
          </DivTexts>
        ) : (
          <>
            {showCep && (
              <>
                <DivTexts>
                  <Text>CEP:</Text>
                  <Text>{data.cep}</Text>
                </DivTexts>
                <DivTexts>
                  <Text>LOGRADOURO:</Text>
                  <Text>{data.logradouro}</Text>
                </DivTexts>
                <DivTexts>
                  <Text>COMPLEMENTO:</Text>
                  <Text>{data.complemento}</Text>
                </DivTexts>
                <DivTexts>
                  <Text>BAIRRO:</Text>
                  <Text>{data.bairro}</Text>
                </DivTexts>
                <DivTexts>
                  <Text>LOCALIDADE:</Text>
                  <Text>{data.localidade}</Text>
                </DivTexts>
                <DivTexts>
                  <Text>UF:</Text>
                  <Text>{data.uf}</Text>
                </DivTexts>
                <DivTexts>
                  <Text>IBGE:</Text>
                  <Text>{data.ibge}</Text>
                </DivTexts>
                <DivTexts>
                  <Text>GIA:</Text>
                  <Text>{data.gia}</Text>
                </DivTexts>
                <DivTexts>
                  <Text>DDD:</Text>
                  <Text>{data.ddd}</Text>
                </DivTexts>
                <DivTexts>
                  <Text>SIAFI:</Text>
                  <Text>{data.siafi}</Text>
                </DivTexts>
              </>
            )}
          </>
        )}
      </Content>
    </Container>
  );
}

export default Home;