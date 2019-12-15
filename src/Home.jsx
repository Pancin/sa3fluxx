import React from 'react';
import './style/index.css';

class Home extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll (event) {
        let scrolled = window.pageYOffset;
    
        let box_one = document.querySelector('.indexBoxOne');
        box_one.style.opacity = 1 - 1.3 * scrolled / window.innerHeight;
    
        let box_two = document.querySelector('.indexBoxTwo');
        box_two.style.opacity = 0 + 1.3 * scrolled / window.innerHeight;
    }

    

    render() {
        return (
            <React.Fragment>
                <div className="bg">
                <div className="firstBackground">
                    <div className="indexBoxOne">
                        <div className="indexBoxOneText"><span>Scroll to start ↓</span></div>
                    </div>
                </div>

                <div className="secondBackground">
                    <div className="indexBoxTwo">
                        <a href="./info">Info</a>
                        <a href="./connect">Play</a>
                    </div>
                </div>
                </div>

            </React.Fragment>
        )

    }
}

export default Home;