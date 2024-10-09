import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, onClickingImg, isActiveImg} = props
  const {id, thumbnailAltText, thumbnailUrl} = imgDetails
  const clickImg = () => {
    onClickingImg(id)
  }
  const styles = isActiveImg ? 'active-thumbnail' : ''
  return (
    <li>
      <button type="button" className="my-btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${styles}`}
          onClick={clickImg}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
