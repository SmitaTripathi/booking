
import './App.css';

import { GiCommercialAirplane } from 'react-icons/gi';
import { BsFillStarFill } from 'react-icons/bs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="frame">
          <span class="black">Ship</span>
          <span class="blue" >mate.</span>
        </div>        
      </header>
      <main className="Main-content">
      <div class="update">
            <div class="Frame">
            <div class="circle"><p class="text">1</p></div>
            <div class="h_line"></div>
            <div class="details">Search</div>
            </div>
            
            <div class="Frame">
            <div class="circle"><p class="text">2</p></div>
            <div class="h_line"></div>
            <div class="details">Recommended Services</div>
            </div>
            <div class="Frame">
            <div class="circle"><p class="text">3</p></div>
            <div class="h_line"></div>
            <div class="details">Results</div>
            </div>
            <div class="Frame">
            <div class="circle"><p class="text">4</p></div>
            <div class="details">Booking</div>
            </div>
        </div>
      </main>
      <content className="content">
        <div class="frame_67">
            <div class="frame_57">
                    <p class="bold">Booking summary</p>
                    <p class="flight">Express</p>
                    <div class="frame_55">
                              <GiCommercialAirplane style={{    position: 'absolute',left: '464px',top: '87px' }}/> 
                              <div class="h_line_black"></div>
                    </div>
                    <div class="frame_56">
                                <div class="frame_53">
                                <img class="place1" src="./place.png"></img>
                                <p class="aliign"> Shanghai
                                  20080,china
                                </p>
                                
                                </div>
                                <div class="frame_54">
                                <img class="place2" src="./place.png"></img>
                                <p class="aliign"> 
                                  Delhi, <br/>
                                  11003 India
                                </p>
                                
                                </div>
                    </div>
            </div>
              <div class="frame_63">
                    <div class="frame_58">
                        <p class="grey">Total Weight/Volume</p>
                        <img class="weight" src="./weight.png"></img>
                        <div class="dark">114.21KG</div>
                    </div>
                    <div class="frame_59">
                        <p class="side">Load</p>
                        <div class="mul">1 X</div>
                        <img class="pallet" src="./pallet.png"></img>
                        <div class="pallets" >Pallets</div>
                        <div class="num" >230 X 140 X 120 CM</div>
                      </div>
              </div>
              <div class="frame_66">
                    <div class="frame_60">
                      <p class="seller">Seller:Primetime Worldwide</p>
                      <img class="boat" src="./boat.png"></img>
                    </div>
                      <div class="frame_64">
                        <p class="insurance">Insurance:Xcover.com</p>
                        <img class="com" src="./com.png"></img>
                      </div>
              </div>
        </div>
        <div class="price_details">
                <div class="price_del"> Price details </div>
                <div class="star_del">
                    <BsFillStarFill style={{    position: 'absolute',left: '4px',top: '12px' }}/>
                    <div class="Known">Known Shipper</div>
                </div>
                <div class="pay">
                    <div class="line1">Seller's Quote</div>
                    <br/>
                    <hr/>
                    <div class="line2">Duties and taxes</div>
                    <br/>
                    
                    
                    <div class="line3">Insurance <br/>
                        <div class="small">Based on the items cost</div>
                    </div>
                    
                    <hr/>
                    
                    <div class="line4">Add a <div class="blue">promo code</div></div>
                    <div class="line5">Platform fee</div>
                    <br/>
                    <hr/>
                </div>  
                <div class="cost">
                <div class="cost1"> $ 3,659.25</div>
                <br/>
                <hr/>
                <div class="cost2">Not Included</div>
                <br/>
                <div class="cost3"><div class="small">$323.40</div></div>
                <br/>
                <hr/>
                <br/><br/>
                <div class="cost4">$119.48</div>
                <br/>
                <hr/>
                </div> 
                <div class="sum">Total:</div>
                <div class="sum_cost">$ 4,102.13</div> 
                <div class="button"><div class="white">Checkout</div></div>
        </div>

      </content>
    </div>
  );
}

export default App;
