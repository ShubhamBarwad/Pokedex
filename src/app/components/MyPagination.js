import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useSelector } from 'react-redux';

function MyPagination({ next, prev, loadNextPrev, count }) {
  const functionString = 'load';
  const handleClick = (str)=>{
    str==='next' && loadNextPrev(next, 1);
    str==='prev' && loadNextPrev(prev, -1);
  }
  const isLoading = useSelector(state => state.isLoading.isLoading)

  return (
    <>
    {!isLoading && <div className='w-full flex justify-center items-center gap-1 mb-10'>
            <ArrowBackIos className='text-gray-600 cursor-pointer' onClick={()=> handleClick('prev')}/>
            <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center'>
                <p className='text-sm text-gray-500'>{count}</p>
            </div>
            <ArrowForwardIos className='text-gray-600 ml-[5px] cursor-pointer' onClick={() => handleClick('next')}/>
        </div>}
    </>
  )
}

export default MyPagination