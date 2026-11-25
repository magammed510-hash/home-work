import type {
    FieldErrors,
    SubmitHandler,
    UseFormHandleSubmit,
    UseFormRegister,
} from "react-hook-form";
import type { FormValues } from "./schema";

interface AddFormProps {
    register: UseFormRegister<FormValues>;
    handleSubmit: UseFormHandleSubmit<FormValues>;
    errors: FieldErrors<FormValues>;
    onSubmit: SubmitHandler<FormValues>;
    id: number | null;
    onCancel: () => void;
}

function AddForm({ register, handleSubmit, errors, onSubmit, id, onCancel }: AddFormProps) {
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="addForm">
            <input
                type="text"
                {...register("name")}
                placeholder="Name.."
            />
            {errors.name && <span className="error">{errors.name.message}</span>}

            <input
                type="text"
                {...register("description")}
                placeholder="Description..."
            />
            {errors.description && <span className="error">{errors.description.message}</span>}

            <input type="file" {...register("image")} />
            {errors.image && <span className="error">{String(errors.image.message)}</span>}

            {id && (
                <button type="button" onClick={onCancel}>
                   Cancel
                </button>
            )}
            <button type="submit">{id ? "Edit" : "Save"}</button>
        </form>
    );
}

export default AddForm;
