import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  InquiryFormData,
  inquiryFormSchema,
  inquiryTypeOptions,
  propertyTypeOptions,
  userTypeOptions,
} from "../../types/inquiry";
import FormInput from "../shared/FormInput";

const PropertyInquiry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquiryFormSchema),
  });

  const onSubmit = async (data: InquiryFormData) => {
    // This will be replaced with actual API call later
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
  };

  return (
    <section className="relative py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3)",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Find Your Dream Property
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Let us help you find the perfect property that matches your needs.
              Fill out the form and our team of experts will get back to you
              shortly.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-500">
                  ✓
                </span>
                <span>Professional guidance throughout the process</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-500">
                  ✓
                </span>
                <span>Access to exclusive property listings</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-500">
                  ✓
                </span>
                <span>Personalized property recommendations</span>
              </li>
            </ul>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Property Inquiry Form
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Inquiry Type & User Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="Inquiry Type"
                  name="inquiryType"
                  type="select"
                  options={inquiryTypeOptions}
                  register={register}
                  error={errors.inquiryType}
                />
                <FormInput
                  label="I'm a"
                  name="userType"
                  type="select"
                  options={userTypeOptions}
                  register={register}
                  error={errors.userType}
                />
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="First Name"
                  name="firstName"
                  register={register}
                  error={errors.firstName}
                />
                <FormInput
                  label="Last Name"
                  name="lastName"
                  register={register}
                  error={errors.lastName}
                />
              </div>

              {/* Email */}
              <FormInput
                label="Email Address"
                name="email"
                type="email"
                register={register}
                error={errors.email}
              />

              {/* Location Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="City"
                  name="city"
                  register={register}
                  error={errors.city}
                />
                <FormInput
                  label="ZIP Code"
                  name="zipCode"
                  register={register}
                  error={errors.zipCode}
                />
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="Property Type"
                  name="propertyType"
                  type="select"
                  options={propertyTypeOptions}
                  register={register}
                  error={errors.propertyType}
                />
                <FormInput
                  label="Max Price"
                  name="maxPrice"
                  type="number"
                  register={register}
                  error={errors.maxPrice}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="Minimum Size (sqft)"
                  name="minSize"
                  type="number"
                  register={register}
                  error={errors.minSize}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label="Beds"
                    name="beds"
                    type="number"
                    register={register}
                    error={errors.beds}
                  />
                  <FormInput
                    label="Baths"
                    name="baths"
                    type="number"
                    register={register}
                    error={errors.baths}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-400"
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyInquiry;
