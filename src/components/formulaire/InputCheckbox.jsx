import React from 'react';

const InputCheckbox = ({register, error, field}) => {
    return (
        <div>
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 text-secondaire">{field.label}</label>

            <div className="form-check flex flex-row justify-evenly">

                {field.options.map((option, index) => {
                    return (
                        <div key={index} className="form-check mx-5">
                            <input value = {option.value} className="form-check-input mx-4" type="checkbox" id={option.id} name={field.name} {...register(field.name, { required: field.required })} />
                            <label className="form-check-label" htmlFor={option.id}>{option.label}</label>
                        </div>
                    );
                })}
            </div>

            {error && <span className="text-xs text-red-600 px-1 rounded">Ce champ est obligatoire !</span>}
        </div>
    );
}

export default InputCheckbox;
