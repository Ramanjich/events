import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status} = props
  const showingNo = status === ''
  const showingYet = status === 'YET_TO_REGISTER'
  const showingOver = status === 'REGISTERED'
  const showingClosed = status === 'REGISTRATIONS_CLOSED'

  const renderNoActive = () => (
    <p className="no-active-para">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetTo = () => (
    <div className="yet-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-image"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        seeing dance alive can often to make you totally fall in love with this
        beutiful art form
      </p>
      <button type="button" className="yet-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderClosedView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt=" registrations closed"
        className="closed-image"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned.We will reopen the registrations soon!</p>
    </div>
  )

  return (
    <>
      {showingNo && renderNoActive()}
      {showingYet && renderYetTo()}
      {showingOver && renderRegistered()}
      {showingClosed && renderClosedView()}
    </>
  )
}

export default ActiveEventRegistrationDetails
