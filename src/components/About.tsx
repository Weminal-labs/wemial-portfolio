import { SECTION_IDS } from '@/constants'
// Import hooks
import { useWeminal } from '@/hooks/useWeminal'

const About = () => {
  const weminal = useWeminal()

  return (
    <div
      className="grid h-screen grid-cols-3 border-b"
      id={SECTION_IDS.WHO_WE_ARE}
    >
      <div className={`
        col-span-1 hidden h-full

        md:block
      `}>
        <div
          style={{ height: 'calc(100% - calc(0.25rem * 40))' }}
          className="my-20 border-y"
        ></div>
      </div>
      <div className={`
        col-span-3 flex h-full items-center justify-center border-x py-20

        md:col-span-1
      `}>
        <div
          className={`
            flex size-full items-center justify-center border-y px-10
            text-center

            md:px-20
          `}
        >
          <div>
            <h2 className="font-bebas-neue text-8xl text-muted-foreground">
              <span className="text-foreground">WHO</span> WE ARE
            </h2>
            <p className="font-pp-neue-montreal font-medium">{weminal.about}</p>
          </div>
        </div>
      </div>
      <div className={`
        col-span-1 hidden h-full

        md:block
      `}>
        <div
          style={{ height: 'calc(100% - calc(0.25rem * 40))' }}
          className="my-20 border-y"
        ></div>
      </div>
    </div>
  )
}

export default About
