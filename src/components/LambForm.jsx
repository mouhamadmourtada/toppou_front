import { useForm } from "react-hook-form";
// import Input from "./Input";
import InputCheckbox from "./formulaire/InputCheckbox";
import InputRadio from "./formulaire/InputRadio";
import InputEmail from "./formulaire/InputEmail";
import InputDate from "./formulaire/InputDate";
import InputNumber from "./formulaire/InputNumber";
import InputPassword from "./formulaire/InputPassword";
import InputSelect from "./formulaire/InputSelect";
import InputTextArea from "./formulaire/InputTextArea";
import InputFile from "./formulaire/InputFile";
// import InputDate from "./formulaire/InputDate";
import InputText from "./formulaire/InputText";




export default function LambForm({ onSubmit, fields,submitText,formTitle,icon }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Input = ({field}) => {
    switch (field.type) {
      case "Input":
        return <InputText register={register} error={errors[field.name]} field = {field} />;
      case "Password":
        return <InputPassword register={register} error={errors[field.name]} field = {field} />;
      case "Email":
        return <InputPassword register={register} error={errors[field.name]} field = {field} />;
      case "Number":
        return <InputNumber register={register} error={errors[field.name]} field = {field} />;
      case "Date":
        return <InputDate register={register} error={errors[field.name]} field = {field} />;
      case "Checkbox":
        return <InputCheckbox register={register} error={errors[field.name]} field = {field} />;
      case "Radio":
        return <InputRadio  register={register} error={errors[field.name]} field = {field} />;
      case "Select":
        return <InputSelect register={register} error={errors[field.name]} field = {field} />;
      case "TextArea":
        return <InputTextArea register={register} error={errors[field.name]} field = {field} />;
      case "File":
        return <InputFile register={register} error={errors[field.name]} field = {field} />;
    }
  }


  return (
    <div className="">
        <h2 className="text-center text-4xl font-bold my-4">{formTitle}</h2>
      <form onSubmit = { handleSubmit(onSubmit) } className="flex flex-col py-6 px-6 bg-white rounded-xl  justify-evenly">
        <div className="flex justify-evenly flex-row flex-wrap">
          {fields?.map((field, index) => {

            return (
                <Input field={field} />
            );
          })}

        </div>
        <div className="flex justify-center items-center">
          <button type="submit" className="mt-10 btn bg-secondaire text-accent hover:bg-secondary text-white max-w-96 align-self-center px-20 uppercase border-2 border-secondaire hover:bg-white hover:text-secondaire" >{submitText}</button>

        </div>
      </form>
    </div>
  );
}
