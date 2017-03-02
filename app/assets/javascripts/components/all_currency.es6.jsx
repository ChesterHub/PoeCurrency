class AllCurrency extends React.Component {
        constructor(props){
        super(props)
    }

    addTD(orb, matchingInd){
        let rows = []
        let rowCounter = 0
        theOrb = this.props.currency[this.props.league][orb]
        for (let ratio in theOrb){
            if (theOrb.hasOwnProperty(ratio)) {
                if (rowCounter === matchingInd){
                    rows.push(" -1- ")
                    rowCounter++
                } else {
                    if(theOrb[ratio] === 0){
                        rows.push("Not Enough Data")
                    } else {
                        rows.push(theOrb[ratio])
                    }
                    rowCounter++
                }

            }
        }
        return rows
    }

  render () {
    return (

    	<div>
    		<h3>Currency Table</h3>
            <p>The Currency in row will give you the ratio of 1 to the Currency in the corresponding column.</p>
    		<table>
            <tbody>
    		<tr>
    			<th></th>
    			<th>Armourer's Scrap</th>
    			<th>Blackmith's Whetstone</th>
                <th>Blessed Orb</th>
    			<th>Cartographer's Chisel</th>
                <th>Chaos Orb</th>
                <th>Chromatic Orb</th>
                <th>Divine Orb</th>
                <th>Exalted Orb</th>
    			<th>Gemcutter's Prism</th>
    			<th>Glassblower's Bauble</th>
                <th>Jeweller's Orb</th>
                <th>Orb of Alchemy</th>
                <th>Orb of Alteration</th>
                <th>Orb of Augmentation</th>
                <th>Orb of Chance</th>
                <th>Orb of Fusing</th>
                <th>Orb of Regret</th>
                <th>Orb of Scouring</th>
                <th>Orb of Transmutation</th>
                <th>Portal Scroll</th>
                <th>Regal Orb</th>
                <th>Scroll of Wisdom</th>
                <th>Vaal Orb</th>
            </tr>
    		<tr>
                <th>Armourer's Scrap</th>
                {this.addTD("ArmourerScrap", 0).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th>Blacksmith's Whetstone</th>
    			{this.addTD("BlacksmithWhetstone", 1).map((ratio, index) => <td key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th>Blessed Orb</th>
                {this.addTD("BlessedOrb", 2).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th>Cartographer's Chisel</th>
    			{this.addTD("CartographerChisel", 3).map((ratio, index) => <td key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th>Chaos Orb</th>
                {this.addTD("ChaosOrb", 4).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th>Chromatic Orb</th>
                {this.addTD("ChromaticOrb", 5).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th>Divine Orb</th>
                {this.addTD("DivineOrb", 6).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th>Exalted Orb</th>
                {this.addTD("ExaltedOrb", 7).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th>Gemcutter's Prism</th>
                {this.addTD("GemcutterPrism", 8).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th>Glassblower's Bauble</th>
    			{this.addTD("GlassblowerBubble", 9).map((ratio, index) => <td key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th>Jeweller's Orb</th>
                {this.addTD("JewellerOrb", 10).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th>Orb of Alchemy</th>
                {this.addTD("OrbofAlchemy", 11).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th>Orb of Alteration</th>
                {this.addTD("OrbofAlteration", 12).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th>Orb of Augmentation</th>
                {this.addTD("OrbofAugmentation", 13).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th>Orb of Chance</th>
                {this.addTD("OrbofChance", 14).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th>Orb of Fusing</th>
                {this.addTD("OrbofFusing", 15).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th>Orb of Regret</th>
                {this.addTD("OrbofRegret", 16).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th>Orb of Scouring</th>
                {this.addTD("OrbofScouring", 17).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th>Orb of Transmutation</th>
                {this.addTD("OrbofTransmutation", 18).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th>Portal Scroll</th>
    			{this.addTD("PortalScroll", 19).map((ratio, index) => <td key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th>Regal Orb</th>
                {this.addTD("RegalOrb", 20).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th>Scroll of Wisdom</th>
    			{this.addTD("ScrollofWisdom", 21).map((ratio, index) => <td key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th>Vaal Orb</th>
                {this.addTD("VaalOrb", 22).map((ratio, index) => <td key={index}>{ratio}</td>)}
            </tr>
            </tbody>
    		</table>
    	</div>
    	);
  }
}

