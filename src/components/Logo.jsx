import React from 'react';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"


const Logo = () => {
    return (
        <div className="flex items-center  h-auto justify-center">
            <div className="w-2/6">
                <img src="/images/esp_logo.png" alt=""  className="h-w-full" />

            </div>
        </div>
    );
}

export default Logo;
