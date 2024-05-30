/**
 * este header tem css especifico e é suposto ser chamado em todo o lado (que implique header)
 * tem uma imagem/logo da app
 * tem uma renderização condicional, que varia consoante o user estar logado ou nao
 * tem de ser dinamico
 * */
import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {usePageNavigation} from '../../Services/utils/PageNavigation';
import './style.css'

//função para verificar se o user está logado
//teria de user o que, um token?
//tem de ter aqui um navigate para ir para as páginas dos admins e afins. Select que leva às várias páginas 
/**IMPORTANTE, AS FUNÇÕES DE LOGICA SÃO COLOCADAS FORA DO COMPONENTE PARA PODEREM SER EXPORTADAS E TESTADAS MAIS FACILMENTE */

export function verifyLoggedInUser(token){
    if (token !== null){
        //retorna true para devolver o valor ou pode devolver o token e faz set a esse token
        //ou retorna o user integral
        //posso chamar aqui o set state?
        //esta função retorna um user. podemos fazer set state do retorno desta função
        return true; //trocar por user
    }
    else return false;
}

//preciso de algum props aqui?
//aqui tem de levar o props do user estar logged in;
const Header =()=>{
    const navigateToPage = usePageNavigation();
    //estados aqui
    //aqui é preciso verificar se existe algum token/alguma coisa na store
    //chama o verify user login aqui primeiro
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [showMenu, setShowMenu] = useState(false); // State to control menu visibility
    const [showIcon, setShowIcon] = useState(false);

    //aqui ha uma função que ao verificar se o user está logged in, retorna o set isLoggedIn como true ou false
    useEffect(() => {
      const handleResize = () => {
          // Check the window width and set showMenu accordingly
          const width = window.innerWidth;
            setShowMenu(width > 768);
            setShowIcon(width < 768);
      };
       // Initial check on component mount
       handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

     

      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        setShowMenu(!showMenu);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setShowMenu(false);
    };
    
return(
    <AppBar position="static"> {/*//esta appbar significa o que? qual é a diferença entre isto e o header?*/}
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Inov project management page
        </Typography>
        {showIcon && (
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuClick}
                        className="menu-toggle"
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                {showMenu && (
                    <div className="menu-items">
                        <Button color="inherit" onClick={() => navigateToPage('home')}>
                            Home
                        </Button>
                        <Button color="inherit" onClick={() => navigateToPage('about')}>
                            About
                        </Button>
                        <Button color="inherit" onClick={() => navigateToPage('contact')}>
                            Contact
                        </Button>
                    </div>
                )}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
          }}
          getContentAnchorEl={null}
          className={showMenu ? 'menu-items show' : 'menu-items'} // Apply CSS class to show/hide menu items
        >
            {/**aqui serão colocados as partes de navegação */}
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>
        
        {isLoggedIn ? (
          <>
            <Avatar src = "" sx={{ marginRight: '8px' }} >U</Avatar>
            <a>Nome de user</a>
            <Button onClick = {()=>navigateToPage('login')} color="inherit">Logout</Button>
          </>
        ) : (
          <Button color="inherit" onClick = {()=>navigateToPage('login')}>Login / Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
)
}
export default Header