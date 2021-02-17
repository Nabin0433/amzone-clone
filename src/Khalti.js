import axios from "axios";
import KhaltiCheckout from "khalti-checkout-web";

function khaltiTransit(amount, token) {
  console.log(token,amount);
    axios
      .post(
        "https://khalti.com/api/v2/payment/verify/",
        {
          token: token,
          amount: amount,
        },
        {
          headers: {
            "Content-Type":"application/json",
            "Authorization" :
              "Key test_secret_key_3fc1f9fa37544a7088fa04e9f9eabba5"
          }
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
};


let config = {
  // replace this key with yours
  publicKey: "test_public_key_427a9704add7428ea85995c36e2767cc",
  productIdentity: "purchaseyooooo",
  productName: "amazoppurchase",
  productUrl: "http://gameofthrones.com/buy/Dragons",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload.token);
      khaltiTransit(payload.amount, payload.token);
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

const checkout = new KhaltiCheckout(config);

export default checkout;
