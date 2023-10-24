"use client"



import { ArrowRight} from "lucide-react"
import { Button } from "@/components/ui/button"

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline" >Jotion</span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
            Jotion is the connected workspace where <br />
            better, faster work happens.
        </h3>
        <Button variant="outline">Begin Your Journey <ArrowRight className="ml-2 h-4 w-4"/></Button>

    </div>
  )
}

export default Heading