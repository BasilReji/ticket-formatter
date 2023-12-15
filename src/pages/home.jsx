import { createSignal } from "solid-js";
import "./style.scss";
import { copyToClipBoard, formatTicket } from "../utils/stringUtils";

function Home() {
  const [tickets, setTickets] = createSignal([""]);
  const [ticket, setTicket] = createSignal("");

  const addTicket = () => {
    setTickets([...tickets(), ticket()]);
    setTicket("");
  };

  const onChange = (event) => {
    const { value } = event.target;
    setTicket(value);
  };

  const clearTable = () => {
    setTickets([]);
  };

  return (
    <div className="container">
      <textarea placeholder="add your ticket details" onChange={onChange} />
      <button onClick={addTicket}>Add</button>
      {tickets().length ? (
        <>
          <table border={1} cellPadding={20}>
            <thead>
              <tr>
                <th>URL</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {tickets().map((item) => (
                <tr>
                  <td>
                    <span>{formatTicket(item).url}</span>
                    <span
                      onClick={() => copyToClipBoard(formatTicket(item).url)}
                    >
                      <i class="fa fa-copy"></i>
                    </span>
                  </td>
                  <td>
                    <span>{formatTicket(item).description}</span>
                    <span
                      onClick={() =>
                        copyToClipBoard(formatTicket(item).description)
                      }
                    >
                      <i class="fa fa-copy"></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <span onClick={clearTable}>Clear</span>
        </>
      ) : null}
    </div>
  );
}

export default Home;
