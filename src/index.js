//cd C:\Users\kaeli\Documents\Dev\React\collect-site

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { Item } from './Item'
import './index.css'
import { ImgZoom } from './ImgZoom';

const images = importAll(require.context('./images/figureImages', false, /\.(png|jpe?g|jpg)$/));

class Page extends React.Component {
    constructor(){
        super();
        this.state = {query: "sortMedia"}
    }

    componentDidMount() {
        createItemComponents().then(res => {
            var items = document.getElementById("items").getElementsByClassName("label")
            for(var i =0; i < items.length; i++) {
                formatPage(res, i);
            }
        })
    }

    componentDidUpdate() {
        switch(this.state.query) {
            case "sortMedia":
                sortMedia().then(res => {
                    formatPage(res);
                })
                break;
            case "sortRelease":
                sortRelease().then(res => {
                    formatPage(res);
                })
                break;
            case "sortRetailer":
                sortRetailer().then(res => {
                    formatPage(res);
                })
                break;
            case "sortSeries":
                sortSeries().then(res => {
                    formatPage(res);
                })
                break;
        }
    }

    sortChanged = () => {
        var sort = document.getElementById("sortOptions").value
        this.setState({query: sort})
    }

    render() {
        var itemArr = Object.values(images).map(src => (
            <Item imageSrc = {"src"} labelData = {"labelData"} />
        ))

        return (
            <div class='page' id="home">
                <h1 class="homeHeader">Black Series Master List</h1>
                <select id="sortOptions" onChange={this.sortChanged}>
                    <option value="">Sort By:</option>
                    <option value="sortMedia">Media</option>
                    <option value="sortRelease">Release Date</option>
                    <option value="sortSeries">Series</option>
                    <option value="sortRetailer">Retailer</option>
                </select>
                <div id="items">
                    {itemArr}
                </div>
            </div>
        );
    }
    
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);

//async Functions
async function createItemComponents() {
    var x = await getItems();
    return x
}

async function sortMedia() {
    var x = await getItemsSortMedia();
    return x
}

async function sortRetailer() {
    var x = await getItemsSortRetailer();
    return x
}

async function sortRelease() {
    var x = await getItemsSortRelease();
    return x
}

async function sortSeries() {
    var x = await getItemsSortSeries();
    return x
}

//Functions
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const getItems = async () => {
    try {
      const response = await fetch('http://localhost:3001/items', {mode:'cors'})
      const data = await response.json()
      return data
    }
    catch (e) {
      console.log(e)
    }
}

const getItemsSortMedia = async () => {
    try {
      const response = await fetch('http://localhost:3001/itemsSortMedia', {mode:'cors'})
      const data = await response.json()
      return data
    }
    catch (e) {
      console.log(e)
    }
}

const getItemsSortRetailer = async () => {
    try {
      const response = await fetch('http://localhost:3001/itemsSortRetailer', {mode:'cors'})
      const data = await response.json()
      return data
    }
    catch (e) {
      console.log(e)
    }
}

const getItemsSortRelease = async () => {
    try {
      const response = await fetch('http://localhost:3001/itemsSortRelease', {mode:'cors'})
      const data = await response.json()
      return data
    }
    catch (e) {
      console.log(e)
    }
}

const getItemsSortSeries = async () => {
    try {
      const response = await fetch('http://localhost:3001/itemsSortSeries', {mode:'cors'})
      const data = await response.json()
      return data
    }
    catch (e) {
      console.log(e)
    }
}

function formatPage(res) {
    var items = document.getElementById("items").getElementsByClassName("label")
    console.log("here")
    for(var i =0; i < items.length; i++) {
        document.getElementById("items")
        .getElementsByClassName("label")[i]
        .children[2].innerHTML = res[i].itemmedia
    
        document.getElementById("items")
        .getElementsByClassName("label")[i]
        .children[1].innerHTML = res[i].itemseriesnumber + "-"
    
        document.getElementById("items")
        .getElementsByClassName("image")[i]
        .src = "http://localhost:3000" + images[res[i].itemjpg]
    
        var name = formatName(images[res[i].itemjpg])
        document.getElementById("items")
        .getElementsByClassName("label")[i]
        .children[0].innerHTML = name   

        
        var date = res[i].itemrelease.substring(0, res[i].itemrelease.indexOf('T'));
        document.getElementById("items")
        .getElementsByClassName("label")[i]
        .children[3].innerHTML = date

        document.getElementById("items")
        .getElementsByClassName("label")[i]
        .children[4].innerHTML = res[i].itemretailer
    }
}

function formatName(name) {
    name = name.replace("/static/media/", "");
    name = name.substring(0, name.indexOf('.'));
    name = name.replace(/-/g, ' ');
    

    //Split words into array
    var words = name.split(" ")

    //Uppercase each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    //Join words together
    name = words.join(" ")

    return name;
}
