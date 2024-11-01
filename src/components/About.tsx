import { SECTION_IDS } from '@/constants'

const About = () => {
  return (
    <div className="grid h-screen grid-cols-3" id={SECTION_IDS.WHO_WE_ARE}>
      <div className="h-full">
        <div className="my-20 border-b"></div>
      </div>
      <div className="flex h-full items-center justify-center border-x py-20">
        <div
          className={`flex h-full items-center justify-center px-20 text-center`}
        >
          <div>
            <h2 className="font-bebas-neue text-8xl text-muted-foreground">
              <span className="text-foreground">WHO</span> WE ARE
            </h2>
            <p className="font-pp-neue-montreal font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium sequi excepturi impedit cupiditate deserunt
              consectetur mollitia nihil quasi, neque alias dicta, eveniet quae
              aliquam ratione ab maiores. Animi, asperiores cumque.
            </p>
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="my-20 border-b"></div>
      </div>
    </div>
  )
}

export default About
