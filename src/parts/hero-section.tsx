import React, { useState } from "react";

import light_image from "../assets/img/imgLight1.png";
import dark_image from "../assets/img/imgDark1.png";

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
        <div className="bg-another text-primary-foreground  lg:px-5 lg:max-w-7xl mx-auto md:pt-36 lg:pt-28 py-4 sm:py-28  pt-[6.5rem]  lg:py-24 xl:pt-28 justify-center flex ">
          <div className="container p flex flex-col sm:flex-row items-center justify-center">
            <div className="xl:w-1/2 md:w-2/3 ">
              <h1 className="text-[2.9rem] lg:text-[5rem] md:text-[4rem]  font-bold lg:mb-4 leading-tight">
                <span className="text-[#ECC50D]">Zettain</span>ment Your Friendly
                Entertainment
              </h1>
              <p className="text-lg mb-6 mt-3 pr-3 lg:pr-12">
                Zettainment is a platform where you can discover the latest news for your feed, featuring trending and significant updates.
              </p>
              <Button onClick={() => { setIsDialogOpen(true); }} variant="outline" className="bg-another hover:bg-[#ECC50D] text-primary-foreground font-xl border-2 border-[#ECC50D] font-bold py-2 px-4 rounded-md">
                About
              </Button>
            </div>
            <div className="  md:w-[43%] mt-9  ">
              <img className="floating" src={image_src} /> 
            </div>
          </div>
        </div>
      </>
    )
}

export default HeroSection;