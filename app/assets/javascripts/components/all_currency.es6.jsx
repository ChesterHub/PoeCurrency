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
                    if(theOrb[ratio] === "Not Enough Data"){
                        rows.push("Insufficient Data")
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

    	<div className="table-section">
    		<h3>Currency Table</h3>
            <p>The Currency in row will give you the ratio of 1 to the Currency in the corresponding column.</p>
    		<table id="currency-table">
            <tbody>
    		<tr>
    			<th className="table-headers"></th>
    			<th className="table-headers">Armourer's Scrap</th>
    			<th className="table-headers">Blackmith's Whetstone</th>
                <th className="table-headers">Blessed Orb</th>
    			<th className="table-headers">Cartographer's Chisel</th>
                <th className="table-headers">Chaos Orb</th>
                <th className="table-headers">Chromatic Orb</th>
                <th className="table-headers">Divine Orb</th>
                <th className="table-headers">Exalted Orb</th>
    			<th className="table-headers">Gemcutter's Prism</th>
    			<th className="table-headers">Glassblower's Bauble</th>
                <th className="table-headers">Jeweller's Orb</th>
                <th className="table-headers">Orb of Alchemy</th>
                <th className="table-headers">Orb of Alteration</th>
                <th className="table-headers">Orb of Augmentation</th>
                <th className="table-headers">Orb of Chance</th>
                <th className="table-headers">Orb of Fusing</th>
                <th className="table-headers">Orb of Regret</th>
                <th className="table-headers">Orb of Scouring</th>
                <th className="table-headers">Orb of Transmutation</th>
                <th className="table-headers">Portal Scroll</th>
                <th className="table-headers">Regal Orb</th>
                <th className="table-headers">Scroll of Wisdom</th>
                <th className="table-headers">Vaal Orb</th>
            </tr>
    		<tr>
                <th className="table-headers">Armourer's Scrap</th>
                {this.addTD("ArmourerScrap", 0).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th className="table-headers">Blacksmith's Whetstone</th>
    			{this.addTD("BlacksmithWhetstone", 1).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th className="table-headers">Blessed Orb</th>
                {this.addTD("BlessedOrb", 2).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th className="table-headers">Cartographer's Chisel</th>
    			{this.addTD("CartographerChisel", 3).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th className="table-headers">Chaos Orb</th>
                {this.addTD("ChaosOrb", 4).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers">Chromatic Orb</th>
                {this.addTD("ChromaticOrb", 5).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers">Divine Orb</th>
                {this.addTD("DivineOrb", 6).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers">Exalted Orb</th>
                {this.addTD("ExaltedOrb", 7).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers">Gemcutter's Prism</th>
                {this.addTD("GemcutterPrism", 8).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th className="table-headers">Glassblower's Bauble</th>
    			{this.addTD("GlassblowerBubble", 9).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th className="table-headers">Jeweller's Orb</th>
                {this.addTD("JewellerOrb", 10).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers">Orb of Alchemy</th>
                {this.addTD("OrbofAlchemy", 11).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers">Orb of Alteration</th>
                {this.addTD("OrbofAlteration", 12).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers">Orb of Augmentation</th>
                {this.addTD("OrbofAugmentation", 13).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers">Orb of Chance</th>
                {this.addTD("OrbofChance", 14).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers">Orb of Fusing</th>
                {this.addTD("OrbofFusing", 15).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers">Orb of Regret</th>
                {this.addTD("OrbofRegret", 16).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers">Orb of Scouring</th>
                {this.addTD("OrbofScouring", 17).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers">Orb of Transmutation</th>
                {this.addTD("OrbofTransmutation", 18).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th className="table-headers">Portal Scroll</th>
    			{this.addTD("PortalScroll", 19).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th className="table-headers">Regal Orb</th>
                {this.addTD("RegalOrb", 20).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th className="table-headers">Scroll of Wisdom</th>
    			{this.addTD("ScrollofWisdom", 21).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th className="table-headers">Vaal Orb</th>
                {this.addTD("VaalOrb", 22).map((ratio, index) => <td className="table-values" key={index}>{ratio}</td>)}
            </tr>
            </tbody>
    		</table>
    	</div>
    	);
  }
}

