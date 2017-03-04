class Currency extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			visible: false,
			league: "Standard",
			currency_offer: "ChaosOrb",
			currency_receive: "ExaltedOrb",
		}
	}

    componentDidMount(event){   
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
        let ratio = this.props.currency[this.state.league][this.state.currency_offer][this.state.currency_receive]
        return ratio
    }

    textReturn(){
        let value = this.valueRatio()
        if (value === "Not Enough Data"){
            return (<p id="currency-text"> Insufficient data available in chosen league. </p>);
        } else {
            return (
                <p id="currency-text">{ `With 1 ${this.state.currency_offer}, you can buy ${value} ${this.state.currency_receive}(s).` }</p>);
        }
    }

  render () {

    // let value = this.valueRatio()

    return (
    	<div id="currency">
    		<p className="search-title">CHOOSE LEAGUE</p>
    		<form className="select-forms" value={this.state.league} onChange={this.changeLeague.bind(this)}>
    			<select className="combo-boxes">
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
    		<p className="search-title">SELECT CURRENCY</p>
    		<form className="select-forms">
    			1 : 
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
    					<option value="OrbofTransmute">Orb of Transmutation</option>
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
    			 <i className="fa fa-hand-o-right" aria-hidden="true"></i>  :  <i className="fa fa-hand-o-right" aria-hidden="true"></i> 
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
                        <option value="OrbofTransmute">Orb of Transmutation</option>
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
            <div className="text-section">
                {this.textReturn()}
                {/*<p id="currency-text-two">One {this.state.currency_receive} will net you {parseFloat((1 / value).toFixed(5))} {this.state.currency_offer}(s). </p>*/}
            </div>
            {/*<div>
                <AllCurrency currency={this.props.currency} league={this.state.league} />
            </div>*/}
    	</div>
    	);
  }
}

