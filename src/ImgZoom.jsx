import React from 'react'

export const ImgZoom = (props) => {
    if(parseInt(props.invisible)) {
        return(<div hidden class="zoomedImg">invisible</div>);
    }

    return(
        <div class="zoomedImg">
            IMAGE
            <img src={props.imgSrc}></img>
        </div>
    );
}