import { Button } from "../ui/button"

const Guide = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-10 lg:p-20 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary">Steps for the Pilgrimage</h1>
        <p className="text-gray-600">Perform the following these steps, a sacred journey of devotion.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="relative p-6 border rounded-lg shadow-sm">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 border border-blue-600 rounded-full text-blue-600 font-semibold">
            Step 01
          </div>
          <h2 className="mt-8 text-lg font-bold text-center">Intention</h2>
          <p className="mt-2 text-center text-gray-600">
            Muslims commence their journey by declaring intention for the sacred pilgrimage to Mecca, a profound
            act.
          </p>
        </div>
        <div className="relative p-6 border rounded-lg shadow-sm">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 border border-blue-600 rounded-full text-blue-600 font-semibold">
            Step 02
          </div>
          <h2 className="mt-8 text-lg font-bold text-center">Ihram Before Miqat</h2>
          <p className="mt-2 text-center text-gray-600">
            Embracing Ihram involves specific attire and intentions, fostering a spiritual mindset essential for the
            pilgrimage ahead.
          </p>
        </div>
        <div className="relative p-6 border rounded-lg shadow-sm">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 border border-blue-600 rounded-full text-blue-600 font-semibold">
            Step 03
          </div>
          <h2 className="mt-8 text-lg font-bold text-center">Tawaf-Ul-Qudum</h2>
          <p className="mt-2 text-center text-gray-600">
            is a sacred ritual performed during Hajj and Umrah which involves circumambulating the Kaaba seven times
            upon arriving in Mecca.
          </p>
        </div>
      </div>
      <Button>View Full Guide</Button>
    </div>
  )
}

export default Guide