import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date } = this.props;

    return (
      <div className='container my-3'>

        <div className="card">

          <div className='position-absolute' style={{ display: 'flex', justifyContent: 'flex-end', right: '5px', top: '5px' }}>
            <span className="badge rounded-pill bg-danger z-1" style={{ left: "90%" }}> The Guardian </span>
          </div>

          <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDLUgPm6eqlc3xZzykaaMRKvUUlMVaaiUlA&s"} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title multi-ellipsis"> {title} </h5>

            <p className="card-text multi-ellipsis">{description}</p>
            <div className="card-text">
              <small className="text-body-secondary fw-medium">
                {/* <p>By {author ? author : "Unknown"}</p> */}
                <p>{new Date(date).toString().slice(0, 24)} </p>
              </small>
            </div>

            <div>
              {/* <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a> */}
              <a className="icon-link icon-link-hover btn btn-primary d-flex justify-content-center" href={newsUrl} target='_blank' rel="noopener noreferrer">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="bi" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default NewsItem