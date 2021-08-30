import React, {useState, useEffect} from "react";
import axios from 'axios';
import Footer from "./Footer";
import dashboard from "../../assets/dashboard.png";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Dashboard = ({match}) => {  

  const {params: {id}} = match;

  const [financialData, setFinancialData] = useState({name: "Futaro Uesugi", savings: 0, income: 0, expenses: 0});

  useEffect(() => {
    axios.get(`/localhost:5001/api/users/${id}`)
    .then(response => {
      const data = response.data; 
      setFinancialData({
        name: data.name,
        savings: data.savings,
        income: data.income,
        expenses: data.expenditure, 
      });
    })
    .catch(err => {
      console.log(err);
    })
  });

  return (
    <div className="dashboard__body">
      <div className="dashboard__content">
        <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Hello {financialData.name}
          </Typography>
        </CardContent>
      </Card>
        <img src={dashboard} style={{ height: "520px", width: "320px" }} />
        <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Savings: {financialData.savings}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Income: {financialData.income}
            
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Expenses: {financialData.expenses}
            
          </Typography>
        </CardContent>
      </Card>
      </div>
      <Footer />
    </div>
  );
};
export default Dashboard;
