"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DonateNowForm } from "./donate-now-form"

export function DonationCalculator() {
  const [amount, setAmount] = useState<number>(0)
  const [duration, setDuration] = useState<number>(1)

  const calculateImpact = () => {
    const cowsFed = Math.floor(amount * duration / 100)
    const treesPLanted = Math.floor(amount * duration / 50)
    const mealsServed = Math.floor(amount * duration / 10)

    return { cowsFed, treesPLanted, mealsServed }
  }

  const impact = calculateImpact()

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#FFFDD0]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#B22222] mb-8">See Your Impact</h2>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <Label htmlFor="amount">Monthly Donation Amount (₹)</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="mt-1"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="duration">Duration (months)</Label>
            <Input
              id="duration"
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="mt-1"
            />
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-lg font-semibold text-[#FF9933]">Your Impact:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{impact.cowsFed} cows fed</li>
              <li>{impact.treesPLanted} trees planted</li>
              <li>{impact.mealsServed} meals served</li>
            </ul>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-[#B22222] hover:bg-[#8B0000] text-white">
                Donate Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Donate Now</DialogTitle>
              </DialogHeader>
              <DonateNowForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}

