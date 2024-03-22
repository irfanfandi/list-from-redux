import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/actions";
import "./../style/Home.scss";

const Home = () => {
  const selector = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <main className="container">
      <div className="card-monthly">
        <h3>Monthly Report</h3>
      </div>
      {selector.data &&
        selector.data.map((e, idx) => (
          <table key={idx} className="table" style={{ marginBottom: 5 }}>
            <tr className="table-header">
              <th colspan="3">
                <h4>{e.month}</h4>
              </th>
            </tr>
            <tr className="table-body" style={{ backgroundColor: "#549EAB" }}>
              <td>
                <img src="/public/sales-down.png" alt="sasa" />
              </td>
              <td>
                <div>Number of Sales</div>
                <div>{e.numberOfSales}</div>
                <div>Revenue</div>
                <div>{e.revenue}</div>
              </td>
              <td>
                <div>Profit</div>
                <div>$ {e.profit}</div>
                <div>Cost</div>
                <div>$ {e.cost}</div>
              </td>
            </tr>
          </table>
        ))}
    </main>
  );
};

export default Home;
