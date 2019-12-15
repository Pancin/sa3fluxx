import React from 'react';
import Axios from "./Axios";

class Hand extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			player: props.player,
			hand: [],
			onClick: this.onClick,
		}
	}

	onClick = async (card) => {
        try {
			console.log("Call server");
			const { data } = await Axios.post('/selectedHandCard',
							{
								player: this.state.player.name,
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
			hand: props.hand.map(card => (<img src={require('' + card + '')} onClick={() => state.onClick(card)}/>)),
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