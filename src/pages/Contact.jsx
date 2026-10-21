
import React from "react";
import { Container } from "../components";
import { useForm } from "react-hook-form";
import { Input } from "../components";

function Contact() {
  const {register , handleSubmit, reset, } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("Thanks for contacting ShopZone!");
    reset();
  };

  return (
    <Container>
      <main className="mx-auto max-w-[1200px] px-5 py-10">

        {/* Get in Touch Hero */}
        <section className="grid items-center gap-6 overflow-hidden rounded-xl bg-gray-100 md:grid-cols-2">
          <div className="p-6 md:p-10">
            <p className="text-sm font-medium text-gray-500">
              WE'RE HERE TO HELP
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Get in Touch
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Have a question about our products or your order?
              Send us a message and we'll be happy to help.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80"
            alt="ShopZone fashion store"
            className="h-64 w-full object-cover md:h-72"
          />
        </section>

        {/* Contact Section */}
        <section className="grid gap-8 py-12 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-xl border border-gray-200 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900">
              Contact Information
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Have questions about our products or need help
              with shopping? Feel free to reach out to us.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Email Address
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  support@shopzone.com
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Working Hours
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Sunday – Friday, 9 AM – 5 PM
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Customer Support
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  We're happy to help with your questions
                  and shopping experience.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-xl border border-gray-200 p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Fill out the form below.
            </p>

            <div className="mt-6 space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Your Name
                </label>

                <Input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  className="w-full rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-gray-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className="w-full rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-gray-500"
                />

              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Subject
                </label>

                <Input
                  type="text"
                  placeholder="What is this about?"
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                  className="w-full rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-gray-500"
                />

              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  className="w-full resize-y rounded-md border border-gray-200 px-3 py-3 text-sm outline-none focus:border-gray-500"
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
              >
                Send Message →
              </button>

            </div>
          </form>

        </section>
      </main>
    </Container>
  );
}

export default Contact;
