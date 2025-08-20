import Order from "./Order";
import BillingForm from "./BillingForm";

export default function CheckoutPage() {

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Section */}
              <BillingForm></BillingForm>

                {/* Right Section */}
                <Order></Order>
            </div>
        </div>
    );
}
