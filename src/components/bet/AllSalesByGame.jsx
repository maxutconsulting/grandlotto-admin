import React from "react";
// import { useSelector } from "react-redux";
import {
  addComma,
  formatAMPM,
  formateDateByName,
} from "../../global/customFunctions";
import ComponentLoading from "../blocks/ComponentLoading";
import PaginationBlock from "../blocks/PaginationBlock";
import TableLoading2 from "../blocks/TableLoading2";

const AllSalesByGame = ({
  columns,
  page,
  totalPages,
  data,
  type,
  nextP,
  PrevP,
  isLoading,
  fetchByPage,
  hasPagination = true,
  columnSpan = "6",
  noDataText = "No bet found",
  onDelete,
}) => {
  const handlePrev = () => {
    PrevP(type);
  };

  const handleNext = () => {
    nextP(type);
  };

  const handleFetchByPage = (newPage) => {
    fetchByPage(type, newPage);
  };

  return (
    <>
      {isLoading && <ComponentLoading inner={true} title="Please wait ..." />}
      <div className="grandlotto_table">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {columns &&
                  columns?.map((head, index) => (
                    <th key={index}>{head?.name}</th>
                  ))}
              </tr>
            </thead>

            {data && data?.length ? (
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    <td>{item?.gameName}</td>
                    <td>{formateDateByName(item?.dateDraw)}</td>
                    <td>{formatAMPM(item?.dateDraw)}</td>
                    <td>{item?.totalPlayed}</td>
                    <td>
                      ₦{" "}
                      {item?.totalAmountPlayed
                        ? addComma(item?.totalAmountPlayed)
                        : item?.totalAmountPlayed}
                    </td>
                    <td>
                      ₦{" "}
                      {item?.totalAmountWon
                        ? addComma(item?.totalAmountWon)
                        : item?.totalAmountWon}
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : data === null ? (
              <TableLoading2 columnSpan={columnSpan} />
            ) : (
              <tbody>
                <tr>
                  <td colSpan={columnSpan}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="no_data_div">
                        <br />
                        <br />
                        <br />
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{ flexDirection: "column" }}
                        >
                          <h4
                            className="mb-4"
                            style={{ fontSize: "18px", fontWeight: 500 }}
                          >
                            {noDataText}
                          </h4>
                        </div>

                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>

      <div className="grandlotto_table_small lotto_card">
        {isLoading && <ComponentLoading title="Please wait ..." />}
        {data && data?.length ? (
          data?.map((item, index) => (
            <div className="grandlotto_table_small_flex " key={index}>
              <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                <small>{formateDateByName(item?.dateDraw)}</small>
                <small>{formatAMPM(item?.dateDraw)}</small>
              </div>
              <div className="grandlotto_table_small_flex_top">
                <div className="d-flex justify-content-between">
                  <h4 className="">
                    <b>Game ID: {item?.gameId || item?.id}</b>
                  </h4>
                </div>

                <div className="d-flex justify-content-between">
                  <h4 className="">Game Name</h4>
                  <h4 className="">
                    <b>{item?.gameName}</b>
                  </h4>
                </div>
                <div className="d-flex justify-content-between">
                  <h4 className="">No of Game</h4>
                  <h4 className="">
                    <b>{item?.totalPlayed}</b>
                  </h4>
                </div>

                <div className="d-flex justify-content-between">
                  <h4 className="">Stake Amount</h4>
                  <h4 className="">
                    <b>
                      ₦{" "}
                      {item?.totalAmountPlayed
                        ? addComma(item?.totalAmountPlayed)
                        : item?.totalAmountPlayed}
                    </b>
                  </h4>
                </div>
                <div className="d-flex justify-content-between">
                  <h4 className="">Winning Amount</h4>
                  <h4 className="">
                    <b>
                      ₦{" "}
                      {item?.totalAmountWon
                        ? addComma(item?.totalAmountWon)
                        : item?.totalAmountWon}
                    </b>
                  </h4>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="no_data_div">
              <br />
              <br />
              <br />
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ flexDirection: "column" }}
              >
                <h4
                  className="mb-4"
                  style={{ fontSize: "18px", fontWeight: 500 }}
                >
                  {noDataText}
                </h4>
              </div>

              <br />
              <br />
              <br />
            </div>
          </div>
        )}
      </div>

      {data && data?.length && hasPagination ? (
        <PaginationBlock
          handlePrev={handlePrev}
          handleNext={handleNext}
          page={page}
          totalPages={totalPages}
          handleFetchByPage={handleFetchByPage}
        />
      ) : null}
    </>
  );
};

export default AllSalesByGame;
