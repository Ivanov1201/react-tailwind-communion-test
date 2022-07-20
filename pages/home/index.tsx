import React, {FC, ReactNode} from 'react';
import type { NextPage } from 'next'
import Mainlayout from '../../layout/main'

//token tip component
type TokenTipProps = {
    number: number,
	tip: string,
	img: string
};

const TipComponent: FC<TokenTipProps> = ({ number, tip, img}) => {
    return (
        <>  
           <div className="mb-[10px] bg-white rounded-[12px] px-[18px] flex flex-wrap justify-between">
				<div className='flex flex-wrap py-[25px]'>
					<div className='text-[40px] font-bold text-color-text-normal'>{number}</div>
					<div className='flex flex-col justify-center ml-[12px]'>
						<p className='text-[14px] text-color-text-card-title'>Token Tip</p>
						<p className='text-[17px] text-color-text-number'>{tip}</p>
					</div>	
				</div>	
				<img src={img} alt="" />	
			</div>
        </>
    );
};

const tips = [
	{
		number: 15,
		tip: 'Сompliance',
		img: '/images/06.svg'
	},
	{
		number: 10,
		tip: 'Kindness',
		img: '/images/57.svg'
	},
	{
		number: 25,
		tip: 'Politeness',
		img: '/images/08.svg'
	}
]


const Home: NextPage = () => {
  return (
		<Mainlayout>
		
			<div className="flex-auto content-center">
				<div className="max-w-sm max-h-4xl ml-auto mr-auto bg-color-background-body">
					<div className="flex flex-col pt-[54px] pr-[25px] pl-[25px] font-roboto">
						<div className="font-medium flex text-color-text-normal text-[19px]">
							<img src="/images/emoji-happy.svg" className='mr-[9px]' alt="" />
							 Hi, Alexander
						</div>

						<div className="mt-[20px] mb-[22px] bg-color-background-normal rounded-[6px] p-[17px]">
							<div className="flex flex-row content-center">
								<div className="flex-auto text-color-text-placeholder w-40 text-[16px] mr-[15px] font-normal">
									<p className='my-[6px]'>Your Balance</p>
								</div>
								<div className='flex bg-white rounded-[6px]'>
								<img src="/images/caret-left-icon.svg" className='mx-[15px]' alt="" width="10" height="15"/>
								<input type="text" className='bg-white w-full focus-visible:outline-0 text-[17px] text-color-text-normal rounded-[6px]' defaultValue="5500 PPP"/>
								</div>


							</div>
						</div>
						{
							tips.map((element, index) => (
								<TipComponent number={element.number} tip={element.tip} img={element.img} key={index}></TipComponent>
							))
						}
						
					</div>
				</div>
			</div>
		</Mainlayout>
  )
}

export default Home
