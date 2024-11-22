import { Html } from '@react-three/drei'
import React from 'react'
import { LineWave } from 'react-loader-spinner'

const Loader = () => {
    return (
        <Html>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="w-[10vw] h-[10vw] rounded-full">
                    <LineWave
                        visible={true}
                        height="100"
                        width="100"
                        color="white"
                        ariaLabel="line-wave-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        firstLineColor=""
                        middleLineColor=""
                        lastLineColor="" />
                </div>
            </div>
        </Html>
    )
}

export default Loader