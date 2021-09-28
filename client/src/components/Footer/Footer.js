import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "black",
				textAlign: "center",
                background: "#00d9ff",
				marginTop: "50px", }}>
		Rejiji
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">About</FooterLink>
			<FooterLink href="#">Terms and Conditions</FooterLink>
			<FooterLink href="#">Privacy</FooterLink>
			<FooterLink href="#">Blog</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="https://www.alberta.ca/landfills.aspx">Landfill</FooterLink>
			<FooterLink href="https://www.albertarecycling.ca/recycling-depots/">Recycling Depot</FooterLink>
			<FooterLink href="https://upcyclecanada.ca/">Upcycling Communities</FooterLink>
			<FooterLink href="https://www.albertarecycling.ca/">Hazardous Materials</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Support</FooterLink>

		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://twitter.com">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.youtube.com/">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
            
		</Column>
		</Row>
	</Container>
    <FooterLink>
            
            <h2 style={{ color: "black",
				textAlign: "center", 
                background: "#00d9ff",
                padding: "50px",
				marginBottom: "-50px" }}>
                Re-jiji @ Copyright 2021 All Rights Reserved</h2>
    </FooterLink>
	</Box>
   
);
};
export default Footer;
