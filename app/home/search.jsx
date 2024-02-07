import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function search () {
    return (
        <>
            <SearchIcon 
                style={{
                    "color":"white",
                    "margin-left":"140px",
                    "margin-right":"30px",
                    "font-size":"25",
                    "font-weight":"500"
                    }} />
            <LanguageIcon 
                style={{
                    "color":"white", 
                    "font-size":"22",
                    "margin-right":"5px"
                    }} />
            <span style={{"color":"white", "font-weight":"500"}}>USA</span>
            <KeyboardArrowDownIcon style={{"color":"white", "font-size":"18",}}/>
        </>
    )
}

export default search