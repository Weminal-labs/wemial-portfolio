import { SECTION_IDS } from '@/constants'
// Import hooks
import { useWeminal } from '@/hooks/useWeminal'

const Vision = () => {
  const weminal = useWeminal()

  return (
    <div className="grid h-screen grid-cols-3 border-b" id={SECTION_IDS.VISION}>
      <div className={`
        col-span-1 hidden h-full

        md:block
      `}>
        <div
          style={{ height: 'calc(100% - calc(0.25rem * 20))' }}
          className={`
            mb-20 flex items-center justify-center border-b font-bebas-neue
            text-8xl
          `}
        >
          OUR
        </div>
      </div>
      <div className={`
        col-span-3 flex h-full items-center justify-center border-x pb-20

        md:col-span-1
      `}>
        <div
          className={`
            flex size-full items-center justify-center border-b px-10
            text-center

            md:px-20
          `}
        >
          <p className="font-pp-neue-montreal font-medium">{weminal.vison}</p>
        </div>
      </div>
      <div className={`
        col-span-1 hidden h-full

        md:block
      `}>
        <div
          style={{ height: 'calc(100% - calc(0.25rem * 20))' }}
          className={`
            mb-20 flex items-center justify-center border-b font-bebas-neue
            text-8xl
          `}
        >
          VISION
        </div>
      </div>
    </div>
  )
}

export default Vision
