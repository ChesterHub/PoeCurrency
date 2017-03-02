class AllCurrency extends React.Component {
        constructor(props){
        super(props)
        this.state = {
            league: "Standard",
            currencyName: ""


        }
    }

    addTD(orb, matchingInd){
        let rows = []
        let rowCounter = 0
        theOrb = this.props.currency[this.state.league][orb]
        for (let ratio in theOrb){
            if (theOrb.hasOwnProperty(ratio)) {
                if (rowCounter === matchingInd){
                    rows.push("-")
                    rowCounter++
                } else {
                    rows.push(theOrb[ratio])
                    rowCounter++
                }

            }
        }
        return rows
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
    			<th>Blessed Orb</th>
                {this.addTD("BlessedOrb", 0).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Chaos Orb</th>
    			{this.addTD("ChaosOrb", 1).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Chromatic Orb</th>
    			{this.addTD("ChromaticOrb", 2).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Divine Orb</th>
    			{this.addTD("DivineOrb", 3).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Exalted Orb</th>
    			{this.addTD("ExaltedOrb", 4).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Jeweller's Orb</th>
    			{this.addTD("JewellerOrb", 5).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Orb of Alchemy</th>
    			{this.addTD("OrbofAlchemy", 6).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Orb of Alteration</th>
    			{this.addTD("OrbofAlteration", 7).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Orb of Augmentation</th>
    			{this.addTD("OrbofAugmentation", 8).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Orb of Chance</th>
    			{this.addTD("OrbofChance", 9).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Orb of Fusing</th>
    			{this.addTD("OrbofFusing", 10).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Orb of Regret</th>
    			{this.addTD("OrbofRegret", 11).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Orb of Scouring</th>
    			{this.addTD("OrbofScouring", 12).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Orb of Transmutation</th>
    			{this.addTD("OrbofTransmutation", 13).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Regal Orb</th>
    			{this.addTD("RegalOrb", 14).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Vaal Orb</th>
    			{this.addTD("VaalOrb", 15).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Armourer's Scrap</th>
    			{this.addTD("ArmourerScrap", 16).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Blacksmith's Whetstone</th>
    			{this.addTD("BlacksmithWhetstone", 17).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Cartographer's Chisel</th>
    			{this.addTD("CartographerChisel", 18).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Gemcutter's Prism</th>
    			{this.addTD("GemcutterPrism", 19).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Glassblower's Bauble</th>
    			{this.addTD("GlassblowerBubble", 20).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Portal Scroll</th>
    			{this.addTD("PortalScroll", 21).map((ratio) => <td>{ratio}</td>)}
    		</tr>
    		<tr>
    			<th>Scroll of Wisdom</th>
    			{this.addTD("ScrollofWisom", 22).map((ratio) => <td>{ratio}</td>)}
    		</tr>
            </tbody>
    			
    		</table>
    	</div>
    	);
  }
}

