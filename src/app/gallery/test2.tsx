"use client";

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel"

export default function CarouselSpacing() {
  return (
    <Carousel className="w-screen ">
      <CarouselContent className="-ml-1">
        <div className="min-w-6xl">
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1 bg-amber-300">
              <Card className="bg-amber-800 w-72 ">
                <CardContent className="flex aspect-square items-center justify-center">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
