class AllCurrency extends React.Component {
        constructor(props){
        super(props)
        this.state = {
            league: "Breach",
            currencyName: "",


        }
    }

    addTD(orb){
        theOrb = this.props.currency[this.state.league][orb]
        for (let ratio in theOrb){
            if (theOrb.hasOwnProperty(ratio)) {
                ReactDOM.renderToString(theOrb[ratio])
            }
        }
    }
  


  render () {
    return (

    	<div>
    		<h3>General Currency Table</h3>
    		<table>
            <tbody>
    		<tr>
    			<th></th>
    			<th>Blessed Orb</th>
    			<th>Chaos Orb</th>
    			<th>Chromatic Orb</th>
    			<th>Divine Orb</th>
    			<th>Exalted Orb</th>
    			<th>Jeweller's Orb</th>
    			<th>Orb of Alchemy</th>
    			<th>Orb of Alteration</th>
    			<th>Orb of Augmentation</th>
    			<th>Orb of Chance</th>
    			<th>Orb of Fusing</th>
    			<th>Orb of Regret</th>
    			<th>Orb of Scouring</th>
    			<th>Orb of Transmutation</th>
    			<th>Regal Orb</th>
    			<th>Vaal Orb</th>
    			<th>Armourer's Scrap</th>
    			<th>Blackmith's Whetstone</th>
    			<th>Cartographer's Chisel</th>
    			<th>Gemcutter's Prism</th>
    			<th>Glassblower's Bauble</th>
    			<th>Portal Scroll</th>
    			<th>Scroll of Wisdom</th>
    		</tr>
    		<tr>
    			<th id="blessed">Blessed Orb</th>
                {this.addTD("BlessedOrb")}

    		</tr>
    		<tr>
    			<th>Chaos Orb</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Chromatic Orb</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Divine Orb</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Exalted Orb</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Jeweller's Orb</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Orb of Alchemy</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Orb of Alteration</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Orb of Augmentation</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Orb of Chance</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Orb of Fusing</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Orb of Regret</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Orb of Scouring</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Orb of Transmutation</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Regal Orb</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Vaal Orb</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Armourer's Scrap</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Blacksmith's Whetstone</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Cartographer's Chisel</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Gemcutter's Prism</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Glassblower's Bauble</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Portal Scroll</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
    		<tr>
    			<th>Scroll of Wisdom</th>
    			<td>Blessed Orb</td>
    			<td>Chaos Orb</td>
    			<td>Chromatic Orb</td>
    			<td>Divine Orb</td>
    			<td>Exalted Orb</td>
    			<td>Jeweller's Orb</td>
    			<td>Orb of Alchemy</td>
    			<td>Orb of Alteration</td>
    			<td>Orb of Augmentation</td>
    			<td>Orb of Chance</td>
    			<td>Orb of Fusing</td>
    			<td>Orb of Regret</td>
    			<td>Orb of Scouring</td>
    			<td>Orb of Transmutation</td>
    			<td>Regal Orb</td>
    			<td>Vaal Orb</td>
    			<td>Armourer's Scrap</td>
    			<td>Blackmitd's Whetstone</td>
    			<td>Cartographer's Chisel</td>
    			<td>Gemcutter's Prism</td>
    			<td>Glassblower's Bauble</td>
    			<td>Portal Scroll</td>
    			<td>Scroll of Wisdom</td>
    		</tr>
            </tbody>
    			
    		</table>
    	</div>
    	);
  }
}

