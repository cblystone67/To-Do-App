import React from "react";

function MainContent() {
  return (
    <div className="main-content">
      <h1>Main Content</h1>
      <div>
        <label htmlFor="doSomething1">Do Something1</label>
        <input type="checkbox" name="doSomething1" />
      </div>
      <div>
        <label htmlFor="doSomething2">Do Something1</label>
        <input type="checkbox" name="doSomething2" />
      </div>
      <div>
        <label htmlFor="doSomething3">Do Something1</label>
        <input type="checkbox" name="doSomething3" />
      </div>
      <div>
        <label htmlFor="doSomething4">Do Something1</label>
        <input type="checkbox" name="doSomething4" />
      </div>
    </div>
  );
}

export default MainContent;
