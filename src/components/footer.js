import "./footer.css";
const Footer=()=>{
    return( 
<div className="footer">
    
<footer>
<div>
<div id="footer" className="member-card"  data-aos="zoom-in-down" data-aos-offset="100" data-aos-delay="300">
	

	<img src="img/member.png"/>
	<p>
 			From Rajasthan,doing gym is good for healthy life. it npm starhelps our body to fit. it release stress from our mind.From Rajasthan,doing gym is good for healthy life. it helps our body to fit. it release stress from our mind.
	</p>
	<h2>* Maria Sharapova</h2>

	<img src="img/icon1.png" width="100"/>
	<img src="img/icon2.png" width="100"/>
	<img src="img/icon3.png" width="100"/>
	<img src="img/icon4.png" width="100"/>
</div>
<div className="m-images"  data-aos="zoom-in" data-aos-offset="100" data-aos-delay="300">
	<img src="img/s1.jpg"/>
	<img src="img/s2.jpg"/>
	<img src="img/s3.jpg"/>
	<img src="img/s4.jpg"/>
	<img src="img/s5.jpg"/>
	<img src="img/s6.jpg"/>
	

</div>
</div>
	<div className="newsletter">
		<div data-aos="fade-up" data-aos-offset="200">
			<h2>Subscribe our newsletter</h2>
			<p>Where a team of non-cynics who truly care for our work.</p>
		</div>
		<div className="n-text" data-aos="fade-up-right" data-aos-offset="200">
			<label>
				<input type="text" name="" placeholder="Enter your email"/>
				<button>Subscribe</button>

			</label>
		</div>
	</div>	


	<div className="f-contact" data-aos="zoom-in-up" data-aos-offset="200">
		<div>
			<h1>Information</h1>
			<p>Lorem ipsum dolor sit amet, consectetur elit. Nihil sit dicta.</p>
			
			<i className="fa fa-whatsapp"></i>
			<i className="fa fa-instagram"></i>
			
			<i className="fa fa-telegram"></i>
			<i className="fa fa-twitter"></i>
		</div>


		<div>
			<h1>Useful links</h1>
			<p>About us</p>
			<p>Gallery</p>
			<p>Blog posts</p>
			<p>Pricing plans</p>

		</div>

		<div>
			<h1>Details</h1>
			<p>Photographers</p>
			<p>Gallery</p>
			<p>About</p>
			<p>Pricing plans</p>

		</div>

		<div>
			<h1>Help & Support</h1>
			<p>Privacy policy</p>
			<p>Term & conditions</p>
			<p>Technical support</p>
			<p>Customer care</p>

		</div>
	</div>
</footer>
</div>

    )
}
export default Footer;