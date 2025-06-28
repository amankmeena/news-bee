import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'us',
        category: 'world',
        pageSize: 5
    }

    static PropsTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            totalresults: null,
            page: 2
        }

        // let categoryContent = {
        //     general: 'Insights into Today\'s World: Current Events and Trends',
        //     business: 'Business Dynamics: Strategies, Markets, and Innovations',
        //     entertainment: 'The Pulse of Entertainment: Movies, Music, and Celebrity Buzz',
        //     health: 'Health Matters: Wellness, Research, and Medical Advancements',
        //     science: 'Science Frontiers: Discoveries, Research, and Innovations',
        //     sports: 'Sports Arena: Scores, Highlights, and Athletic Feats',
        //     technology: 'Tech Trends: Innovations, Gadgets, and Digital Futures'
        // }

        let categoryText;
        switch (this.props.category) {
            case 'business':
                categoryText = 'Business Dynamics - Strategies, Markets, and Innovations'
                break;
            // case 'entertainment':
            //     categoryText = 'The Pulse of Entertainment - Movies, Music, and Celebrity Buzz'
            //     break;
            // case 'health':
            //     categoryText = 'Health Matters - Wellness, Research, and Medical Advancements'
            //     break;
            case 'science':
                categoryText = 'Science Frontiers - Discoveries, Research, and Innovations'
                break;
            case 'sport':
                categoryText = 'Sports Arena - Scores, Highlights, and Athletic Feats'
                break;
            case 'technology':
                categoryText = 'Tech Trends - Innovations, Gadgets, and Digital Futures'
                break;
            // case 'nation':
            //     categoryText = 'National Pulse - Headlines, Issues, and Local Perspectives'
            //     break;
            case 'world':
                categoryText = 'Global View - International News, Events, and Insights'
                break;

            case 'environment':
                categoryText = 'Global View - International News, Events, and Insights'
                break;

            case 'culture':
                categoryText = 'Global View - International News, Events, and Insights'
                break;

            case 'politics':
                categoryText = 'Global View - International News, Events, and Insights'
                break;

            case 'fashion':
                categoryText = 'Global View - International News, Events, and Insights'
                break;

            default:
                categoryText = 'Insights into Today\'s World - Current Events and Trends'
                break;
        }

        document.title = `${this.props.category.replace(/^./, this.props.category[0].toUpperCase())} | ${categoryText}`;
    };

    // async updateNews() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=UUUUUUU&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    //     console.log(url)
    // this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         articles: parsedData.articles,
    //         loading: false
    //     });
    // }

    async componentDidMount() {
        this.props.setprogress(10);

        // console.log('cdm')
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pagesize=${this.props.pageSize}`;
        // let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&max=10&apikey=${this.props.apikey}`;
        let url = `https://content.guardianapis.com/search?section=${this.props.category}&api-key=${this.props.apikey}&page=1&page-size=${this.props.pageSize}&show-fields=trailText,thumbnail`;

        this.setState({ loading: true });

        let data = await fetch(url);

        this.props.setprogress(30);
        let parsedData = await data.json();
        this.props.setprogress(70);

        // console.log(parsedData.response.total)

        this.setState({
            articles: parsedData.response.results,
            totalresults: parsedData.response.total,
            loading: false
        })
        // console.log(this.state.articles)
        // console.log(this.state.totalresults)

        this.props.setprogress(100);
    }

    // handlePrevPage = async () => {
    //     // this.setState({page: this.state.page - 1});
    //     // this.updateNews();

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=UUUUUUU&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         articles: parsedData.articles,
    //         page: this.state.page - 1,
    //         loading: false
    //     });
    // }

    // handleNextPage = async () => {
    //     // this.setState({page: this.state.page + 1});
    //     // this.updateNews();

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=UUUUUUU&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         articles: parsedData.articles,
    //         page: this.state.page + 1,
    //         loading: false
    //     });
    // }

    fetchMoreData = async () => {
        // console.log('fetchMoreData')
        this.setState({ page: this.state.page + 1 });

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        // let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&max=10&apikey=${this.props.apikey}`;
        let url = `https://content.guardianapis.com/search?section=${this.props.category}&api-key=${this.props.apikey}&page=${this.state.page}&page-size=${this.props.pageSize}&show-fields=trailText,thumbnail`;

        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: this.state.articles.concat(parsedData.response.results),
            // articles: [...this.state.articles, ...parsedData.response.results.filter(item => !this.state.articles.includes(item))],
            loading: false
        });
        // console.log(this.state.articles.concat(parsedData.articles))
        // console.log(this.state.articles)
    };

    render() {
        // console.log('render')
        // console.log(this.state.totalresults)
        // console.log(Math.ceil(this.state.totalresults/this.props.pageSize))
        // console.log(this.props.category)

        return (
            <>
                <h1 className='text-center text-primary' >News Bee - Top <span className='text-primary-emphasis text-decoration-underline'>{this.props.category !== 'sport' ? this.props.category.toUpperCase() : "SPORTS"}</span> Headlines </h1>

                {/* <div className='container d-flex justify-content-between my-5' >
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevPage} > &larr; Previous</button>

                    <span class="badge text-bg-secondary">No. of Pages: {Math.ceil(this.state.totalresults / this.props.pageSize)}</span>

                    <button disabled={this.state.page >= Math.ceil(this.state.totalresults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextPage} >Next &rarr; </button>
                </div> */}

                {/* {this.state.loading && <Loading />} */}

                {/* {!this.state.loading ?
                    <div className='row'>
                        {this.state.articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 70):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                                
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div> : <Loading />} */}


                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalresults}
                    loader={<Loading />}
                >

                    <div className='container'>

                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return <div className='col-md-4' key={element.id}>
                                    <NewsItem title={element.webTitle ? element.webTitle : ""} description={element.fields ? element.fields.trailText : ""} imageUrl={element.fields.thumbnail} newsUrl={element.webUrl} date={element.webPublicationDate} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}

export default News