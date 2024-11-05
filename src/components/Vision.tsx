import { SECTION_IDS } from '@/constants'

// Import hooks
import { useWeminal } from '@/hooks/useWeminal'

const Vision = () => {
  const weminal = useWeminal()

  return (
    <div className="grid h-screen grid-cols-3 border-b" id={SECTION_IDS.VISION}>
      <div className="h-full hidden md:block col-span-1">
        <div
          style={{ height: 'calc(100% - calc(0.25rem * 20))' }}
          className="flex justify-center items-center font-bebas-neue text-8xl mb-20 border-b"
        >
          OUR
        </div>
      </div>
      <div className="flex h-full items-center justify-center border-x pb-20 col-span-3 md:col-span-1">
        <div
          className={`flex h-full w-full items-center justify-center px-10 md:px-20 text-center border-b`}
        >
          <p className="font-pp-neue-montreal font-medium">{weminal.vison}</p>
        </div>
      </div>
      <div className="h-full hidden md:block col-span-1">
        <div
          style={{ height: 'calc(100% - calc(0.25rem * 20))' }}
          className="flex justify-center items-center font-bebas-neue text-8xl mb-20 border-b"
        >
          VISION
        </div>
      </div>
    </div>
  )
}

export default Vision
