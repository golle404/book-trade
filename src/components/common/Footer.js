import React from 'react';
import SvgTwitter from './svg/SvgTwitter';
import SvgGithub from './svg/SvgGithub';
import SvgCodepen from './svg/SvgCodepen';

const Footer = () => {
	return (
		<div className="navbar navbar-inverse navbar-footer">
			<div className="container footer-container">&reg; 2016 Goran Rakić
				<a className="icon-button" href="https://twitter.com/gollactive"><SvgTwitter/></a>
				<a className="icon-button" href="https://github.com/golle404"><SvgGithub/></a>
				<a className="icon-button" href="http://codepen.io/golle404/"><SvgCodepen/></a>
			</div>
		</div>
	);
};

export default Footer;
