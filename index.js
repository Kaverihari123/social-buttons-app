const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  <div className="social-buttons-container1">
    <div className="social-buttons-container2">
      <h1 className="social-buttons-heading">Social Buttons</h1>
      <div className="social-buttons-container3">
        <Button className="button1" buttonText="Like" />
        <Button className="button2" buttonText="Comment" />
        <Button className="button3" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
