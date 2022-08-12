import { Link } from "react-router-dom"
import React, {useState} from 'react';


function UpdateNav(){

    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		console.log(formData)
	};



    return <>

        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                <div class="card shadow mb-5 p-5">
                    <div className="row p-5">
                        <div className="col-3">

                        </div>
                        <div className="col-6 text-center">
                            <form >
                                <input type="file" onChange={changeHandler} />      
                            </form>
                        </div>
                        <div className="col-">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">

                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={handleSubmission}>Fetch Price</button>
                    <hr></hr>

                        <div className="">

                            <div className="form-group row">
                                <div className="col-4 ">
                                    <label>Security 1</label>
                                </div>
                                <div className="col-8 ">
                                    <h3 className="form-control">45.87</h3>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-4 ">
                                    <label>Security 2</label>
                                </div>
                                <div className="col-8 ">
                                    <h3 className="form-control">45.87</h3>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-4 ">
                                    <label>Security 3</label>
                                </div>
                                <div className="col-8 ">
                                    <h3 className="form-control">45.87</h3>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-4 ">
                                    <label>Security 4</label>
                                </div>
                                <div className="col-8 ">
                                    <h3 className="form-control">45.87</h3>
                                </div>
                            </div>

                        </div>
                        

                        <div className="mb-0">

                            <hr></hr>

                        <div className="form-group row ">
                            <div class="col"></div>
                            <div className="col-5">
                                <Link to="/updateNav"><button type="submit" class=" btn btn-primary form-control btn-block rounded-pill" name="login">UPDATE NAV</button></Link>    
                            </div>
                            <div class="col"></div>
                        </div>

                        </div>
                        
                </div>
                </div>
            </div>
        </div>

    </>

}

 export default UpdateNav