const ExponentSix = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count ** 6}</p>
    <p className="exponent-result">
      {count} * {count} * {count}* {count}* {count}* {count} ={" "}
      <span className="total">{count ** 6}</span>
    </p>
  </div>
);

export default ExponentSix;
