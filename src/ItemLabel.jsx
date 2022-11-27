import React from 'react';

export const ItemLabel = (props) => {
    var date = props.itemdata.itemrelease.substring(0, props.itemdata.itemrelease.indexOf('T'));
    date = date.split("-")
    var month = ""

    switch(date[1])
    {
      case "01":
        month="January";
        break;
      case "02":
        month="February";
        break;
      case "03":
        month="March";
        break;
      case "04":
        month="April";
        break;
      case "05":
        month="May";
        break;
      case "06":
        month="June";
        break;
      case "07":
        month="July";
        break;
      case "08":
        month="August";
        break;
      case "09":
        month="September";
        break;
      case "10":
        month="October";
        break;
      case "11":
        month="November";
        break;
      case "12":
        month="December";
        break;
      default:
        month="Invalid month";
    }

    var formatedDate = month + " " + date[0]

    return(
        <div class = "label">
            <p class="labelComponent" id="itemName">{props.itemdata.itemname}</p>
            <p class="labelComponent" id="itemSeriesNumber">{props.itemdata.itemseriesnumber} -</p>
            <p class="labelComponent" id="itemMedia">{props.itemdata.itemmedia}</p>
            <p class="labelComponent" id="itemRelease">{formatedDate}</p>            
            <p class="labelComponent" id="itemRetailer">{props.itemdata.itemretailer}</p>
        </div>
    );
}


