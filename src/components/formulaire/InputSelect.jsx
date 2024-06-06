import React from 'react';

const InputSelect = ({field, register, error}) => {
    return (
        <div class="">
            <label htmlFor={field.name} class="block text-sm font-medium text-gray-700 text-secondaire">{field.label}</label>
            <select id="subject" name="subject" class="mdInput">
                <option value="" disabled selected>Sélectionnez un domaine</option>

                {field.options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>   
                ))}
                {error && (
                    <span class="text-xs text-red-600 px-1 rounded">
                        Ce champ est obligatoire !
                    </span>
                )}
                
            </select>
        </div>
    );
}

export default InputSelect;
