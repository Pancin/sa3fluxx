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
	
	componentDidUpdate(oldProps) {
		this.state.hand = this.state.hand.map(card => (<img src={require('' + card + '')} onClick={() => this.onClick(card)}/>));
	}

	static getDerivedStateFromProps(props, state) {
		return {
			player: props.player,
			hand: props.hand,
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