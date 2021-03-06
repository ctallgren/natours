/* es-lint-disable */
import axios from "axios";
import { showAlert } from "./alerts";
const stripe = Stripe(
  "pk_test_51L8HWmH8wDrQ157NszA5odkWNjJLl0djWNCNg3cAxJNLaLLkuHyJ9mOYljkI41THGTg5Xb8a3C2XwoLWXeuKylb000T7ezNi82"
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from endpoint (API)
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert("error", err);
  }
};
