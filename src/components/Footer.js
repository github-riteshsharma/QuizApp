import React from 'react';
export default () => {
    return (
        // mt = margin top, p = padding
        <footer className="row" style={{
            position:"relative",
            bottom:"0",
            width: "100%",
            height: "55px",
            background:"#1b1c1d",
            marginBottom:"2px",
            margin:"2px",
            borderRadius:"4px"}} >
           <div style={{marginLeft:"44%",
               paddingTop:"15px",
               color:"#2185D0",
               fontFamily:"sans-serif"}}> Copyright &copy; {new Date().getFullYear()} QuizApp</div>
        </footer>
    );
};
