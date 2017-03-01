class Currency extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			visible: false,
			league: "standard",
			currency_offer: "Chaos Orb",
			currency_receive: "",
		}
	}

    componentDidMount(event){
        // after render, function runs
        // this.setState({all: this.props.currency})
        // console.log(this.props.currency.Breach.ChaosOrb.armourer_scrap)
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

  render () {
    return (
    	<div>
        <p>{this.props.currency.Breach.ChaosOrb.armourer_scrap}</p>
    		<h3>Choose league:</h3>
    		<form value={this.state.league} onChange={this.changeLeague.bind(this)}>
    			<select>
                    <optgroup label="Current">
    				<option value="standard">Standard</option>
    				<option value="hardcore">Hardcore</option>
                    </optgroup>
                    <optgroup label="Old">
    				<option value="breach">Breach</option>
    				<option value="breach+hardcore">Hardcore Breach</option>
                    </optgroup>
    			</select>
    		</form>
    		<h3>Choose your currency:</h3>
    		<p>1 {this.state.currency_offer}, on average, will net you {this.state.amount} {this.state.currency_receive}.</p>
    		<form>
    			For 1: 
    				<select onChange={this.offerCurrency.bind(this)}>
                        <option selected="true" disabled="disabled"> -- Select Currency -- </option>
                        <optgroup label="Orbs">
    					<option value="chaos">Chaos Orb</option>
    					<option value="exalted">Exalted Orb</option>
    					<option value="blessed">Blessed Orb</option>
    					<option value="chrome">Chromatic Orb</option>
    					<option value="divine">Divine Orb</option>
    					<option value="jeweller">Jeweller's Orb</option>
    					<option value="alchemy">Orb of Alchemy</option>
    					<option value="alteration">Orb of Alteration</option>
    					<option value="augmentation">Orb of Augmentation</option>
    					<option value="chance">Orb of Chance</option>
    					<option value="fusing">Orb of Fusing</option>
    					<option value="regret">Orb of Regret</option>
    					<option value="scouring">Orb of Scouring</option>
    					<option value="transmute">Orb of Transmutation</option>
    					<option value="regal">Regal Orb</option>
    					<option value="vaal">Vaal Orb</option>
                        </optgroup>
                        <optgroup label="Other">
                        <option value="armourer">Armourer's Scrap</option>
                        <option value="blacksmith">Blackmsith's Whetstone</option>
                        <option value="cartographer">Cartographer's Chisel</option>
                        <option value="gemcutter">Gemcutter's Prism</option>
                        <option value="glassblower">Glassblower's Bauble</option>
                        <option value="portal">Portal Scroll</option>
                        <option value="wisdom">Scroll of Wisdom</option>
                        </optgroup>
    				</select>
    			  : 
    			 	<select onChange={this.receiveCurrency.bind(this)}>
                        <option selected="true" disabled="disabled"> -- Select Currency -- </option>
                        <optgroup label="Orbs">
    			 		<option value="chaos">Chaos Orb</option>
    					<option value="exalted">Exalted Orb</option>
    					<option value="blessed">Blessed Orb</option>
    					<option value="chrome">Chromatic Orb</option>
    					<option value="divine">Divine Orb</option>
    					<option value="jeweller">Jeweller's Orb</option>
    					<option value="alchemy">Orb of Alchemy</option>
    					<option value="alteration">Orb of Alteration</option>
    					<option value="augmentation">Orb of Augmentation</option>
    					<option value="chance">Orb of Chance</option>
    					<option value="fusing">Orb of Fusing</option>
    					<option value="regret">Orb of Regret</option>
    					<option value="scouring">Orb of Scouring</option>
    					<option value="transmute">Orb of Transmutation</option>
    					<option value="regal">Regal Orb</option>
    					<option value="vaal">Vaal Orb</option>
                        </optgroup>
                        <optgroup label="Other">
    					<option value="armourer">Armourer's Scrap</option>
    					<option value="blacksmith">Blackmsith's Whetstone</option>
    					<option value="cartographer">Cartographer's Chisel</option>
    					<option value="gemcutter">Gemcutter's Prism</option>
    					<option value="glassblower">Glassblower's Bauble</option>
    					<option value="portal">Portal Scroll</option>
    					<option value="wisdom">Scroll of Wisdom</option>
                        </optgroup>
    			 	</select>
    			<input type="submit" value="Search"/>
    		</form>
    	</div>
    	);
  }
}

