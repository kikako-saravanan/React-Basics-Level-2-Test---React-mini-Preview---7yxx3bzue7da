import React from 'react';

export const Preview = ({fontSize,content,padding}) =>{
    return (
        <div id="preview" style={{padding,fontSize}}>
            {content}
        </div>
    )
}