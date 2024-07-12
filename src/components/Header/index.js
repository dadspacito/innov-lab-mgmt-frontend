/**
 * este header tem css especifico e é suposto ser chamado em todo o lado (que implique header)
 * tem uma imagem/logo da app
 * tem uma renderização condicional, que varia consoante o user estar logado ou nao
 * tem de ser dinamico
 * */
import React, { useState, useEffect, useRef } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Avatar, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {usePageNavigation} from '../../Services/utils/PageNavigation';
import './style.css'
import { useNavigate } from 'react-router-dom';
import {SessionAPI} from '../../Services/API/SessionAPI';
import { userStore } from "../../Services/Store/userStore";
//função para verificar se o user está logado
//teria de user o que, um token?
//tem de ter aqui um navigate para ir para as páginas dos admins e afins. Select que leva às várias páginas 
/**IMPORTANTE, AS FUNÇÕES DE LOGICA SÃO COLOCADAS FORA DO COMPONENTE PARA PODEREM SER EXPORTADAS E TESTADAS MAIS FACILMENTE */


//é preciso um servico que va buscar o user pelo token
//preciso de algum props aqui?
//aqui tem de levar o props do user estar logged in;
const Header =({isUserOn, userName, user})=>{
    const navigateToPage = usePageNavigation();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [showMenu, setShowMenu] = useState(true); // State to control menu visibility
    const [showIcon, setShowIcon] = useState(false);
    const anchorRef = useRef(null);
    const mockUserPicture = 'https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png'; // Placeholder image
    const logout = userStore((state)=>state.clearUser);
    useEffect(() => {
      const handleResize = () => {
          const width = window.innerWidth;
            setShowMenu(width > 768);
            setShowIcon(width < 769);
      };
       handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);
    const handleMenuClick = (event) => {
        setAnchorEl(anchorRef.current);
        setShowMenu(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        //setShowMenu(false);
    };
    const handleUserClick = () => {
      console.log("User's name clicked!");
      console.log(user);
      navigate('/userProfile',{state:{user}})
  };

  //a função de logout aqui tem de ser especifica porque vai fazer um fetch das credenciais, tem de apagar o user da store e fazer reload da pagina
  const handleLogout = async ()=>{
    if (SessionAPI.LogOutUser(user.token)){
        logout();
    }
  }
    
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
                        ref = {anchorRef}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                {showMenu && (
                    <div className="menu-items">
                        <Button color="inherit" onClick={() => navigateToPage('homepage')}>
                            Home
                        </Button>
                        {/* <Button color="inherit" onClick={() => navigateToPage('about')}>
                            About
                        </Button> */}
                       
                        {isUserOn && (
                            <>
                               {/* <Button color="inherit" onClick={() => navigateToPage('userProfile')}>
                                    User Profile
                                </Button> */}
                                <Button color="inherit" onClick={() => navigateToPage('materials')}>
                                    Materials
                                </Button>
                                <Button color="inherit" onClick={() => navigateToPage('adminPage')}>
                                    Admin Page
                                </Button>
                            </>
                        )}
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
          getcontentanchorel={null}
          //getContentAnchorEl={null}
          className={showMenu ? 'menu-items show' : 'menu-items'} // Apply CSS class to show/hide menu items
        >
            {/**aqui serão colocados as partes de navegação */}
          <MenuItem onClick={handleClose}>Home</MenuItem>
          {/* <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem> */}
        </Menu>
        {isUserOn ? (
                    <>
                        <Box display="flex" alignItems="center" onClick={handleUserClick} sx={{ cursor: 'pointer' }}>
                            <Avatar src={mockUserPicture || ''} sx={{ marginRight: '8px' }}>U</Avatar>
                            <Typography variant="body1" color="inherit">{userName || 'User'}</Typography>
                        </Box>
                        <Button onClick={handleLogout} color="inherit">Logout</Button>
                    </>
                ) : (
                    <Button color="inherit" onClick={() => navigateToPage('login')}>Login / Sign In</Button>
                )}
      </Toolbar>
    </AppBar>
)
}
export default Header