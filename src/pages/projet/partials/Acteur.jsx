import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const Acteur = ({ acteur}) => {
    return (
        <div className = "mb-5 p-2 border-b border-4 rounded-lg shadow-xl">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className ="pt-1">
                        <div className='flex w-2/2 items-center ' >
                            <div className='rounded-full border-4 border-gray-200 mr-3 p-1 bg-gray-200'>
                                <Avatar className="h-12 w-12" >
                                    <AvatarImage src="https://images.squarespace-cdn.com/content/v1/5dd366b5ac1101724ff2fac7/1574238293109-0UFJN5LRKCJKCU6BJ6EA/man+2.jpg" alt="@shadcn" />
                                    <AvatarFallback>LOGO</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className='text-sm text-left'>
                                <p className='text-primaire font-bold'>Cheikh</p>
                                <p className="text-tertiaire">GAYE</p>
                            </div>
                        </div>
                </AccordionTrigger>
                <AccordionContent>
                   {/* grade */}
                    <div className='flex items-center'>
                        <p className='text-primaire w-1/3'>Grade</p>
                        <p className='text-tertiaire w-1/2/3'>: Chef de projet</p>
                    </div>
                    
                    {/* email */}
                    <div className='flex items-center gap-2'>
                        <div className='text-primaire w-1/3'>Email</div>
                        <div className='text-tertiaire w-2/3'>
                            <a href="mailto:saliou@gmail.com">
                                : saliou@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* status */}
                    <div className='flex items-center gap-2'>
                        <div className='text-primaire w-1/3'>Status</div>
                        <div className='text-tertiaire w-2/3'>
                            : Permanent
                        </div>
                    </div>

                    {/* telephone */}
                    <div className='flex items-center gap-2'>
                        <div className='text-primaire w-1/3'>Téléphone</div>
                        <div className='text-tertiaire w-2/3'>
                            +221 78 104 50 43
                        </div>
                    </div>
                </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    );
}

export default Acteur;
