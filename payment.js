var payment = {
  "intent": "sale",
  "payer": {
    "payment_method": "paypal"
  },
  "redirect_urls": {
    "return_url": "https://www.youtube.com",
    "cancel_url": "https://www.google.com"
  },
  "transactions": [{
    "amount": {
      "total": "1.00",
      "currency": "USD"
    },
    "description": "My payment"
  }]
};