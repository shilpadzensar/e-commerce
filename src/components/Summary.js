const Summary = ({summaryData}) => {

    return (
        <section>
            <h2 className="mb-4">Summary</h2>
            <ol className="m-0 p-0">
              <li className="d-flex mb-3 justify-content-between align-items-start">
                <div className="me-auto">
                  <div className="fw-bold">Total Price</div>
                  Cras justo odio
                </div>
                <div className="fs-4">{summaryData.totalPrice}</div>
              </li>
              <li className="d-flex mb-3 justify-content-between align-items-start">
                <div className="me-auto">
                  <div className="fw-bold">Total Shipping Charges</div>
                  Cras justo odio
                </div>
                <div className="fs-4">{summaryData.totalShipinPrice}</div>
              </li>
              <li className="d-flex mb-3 justify-content-between align-items-start">
                <div className="me-auto">
                  <div className="fw-bold">Discount Applied</div>
                  Cras justo odio
                </div>
                <div className="fs-4">{summaryData.discountApplied}</div>
              </li>
              <hr />
              <li className="d-flex mb-3 justify-content-between align-items-start">
                <div className="me-auto">
                  <div className="fw-bold">Total</div>
                </div>
                <div className="fs-3">{summaryData.total}</div>
              </li>
            </ol>
        </section>
    )
}

export default Summary;