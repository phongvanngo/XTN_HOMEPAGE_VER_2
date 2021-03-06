import React, { Fragment, Component } from 'react';
import './Home.css';
import Footer from './../Blog/Components/Footer';
import XTNCarousel from './Components/Carousel';
import BTCarousel from './Components/ReactSliderCarousel';
import Timeline from './Components/Timeline';
import GalleryCarousel from './Components/GallerySlideShow';
import Introduction from './Components/Introduction';
import BoostrapCarousel from './Components/BoostrapCarousel';
import HotFace from './Components/HotFace'
class Homepage extends Component {
	render() {
		return (
			<Fragment>
				<GalleryCarousel />
				<Introduction />
				<Timeline />
        <HotFace />
				<Footer />
			</Fragment>
		);
	}
}

export default Homepage;
