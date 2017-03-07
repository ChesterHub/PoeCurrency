class Currency extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			league: false,
			currency_offer: false,
			currency_receive: false
		}
	}

    componentDidMount(event){   
    // Get the components DOM node
    let elem = ReactDOM.findDOMNode(this);
    // // Set the opacity of the element to 0
    // elem.style.opacity = 0;
    // // window.requestAnimationFrame(function() {
    //     // Now set a transition on the opacity
    //     elem.style.transition = "opacity 250ms";
    //     // and set the opacity to 1
    //     elem.style.opacity = 1;
    // });
    }

	offerCurrency(event){
		const offer = event.target.value;
		this.setState({currency_offer: offer})
	}

	receiveCurrency(event){
	const receive = event.target.value;
	this.setState({currency_receive: receive})
	}

    changeLeague(event){
        const change = event.target.value;
        this.setState({league: change})
    }

    valueRatio(){
        if (this.state.league === false || this.state.currency_offer === false || this.state.currency_receive === false) {
            return false
        } else {
        let ratio = this.props.currency[this.state.league][this.state.currency_offer][this.state.currency_receive]
        // return String(parseFloat(ratio).toFixed(3))
        return ratio
        }
    }

    textReturn(){
        let value = this.valueRatio()
        if (value === "Not Enough Data"){
            return (<p id="currency-text" className="fadeinfast"> Insufficient data available in league to determine ratio. </p>);
        }
        else if (value ===  false) {
        } 
        else if (this.state.currency_offer === this.state.currency_receive) {
            return (
                <div className="image-ratios fadeinfast">
                <p id="currency-text">{ `With 1 `}<span>{`${this.state.currency_offer}`}</span>{`, you can purchase`} {`1`}<span>{` ${this.state.currency_receive}` }</span>{`...`}</p>
                </div>
                );
        } else {
            return (
                <div className ="image-ratios fadeinfast">
                    <p>
                     <span id="one">1</span>  
                     <img className="images" src={"currency/" + this.state.currency_offer + ".png"}/>
                     <i className="fa fa-exchange" aria-hidden="true"></i>
                     <img className="images" src={"currency/" + this.state.currency_receive + ".png"}/>
                        {value}
                    </p>
                <p id="currency-text">{ `With 1 `}<span>{`${this.state.currency_offer}`}</span>{`, you can purchase`} {`${value}`}<span>{` ${this.state.currency_receive}s` }</span>{`.`}</p>
                </div>
                );
        }
    }

  render () {

    // let value = this.valueRatio()

    return (
    	<div id="currency">
    		<p id="league-title" className="fadeinfast">-LEAGUE-</p>
    		<form className="select-forms-first fadeinfast" value={this.state.league} onChange={this.changeLeague.bind(this)}>
    			<select className="combo-boxes">
                    <option selected="true" disabled="disabled"> -- Select League -- </option>
                    <optgroup label="Current">
    				<option value="Standard">Standard</option>
    				<option value="Hardcore">Hardcore</option>
                    <option value="Legacy">Legacy</option>
                    <option value="Hardcore+Legacy">Hardcore Legacy</option>
                    </optgroup>
                    <optgroup label="Old">
    				<option value="Breach">Breach</option>
    				<option value="Hardcore+Breach">Hardcore Breach</option>
                    </optgroup>
    			</select>
    		</form>
    		<p id="ratio-title" className="fadeinslow">-CURRENCY RATIO-</p>
    		<form className="select-forms-second fadeinslow">
    				<select className="combo-boxes" onChange={this.offerCurrency.bind(this)}>
                        <option selected="true" disabled="disabled"> -- Select Currency -- </option>
                        <optgroup label="Orbs">
    					<option value="ChaosOrb">Chaos Orb</option>
    					<option value="ExaltedOrb">Exalted Orb</option>
    					<option value="BlessedOrb">Blessed Orb</option>
    					<option value="ChromaticOrb">Chromatic Orb</option>
    					<option value="DivineOrb">Divine Orb</option>
    					<option value="JewellerOrb">Jeweller's Orb</option>
    					<option value="OrbofAlchemy">Orb of Alchemy</option>
    					<option value="OrbofAlteration">Orb of Alteration</option>
    					<option value="OrbofAugmentation">Orb of Augmentation</option>
    					<option value="OrbofChance">Orb of Chance</option>
    					<option value="OrbofFusing">Orb of Fusing</option>
    					<option value="OrbofRegret">Orb of Regret</option>
    					<option value="OrbofScouring">Orb of Scouring</option>
    					<option value="OrbofTransmutation">Orb of Transmutation</option>
    					<option value="RegalOrb">Regal Orb</option>
    					<option value="VaalOrb">Vaal Orb</option>
                        </optgroup>
                        <optgroup label="Other">
                        <option value="ArmourerScrap">Armourer's Scrap</option>
                        <option value="BlacksmithWhetstone">Blackmsith's Whetstone</option>
                        <option value="CartographerChisel">Cartographer's Chisel</option>
                        <option value="GemcutterPrism">Gemcutter's Prism</option>
                        <option value="GlassblowerBubble">Glassblower's Bauble</option>
                        <option value="PortalScroll">Portal Scroll</option>
                        <option value="ScrollofWisdom">Scroll of Wisdom</option>
                        </optgroup>
    				</select>
   
                      <i className="icons fa fa-money money" aria-hidden="true"></i>
                      <i className="icons fa fa-angle-double-right" aria-hidden="true"></i>         
                      <i className="icons fa fa-tags money" aria-hidden="true"></i>     

    			 	<select className="combo-boxes" onChange={this.receiveCurrency.bind(this)}>
                        <option selected="true" disabled="disabled"> -- Select Currency -- </option>
                        <optgroup label="Orbs">
    			 		<option value="ChaosOrb">Chaos Orb</option>
                        <option value="ExaltedOrb">Exalted Orb</option>
                        <option value="BlessedOrb">Blessed Orb</option>
                        <option value="ChromaticOrb">Chromatic Orb</option>
                        <option value="DivineOrb">Divine Orb</option>
                        <option value="JewellerOrb">Jeweller's Orb</option>
                        <option value="OrbofAlchemy">Orb of Alchemy</option>
                        <option value="OrbofAlteration">Orb of Alteration</option>
                        <option value="OrbofAugmentation">Orb of Augmentation</option>
                        <option value="OrbofChance">Orb of Chance</option>
                        <option value="OrbofFusing">Orb of Fusing</option>
                        <option value="OrbofRegret">Orb of Regret</option>
                        <option value="OrbofScouring">Orb of Scouring</option>
                        <option value="OrbofTransmutation">Orb of Transmutation</option>
                        <option value="RegalOrb">Regal Orb</option>
                        <option value="VaalOrb">Vaal Orb</option>
                        </optgroup>
                        <optgroup label="Other">
    					<option value="ArmourerScrap">Armourer's Scrap</option>
                        <option value="BlacksmithWhetstone">Blackmsith's Whetstone</option>
                        <option value="CartographerChisel">Cartographer's Chisel</option>
                        <option value="GemcutterPrism">Gemcutter's Prism</option>
                        <option value="GlassblowerBubble">Glassblower's Bauble</option>
                        <option value="PortalScroll">Portal Scroll</option>
                        <option value="ScrollofWisdom">Scroll of Wisdom</option>
                        </optgroup>
    			 	</select>
    		</form>
                {this.textReturn()}
            {/*<div>
                <AllCurrency currency={this.props.currency} league={this.state.league} />
            </div>*/}
    	</div>
    	);
  }
}

