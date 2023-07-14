import KhaltiCheckout from 'khalti-checkout-web';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let config = {
    // replace this key with yours
    "publicKey": "test_public_key_868c99738dfa4758916ac618368abc75",
    "productIdentity": "1234567890",
    "productName": "Drogon",
    "productUrl": "http://gameofthrones.com/buy/Dragons",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            toast.success("Payment Sucessful")
            console.log(payload);
           
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

const CheckoutButton = () => {

  const handlePayment = () => {
    const checkout = new KhaltiCheckout(config);
    
    checkout.show({ amount: 1000 });
    
    // Set the payment amount
  };

  return (
    <>
    <button onClick={handlePayment}
    className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg">
      Pay with Khalti
    </button>
    <ToastContainer />
    </>
    
    
  );
};

export default CheckoutButton;