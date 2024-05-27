/**
 * este header tem css especifico e é suposto ser chamado em todo o lado (que implique header)
 * tem uma imagem/logo da app
 * tem uma renderização condicional, que varia consoante o user estar logado ou nao
 * tem de ser dinamico
 * */
import react, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom'
//função para verificar se o user está logado
//teria de user o que, um token?
//tem de ter aqui um navigate para ir para as páginas dos admins e afins. Select que leva às várias páginas 
/**IMPORTANTE, AS FUNÇÕES DE LOGICA SÃO COLOCADAS FORA DO COMPONENTE PARA PODEREM SER EXPORTADAS E TESTADAS MAIS FACILMENTE */
export function navigateToPage(page){
    const navigate = useNavigate();

    switch(page){
        case 'login':
            navigate('/login', {replace:true});
            break;
        case 'registry':
            navigate('/registry', {replace:true})
            break;
        default:
            console.log('default case called in the navigate to page function');
            break;
    }
}

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
export function logout(){
    //navega para a dashboard sem estar logged in
    setIsLoggedIn(false);
    navigateToPage('login');
}


//preciso de algum props aqui?
const Header =()=>{
    //estados aqui
    //aqui é preciso verificar se existe algum token/alguma coisa na store
    //chama o verify user login aqui primeiro
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    //aqui ha uma função que ao verificar se o user está logged in, retorna o set isLoggedIn como true ou false

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout =()=>{
        logout();
        //aqui faz sentido estar a chamar a função logout? ou faz se logout direto?
    }
return(
    <AppBar position="static"> //esta appbar significa o que? qual é a diferença entre isto e o header?
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Inov project management page
        </Typography>
        {isLoggedIn ? (
          <>
            <Avatar sx={{ marginRight: '8px' }} />
            <a>Nome de user</a>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Button color="inherit"onClick = {navigateToPage('login')}>Login / Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
)
}
export default Header