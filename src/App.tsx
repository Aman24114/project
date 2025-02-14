import React, { useState } from 'react';
import { Calendar, ChevronDown, Upload } from 'lucide-react';

interface FormData {
  step: number;
  basicDetails: {
    fullName: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    countryCode: string;
    phoneNumber: string;
    nationality: string;
    race: string;
  };
  educationalDetails: {
    education: Array<{
      degree: string;
      institute: string;
      graduationYear: string;
      fieldOfStudy: string;
    }>;
    certificates: Array<{
      name: string;
      dateOfIssue: string;
      description: string;
    }>;
  };
  addressDetails: Array<{
    streetAddress: string;
    city: string;
    stateProvince: string;
    postalCode: string;
    country: string;
  }>;
}

const initialFormData: FormData = {
  step: 1,
  basicDetails: {
    fullName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    countryCode: '',
    phoneNumber: '',
    nationality: '',
    race: '',
  },
  educationalDetails: {
    education: [
      {
        degree: '',
        institute: '',
        graduationYear: '',
        fieldOfStudy: '',
      },
    ],
    certificates: [
      {
        name: '',
        dateOfIssue: '',
        description: '',
      },
    ],
  },
  addressDetails: [
    {
      streetAddress: '',
      city: '',
      stateProvince: '',
      postalCode: '',
      country: '',
    },
  ],
};

