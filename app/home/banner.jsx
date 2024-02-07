import React from 'react'
import './banner.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function banner() {
    return (
        <div id='banner-body'>
            <div id='bold-text'>
                <div id='bold-text-content-1' >
                    REINVENT WHAT YOUR
                </div>
                <div id='bold-text-content-2'>
                    BUSINESS COULD BE
                </div>
            </div>
            <div id='small-text'>
                <span
                    id='small-text-content'
                    style={{
                        "font-size": "28px",
                        "font-weight": "600",
                        "margin-right": "25px",
                        "margin-left": "540px",
                        "cursor": "pointer",
                    }}
                >Let there be change</span>
                <div id='custon-arrow'>
                    <KeyboardArrowRightIcon style={{"font-size":"30px"}}/>
                </div>
                <div id='helper-div'
                    style={{
                        // "border":'1px solid yellow',
                        'width':'100%',
                        'height':'5%',
                        'position':'absolute',
                        'top':'58.4%',
                        'zIndex':'2',
                        'background':'black'
                    }}
                >

                </div>
            </div>
        </div>
    )
}

export default banner