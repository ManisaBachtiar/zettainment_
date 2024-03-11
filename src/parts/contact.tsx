import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Loader2 } from "lucide-react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTitle, DialogHeader, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const ContactForm: React.FC = () => {

    var last_error_message = "ERR_TYPE_UNKNOWN";

    const [isWaitingStatus, setWaitingStatus] = useState(false);

    const [isDialogError, setDialogErrorShow] = useState(false);
    const [isDialogSuccess, setDialogSuccessShow] = useState(false);
    
    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        email: z.string().email({
            message: "invalid email address",
        }),
        message: z.string().min(5, {
            message: "message should contains 5 characters long",
        })
    })
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          message: ""
        },
    })
     
    function onSubmit(values: z.infer<typeof formSchema>) {
        const script_url = "https://script.google.com/macros/s/AKfycbzDuZKhRfjRdpKpME_BXbKA0V-8g8OKDm9tjULEzcPLbPPQ6Q7e-9csM2VAfkIBB6FyeQ/exec";

        const form_data = new FormData();

        form_data.append('name', values.name);
        form_data.append('email', values.email);
        form_data.append('message', values.message);

        setWaitingStatus(true);
        
        fetch(script_url, {
            method: "POST", body: form_data
        })
        .then(data => { 
            setWaitingStatus(false);
            setDialogSuccessShow(true); 
        })
        .catch(error => { 
            setWaitingStatus(false);
            last_error_message = error.message;
            setDialogErrorShow(true);
        });
    }

    const SuccessDialog = () => { 
        return (
            <>
                { /* aku mau mandi duluuuuuuuu (AFK) */}
                {/*nanti malem lagi ya syg*/}
                <Dialog onOpenChange={setDialogSuccessShow} open={isDialogSuccess}>
                    <DialogContent className="w-[90%] md:w-1/4  flex flex-col mx-auto items-center justify-center">
                        <DialogHeader className="flex flex-col mx-auto justify-center items-center"> 
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"></path>
                            </svg>
                            <DialogTitle className="font-bold text-2xl pt-5">SUCCESS</DialogTitle>
                        </DialogHeader>

                        <p className="text-lg">Your message has been delivered</p>
                        {/* <Button onClick={() => { setDialogSuccessShow(false); }} className="text-black bg-white font-bold">{ "Click Me To Close < 3" }</Button> */}
                    </DialogContent>
                </Dialog>
            </>
        )
    }

    const ErrorDialog = () => { 
        return (
            <>
                <Dialog onOpenChange={setDialogErrorShow} open={isDialogError}>
                    <DialogContent className="w-auto">
                        <DialogHeader className="md:w-1/2  flex flex-col mx-auto items-center justify-center">
                            
                            <DialogTitle>We can't send your data!</DialogTitle>
                        </DialogHeader>

                        <p>
                            An error occurred while attempting to send your request to our backend server.
                            <br />
                            Please double-check your internet connection and try again. If the issue persists, it is likely that our server is experiencing problems and undergoing maintenance. Please wait a moment and try again later.
                        </p>
                        <p className="font-mono">ERROR_MESSAGE: { last_error_message }</p>
                    </DialogContent>
                </Dialog>
            </>
        )
    }

    return (
        <>
        <SuccessDialog />
        <ErrorDialog />
        <div id="Contact" className="flex scroll-mt-24 justify-center  max-w-7xl mx-auto">
        <div className="max-w-6xl px-6 py-12">
            <div className="flex flex-col md:flex-row items-center">

            {/* Bagian kiri dengan form */}
                <div className="md:w-1/2 w-[95%] sm:px-16 px-9 mb-7 md:mb-0 bg-another rounded-lg">

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-9">

                            <FormField 
                                control={form.control}
                                name="name"
                                render={({ field }) => (

                                    <FormItem>
                                        <FormLabel className="pb-2 mt-5 block text-foreground">Name</FormLabel>
                                        <FormControl>
                                            <Input className="w-full border border-gray-300 rounded-md px-4 py-2" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-foreground" />
                                    </FormItem>

                                )}/>

                            <FormField 
                                control={form.control}
                                name="email"
                                render={({ field }) => (

                                    <FormItem>
                                        <FormLabel className="pb-2 mt-5 block text-foreground">Email</FormLabel>
                                        <FormControl>
                                            <Input className="w-full border border-gray-300 rounded-md px-4 py-2" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-foreground" />
                                    </FormItem>
                                    
                                )}/>

                            <FormField 
                                control={form.control}
                                name="message"
                                render={({ field }) => (

                                    <FormItem>
                                        <FormLabel className="pb-2 mt-5 block text-foreground">Message</FormLabel>
                                        <FormControl>
                                            <Textarea rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2"  {...field} />
                                        </FormControl>
                                        <FormMessage className="text-foreground" />
                                    </FormItem>
                                    
                                )}/>
                            {
                                isWaitingStatus ? 
                                <Button disabled className="mx-auto flex items-center text-center bg-gray-500 text-black rounded-md px-4 py-2 hover:text-white hover:bg-blue-600 transition duration-300" >
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Please Wait
                                </Button> :
                                <Button type="submit" className="mx-auto flex items-center text-center bg-another text-foreground rounded-md px-4 py-2 border-2 border-[#ECC50D] hover:bg-[#ECC50D] hover:text-black blue-600 transition duration-300">Submit</Button>
                            }

                        </form>
                    </Form>
                </div>
                
                {/* Bagian kanan dengan informasi dan sosial media */}
                <div className="md:w-1/2  md:pl-12 px-6  mt-5 md:mt-0">
                    <div className="mb-3">
                        <h1 className="text-3xl font-bold mb-4">Contact Us for Further Inquiries</h1>
                        <p className="text-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="flex flex-col ">
                        <a href="#" className="text-foreground mt-5 hover:text-yellow-500 flex ">  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a5 5 0 0 1 5 5c0 3.93-5 12-5 12S5 10.93 5 7a5 5 0 0 1 5-5zm0 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                        </svg><span className="ml-2 ">Serang, Banten</span></a>
                        <a target="_blank" href="#" className="text-foreground mt-5 hover:text-yellow-500"><FontAwesomeIcon icon={faEnvelope} className="ml-2" /><span className="ml-2  ">zettainment@gmail.com</span></a>
                        <a target="_blank" href="https://www.instagram.com/zettainment_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-foreground mt-5 hover:text-yellow-500"><FontAwesomeIcon icon={fab.faInstagram} className="ml-2" /><span className="ml-2 ">zettainment_</span></a>
                        <a target="_blank" href="https://www.tiktok.com/@zettainment_?_t=8gQPmN30oh6&_r=1" className="text-foreground mt-5 hover:text-yellow-500"><FontAwesomeIcon icon={fab.faTiktok} className="ml-2" /><span className="ml-2 ">zettainment_</span></a> 
                    </div>
                </div>

            </div>
        </div>
        </div>
        </>
    ); 
}

export default ContactForm