function App() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleBasicDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      basicDetails: {
        ...prev.basicDetails,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleEducationChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newEducation = [...formData.educationalDetails.education];
    newEducation[index] = {
      ...newEducation[index],
      [e.target.name]: e.target.value,
    };
    setFormData((prev) => ({
      ...prev,
      educationalDetails: {
        ...prev.educationalDetails,
        education: newEducation,
      },
    }));
  };

  const handleCertificateChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newCertificates = [...formData.educationalDetails.certificates];
    newCertificates[index] = {
      ...newCertificates[index],
      [e.target.name]: e.target.value,
    };
    setFormData((prev) => ({
      ...prev,
      educationalDetails: {
        ...prev.educationalDetails,
        certificates: newCertificates,
      },
    }));
  };

  const handleAddressChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newAddresses = [...formData.addressDetails];
    newAddresses[index] = {
      ...newAddresses[index],
      [e.target.name]: e.target.value,
    };
    setFormData((prev) => ({
      ...prev,
      addressDetails: newAddresses,
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      educationalDetails: {
        ...prev.educationalDetails,
        education: [
          ...prev.educationalDetails.education,
          { degree: '', institute: '', graduationYear: '', fieldOfStudy: '' },
        ],
      },
    }));
  };

  const addCertificate = () => {
    setFormData((prev) => ({
      ...prev,
      educationalDetails: {
        ...prev.educationalDetails,
        certificates: [
          ...prev.educationalDetails.certificates,
          { name: '', dateOfIssue: '', description: '' },
        ],
      },
    }));
  };

  const addAddress = () => {
    setFormData((prev) => ({
      ...prev,
      addressDetails: [
        ...prev.addressDetails,
        { streetAddress: '', city: '', stateProvince: '', postalCode: '', country: '' },
      ],
    }));
  };

  const nextStep = () => {
    setFormData((prev) => ({ ...prev, step: prev.step + 1 }));
  };

  const prevStep = () => {
    setFormData((prev) => ({ ...prev, step: prev.step - 1 }));
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-8">Sign Up</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className={`step-indicator ${formData.step >= 1 ? 'step-active' : 'step-inactive'}`}>
            1
          </div>
          <div className="step-line"></div>
          <div className={`step-indicator ${formData.step >= 2 ? 'step-active' : 'step-inactive'}`}>
            2
          </div>
          <div className="step-line"></div>
          <div className={`step-indicator ${formData.step === 3 ? 'step-active' : 'step-inactive'}`}>
            3
          </div>
        </div>

        <div className="flex justify-center space-x-8 text-sm mb-8">
          <span className={formData.step === 1 ? 'text-primary font-medium' : 'text-gray-600'}>
            Basic Details
          </span>
          <span className={formData.step === 2 ? 'text-primary font-medium' : 'text-gray-600'}>
            Educational Details
          </span>
          <span className={formData.step === 3 ? 'text-primary font-medium' : 'text-gray-600'}>
            Address Details
          </span>
        </div>

        {formData.step === 1 && (
          <div className="bg-form-bg p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Basic Details</h2>
            <div className="space-y-4">
              <div>
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter Full Name"
                  className="form-input"
                  value={formData.basicDetails.fullName}
                  onChange={handleBasicDetailsChange}
                />
              </div>

              <div>
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="form-input"
                  value={formData.basicDetails.email}
                  onChange={handleBasicDetailsChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Date of birth</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="dateOfBirth"
                      placeholder="DD/MM/YYYY"
                      className="form-input"
                      value={formData.basicDetails.dateOfBirth}
                      onChange={handleBasicDetailsChange}
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div>
                  <label className="form-label">Gender</label>
                  <div className="relative">
                    <select
                      name="gender"
                      className="form-select"
                      value={formData.basicDetails.gender}
                      onChange={handleBasicDetailsChange}
                    >
                      <option value="">--select--</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Country code</label>
                  <div className="relative">
                    <select
                      name="countryCode"
                      className="form-select"
                      value={formData.basicDetails.countryCode}
                      onChange={handleBasicDetailsChange}
                    >
                      <option value="">--select--</option>
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+91">+91 (IN)</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div>
                  <label className="form-label">Phone number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    className="form-input"
                    value={formData.basicDetails.phoneNumber}
                    onChange={handleBasicDetailsChange}
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Nationality</label>
                <div className="relative">
                  <select
                    name="nationality"
                    className="form-select"
                    value={formData.basicDetails.nationality}
                    onChange={handleBasicDetailsChange}
                  >
                    <option value="">--select--</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="in">India</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div>
                <label className="form-label">Race</label>
                <div className="relative">
                  <select
                    name="race"
                    className="form-select"
                    value={formData.basicDetails.race}
                    onChange={handleBasicDetailsChange}
                  >
                    <option value="">--select--</option>
                    <option value="asian">Asian</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="hispanic">Hispanic</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={nextStep}
                className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Save and Continue
              </button>
            </div>
          </div>
        )}

        {formData.step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">Educational Details</h2>

            {formData.educationalDetails.education.map((edu, index) => (
              <div key={index} className="bg-form-bg p-8 rounded-lg space-y-4">
                <div>
                  <label className="form-label">Degree/Qualification</label>
                  <div className="relative">
                    <select
                      name="degree"
                      className="form-select"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, e)}
                    >
                      <option value="">--select--</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="phd">Ph.D.</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Institute Name</label>
                    <div className="relative">
                      <select
                        name="institute"
                        className="form-select"
                        value={edu.institute}
                        onChange={(e) => handleEducationChange(index, e)}
                      >
                        <option value="">--select--</option>
                        <option value="mit">MIT</option>
                        <option value="stanford">Stanford</option>
                        <option value="harvard">Harvard</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Year of graduation</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="graduationYear"
                        placeholder="YYYY"
                        className="form-input"
                        value={edu.graduationYear}
                        onChange={(e) => handleEducationChange(index, e)}
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="form-label">Field of study</label>
                  <div className="relative">
                    <select
                      name="fieldOfStudy"
                      className="form-select"
                      value={edu.fieldOfStudy}
                      onChange={(e) => handleEducationChange(index, e)}
                    >
                      <option value="">--select--</option>
                      <option value="cs">Computer Science</option>
                      <option value="engineering">Engineering</option>
                      <option value="business">Business</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button className="text-gray-600 hover:text-gray-800">Cancel</button>
                  <button className="text-primary hover:text-primary/80">Save</button>
                </div>
              </div>
            ))}

            <button
              onClick={addEducation}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              + Add Another Education
            </button>

            {formData.educationalDetails.certificates.map((cert, index) => (
              <div key={index} className="bg-form-bg p-8 rounded-lg space-y-4 mt-6">
                <div>
                  <label className="form-label">Certificate name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    className="form-input"
                    value={cert.name}
                    onChange={(e) => handleCertificateChange(index, e)}
                  />
                </div>

                <div>
                  <label className="form-label">Date of issue</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="dateOfIssue"
                      placeholder="DD/MM/YYYY"
                      className="form-input"
                      value={cert.dateOfIssue}
                      onChange={(e) => handleCertificateChange(index, e)}
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div>
                  <label className="form-label">Description</label>
                  <textarea
                    name="description"
                    placeholder="Enter text"
                    className="form-input min-h-[100px]"
                    value={cert.description}
                    onChange={(e) => handleCertificateChange(index, e)}
                  ></textarea>
                </div>

                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-primary hover:text-primary/80">
                    <Upload className="w-4 h-4" />
                    <span>Upload</span>
                  </button>

                  <div className="flex-1"></div>

                  <button className="text-gray-600 hover:text-gray-800">Cancel</button>
                  <button className="text-primary hover:text-primary/80">Save</button>
                </div>
              </div>
            ))}

            <button
              onClick={addCertificate}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              + Add Another Certificate
            </button>

            <div className="mt-8 flex justify-center">
              <button
                onClick={nextStep}
                className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Save and Continue
              </button>
            </div>
          </div>
        )}

        {formData.step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Address Details</h2>

            {formData.addressDetails.map((address, index) => (
              <div key={index} className="bg-form-bg p-8 rounded-lg space-y-4 mb-6">
                <div>
                  <label className="form-label">Street Address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    placeholder="Enter Street Address"
                    className="form-input"
                    value={address.streetAddress}
                    onChange={(e) => handleAddressChange(index, e)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">City</label>
                    <div className="relative">
                      <select
                        name="city"
                        className="form-select"
                        value={address.city}
                        onChange={(e) => handleAddressChange(index, e)}
                      >
                        <option value="">--select--</option>
                        <option value="newyork">New York</option>
                        <option value="london">London</option>
                        <option value="tokyo">Tokyo</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">State/Province</label>
                    <div className="relative">
                      <select
                        name="stateProvince"
                        className="form-select"
                        value={address.stateProvince}
                        onChange={(e) => handleAddressChange(index, e)}
                      >
                        <option value="">--select--</option>
                        <option value="ny">New York</option>
                        <option value="ca">California</option>
                        <option value="tx">Texas</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Postal code</label>
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="000000"
                      className="form-input"
                      value={address.postalCode}
                      onChange={(e) => handleAddressChange(index, e)}
                    />
                  </div>

                  <div>
                    <label className="form-label">Country</label>
                    <div className="relative">
                      <select
                        name="country"
                        className="form-select"
                        value={address.country}
                        onChange={(e) => handleAddressChange(index, e)}
                      >
                        <option value="">--select--</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="jp">Japan</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button className="text-gray-600 hover:text-gray-800">Cancel</button>
                  <button className="text-primary hover:text-primary/80">Save</button>
                </div>
              </div>
            ))}

            <button
              onClick={addAddress}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              + Add Another Address
            </button>

            <div className="mt-8 flex justify-center">
              <button
                onClick={prevStep}
                className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
