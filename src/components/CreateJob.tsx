import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateJob: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: '',
    numberOfPeople: '1',
    jobLocationType: 'In-person, within a limited area',
    zipCode: '',
    streetAddress: '',
    workAuthorization: false,
    willingnessToRelocate: false,
    jobType: [],
    schedule: [],
    payType: 'Range',
    payMinimum: '',
    payMaximum: '',
    payRate: 'per hour',
    expectedHours: 'Fixed hours',
    fixedHours: '',
    supplementalPay: [],
    benefits: [],
    jobDescription: '',
    communicationPreferences: {
      email: '',
      sendDailyUpdates: false,
      allowCandidateContact: false
    },
    applicationPreferences: {
      resumeOption: 'Give the option to include a resume',
      criminalRecordPolicy: false,
      backgroundCheck: ''
    },
    hireSettings: {
      hiringTimeline: ''
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleMultiSelectChange = (name: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: prevState[name].includes(value)
        ? prevState[name].filter((item: string) => item !== value)
        : [...prevState[name], value]
    }));
  };

  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting job posting:', formData);
    navigate('/jobs');
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const renderStep1 = () => (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Add job basics</h2>
      </div>
      <div className="mb-4">
        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-300 mb-1">Job title*</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleInputChange}
          className="w-full bg-gray-800 text-white p-2 rounded-md"
          placeholder="Pre School teacher"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-300 mb-1">Number of people to hire for this job*</label>
        <select
          id="numberOfPeople"
          name="numberOfPeople"
          value={formData.numberOfPeople}
          onChange={handleInputChange}
          className="w-full bg-gray-800 text-white p-2 rounded-md"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="jobLocationType" className="block text-sm font-medium text-gray-300 mb-1">Job location type*</label>
        <select
          id="jobLocationType"
          name="jobLocationType"
          value={formData.jobLocationType}
          onChange={handleInputChange}
          className="w-full bg-gray-800 text-white p-2 rounded-md"
        >
          <option value="In-person, within a limited area">In-person, within a limited area</option>
          <option value="In person - precise location">In person - precise location</option>
          <option value="Fully remote: no on-site work required">Fully remote: no on-site work required</option>
          <option value="Hybrid: some on-site work required">Hybrid: some on-site work required</option>
          <option value="On the road">On the road</option>
        </select>
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Add job details</h2>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-white mb-2">Job type*</h3>
        <div className="flex flex-wrap gap-2">
          {['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship'].map(type => (
            <button
              key={type}
              onClick={() => handleMultiSelectChange('jobType', type)}
              className={`px-3 py-1 rounded-full text-sm ${
                formData.jobType.includes(type)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-white mb-2">Schedule</h3>
        <div className="flex flex-wrap gap-2">
          {[
            '4 hour shift', '8 hour shift', '10 hour shift', '12 hour shift',
            'Monday to Friday', 'Day shift', 'Night shift', 'Evening shift',
            'No nights', 'Overnight shift', 'Weekends as needed', 'Weekends only',
            'No weekends', 'On call', 'Holidays', 'Choose your own hours',
            'After school', 'Overtime', 'Other'
          ].map(schedule => (
            <button
              key={schedule}
              onClick={() => handleMultiSelectChange('schedule', schedule)}
              className={`px-3 py-1 rounded-full text-sm ${
                formData.schedule.includes(schedule)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
            >
              {schedule}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Add pay and benefits</h2>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-white mb-2">Pay</h3>
        <div className="flex items-center space-x-4 mb-2">
          <select
            name="payType"
            value={formData.payType}
            onChange={handleInputChange}
            className="bg-gray-800 text-white p-2 rounded-md"
          >
            <option value="Range">Range</option>
            <option value="Starting amount">Starting amount</option>
            <option value="Maximum amount">Maximum amount</option>
            <option value="Exact amount">Exact amount</option>
          </select>
          <input
            type="text"
            name="payMinimum"
            value={formData.payMinimum}
            onChange={handleInputChange}
            placeholder="Minimum"
            className="bg-gray-800 text-white p-2 rounded-md w-24"
          />
          {formData.payType === 'Range' && (
            <input
              type="text"
              name="payMaximum"
              value={formData.payMaximum}
              onChange={handleInputChange}
              placeholder="Maximum"
              className="bg-gray-800 text-white p-2 rounded-md w-24"
            />
          )}
          <select
            name="payRate"
            value={formData.payRate}
            onChange={handleInputChange}
            className="bg-gray-800 text-white p-2 rounded-md"
          >
            <option value="per hour">per hour</option>
            <option value="per day">per day</option>
            <option value="per week">per week</option>
            <option value="per month">per month</option>
            <option value="per year">per year</option>
          </select>
        </div>
      </div>
    </>
  );

  const renderStep4 = () => (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Describe the job</h2>
      </div>
      <div className="mb-4">
        <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-300 mb-1">Job description*</label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleInputChange}
          className="w-full bg-gray-800 text-white p-2 rounded-md"
          rows={6}
          placeholder="Describe the responsibilities, skills, experience and work environment related to this job"
        />
      </div>
    </>
  );

  const renderStep5 = () => (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Set preferences</h2>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-white mb-2">Communication preferences</h3>
        <input
          type="email"
          name="email"
          value={formData.communicationPreferences.email}
          onChange={(e) => setFormData(prev => ({ ...prev, communicationPreferences: { ...prev.communicationPreferences, email: e.target.value } }))}
          className="w-full bg-gray-800 text-white p-2 rounded-md mb-2"
          placeholder="Email for daily updates"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="sendDailyUpdates"
            checked={formData.communicationPreferences.sendDailyUpdates}
            onChange={(e) => setFormData(prev => ({ ...prev, communicationPreferences: { ...prev.communicationPreferences, sendDailyUpdates: e.target.checked } }))}
            className="form-checkbox text-blue-600"
          />
          <span className="text-gray-300">Send daily updates</span>
        </label>
      </div>
    </>
  );

  const renderStep6 = () => (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Review</h2>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
        <p className="font-bold">Job post has missing information</p>
        <p>To improve this post, add information that's important to people applying.</p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-white">Job details</h3>
          <p className="text-gray-300">Job title: {formData.jobTitle}</p>
          <p className="text-gray-300">Company: Apperion Software Solution</p>
          <p className="text-gray-300">Number of openings: {formData.numberOfPeople}</p>
          <p className="text-gray-300">Location: {formData.zipCode || formData.streetAddress}</p>
          <p className="text-gray-300">Job type: {formData.jobType.join(', ')}</p>
          <p className="text-gray-300">Schedule: {formData.schedule.join(', ')}</p>
          <p className="text-gray-300">Pay: ${formData.payMinimum} - ${formData.payMaximum} {formData.payRate}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white">Job description</h3>
          <p className="text-gray-300">{formData.jobDescription}</p>
        </div>
      </div>
    </>
  );

  const renderPreview = () => (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Job Preview</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{formData.jobTitle}</h3>
          <p>Apperion Software Solution - {formData.zipCode || formData.streetAddress}</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold">Job details</h4>
          <p>Salary: ${formData.payMinimum} - ${formData.payMaximum} {formData.payRate}</p>
          <p>Job Type: {formData.jobType.join(', ')}</p>
          <p>Number of openings: {formData.numberOfPeople}</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold">Full Job Description</h4>
          <p>{formData.jobDescription}</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold">Schedule</h4>
          <ul>
            {formData.schedule.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={togglePreview}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Close Preview
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 gradient-text">Create Job Posting</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
          {step === 5 && renderStep5()}
          {step === 6 && renderStep6()}

          <div className="mt-6 flex justify-between items-center">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
              >
                <ChevronLeft size={20} className="inline mr-2" />
                Back
              </button>
            )}
            {step < 6 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ml-auto"
              >
                Continue
                <ChevronRight size={20} className="inline ml-2" />
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={togglePreview}
                  className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
                >
                  <Eye size={20} className="inline mr-2" />
                  Preview
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
                >
                  Submit Job Posting
                </button>
              </>
            )}
          </div>
        </form>
      </div>
      {showPreview && renderPreview()}
    </div>
  );
};

export default CreateJob;