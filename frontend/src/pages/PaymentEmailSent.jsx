// import namaste from "../assets/images/namaste.jpg";

// export default function PaymentEmailSent() {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//       <div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg text-center relative">
//         <button
//           //   onClick={() => {
//           //     setServices([]);
//           //     navigate("/");
//           //   }}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
//         >
//           &times;
//         </button>
//         <h2 className="text-2xl font-semibold text-gray-900">
//           Payment Email Sent
//         </h2>
//         <div className="flex justify-center h-20 my-6">
//           <img
//             src={namaste}
//             alt="namaste"
//             className="w-20 h-full object-cover"
//           />
//         </div>
//         <p className="text-gray-700 text-lg">
//           Thank you for booking a service with Daiv-Prashna. Please check your
//           email and WhatsApp for the payment details. Your booking will be
//           confirmed once we receive your payment.
//         </p>
//         <p className="text-gray-700 text-lg py-4">
//           दैवप्रश्न के साथ एक सेवा बुक करने के लिए धन्यवाद। कृपया भुगतान विवरण
//           के लिए अपने ईमेल और व्हाट्सएप की जाँच करें। आपके भुगतान प्राप्त होने
//           के बाद आपकी बुकिंग की पुष्टि हो जाएगी।
//         </p>
//         <p className="text-gray-700 text-lg">
//           दिव्यतायाः सह सेवां बुकं कृत्वा धन्यवादः। कृपया भुगतानविवरणार्थं कृपया
//           स्वस्य ईमेलं व्हाट्सएप् च पश्यन्तु। भवतः भुगतानस्य प्राप्तेः अनन्तरं
//           भवतः बुकिंगस्य पुष्टिः भविष्यति।
//         </p>
//       </div>
//     </div>
//   );
// }
import namaste from "../assets/images/namaste.jpg";

export default function PaymentEmailSent() {
  return (
    <div className="min-h-screen bg-[rgb(255,255,240)] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Payment Email Sent
        </h1>

        <div className="flex justify-center mb-8">
          <img
            src={namaste}
            alt="namaste"
            className="w-24 h-24 object-cover rounded-full shadow-md"
          />
        </div>

        <p className="text-gray-700 text-lg md:text-xl mb-6">
          Thank you for booking a service with{" "}
          <span className="font-semibold">Daiv-Prashna</span>. Please check your
          email and WhatsApp for the payment details. Your booking will be
          confirmed once we receive your payment.
        </p>

        <p className="text-gray-700 text-lg md:text-xl mb-4">
          दैवप्रश्न के साथ एक सेवा बुक करने के लिए धन्यवाद। कृपया भुगतान विवरण
          के लिए अपने ईमेल और व्हाट्सएप की जाँच करें। आपके भुगतान प्राप्त होने
          के बाद आपकी बुकिंग की पुष्टि हो जाएगी।
        </p>

        <p className="text-gray-700 text-lg md:text-xl">
          दिव्यतायाः सह सेवां बुकं कृत्वा धन्यवादः। कृपया भुगतानविवरणार्थं कृपया
          स्वस्य ईमेलं व्हाट्सएप् च पश्यन्तु। भवतः भुगतानस्य प्राप्तेः अनन्तरं
          भवतः बुकिंगस्य पुष्टिः भविष्यति।
        </p>
      </div>
    </div>
  );
}
