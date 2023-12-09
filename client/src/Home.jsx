import Navbar from "./Navbar";

function Home()
{
    return (

        <div className="row">
            <div className="col-sm-4">
                <h2 className = "text-center"> Top Customers </h2>
                <div id = "customerResults">

                </div>
            </div>
            <div className="col-sm-4">
                <h2 className = "text-center"> Items </h2>
                <div id = "itemResults">

                </div>

            </div>
            <div className="col-sm-4">
                <h2 className = "text-center"> Sales </h2>
                <div id = "saleResults">

                </div>
            </div>
        </div>
    )
}
export default Home