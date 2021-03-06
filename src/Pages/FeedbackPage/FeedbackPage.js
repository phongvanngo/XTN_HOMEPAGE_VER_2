import React, { Component } from 'react';
import Footer from './../Blog/Components/Footer';
import Title from './Components/Title';
import Feedback from './Components/Feedback';
import ModalSuccess from './Components/ModalSuccess';

class FeedbackPage extends Component {
	render() {
		return (
			<div>
				<Title />
				<Feedback />
				<Footer />
				<ModalSuccess />
			</div>
		);
	}
}

export default FeedbackPage;
