import React, { Component } from 'react';
import NewSingle from './NewSingle';
import axios from 'axios';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }


    componentDidMount() {
        axios({
            'method': 'GET',
            'url': `https://newsapi.org/v2/everything?q=bitcoin&from=2020-07-01&sortBy=publishedAt&apiKey=464a3f64e749479ca2604d774c97c5ca`,
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        .then(res => this.setState({
            news: res.data.articles
        }))
        .catch(err => console.log(err));
      }

    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} /> 
        ))
    }


    render() {
        return (
            <div className="row">

            {this.renderItems()}
                
            </div>
        )
    }
}

export default News;