import UseEscapeByPress from '../../utils/escapeByPress';
import './InfoPopup.css'

function InfoTooltip({ onClose, status: { isOpen, successful, text } }) {
  function handleClickOverlay(evt) {
    evt.stopPropagation();
  }

  UseEscapeByPress(onClose, isOpen);

  return (
    <div className={`info-tooltip ${isOpen && 'info-tooltip_opened'}`} onClick={onClose}>
      <div className="info-tooltip__container" onClick={handleClickOverlay}>
        <div className="info-tooltip__status-image">
          {successful ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="none"><path fill="#000" fillRule="evenodd" d="M117 60A57 57 0 1 1 3 60a57 57 0 0 1 114 0Zm3 0A60 60 0 1 1 0 60a60 60 0 0 1 120 0ZM57.6 76.9l29.2-28-5.6-5.8-26.8 25.7-15-11-4.7 6.5 17.7 13 2.7 1.9 2.5-2.3Z" clipRule="evenodd" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="none"><path fill="#FD0707" fillRule="evenodd" d="M60 117A57 57 0 1 0 60 3a57 57 0 0 0 0 114Zm0 3A60 60 0 1 0 60 0a60 60 0 0 0 0 120Zm-5-59.3L36.8 42.3l5.6-5.6L60.7 55l17.7-17.7L84 43 66.4 60.7l17 17-5.7 5.6-17-17L43 84l-5.6-5.6L55 60.7Z" clipRule="evenodd" /></svg>
          )}
        </div>
        <h2 className="info-tooltip__title">{text}</h2>
        <button className="info-tooltip__btn" type="button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#000" d="M32 28.8 19.2 16 32 3.2 28.8 0 16 12.8 3.2 0 0 3.2 12.8 16 0 28.8 3.2 32 16 19.2 28.8 32l3.2-3.2Z" /></svg>
        </button>
      </div>
    </div>
  )
}

export default InfoTooltip;