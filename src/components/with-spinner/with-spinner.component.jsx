import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// functional component !!!!! TODO GET IT    HIGHER ORDER COMPONENT WITH ACTS ON OTHER COMPONENT
const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent { ...otherProps} />
    )
}

//or same with:
// const WithSpinner = WrappedComponent => { 
//     const Spinner = ({isLoading, ...otherProps}) => {
//     return isLoading ? (
//         <SpinnerOverlay>
//             <SpinnerContainer />
//         </SpinnerOverlay>
//     ) : (
//         <WrappedComponent { ...otherProps} />
//     );
//     return Spinner;
// };


export default WithSpinner;

