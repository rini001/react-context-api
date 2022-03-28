import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { Button, NavBarWrapper } from './Navbar.styled';

export const Navbar = () => {
	const { isAuth,onLogIn, onLogOut,toggleAuth,token} = React.useContext(AuthContext);
  return (
	  <>
	<NavBarWrapper>
<Button
					onClick={() => {
						if (isAuth) onLogOut();
						else onLogIn();
					}}
				>
					{isAuth === true ? "Log Out" : "Log In"}
				</Button>
				<Button onClick={toggleAuth}>
					{isAuth === true ? "Don't toggle" : "Toggle"}
				</Button>
			
	</NavBarWrapper>
	<h1>{token}</h1>
	</>
  )
}
