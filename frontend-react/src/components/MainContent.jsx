import React from "react";
import Button from "./Button";

const MainContent = () => {
  return (
    <>
    
        <div className="container">
          <div className="text-center bg-light-dark p-5 rounded ">
            <h1 className="mb-3 text-light">Stock Prediction Portal</h1>
            <p className="text-light lead">
              Welcome to our Stock Prediction Portal. Sign in to access smart
              market insights, stock analysis, and prediction services designed
              to help you make better investment decisions. Create your account
              today and unlock powerful tools for tracking trends, analyzing
              stocks, and exploring future market opportunities.
            </p>
            <Button text="Login" class="btn-outline-primary"/>
          </div>
        </div>
      
    </>
  );
};

export default MainContent;
