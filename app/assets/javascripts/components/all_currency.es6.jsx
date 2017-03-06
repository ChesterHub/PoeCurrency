class AllCurrency extends React.Component {
        constructor(props){
        super(props)
        this.state = {
            league: "Standard"
        }
    }

    changeLeague(event){
        const change = event.target.value;
        this.setState({league: change})
    }

    addTD(orb, matchingInd){
        let rows = []
        let rowCounter = 0
        theOrb = this.props.currency[this.state.league][orb]
        for (let ratio in theOrb){
            if (theOrb.hasOwnProperty(ratio)) {
                if (rowCounter === matchingInd){
                    rows.push(" 1 ")
                    rowCounter++
                } else {
                    if(theOrb[ratio] === "Not Enough Data"){
                        rows.push("ND")
                    } else {
                        rows.push(theOrb[ratio].toFixed(3))
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
    		<h3 id="table-title-one">-Currency Table-</h3>
            <p>
                Row<i className="icons fa fa-money money" aria-hidden="true"></i>
                <i className="icons fa fa-angle-double-right" aria-hidden="true"></i>
                <i className="icons fa fa-tags money" aria-hidden="true"></i>Column</p>
                <p>ND = Not enough data in chosen league</p>  
            <p id="table-title-two">-LEAGUE-</p>
            <form className="table-form" value={this.state.league} onChange={this.changeLeague.bind(this)}>
                <select id="combo-boxes-table">
                        <option disabled="disabled"> -- Select League -- </option>
                    <optgroup label="Current">
                        <option selected="true" value="Standard">Standard</option>
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
    		<table id="currency-table" className="fadeinfast">
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
            <tbody>
    		<tr>
    			<th className="table-headers"><i className="money fa fa-money" aria-hidden="true"></i></th>
    			<th className="table-headers"><img src={"currency/ArmourerScrap.png"}/></th>
    			<th className="table-headers"><img src={"currency/BlacksmithWhetstone.png"}/></th>
                <th className="table-headers"><img src={"currency/BlessedOrb.png"}/></th>
    			<th className="table-headers"><img src={"currency/CartographerChisel.png"}/></th>
                <th className="table-headers"><img src={"currency/ChaosOrb.png"}/></th>
                <th className="table-headers"><img src={"currency/ChromaticOrb.png"}/></th>
                <th className="table-headers"><img src={"currency/DivineOrb.png"}/></th>
                <th className="table-headers"><img src={"currency/ExaltedOrb.png"}/></th>
    			<th className="table-headers"><img src={"currency/GemcutterPrism.png"}/></th>
    			<th className="table-headers"><img src={"currency/GlassblowerBubble.png"}/></th>
                <th className="table-headers"><img src={"currency/JewellerOrb.png"}/></th>
                <th className="table-headers"><img src={"currency/OrbofAlchemy.png"}/></th>
                <th className="table-headers"><img src={"currency/OrbofAlteration.png"}/></th>
                <th className="table-headers"><img src={"currency/OrbofAugmentation.png"}/></th>
                <th className="table-headers"><img src={"currency/OrbofChance.png"}/></th>
                <th className="table-headers"><img src={"currency/OrbofFusing.png"}/></th>
                <th className="table-headers"><img src={"currency/OrbofRegret.png"}/></th>
                <th className="table-headers"><img src={"currency/OrbofScouring.png"}/></th>
                <th className="table-headers"><img src={"currency/OrbofTransmutation.png"}/></th>
                <th className="table-headers"><img src={"currency/PortalScroll.png"}/></th>
                <th className="table-headers"><img src={"currency/RegalOrb.png"}/></th>
                <th className="table-headers"><img src={"currency/ScrollofWisdom.png"}/></th>
                <th className="table-headers"><img src={"currency/VaalOrb.png"}/></th>
            </tr>
    		<tr>
                <th className="table-headers-column">Armourer's</th>
                {this.addTD("ArmourerScrap", 0).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th className="table-headers-column">Whetstone</th>
    			{this.addTD("BlacksmithWhetstone", 1).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th className="table-headers-column">Blessed</th>
                {this.addTD("BlessedOrb", 2).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th className="table-headers-column">Cart's Chisel</th>
    			{this.addTD("CartographerChisel", 3).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th className="table-headers-column">Chaos</th>
                {this.addTD("ChaosOrb", 4).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers-column">Chromatic</th>
                {this.addTD("ChromaticOrb", 5).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers-column">Divine</th>
                {this.addTD("DivineOrb", 6).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers-column">Exalted</th>
                {this.addTD("ExaltedOrb", 7).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers-column">Gem Prism</th>
                {this.addTD("GemcutterPrism", 8).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th className="table-headers-column">Glass Bauble</th>
    			{this.addTD("GlassblowerBubble", 9).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th className="table-headers-column">Jeweller's</th>
                {this.addTD("JewellerOrb", 10).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers-column">Alchemy</th>
                {this.addTD("OrbofAlchemy", 11).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers-column">Alteration</th>
                {this.addTD("OrbofAlteration", 12).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers-column">Augmentation</th>
                {this.addTD("OrbofAugmentation", 13).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers-column">Chance</th>
                {this.addTD("OrbofChance", 14).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers-column">Fusing</th>
                {this.addTD("OrbofFusing", 15).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers-column">Regret</th>
                {this.addTD("OrbofRegret", 16).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers-column">Scouring</th>
                {this.addTD("OrbofScouring", 17).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
            <tr>
                <th className="table-headers-column">Transmutation</th>
                {this.addTD("OrbofTransmutation", 18).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th className="table-headers-column">Portal Scroll</th>
    			{this.addTD("PortalScroll", 19).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th className="table-headers-column">Regal</th>
                {this.addTD("RegalOrb", 20).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
    		<tr>
    			<th className="table-headers-column">Wisdom</th>
    			{this.addTD("ScrollofWisdom", 21).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
    		</tr>
            <tr>
                <th className="table-headers-column">Vaal</th>
                {this.addTD("VaalOrb", 22).map((ratio, index) => <td className="table-values animation-hover" key={index}>{ratio}</td>)}
            </tr>
            </tbody>
    		</table>
    	</div>
    	);
  }
}

