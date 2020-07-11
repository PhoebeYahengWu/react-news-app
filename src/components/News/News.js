import React, { Component } from 'react';
import NewSingle from './NewSingle';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        const url = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-11&sortBy=publishedAt&apiKey=464a3f64e749479ca2604d774c97c5ca`;

        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                news: data.articles 
            }) 
        })
        .catch((error) => console.log(error));
    }
    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.id} item={item} />
        ))
    }


    render() {
        return (
            <ul>

            {this.renderItems()}
                
            </ul>
        )
    }
}

export default News;