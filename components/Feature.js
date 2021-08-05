import Image from 'next/image';

function Feature() {
  return (
    <div
      className="max-w-screen-xl px-6 mx-auto mt-8 mb-6 sm:mt-14 sm:px-8 lg:px-16"
      id="feature"
    >
      <div className="grid grid-flow-row grid-cols-1 gap-8 py-8 my-12 sm:grid-flow-col sm:grid-cols-2">
        <div className="flex justify-end w-full ">
          <div className="w-full h-auto p-4">
            <Image
              src="/assets/Illustration2.png"
              width={508}
              height={414}
              quality={100}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center w-full ml-auto lg:w-9/12">
          <h3 className="text-3xl font-medium leading-relaxed lg:text-4xl text-black-600">
            We Provide Many Features You Can Use
          </h3>
          <p className="my-2 text-black-500">
            You can explore the features that we provide with fun and have their
            own functions each feature
          </p>
          <ul className="self-start ml-8 list-inside text-black-500">
            <li className="relative circle-check custom-list">
              Powerful online protection
            </li>
            <li className="relative circle-check custom-list">
              Internet without borders
            </li>
            <li className="relative circle-check custom-list">
              Supercharged VPN{' '}
            </li>
            <li className="relative circle-check custom-list">
              {' '}
              No specific time limits
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Feature;
