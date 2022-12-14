import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect , useState } from "react"
import { useNavigate, useParams } from "react-router"



function InverstorHolding(){

    var [security,setSecurity] =  useState([])
    var [investorhlding,setInvestorHolding] = useState([[]])

    
    useEffect(()=>{
    axios({
        url:"http://localhost:3002/security",
        method:"get",
    }).then(
        (response)=> {
            setSecurity(response.data)
              
        },
        (error)=>{
            console.log("Error: "+error)
        })

    },[])

    useEffect(()=>{
        axios({
            url:"http://localhost:3002/fund_holding",
            method:"get",
        }).then(
            (response)=> {
                setInvestorHolding(response.data)
                  
            },
            (error)=>{
                console.log("Error: "+error)
            })
    
        },[])

        let z = Object.assign(security,investorhlding)




    return<>

        
        

        <table class="table">
            <thead>
                <tr>
                <th scope="col">Security Code</th>
                <th scope="col">Investment Date</th>
                <th scope="col">Security Name</th>
                <th scope="col">No of Shares</th>
                <th scope="col">Intial Unit Price</th>
                <th scope="col">Intial Investment</th>
                <th scope="col">Current Investment Price</th>
                <th scope="col">Profit Loss</th>
                </tr>
            </thead>
            <tbody>
                {


    z.map((each, index) => {
        return (
            <tr>
                <td><h5>{each.Security_id}</h5></td>
                <td>{each.Date}</td>
                <td><h5>{each.security_name}</h5></td>
                <td></td>
                </tr> 
        )
    })



                }
            </tbody>
        </table>


    </>
}

export default InverstorHolding