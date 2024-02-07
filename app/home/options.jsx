import React from 'react'
import './navbar.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Padding } from '@mui/icons-material';

const list = ["Insights", "Services", "Industries", "Careers", "About"];
const style = {
  "padding-right" : "5px",
  "cursor" : "pointer",
}

const style1 = {
  "cursor" : "pointer",
}

function options() {
  return (
   <>
     {
      list.map((op, key) => (
        <>
          <div className='id1' key={key}>
            <span style={style}>{op}</span>
            <KeyboardArrowDownIcon style = {style1} />
          </div>
        </>
      ))
    }
   </>
  )
}

export default options