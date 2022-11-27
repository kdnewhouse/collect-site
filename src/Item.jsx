import React, {useState, useEffect}  from 'react';
import { ItemLabel } from './ItemLabel';


const images = importAll(require.context('./images/figureImages', false, /\.(png|jpe?g|jpg)$/));

function Item(props) {

    if(props.filter == "upcoming") {
        const date = new Date();

        var releaseDate = props.itemdata.itemrelease.substring(0, props.itemdata.itemrelease.indexOf('T'));
        releaseDate = releaseDate.split("-");

        if(date.getFullYear() > parseInt(releaseDate[0])) {
            return null;
        } else if(date.getFullYear() == parseInt(releaseDate[0])){
            if((date.getMonth()+1) >= parseInt(releaseDate[1])){
                return null;
            }
        }
    }
    
    if(props.search != "") {
        const itemName = props.itemdata.itemname.toLowerCase()
        if(!itemName.includes(props.search.toLowerCase())) {
            return null;
        }
    }
    

    return (
        <div class = "item">
            <div class = "imageWrapper">
                <label>
                    <input type="checkbox"></input>
                    <img class = "image" src={images[props.itemdata.itemjpg]} alt="test" height="223"></img>
                </label>
            </div>
            <ItemLabel itemdata = {props.itemdata} imageSrc = {props.imageSrc} dbData = {props.labelData}  class = "itemLabel"/>
        </div>
    );
}

export default Item;

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
