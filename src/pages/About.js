import React from 'react'
import MultiplePizza from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className='about'>
			<div 
				className='aboutTop'
				style= {{ backgroundImage: `url(${MultiplePizza})` }}
			></div>
				<div className='aboutBottom'>
					<h1>Acerca de nosotros</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Aliquam ullamcorper est vitae est placerat vehicula. In hac 
						habitasse platea dictumst. Sed pretium sollicitudin hendrerit. 
						Proin efficitur vestibulum cursus. Duis ultricies lobortis ornare. 
						Pellentesque sit amet mauris eget nibh maximus vestibulum. 
						Maecenas vel lorem arcu. Nam at rhoncus nulla. Aenean at 
						consectetur elit, non gravida odio. Praesent ipsum ipsum, 
						pulvinar eu facilisis eu, sagittis consectetur nisi. 
						Maecenas volutpat non enim eu placerat. Etiam est diam, molestie 
						ut aliquet ut, iaculis sed purus. Maecenas id viverra est, a accumsan 
						purus. Suspendisse interdum odio nec justo viverra, at aliquet diam semper. 
						Vivamus tincidunt, mauris vel porttitor pellentesque, tellus magna 
						molestie orci, ut vestibulum erat nibh a purus.

						Praesent quis quam elementum tortor euismod euismod et quis ante. 
						Vivamus hendrerit malesuada tempus. Aliquam erat volutpat. Fusce 
						ut justo laoreet, tincidunt libero eget, vehicula nisi. Morbi sit 
						amet risus at turpis varius facilisis sit amet.
				</p>
		</div>
	</div>
  )
}

export default About