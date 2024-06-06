import React from 'react';

const InputText = ({field, register, error}) => {
    return (
        <div class="mb-5">
            <label htmlFor={field.name} class="block text-sm font-medium text-gray-700 text-secondaire">{field.label}</label>
            <input
              type="text"
              name={field.name}
              id={field.name}
              placeholder={field?.placeholder}
              class="mdInput"
              defaultValue={field?.defaultValue}  {...register(field.name, { required: field.required })} 
            />
            {error && (
              <span class="text-xs text-red-600 px-1 rounded">
                Ce champ est obligatoire !
              </span>
            )}
          </div>
    );
}

export default InputText;
