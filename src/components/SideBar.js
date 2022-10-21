import React from "react";
import "./SideBar.css";
import CloseIcon from "@mui/icons-material/Close";
import { links } from "../data/links_data";
import Accordion from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SideBar = () => {
    
  return (
    <div className="sideBar">
      <div className="upperpart">
        <div className="title">
          <h5 className="h5">Crown Security</h5>
          <CloseIcon />
        </div>
        <div className="img-div">admin name img ke neeche hoga</div>
        <div className="logout">Logout</div>
      </div>
      <div className="lowerpart">
        {links.map((item) => {
            return(
               
            <Accordion  >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                
            >
                {item.icon}
                {item.title}
                
            </AccordionSummary>
            <AccordionDetails>
            {item.links.map((link) => {
                    return(
                        <li>{link.name}</li>
                    )
                })}
            </AccordionDetails>
        </Accordion>
           
            
        )})}
      </div>
    </div>
  );
};

export default SideBar;
