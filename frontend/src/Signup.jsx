import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useNavigate} from 'react-router-dom';
import './App.css';
import './Login.css';

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function Signup() {
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
    history('/');
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
              Sign up - Project Displayer
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
            <Button
              type="submit"
              sx={{ml: '40%', mt: 3, mb: 2, color: 'white', width: '20%'}}
            >
                Sign up
            </Button>
          </Box>
      </Box>
    </Container>
  );
}

export default Signup;
