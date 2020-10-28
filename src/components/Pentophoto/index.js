import React from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';

const photoIDs = {};

function Pentophoto({src, size = 32}) {
    let id;
    if (photoIDs[src]) {
        id = photoIDs[src];
    } else {
        id = uuidv4(); 
        photoIDs[src] = id;
    }
    console.log(JSON.stringify(photoIDs));
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1"
            viewBox="0 0 600 600"
            width={size}
            height={size}>
            <pattern id={id} width="100%" height="100%">
                <image href={src} width="100%" height="100%" />
            </pattern>
            <path
                d="M 294,3 C 317.57143,3 578.62433,194.22291 585.24612,214.60269 591.86791,234.98247 493.06969,543.1281 474,556.98304 c -19.06969,13.85494 -339.19671,15.11448 -360,0 C 96.663921,544.38764 -3.8679104,234.98247 2.753882,214.60269 9.3756744,194.22291 272.57143,3 294,3 Z"
                style={{fill:`url(#${id})`, stroke:"#aaaaaa", strokeWidth:1}}
            />
        </svg>
    )
}

export default Pentophoto;