import React from 'react';

const InputTextArea = ({register, field, error}) => {
    return (
        <div>
            <label htmlFor={field.name} class="block text-sm font-medium text-gray-700 text-secondaire">{field.label}</label>
            <div class="">
                <textarea name={field.name} rows="5" cols="100" placeholder={field?.placeholder} class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"></textarea>
            </div>
            {error && (
                <span class="text-xs text-red-600 px-1 rounded">
                    Ce champ est obligatoire !
                </span>
            )}
        </div>
    );
}

export default InputTextArea;
