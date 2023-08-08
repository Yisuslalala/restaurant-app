import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { LinkedIn } from '@mui/icons-material';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
			<div className='socialMedia'>
				<InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedIn />
				<p>&copy; 2023 pedropizzeria.com</p>
			</div>
    </div>
  )
}

export default Footer