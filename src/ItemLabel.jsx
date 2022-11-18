import React from 'react';

export const ItemLabel = (props) => {

    //console.log(props.dbData);

    return(
        <div class = "label">
            <p class="labelComponent" id="itemName">name</p>
            <p class="labelComponent" id="itemSeriesNumber">00</p>
            <p class="labelComponent" id="itemMedia">Media</p>
            <p class="labelComponent" id="itemRelease">Release</p>            
            <p class="labelComponent" id="itemRetailer">Retailer</p>
        </div>
    );
}


