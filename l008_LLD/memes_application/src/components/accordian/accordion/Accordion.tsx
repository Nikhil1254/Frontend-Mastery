import "./accordion.css";

const Accordion = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div className="accordion-container">
      <div className="accordion-header" onClick={() => setIsOpen()}>
        <span className="title">{title}</span>
        {isOpen ? <span>🔼</span> : <span>🔽</span>}
      </div>
      <div className={`accordion-body ${isOpen ? "" : "hide"}`}>{body}</div>
    </div>
  );
};

export default Accordion;
