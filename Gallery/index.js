import {Component} from 'react'

import './index.css'

import ThumbnailItem from '../ThumbnailItem'


class Gallery extends Component {
    state = {activeImgId: imagesList[0].id}
  
    onClickingImg = id => {
      this.setState({activeImgId: id})
    }
  
    render() {
      const {activeImgId} = this.state
      return (
        <div className="main-container">
          <img
            src={imagesList[activeImgId].imageUrl}
            className="main-img"
            alt={imagesList[activeImgId].imageAltText}
          />
          <div className="desc-div">
            <h1 className="heading"> Nature Photography </h1>
            <p className="para"> Nature Photography by Rahul </p>
          </div>
          <div className="thumbnail-div">
            {imagesList.map(eachImg => (
              <ThumbnailItem
                key={eachImg.id}
                imgDetails={eachImg}
                onClickingImg={this.onClickingImg}
                isActiveImg={activeImgId === eachImg.id}
              />
            ))}
          </div>
        </div>
      )
    }
  }
  
  export default Gallery
  