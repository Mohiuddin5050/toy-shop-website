import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Get in Touch</h3>
          <p className="text-gray-600">
            Have questions or need help? We’d love to hear from you.  
          </p>

          <div className="space-y-3">
            <p><b>Email:</b> support@example.com</p>
            <p><b>Phone:</b> +880 1234 567 890</p>
            <p><b>Address:</b> Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="card bg-base-100 shadow p-6 space-y-4">
          <div className="form-control">
            <label className="label font-semibold">Your Name</label>
            <input type="text" className="input input-bordered" placeholder="Enter your name" />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Your Email</label>
            <input type="email" className="input input-bordered" placeholder="Enter your email" />
          </div>

         

          <div className="form-control">
            <label className="label font-semibold">Message</label>
            <textarea className="textarea textarea-bordered" placeholder="Write your message"></textarea>
          </div>

          <button className="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
