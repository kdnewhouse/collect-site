import React from 'react';
import { ItemLabel } from './ItemLabel';

export const Item = (props) => {
    return (
        <div class = "item">
            <div class = "imageWrapper">
                <label>
                    <input type="checkbox"></input>
                    <img class = "image" src={props.imageSrc} alt="test" height="223"></img>
                </label>
            </div>
            <ItemLabel imageSrc = {props.imageSrc} dbData = {props.labelData}  class = "itemLabel"/>
        </div>

    );
}


