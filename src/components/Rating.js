const Rating = ({rate}) => {
    return (
        <div>
            { // for 0 to 4 (5 times) add a star to the rate
            Array.from(Array(5).keys()).map((i)=>(
                (rate >= (i+1)) ? <i className="fa fa-star" key={i}></i> : // add fully star
                (rate >= (i+0.5) ) ? <i className="fa fa-star-half-full" key={i} ></i> : // add half star 
                (rate < (i+1)) && <i className="fa fa-star-o" key={i}></i> // add empty star
            ))}
            
        </div>
      );
}
 
export default Rating;