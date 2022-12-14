/* Action figure Database
 * Author: Kaelin Newhouse
 * Last Modified: 11/28/2022
*/

import React, {useState, useEffect} from 'react';
import Item from './Item'
import './index.css'

function Page() {
    const [sort, setSort] = useState('sortMedia')
    const [filter, setFilter] = useState('select') 
    const [searchString, setSearchString]= useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        //Change the order of the query based on the sort selection
        switch(sort) {
            case "sortMedia":
                sortMedia().then(res => {
                    setData(res)
                });
                break;
            case "sortRelease":
                sortRelease().then(res => {
                    setData(res)
                });
                break;
            case "sortRetailer":
                sortRetailer().then(res => {
                    setData(res)
                });
                break;
            case "sortSeries":
                sortSeries().then(res => {
                    setData(res)
                });
                break;
        }
    }, [sort, filter, searchString]);

    //Map though database results to create array of Item elements
    var itemArr = data.map(item => (
        <Item itemdata = {item} imageSrc = {"src"} filter={filter} search={searchString}/>
    )) 

    return(
        <div class='page' id="home">
        <header class="homeHeader">
            <h1 class="title">Black Series Master List</h1>
            <div class="headerElement" id="sort">
                <p id="sortLabel">Sort</p>
                <select id="sortOptions" onChange={ () =>{setSort(document.getElementById("sortOptions").value)} }>
                    <option value="sortMedia">Media</option>
                    <option value="sortRelease">Release Date</option>
                    <option value="sortSeries">Series</option>
                    <option value="sortRetailer">Retailer</option>
                </select>
            </div>
            <div class="headerElement" id="sort">
                <p id="filterLabel">Filter</p>
                <select id="filterOptions" onChange={ () =>{setFilter(document.getElementById("filterOptions").value)} }>
                    <option value="null">All</option>
                    <option value="upcoming">Upcoming</option>
                </select>
            </div>
            <div class="headerElement" id="sort"> 
                <p id="searchLabel">Search</p>
                <textarea id="itemSearch" defaultValue={""} onChange={ () => {setSearchString(document.getElementById("itemSearch").value)} }></textarea>
            </div>
        </header>
        <div id="items">
            {itemArr}
        </div>
    </div>
    );
};

export default Page;

//async Functions
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

//Database query functions
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
