import Image from "next/image"
import logo from "@/app/assets/logo.png"

export function DecorativeOm() {
  return (
    <div className="flex justify-center my-8">
      <Image
        src={logo}
        alt="Decorative Om Symbol"
        width={300}
        height={300}
        priority
      />
    </div>
  )
}
