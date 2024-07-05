import React from 'react';
import { BellIcon, CheckIcon } from "@radix-ui/react-icons"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Switch } from "@/components/ui/switch"


const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ]
   
// type CardProps = React.ComponentProps<typeof Card>
 
  
const Financement = ({className, ...props }) => {
    return (

      <div className="">
            <Card className={cn("w-64 cursor-pointer hover:bg-[#f8f8f8]", className)} {...props}>
              <CardHeader>
                <CardTitle className="text-primaire font-bold">Financement 1</CardTitle>
                {/* <CardDescription>You have 3 unread messages.</CardDescription> */}
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-tertiaire">Montant total</p>
                  <p className="text-primaire">100 000 000</p>
                </div>

                      
                <div className="flex items-center justify-between">
                  <p className="text-tertiaire">Date obtention</p>
                  <p className="text-primaire"> 02/02/2022</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-tertiaire">Bailleur</p>
                  <p className="text-primaire">Cheikh Gaye</p>
                </div>

                <div className="flex justify-end">
                  <Button variant="ghost" size="small" className="text-white bg-primaire py-1 px-2 ">voir plus </Button>
                </div>
              </CardContent>
              <CardFooter>  
              </CardFooter>
            </Card>
           
        </div>
       
    );
}

export default Financement;
