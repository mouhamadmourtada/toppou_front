import React from 'react';

const InputRadio = ({register, error, field}) => {
    return (
        <div className='mx-5'>
            <div className='shadow-xl p-5 border-t-2 rounded-sm'>
            <label
                for={field.name}
                class="block text-sm font-medium text-gray-700 text-secondaire"
            >
                {field.label}
            </label>
            
            <div class="flex items-center flex-row justify-evenly">
                {field.options.map((option, index) => (
                        <div className='flex flex-row mx-6'>
                            <input
                                type="radio"
                                id={option.value}
                                name={field.name}
                                value={option.value}
                                class="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                {...register(field.name, { required: field.required })}
                            />
                            <label for={option.value} class="ml-3 block text-sm font-medium text-gray-700">
                                {option.label}
                            </label>

                        </div>
                ))}
            </div>   
            {error && (
                <span class="text-xs text-red-600 px-1 rounded">
                    Ce champ est obligatoire !
                </span>
            )}

            </div>
        </div>
    );
}

export default InputRadio;
