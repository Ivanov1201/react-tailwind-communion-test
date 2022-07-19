import type { NextPage } from 'next'
import Navbar from '../../components/common/navbar'

const Home: NextPage = () => {
  return (
		<div className="flex-auto content-center">
			<div className="max-w-sm max-h-4xl ml-auto mr-auto bg-color-background-body">
				<Navbar />
				<div className="flex flex-col pt-[54px] pr-[25px] pl-[25px] font-roboto">
					<div className="font-medium text-color-text-normal text-[19px]">
						🙂 Hi, Alexander
					</div>
					<div className="mt-[20px] mb-[22px] bg-color-background-normal rounded-[6px] p-[17px]">
						<div className="flex flex-row content-center">
							<div className="flex-auto w-40 text-color-text-placeholder text-[16px] font-normal">Your Balance</div>
							<input type="text" className="flex-auto  text-sm rounded-lg" />
						</div>
					</div>
					<div className="mb-[10px] bg-white rounded-[12px]">
						<div className="flex flex-row content-center">
							<div className="flex-auto w-40 text-color-text-placeholder text-[16px] font-normal">Your Balance</div>
							
						</div>
					</div>
					<div className="mb-[10px] bg-white rounded-[12px]">
						<div className="flex flex-row content-center">
							<div className="flex-auto w-40 text-color-text-placeholder text-[16px] font-normal">Your Balance</div>
							
						</div>
					</div>
					<div className="mb-[10px] bg-white rounded-[12px]">
						<div className="flex flex-row content-center">
							<div className="flex-auto w-40 text-color-text-placeholder text-[16px] font-normal">Your Balance</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
  )
}

export default Home
