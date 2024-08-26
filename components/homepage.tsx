
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Footer from "@/app/components/footer"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFlask, faGear, faBolt } from '@fortawesome/free-solid-svg-icons'

export function Homepage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    CWRU Chem-E Car
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We are a team of hard-working engineering undergrads at Case Western Reserve University that participates in AIChE&apos;s annual Chem-E-Car Competition!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                </div>
              </div>
              <img
                src="/team.jpg"
                width="750"
                height="550"
                alt="Hero"
                className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Each year, we build a shoebox-sized car that is powered by green chemical reactions and can stop after travelling a specified distance on it&apos;s own.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Skills and Specialties</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  There are many aspects to designing a clean-energy powered car from the ground up. As such, we have and are looking for people with diverse skillsets and backgrounds. Some contributions to the car include:
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <div className="flex items-center justify-center space-x-4">
                          <FontAwesomeIcon icon={faGear} width={20} />
                          <h3 className="text-xl font-bold">Mechanical Frame Design</h3>
                          <FontAwesomeIcon icon={faGear} width={20} />
                        </div>
                        <p className="text-muted-foreground">
                          Includes 3D design of car components and fabrication using ThinkBox tools and machinery.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                      <div className="flex items-center justify-center space-x-4">
                          <FontAwesomeIcon icon={faFlask} width={20} />
                          <h3 className="text-xl font-bold">Chemical Reaction Design</h3>
                          <FontAwesomeIcon icon={faFlask} width={20} />
                        </div>
                        <p className="text-muted-foreground">
                          Designing and building a battery with sufficient voltage to power the car and a chemical vial that changes color when it&apos;s time for the car to stop.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                      <div className="flex items-center justify-center space-x-4">
                          <FontAwesomeIcon icon={faBolt} width={20} />
                          <h3 className="text-xl font-bold">Circuit & Electronic Design</h3>
                          <FontAwesomeIcon icon={faBolt} width={20} />
                        </div>
                        <p className="text-muted-foreground">
                          Circuit includes UV sensor, Arduino, on/off switch, solid state relay, and more. Involves soldering wires and coding
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <img
                  src="/battery.jpg"
                  width="550"
                  height="310"
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
