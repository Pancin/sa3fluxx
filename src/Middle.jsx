import React from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import Axios from "./Axios";
// import deck from './media/img/deck.png';

class Middle extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			draw: "./media/img/draw1.png",
			play: "./media/img/play1.png",
			discard: props.discard,
			deck: props.deck,
			goal: props.goal,
			rules: props.rules,
			cardsN: 0,

			showDiscard: false,
			protagonist: props.protagonist,
		}
	}

	onClick = async (card) => {
        try {
			const { data } = await Axios.put('/selectedFieldCard',
							{
								player: this.protagonist,
								selectedCard: card,
							});
        } 
        catch (err) {
            // 
        }
    }

	static getDerivedStateFromProps(props, state) {
		let newState = {...props};
		newState.rules = props.rules.map((card, i) => (<img key={i} src={require('' + card + '')} onClick={() => this.onClick(card)}/>));
		let counter = 0;
		for (let i = 0; i < props.deck.length; i++) {
			counter++;
		}
		newState.cardsN = counter;
		if (props.discard.length == 0) {
			newState.discard = ["./media/img/noDiscard.png"]
		}
		return newState;
	}

	//event listener for cards that call function this.props.changeZoomCard(card)

	render() {

		return (
			<div id="middle" className="Middle">
				<div id="ddg">
					<div id="draw"><img src={require('' + this.state.draw + '')}></img></div>
					<div id="play"><img src={require('' + this.state.play + '')}></img></div>
					<div id="void"></div>
					<div id="discard"><img src={require('' + this.state.discard[0] + '')} onClick={() => this.setState({showDiscard: true})}></img></div>
					{/* <Modal 
						onClose = {() => this.setState({showDiscard: false})}
						visible = {this.state.showDiscard}> {this.state.discard && this.state.discard.map((card, i) => <img key={i} src={card}/>)} </Modal> */}
					<div id="deckimg">
						<img src={require('./media/img/deck.png')} />
						<div id="deck">{this.state.cardsN}</div>
					</div>
					<div id="void"></div>
					<div id="goal"><img src={require('' + this.state.goal + '')}></img></div>
					<div id="void"></div>
				</div>
				<div id="rules">{this.state.rules}</div>
			</div>
		);
	}
}


export default Middle;