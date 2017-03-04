class Currency extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			visible: false,
			league: "Standard",
			currency_offer: "ChaosOrb",
			currency_receive: "exalted_orb",
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

  render () {

    let value = this.valueRatio()

    return (
    	<div id="currency">
    		<p className="search-title">Choose league:</p>
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
    		<p className="search-title">Choose your currency:</p>
    		<form className="select-forms">
    			For One: 
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
    			 		<option value="chaos_orb">Chaos Orb</option>
    					<option value="exalted_orb">Exalted Orb</option>
    					<option value="blessed_orb">Blessed Orb</option>
    					<option value="chromatic_orb">Chromatic Orb</option>
    					<option value="divine_orb">Divine Orb</option>
    					<option value="jeweller_orb">Jeweller's Orb</option>
    					<option value="orbof_alchemy">Orb of Alchemy</option>
    					<option value="orbof_alteration">Orb of Alteration</option>
    					<option value="orbof_augmentation">Orb of Augmentation</option>
    					<option value="orbof_chance">Orb of Chance</option>
    					<option value="orbof_fusing">Orb of Fusing</option>
    					<option value="orbof_regret">Orb of Regret</option>
    					<option value="orbof_scouring">Orb of Scouring</option>
    					<option value="orbof_transmute">Orb of Transmutation</option>
    					<option value="regal_orb">Regal Orb</option>
    					<option value="vaal_orb">Vaal Orb</option>
                        </optgroup>
                        <optgroup label="Other">
    					<option value="armourer_scrap">Armourer's Scrap</option>
    					<option value="blacksmith_whetstone">Blackmsith's Whetstone</option>
    					<option value="cartographer_chisel">Cartographer's Chisel</option>
    					<option value="gemcutter_prism">Gemcutter's Prism</option>
    					<option value="glassblower_bubble">Glassblower's Bauble</option>
    					<option value="portal_scroll">Portal Scroll</option>
    					<option value="scrollof_wisdom">Scroll of Wisdom</option>
                        </optgroup>
    			 	</select>
    		</form>
            <div className="text-section">
                <p id="currency-text">One {this.state.currency_offer}, on average, will net you {value} {this.state.currency_receive}(s).</p>
                OR
                <p id="currency-text-two">One {this.state.currency_receive} will net you {1 / value} {this.state.currency_offer}(s). </p>
            </div>
            {/*<div>
                <AllCurrency currency={this.props.currency} league={this.state.league} />
            </div>*/}
    	</div>
    	);
  }
}

