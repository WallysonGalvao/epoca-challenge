import React, { useState } from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Info, SubInfo, Content, Input } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<string>('');

  return (
    <Container>
      <Title>Análise de Sentimento</Title>

      <Info>
        Busque por um usúario no Twitter e veja uma lista de tweets, clicando em
        um dos tweets é possível realizar a análise sentimental.
      </Info>

      <SubInfo>Ex. epocacosmeticos ou magazineluiza</SubInfo>

      <Content>
        <Input
          onChangeText={text => setUser(text)}
          value={user}
          placeholder="Digite aqui o nome do usuário..."
          testID="input"
        />

        <Button
          onPress={() => navigation.navigate('List', { user })}
          title="Buscar"
          accessibilityLabel="Buscar perfil no Twitter"
          testID="searchButton"
        />
      </Content>
    </Container>
  );
};

export default Home;
