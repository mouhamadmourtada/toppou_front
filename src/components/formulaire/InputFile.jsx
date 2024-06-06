import React from 'react';

const InputFile = ({field, error, register }) => {
        return (
        // <fieldset className='b'>
            <div className="">
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 text-secondaire">{field.label}</label>
                <div className="">
                    <input type="file" name={field.name} id={field.name} {...register(field.name, { required: field.required })} placeholder={field.placeholder?  field.placeholder : ''} className="px-8 py-12 border-2 border-dashed rounded-md " />
                </div>
                {error && <span className="text-xs text-red-600 px-1 rounded">Ce champ est obligatoire !</span>}
            </div>
        // </fieldset>
    );
}

export default InputFile;
