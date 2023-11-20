import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


// add publishable key
const stripePromise = loadStripe('');
const Payment = () => {
    return (
        <div className="px-24 flex flex-col h-full justify-center items-center">
            <h1 className="text-5xl text-center uppercase font-semibold">Payment</h1>
            <div>
                <Elements stripe={stripePromise}>

                </Elements>
            </div>
        </div>
    );
};

export default Payment;