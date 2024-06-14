import React from 'react';
import { Input, Label } from "@/components/ui/input"

const MdInput = ({label, name, placeholder, className}) => {
    return (
        <div>
            <Label htmlFor="nom">Nom</Label>
            <Input className = "mdInput" type="text" id="nom" placeholder="Nom de l'utilisateur" />
        </div>
    );
}

export default MdInput;
