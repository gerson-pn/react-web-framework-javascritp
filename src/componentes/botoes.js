import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Botoes = () => {
    return (
        <div className="container">
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger">Left</button>
                <button type="button" className="btn btn-warning">Middle</button>
                <button type="button" className="btn btn-success">Right</button>
            </div>
        </div>
    )
}

export default Botoes