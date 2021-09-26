import React from 'react';
import img1 from '../img/pur.jpg';
import img3 from '../img/im2.jpg';

const Cardbody = ({ data }) => {
    return (
        <div>
 
                        <div className="col-md-6 mx-auto ">
                            <div className="card d-flex shadow  mb-5 bg-white rounded">
                                <div className=" d-flex px-3 pt-3 justify-content-between">
                                    <div className="live">
                                        <small>Live</small>
                                    </div>
                                    <div className="team-name">
                                        <img src={img1} alt="" />
                                        <small><b>Primera A</b></small>
                                    </div>
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    </div>

                                </div>
                                <hr />
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="img-bg">
                                                <img src={img1} alt="" />

                                            </div>
                                            <div className="img-heading pt-4">
                                                <h5>Tolecwo W</h5>

                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="time">
                                                <small>09 Sep at <b>11:30pm</b></small>
                                            </div>
                                            <div className="gol">
                                                <h1>1 : 1</h1>
                                            </div>
                                            <div className="tem">
                                                <small>90*</small>

                                            </div>
                                            
                                        </div>
                                        <div className="col-md-4">
                                            <div className="img-bg">
                                                <img src={img3} alt="" />

                                            </div>
                                            <div className="img-heading pt-4">
                                                <h5>france c</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>                         

                            </div>

                        </div>
                       
                    </div>

    )
}

export default Cardbody
