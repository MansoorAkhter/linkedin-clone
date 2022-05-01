import { FiberManualRecord, InfoRounded } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
return(
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecord/>
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>)
  };

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoRounded />
      </div>
      {newsArticle("Mansoor Akhter", "coding my passion")}
      {newsArticle("Saqiib hussain", "Never give up")}
      {newsArticle("Inno Sufiyan", "coding my orhna bichona")}
      {newsArticle("Bitcoin Reacord Breaks $25K", "Crypto-1,0000 reader")}
      {newsArticle("Eid Ka Chand", "Pakistan mein chand nazar nahi aya")}
      {newsArticle("Development jobs opening", "5000 jobs opening in IT")}
    </div>
  );
};

export default Widgets;
