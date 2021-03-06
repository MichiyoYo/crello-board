import React from "react";
import ReactDOM from "react-dom/client";
import Column from "./column";
import initialData from "./initial-data";
import "@atlaskit/css-reset";

class App extends React.Component {
  state = initialData;

  render() {
    return this.state.columnOrder.map((columnId) => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks} />;
    });
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
