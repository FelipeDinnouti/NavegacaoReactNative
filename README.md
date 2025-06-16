## Overview

This app has the goal to demonstrate in a simple way how navigation between screens using stack navigation works in React Native, using the Expo Framework.
The app consists in five screens:
- Profile
- Home
- Details
- Login
- Register

The login screen is where the user may insert the default register data (login: admin  password: 123)
In the register screen you can setup a new default user (can only have one registered data at a time besides the default admin login.)
Home and Details have no real information and exist only as an example.
In the profile screen the user may logout.

## Instructions on running the project

[NodeJS](https://nodejs.org/en) and git are required to be installed in the machine.

Cloning the repo:

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


*made with recebill by Felipe Dinnouti*
