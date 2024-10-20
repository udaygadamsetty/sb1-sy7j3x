import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="mb-2">© 2023 FastTrack. Your own AI-Enabled Recruitment Portal</p>
          <p className="text-xs">Powered by Apperion Software Solutions LLC</p>
          <p className="text-xs mt-2">
            <a href="https://www.flaticon.com/free-icons/job-offer" title="job offer icons" className="text-blue-400 hover:underline">
              Job offer icons created by Freepik - Flaticon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;