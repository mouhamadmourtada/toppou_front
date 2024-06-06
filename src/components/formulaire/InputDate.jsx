import React from 'react';

const DateInput = ({register, field, error}) => {
    return (
        <div className='form-group'>

            <label htmlFor={field.name} class="block text-sm font-medium text-gray-700 text-secondaire">{field.label}</label>

            <div className="form-group">
                <input name={field.name} type="date" placeholder={field?.placeholder} defaultValue={field?.defaultValue}  {...register(field.name, { required: field.required })} className="mdInput" id={field.name} aria-describedby="dateHelp" />
            </div>
            {}
        </div>
    );
}

export default DateInput;



