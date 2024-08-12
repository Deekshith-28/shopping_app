import React from 'react'
import swal from "sweetalert";


const Payment = (amount) => {

    let url = `https://shopping-app-tcbd.vercel.app/payment/order`

    function HandleRazorpay(data) {

        let options = {
            key: "rzp_test_zcbYS3QLAfNroe",
            amount: +data.amount,
            currency: data.currency,
            order_id: data.id,
            name: "Shopping App",
            handler: function (response) {

                let Url = `https://shopping-app-tcbd.vercel.app/payment/verify`

                fetch(Url, {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': localStorage.getItem("token")
                    },
                    method: "POST",
                    body: JSON.stringify({ response })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.message == "payment Varified sucessfull") {
                            swal(" Verified", " sucessfully Verified !", "success")

                        } else {
                            swal(" Verified", " Verified failed !", "warning")
                        }
                    })
            },

        }
        let rzp = new window.Razorpay(options);
        rzp.open()
    }

    fetch(url, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': localStorage.getItem("token")
        },
        method: "POST",
        body: JSON.stringify({ amount })
    })
        .then(res => res.json())
        .then(data => {

            HandleRazorpay(data)
        })
}

export default Payment
