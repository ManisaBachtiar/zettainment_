import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// should be used later --SFINXV
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form";
// import { useForm } from "react-hook-form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// import { z } from "zod";
// import { Button } from "@/components/ui/button";

// const formSchema = z.object({
//     name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
//     email: z.string().email({ message: 'Email must be a valid email address.' }),
//     message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
// });

const ContactForm: React.FC = () => {
    // should be used later --SFINXV
    // const form = useForm();

    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     resolver: async (data) => {
    //       try {
    //         const values = formSchema.parse(data);
    //         return { values, errors: {} };
    //       } catch (error) {
    //         return { values: {}, errors: error.formErrors.fieldErrors };
    //       }
    //     },
    // });
    
    //  const onSubmit = (data: any) => {
    //     console.log(data);
    // };

    return (
        <div id="Contact" className="flex scroll-mt-16 justify-center max-w-7xl mx-auto">
        <div className="max-w-6xl px-6 py-12">
            <div className="flex flex-col md:flex-row items-center">

            {/* Bagian kiri dengan form */}
            <div className="md:w-1/2 w-[90%] sm:px-16 px-9 mb-7 md:mb-0 bg-another rounded-lg">
                <form className="space-y-4 py-9">
                    <div className=''>
                        <label htmlFor="name" className=" pb-2 mt-5 block text-foreground">Name</label>
                        <input type="text" id="name" name="name" className="w-full border bg-background border-gray-300 rounded-md px-4 py-2" />
                    </div>
                    <div>
                        <label htmlFor="email" className=" pb-2 mt-5 block text-foreground">Email</label>
                        <input type="email" id="email" name="email" className="w-full border bg-background border-gray-300 rounded-md px-4 py-2" />
                    </div>
                    <div>
                        <label htmlFor="message" className=" pb-2 mt-5 block text-foreground">Message</label>
                        <textarea id="message" name="message" rows={4} className="w-full border bg-background border-gray-300 rounded-md px-4 py-2"></textarea>
                    </div>
                    <button type="submit" className="mx-auto flex items-center text-center bg-another font-bold border-2 border-[#ECC50D] text-foreground rounded-md px-4 py-2 hover:bg-[#ECC50D] transition duration-300">Submit</button>
                </form>

                {/* ============== DEPRECATED, SHOULD BE IMPLEMENTED LATER --SFINXV

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-9">
                        <FormField 
                            control={form.control}
                            name="name"
                            render={({ field }) => (

                                <FormItem>
                                    <FormLabel className="block text-foreground">Name</FormLabel>
                                    <FormControl>
                                        <Input {...register('name')} className="w-full border border-gray-300 rounded-md px-4 py-2"/>
                                    </FormControl>
                                    {errors.name && <p>errors.name.message</p>}
                                </FormItem>

                            )}/>

                        <FormField 
                            control={form.control}
                            name="email"
                            render={({ field }) => (

                                <FormItem>
                                    <FormLabel className="block text-foreground">Email</FormLabel>
                                    <FormControl>
                                        <Input {...register('email')} className="w-full border border-gray-300 rounded-md px-4 py-2"/>
                                    </FormControl>
                                    {errors.name && <p>errors.name.message</p>}
                                </FormItem>
                                
                            )}/>

                        <FormField 
                            control={form.control}
                            name="message"
                            render={({ field }) => (

                                <FormItem>
                                    <FormLabel className="block text-foreground">Email</FormLabel>
                                    <FormControl>
                                        <Textarea {...register('message')} rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2"/>
                                    </FormControl>
                                    {errors.name && <p>errors.name.message</p>}
                                </FormItem>
                                
                            )}/>
                    </form>

                    <Button type="submit" className="mx-auto flex items-center text-center bg-[#ECC50D] text-black rounded-md px-4 py-2 hover:text-white hover:bg-blue-600 transition duration-300">Submit</Button>
                </Form> */}
            </div>

            {/* Bagian kanan dengan informasi dan sosial media */}
            <div className="md:w-1/2  md:pl-12 px-5  mt-5 md:mt-0">
                <div className="mb-3">
                <h1 className="text-3xl font-bold mb-4">Contact Us for Further Inquiries</h1>
                <p className="text-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex flex-col ">
                <a href="#" className="text-foreground mt-5 hover:text-yellow-500 flex ">  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a5 5 0 0 1 5 5c0 3.93-5 12-5 12S5 10.93 5 7a5 5 0 0 1 5-5zm0 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    </svg><span className="ml-2 ">Serang, Banten</span></a>
                <a href="#" className="text-foreground mt-5 hover:text-yellow-500"><FontAwesomeIcon icon={faEnvelope} className="ml-2" /><span className="ml-2  ">zettainment@gmail.com</span></a>
                <a href="#" className="text-foreground mt-5 hover:text-yellow-500"><FontAwesomeIcon icon={fab.faInstagram} className="ml-2" /><span className="ml-2 ">zettainment_</span></a>
                <a href="#" className="text-foreground mt-5 hover:text-yellow-500"><FontAwesomeIcon icon={fab.faTiktok} className="ml-2" /><span className="ml-2 ">zettainment_</span></a> 
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default ContactForm