import React from 'react'
import { RotatingLines } from 'react-loader-spinner';
const Loader = () => {
    return (
        <div className="container">
            <div className="row ">
                <div class="col d-flex justify-content-center mt-5 pad">
                    
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="126"
                        visible={true}
                    />
                </div>

            </div>
        </div>
    )
}

export default Loader
