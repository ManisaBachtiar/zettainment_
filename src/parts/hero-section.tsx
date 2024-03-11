import React, { useState } from "react";

import light_image from "../assets/img/vektor3.png"
import dark_image from "../assets/img/vektor14.png"

import { useTheme } from "../components/theme-provider";

import { Button } from "../components/ui/button";

import CanvasAnimation from "../components/canvas-animation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const HeroSection: React.FC = () => {
  const { theme } = useTheme();

  // NOTE: You can delete this code if you dont want to
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const image_src = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? dark_image : light_image;

  const separated = (
    <>
      { /* note: you can delete this code if you dont want to */ }
      <Dialog defaultOpen={false} open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-transparent border-none">
            <CanvasAnimation />
        </DialogContent>
      </Dialog>
    </>
  );

    return (
      <>
        { separated }
        <div className="bg-another text-primary-foreground px-12 lg:px-12 lg:max-w-7xl mx-auto py-44  lg:py-24 xl:pt-32 justify-center flex ">
          <div className="container  flex flex-col sm:flex-row items-center justify-center">
            <div className="xl:w-1/2 lg:w-2/3">
              <h1 className="text-[2.9rem] lg:text-[5rem]  font-bold mb-4 leading-tight">
                <span className="text-[#ECC50D]">Zettain</span>ment Your Friendly
                Entertainment
              </h1>
              <p className="text-lg mb-6 pr-3 lg:pr-12">
                Zettainment is a platform where you can discover the latest news for your feed, featuring trending and significant updates.
              </p>
              <Button onClick={() => { setIsDialogOpen(true); }} variant="outline" className="text-primary-foreground font-xl border-2 border-[#ECC50D] font-bold py-2 px-4 rounded-md">
                About
              </Button>
            </div>
            <div className=" lg:mt-[-62px] lg:w-[35%] w-[80%]  ">
              <img className="floating" src={image_src} />
            </div>
          </div>
        </div>
      </>
    )
}

export default HeroSection;