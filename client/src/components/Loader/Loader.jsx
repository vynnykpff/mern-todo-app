import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
	return (
		<div className='flex justify-center'>
			<ThreeCircles
				height='100'
				width='100'
				color='#3b82f6'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
				ariaLabel='three-circles-rotating'
				outerCircleColor=''
				innerCircleColor=''
				middleCircleColor=''
			/>
		</div>
	);
};

export default Loader;
