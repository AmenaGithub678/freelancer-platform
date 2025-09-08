import React from 'react';

const Works = () => {
    return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <h2 className="text-3xl text-[#AD56C4] font-bold text-center mb-12">How It Works</h2>
    <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
   {/* Left side steps */}
     <div className="lg:py-6 lg:pr-16">
                    
                    {/* Step 1 */}
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <span className="font-bold text-gray-600">1</span>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
      <div className="pt-1 pb-8">
   <p className="mb-2 text-lg  text-[#AD56C4] font-bold">Create Your Account</p>
   <p className="text-[#FF9CE9]">
        Sign up with email or Google to join the platform and personalize your profile.
                            </p>
                        </div>
                    </div>

  {/* Step 2 */}
  <div className="flex">
  <div className="flex flex-col items-center mr-4">
  <div>
  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
<span className="font-bold text-gray-600">2</span>
 </div>
               </div>
      <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="pt-1 pb-8">
              <p className="mb-2 text-lg  text-[#AD56C4] font-bold">Post or Discover Tasks</p>
  <p className="text-[#FF9CE9]">
                                Clients add tasks with budget & deadline. Freelancers browse tasks that match their skills.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <span className="font-bold text-gray-600">3</span>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg  text-[#AD56C4] font-bold">Bid & Collaborate</p>
                            <p className="text-[#FF9CE9]">
                                Freelancers place bids, and clients review proposals to pick the best fit.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <span className="font-bold text-gray-600">4</span>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg  text-[#AD56C4] font-bold">Manage Your Work</p>
                            <p className="text-[#FF9CE9]">
                                Clients update or delete tasks and check bids. Freelancers track their bids easily.
                            </p>
                        </div>
                    </div>

                    {/* Success */}
          <div className="flex">
           <div className="flex flex-col items-center mr-4">
          <div>
        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
         <svg
                                        className="w-6 text-green-600"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
  <polyline
                                            fill="none"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            points="6,12 10,16 18,8"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="pt-1">
        <p className="mb-2 text-lg  text-[#AD56C4] font-bold">Get Things Done </p>
     <p className="text-[#FF9CE9]">
      Clients complete tasks stress-free, freelancers earn money & grow their portfolio.
                            </p>
                        </div>
                    </div>
    </div>

   {/* Right side image */}
      <div className="relative">
      <img
         className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
        src="https://i.ibb.co.com/ZRShXXYF/undraw-pair-programming-9jyg.png"
                        alt="Freelance work process"
                    />
      </div>
            </div>
        </div>
    );
};

export default Works;
