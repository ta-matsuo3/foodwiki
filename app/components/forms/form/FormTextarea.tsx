import { Children, useState } from "react";

interface FormState {
    comment: string;
    favorite: string[];
}
interface FormSelectProps {
    form: FormState;
    setForm: React.Dispatch<React.SetStateAction<FormState>>;
}


export default function FormTextarea({ setForm, form }: FormSelectProps) {


    const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const show = () => {
        console.log(`コメント：${form.comment}`);
    }

    return (
        <div className="form">
            <h2>テキストエリア</h2>
            <form>
                <textarea name="comment" id="comment" rows={3} value={form.comment} onChange={handleForm} placeholder='ここに記入してください。'></textarea><br />
            </form>
        </div>
    )
}