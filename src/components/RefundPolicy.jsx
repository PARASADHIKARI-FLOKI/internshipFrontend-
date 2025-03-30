import { div } from "framer-motion/client";
import React from "react";

const RefundPolicy = () => {
  return (
    <div className="bg-white">
    <div className="max-w-6xl mx-auto my-10 p-6 rounded-lg border-l-2 border-black mt-32">
      <h1 className="text-2xl font-bold text-black mb-4">No Refund Policy</h1>
      
      <p className="text-gray-700 mb-4">
        There is a <strong>strict no refund & no cancellation policy.</strong> You are entitled to a refund only if 
        the course has <strong>not been allotted</strong> after payment.
      </p>

      <ul className="list-none text-gray-700 space-y-2">
        <li><strong>Non-negotiable:</strong> The institute does not offer refunds under any circumstances.</li>
        <li><strong>Administrative Streamlining:</strong> Helps the institute avoid the administrative burden and costs associated with processing refunds.</li>
        <li><strong>Commitment Encouragement:</strong> Encourages students to commit fully to the course, reducing impulsive enrollments.</li>
        <li><strong>Resource Allocation:</strong> Ensures that once course materials and resources are provided or accessed, they cannot be retracted or redistributed.</li>
      </ul>
    </div>
    </div >
  );
};

export default RefundPolicy;
