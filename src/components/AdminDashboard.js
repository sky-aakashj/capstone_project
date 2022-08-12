import { Link } from "react-router-dom";
import InverstorHolding from "./InvestorHolding";
import axios from 'axios';
import { useEffect , useState } from "react"
import { useNavigate, useParams } from "react-router"

function Admindashboard(){

   




    return <>
    

    <div class="container mt-4 admin-dashboard">
        <div class="row">
            <div class="col-12">
                <div class="card shadow mb-5 p-5">
                    <h2 class="text-center text-uppercase">LINK ASSET MANAGEMENT</h2>
                    <hr></hr>

                    <form action="" method="">
                        
                        <div className="form-group row">
                            <div className="col-4 ">
                                <label>NAV Value</label>
                            </div>
                            <div className="col-8 ">
                                <h3 className="form-control">45.87</h3>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-4 ">
                                <label>Date</label>
                            </div>
                            <div className="col-8 ">
                                <h3 className="form-control">12/08/2022</h3>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-4 ">
                                <label>Initial Investment</label>
                            </div>
                            <div className="col-8 ">
                                <h3 className="form-control">45.87</h3>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-4 ">
                                <label>Units Issued</label>
                            </div>
                            <div className="col-8 ">
                                <h3 className="form-control">45.87</h3>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-4 ">
                                <label>Current Asset Value</label>
                            </div>
                            <div className="col-8 ">
                                <h3 className="form-control">45.87</h3>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-4 ">
                                <label>Profit and Loss</label>
                            </div>
                            <div className="col-8 ">
                                <h3 className="form-control profitloss text-success ">+45000.83</h3>
                            </div>
                        </div>

                        <hr></hr>

                        <div className="form-group row ">
                            <div class="col"></div>
                            <div className="col-5">
                                <Link to="/updateNav"><button type="submit" class=" btn btn-primary form-control btn-block rounded-pill" name="login">UPDATE NAV</button></Link>    
                            </div>
                            <div class="col"></div>
                        </div>

                    </form>
    
                </div>
            </div>
            <hr></hr>
            <InverstorHolding  />

        </div>
    </div>



    </>


}

export default Admindashboard