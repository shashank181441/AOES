// import ComparisonTable from './components/ComparisonTable';
// import Description from './components/Description';
// import ScrollAnimatedLarge from './components/ScrollAnimatedLarge';
// import SmallDevice from './components/SmallDevice';

import ComparisonTable from "@/components/RVM/ComparisonTable";
import Description from "@/components/RVM/Description";
import ScrollAnimatedLarge from "@/components/RVM/ScrollAnimatedLarge";
import SmallDevice from "@/components/RVM/SmallDevice";


export default function RvmComparison() {
  return (
    <div className="items-center w-full bg-gradient-to-br from-green-200 via-gray-200 to-red-200">
      <ScrollAnimatedLarge />
      <SmallDevice />
      <ComparisonTable />
      
      <div className="relative flex lg:px-24 px-8 py-24">
        {/* Description Section */}
        <div className="flex-grow mr-4 w-[50vh]">
          <Description /> 
        </div>
         {/* Image Section */}
         <div className="hidden md:flex sticky top-[20vh] h-fit justify-center items-center">
          {/* <img
            src="https://files.catbox.moe/x21jz8.svg"
            alt="Vending"
            className="h-[50vh] sm:h-[60vh] md:h-[70vh] shadow-2xl"
          /> */}
          <img src="https://files.catbox.moe/x21jz8.svg" alt="" 
          className='h-[50vh] sm:h-[60vh] md:h-[70vh] shadow-2xl'
          />
        </div>
      </div>
    </div>
  );
}

