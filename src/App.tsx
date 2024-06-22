import { Card, CardContent, Container, ThemeProvider, Typography, createTheme } from '@mui/material';
import PasswordChecklist from 'mui-password-checklist';
import { ChangeEvent, useState } from 'react';

const theme = createTheme();

const App = () => {
  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col justify-center items-center gap-12 min-h-[100vh] bg-gray-200">
        <Card className="max-w-[400px] pb-8">
          <CardContent >
            <div className="flex flex-col gap-2 mb-12 mt-2">
              <Typography variant="h5">mui-password-checklist</Typography>
              <Typography>Click on the input field and type a password to see the chack list</Typography>
            </div>
            <PasswordChecklist
              value={password}
              onChange={handlePasswordChange}
              /**
               * decomment if overriding the error messages
               */
              // validationMessages={{
              //   minLength: 'Devrait contenir au moins 6 caractères',
              //   lowerCase: 'Devrait contenir au moins une lettre minuscule',
              //   upperCase: 'Devrait contenir au moins une lettre majuscule',
              //   number: 'Devrait contenir au moins un chiffre',
              //   specialCharacters: 'Devrait contenir au moins un caractère spécial',
              // }}
              /**
               * decomment if overriding the options
               */
              // options={{
              //   minLength: 6,
              //   allowedSpecialChar: "="
              // }}
              // override TextFieldProps
              fullWidth
              placeholder="Enter your password"
            />
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  )
}

export default App
