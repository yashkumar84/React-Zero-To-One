export const initiateRazorpayPayment = (
  amount: number,
  name: string,
  email: string
) => {
  const options = {
    key: "rzp_test_74bRZhcHKgd9SR", // Enter the Key ID generated from the Dashboard
    amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "SmartCart",
    description: "Order Payment",

    handler: function (response: any) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name,
      email,
    },
    notes: {
      address: "Hello ",
    },
    theme: {
      color: "#3399cc",
    },
  };
  const rzp = new (window as any).Razorpay(options);

  rzp.open();
};
