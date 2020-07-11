import React from 'react';

const NewSingle = ({item}) => (
    <div className="col s12 m4 l4">
        <div className="card">
        <div className="card-image">
            <img src={item.urlToImage} alt={item.title}/>
            <span className="card-title">{item.source.name}</span>
        </div>

        <div className="card-content">
            <p style={{fontSize:"1.4rem"}}><strong>{item.title}</strong></p>
            <p>By {item.author} {item.publishedAt.substring(0, 10)}</p>
            {/* <br/> */}
            {/* <p>{item.content}</p> */}
        </div>

        <div className="card-action">
            <a href={item.url} target="_blank" rel="noopener noreferrer">Full Article</a>
        </div>

        </div>
    </div>
)

export default NewSingle;