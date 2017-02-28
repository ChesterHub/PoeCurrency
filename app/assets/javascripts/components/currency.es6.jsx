class Currency extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			visible: false,
			currency_offer: "Chaos Orb",
			currency_receive: "Exalted Orb",
			amount: 0.0143
		}
	}

	offerCurrency(event){
		const offer = event.target.value;
		this.setState({currency_offer: offer})
	}

	receiveCurrency(event){
	const receive = event.target.value;
	this.setState({currency_receive: receive})
	}

  render () {
    return (

    	<div>
    		<h3>Choose your currency</h3>
    		<p>1 {this.state.currency_offer}, on average, will net you {this.state.amount} {this.state.currency_receive}.</p>
    		<form>
    			Offering 1: <input onChange={this.offerCurrency.bind(this)} type='text'/>
    			 for: <input onChange={this.receiveCurrency.bind(this)} type='text'/>
    			<input type="submit" value="Search Ratio"/>
    		</form>
    		<p> {this.props.testValue} </p>
    	</div>
    	);
  }
}

