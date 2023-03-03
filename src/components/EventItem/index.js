import './index.css'

const EventItem = props => {
  const {eachEvent, onClickEvent} = props
  const {imageUrl, name, location, registrationStatus} = eachEvent

  const onBtnClick = () => {
    onClickEvent(registrationStatus)
  }

  return (
    <li className="item">
      <button type="button" className="button" onClick={onBtnClick}>
        <img src={imageUrl} alt="event" className="event-images" />
      </button>
      <p className="name-para">{name}</p>
      <p className="location-para">{location}</p>
    </li>
  )
}
export default EventItem
