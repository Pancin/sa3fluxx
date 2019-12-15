import React from 'react';
import Axios from "./Axios";

class Hand extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			player: props.player,
			hand: [],
		}
		// this.onClick = this.onClick.bind(this);
	}

	onClick = async (card) => {
        try {
			const { data } = await Axios.put('/selectedHandCard',
							{
								player: this.player.name,
								selectedCard: card,
							});
        } 
        catch (err) {
            // 
        }
    }

	static getDerivedStateFromProps(props, state) {
		return {
			player: props.player,
			hand: props.hand.map(card => (<img src={card} onClick={() => this.onClick(card)}/>)),
		};
	}

	render() {

		return (
            <div className="Hand" id="hand">
                {/* <div id="bLeft"><img src="../media/img/leftArrow.png" className="arrow"></img></div> */}
                <div id="handCards">{this.state.hand}</div>
                {/* <div id="bRight"><img src="../media/img/rightArrow.png" className="arrow"></img></div> */}
            </div> 
		);
	}
}


export default Hand;