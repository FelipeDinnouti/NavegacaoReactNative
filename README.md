## Visão Geral

Esse app tem como objetivo demonstrar de forma simples a navegação entre telas com stack usando React Native e o Framework Expo.
O aplicativo consiste em quatro telas:
- Perfil 
- Home
- Detalhes
- Login

A tela de login é onde o usuário pode 
As telas Home e Detalhes não contém informação real mas tem botões para acessar as outras telas.
Na tela de Perfil é possível desfazer o login.

## Instruções para uso do projeto

É necessário que o [NodeJS](https://nodejs.org/en) esteja instalado na máquina, assim como o Git.
Para clonar o repositório: 

```bash
git clone https://github.com/FelipeDinnouti/NavegacaoReactNative
cd NavegacaoReactNative
```

Install global Expo-cli (if not already installed)
```
npm install -g expo-cli
```

Install required dependecies:
```bash
npm install
```

Run the project with Expo, requires a device with Expo Go installed.
```
npx expo start --tunnel // Tunnel is optional but required if you are not in the same network.
```

---


*feito com muito empenho por Felipe Dinnouti*