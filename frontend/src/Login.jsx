import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid'
import './App.css';
import './Login.css';
import { flexbox } from '@mui/system';

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function Login() {
  const [user, setUser] = React.useState({email: '', password: ''});
  const history = useNavigate();

  React.useEffect(() => {
    sessionStorage.removeItem('user');
  }, []);

  const handleInputChange = (event) => {
    const {value, name} = event.target;
    const u = user;
    u[name] = value;
    setUser(u);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submit ', JSON.stringify(user));
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log('signup ');
    history('/signup');
  };

  return (
    <Container class='loginContainer' component='main' maxWidth='xs'>
      <Box
        sx={{
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '100vh',
          input:{color: 'white', letterSpacing: 3, fontFamily: 'Times'},
          label:{color: 'white', letterSpacing: 3, fontFamily: 'Times'}
        }}>
          <Typography 
            sx={{fontFamily: 'Times', color: 'white', fontStyle: 'italic'}}
          >
              Project Displayer by Ruchit Patel
          </Typography>
          <Box id='form' component="form" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              label="Email Address"
              id="email"
              type="email"
              onChange={handleInputChange}
              sx={{width: '80%', ml: '10%'}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              type="password"
              autoComplete="current-password"
              onChange={handleInputChange}
              sx={{mt: 0, width: '80%', ml: '10%'}}
            />
            {/* Sign in Button*/}
            <Button
              type="submit"
              sx={{ml: '40%', mt: 3, mb: 2, color: 'white', width: '20%'}}
            >
                        Sign in
            </Button>
            <Button
              type="submit"
              fullWidth
              onClick={handleSignUp}
              sx={{color: 'white', ml: '40%', width: '20%'}}
            >
              Sign up
            </Button>
          </Box>
      </Box>
    </Container>
  );
}

export default Login;
