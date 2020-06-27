import React from 'react';
import { useSelector } from 'react-redux'
import TopSpace from './components/TopSpace'
import Captions from './components/Captions'
import MiddleSpace from './components/MiddleSpace'
import DNDTest from './components/DnD/DNDTest'
import './App.css'
import { Offline, Online } from "react-detect-offline";
import { Button } from "@material-ui/core"
import RefreshIcon from '@material-ui/icons/Refresh';



export default function App() {


     const darkMode = getComputedStyle(document.documentElement).getPropertyValue('--primary'); // #999999
     // Get global state from Redux. See the React Redux tutorial.
     const textSize = useSelector((state) => state.textSize)
     const numLines = useSelector((state) => state.numLines)
     const invertColors = useSelector((state) => state.invertColors)
     // Convert variables to CSS-friendly strings.
     var sizeString = textSize + 'vh'
     // Size of bottom space (text area) relative to text size and number of lines.
     // 1.5 is an estimate of the ratio of line size to text size.
     // This is a sloppy way of calculating the height. Please improve on this.

     var botHeight = 52
     // var botHeight = 56.5  if no button

     // topHeight + botHeight should always = 100vh because we don't want the full
     // page to scroll (we only want the individual areas to scroll).

     var midHeight = 32
     var topHeight = 100 - botHeight - midHeight + 'vh'
     midHeight += 'vh'
     // botHeight += 'vh'
     // botHeight += 'vh'
     var bgColor = invertColors ? 'white': 'black'
     var color = invertColors ? 'black' : 'white'



     function refreshPage() {
       window.location.reload(false);
     }

     if (bgColor == 'black') {
       return (
         <div>
           <Online>
            <div className="App-1" style={{
                 backgroundColor: 'black',
                 color: 'white'
                }}>
                 <TopSpace height={topHeight} />
                 <MiddleSpace height={midHeight} color = {bgColor}/>
                 <Captions height={botHeight} textSize={sizeString} />
            </div>
          </Online>
          <Offline>
            <div className="offline">
              <h1>
                Network error!
              </h1>
              <h1>Please check your network!</h1>
                <Button  variant="contained" startIcon={<RefreshIcon />}
                  onClick={refreshPage}>Click to reload!
                </Button>
            </div>
          </Offline>
        </div>
       )
     } else {
       return (
         <div>
         <Online>
            <div className="App-2" style={{
                 backgroundColor: 'white',
                 color: 'black'
                }}>
                 <TopSpace height={topHeight} />
                 <MiddleSpace height={midHeight} color = {bgColor}/>
                 <Captions height={botHeight} textSize={sizeString} />
                 {/* <DNDTest /> */}
            </div>
          </Online>
          <Offline>
            <div className="offline">
              <h1>
                Network error!
              </h1>
              <h1>Please check your network and refresh the page!</h1>
                <Button variant="contained" startIcon={<RefreshIcon />}
                  onClick={refreshPage}>Click to reload!
                </Button>
            </div>
          </Offline>
        </div>
       )
     }
     // You can't comment in JSX.
     // The style tag is the easiest way to set style based on JS variables.

}
