import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button} from '@mui/material';


function App() {
  return (
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Button size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
               
              </Button>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Shopping Zone
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        </div>
  );
}

export default App;

