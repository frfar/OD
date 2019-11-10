import React from 'react'

const displayBackground = (props ) => {
    return (
        <div  style={{width: "250%"}} id="carouselExampleInterval" className="carousel slide border" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={ props.img } className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    )
};

export default displayBackground;