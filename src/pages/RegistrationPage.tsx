import React, { useState } from "react";

const initialState = {
  name: "",
  contact: "",
  email: "",
  college: "",
  year: "",
  branch: "",
};

const RegistrationPage: React.FC = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const newErrors: any = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.contact.trim() || !/^\d{10}$/.test(form.contact))
      newErrors.contact = "Valid 10-digit contact number required";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Valid email required";
    if (!form.college.trim()) newErrors.college = "College name is required";
    if (!form.year.trim()) newErrors.year = "Year of study is required";
    if (!form.branch.trim()) newErrors.branch = "Branch is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setSubmitted(true);
    // Here you would handle payment or saving data
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#151522] to-[#0D0D1F] py-16 px-4">
      <div className="w-full max-w-lg bg-[#121212]/90 rounded-2xl shadow-xl border border-[#A259FF]/20 p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-['Space_Grotesk']">
          Event Registration
        </h1>
        {submitted ? (
          <div className="text-center text-[#A259FF] text-xl font-semibold py-12">
            Registration submitted! (Payment integration coming soon)
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#CCCCCC] mb-2 font-medium">
                Name of Participant
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#151522] border border-[#A259FF]/30 text-white focus:outline-none focus:border-[#A259FF]"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-[#CCCCCC] mb-2 font-medium">
                Contact Number
              </label>
              <input
                type="tel"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#151522] border border-[#A259FF]/30 text-white focus:outline-none focus:border-[#A259FF]"
                placeholder="10-digit mobile number"
                maxLength={10}
              />
              {errors.contact && (
                <p className="text-red-400 text-sm mt-1">{errors.contact}</p>
              )}
            </div>
            <div>
              <label className="block text-[#CCCCCC] mb-2 font-medium">
                Email ID
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#151522] border border-[#A259FF]/30 text-white focus:outline-none focus:border-[#A259FF]"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-[#CCCCCC] mb-2 font-medium">
                College Name
              </label>
              <input
                type="text"
                name="college"
                value={form.college}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#151522] border border-[#A259FF]/30 text-white focus:outline-none focus:border-[#A259FF]"
                placeholder="Enter your college name"
              />
              {errors.college && (
                <p className="text-red-400 text-sm mt-1">{errors.college}</p>
              )}
            </div>
            <div>
              <label className="block text-[#CCCCCC] mb-2 font-medium">
                Year of Study
              </label>
              <select
                name="year"
                value={form.year}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#151522] border border-[#A259FF]/30 text-white focus:outline-none focus:border-[#A259FF]"
              >
                <option value="">Select year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Other">Other</option>
              </select>
              {errors.year && (
                <p className="text-red-400 text-sm mt-1">{errors.year}</p>
              )}
            </div>
            <div>
              <label className="block text-[#CCCCCC] mb-2 font-medium">
                Branch (Field of Study)
              </label>
              <input
                type="text"
                name="branch"
                value={form.branch}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#151522] border border-[#A259FF]/30 text-white focus:outline-none focus:border-[#A259FF]"
                placeholder="e.g. Computer Engineering"
              />
              {errors.branch && (
                <p className="text-red-400 text-sm mt-1">{errors.branch}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full btn-primary py-3 text-lg font-semibold rounded-full mt-4 transition-all duration-300"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;
