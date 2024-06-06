import React from 'react';

const Password = () => {
    return (
        <div class="mb-5">
            <label
              for="lName"
              class="mb-3 block text-base font-medium text-gray-700"
            >
              {field.label}
            </label>
            <input
              type="password"
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

export default Password;



