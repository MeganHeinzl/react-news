import React, { Component } from 'react';
import Format from './Format';
import Moment from 'moment';
import CookieService from './cookieservice';

const API_KEY   = 'bc94d52b9ed541c4b51c49ffe6c7ff19';
const BASE_URL  = 'https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey='
                + API_KEY + "&q=";
const MAIN_CATEGORY = "mainNewsCategory";

const COOKIE_SERVICE = new CookieService();


class App extends Component { 
    constructor() {
        super();
        this.state  = {
          apiKey : API_KEY,
          articles : [],
          defaultCategory: 'bok choy'
        };

        // Register functions of the class.
        this.getNews = this.getNews.bind(this);
        this.searchNews = this.searchNews.bind(this);
       
        this.handleChange = this.handleChange.bind(this);
    }



    // Called when constructor is finished building component.
    componentDidMount() {
        // Set main category from cookie if it does not exist.
        let mainCategory = COOKIE_SERVICE.getCookie(MAIN_CATEGORY);
        if(mainCategory === null) {
            COOKIE_SERVICE.setCookie(MAIN_CATEGORY, this.state.defaultCategory);
            mainCategory = this.state.defaultCategory;
        }
        this.getNews(mainCategory);
    }

    handleChange(e){
        if(e.target.value){
            this.setState({defaultCategory: e.target.value});
        }
       

    }

    searchNews(){
        COOKIE_SERVICE.setCookie(MAIN_CATEGORY,this.state.defaultCategory)
        this.getNews(this.state.defaultCategory);

    };


    getNews(category) {    
        const URL        = BASE_URL + category;

        // Request and wait for data from remote server.
        fetch(URL).then(response => response.json())
            // Data retrieved so parse it.
            .then((data) => {
                //alert(JSON.stringify(data));
                this.setState({articles:data.articles});
            })
            // Data is not retieved.
            .catch((error) => {
                alert(error);
            });         
    }

    render() {
        return (         
            <div className="news-wrapper">
                <span><input type="text" onChange ={this.handleChange} placeholder="Search"></input> <button onClick={this.searchNews}>Go!</button></span>
                <ul>
                {this.state.articles.map((article, index) => (
                    <li key={index}> 
                    <div className="article-wrapper">
                        {/* See  https://newsapi.org/ for more properties */}
                        <div className ="image-wrapper">
                        <Format image={article.urlToImage}></Format>
                        </div>
                        <h1>{article.title}</h1>
                        By <b>{article.author}</b> <br/> <p className="date">{Moment(article.publishedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                        <p>{article.description}</p>
                        <a href = {article.url} >Read full article</a>
                    </div>
                    </li>
                ))}  
                </ul>

            </div>   
  
        )
    }
}
export default App;

