import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOut from './CheckOut';


// add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div className="px-24 relative top-[50%] bottom-[50%] translate-y-[-50%]">
            <h1 className="text-5xl text-center uppercase font-semibold py-8">Payment</h1>
            <div className=''>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;