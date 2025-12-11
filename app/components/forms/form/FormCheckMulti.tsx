import { useState } from "react";

interface FormState {
    comment: string;
    favorite: string[];
}
interface FormSelectProps {
    form: FormState;
    setForm: React.Dispatch<React.SetStateAction<FormState>>;
}

export default function FormCheckMulti({ setForm, form }: FormSelectProps) {

    const handleFormMulti = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.type !== "checkbox") return;

        const fa = form.favorite;
        if (e.target.checked) {
            fa.push(e.target.value)
        } else {
            fa.splice(fa.indexOf(e.target.value), 1)
        }
        setForm({
            ...form,
            [e.target.name]: fa
        })
    }


    const show = () => {
        console.log(`favorite${form.favorite}`);
    }

    return (
        <div className="form">
            < h2>チェックボックス選択肢</h2>
            <form>
                <div className="checkbox">
                    <div>
                        <input id="a" name="checkbox"
                            type="checkbox" value="a"
                            checked={form.favorite.includes('a')}
                            onChange={handleFormMulti} />
                        <label htmlFor="a">A</label>
                    </div>
                    <div>
                        <input id="b" name="checkbox"
                            type="checkbox" value="b"
                            checked={form.favorite.includes('b')}
                            onChange={handleFormMulti} />
                        <label htmlFor="b">B</label>
                    </div>
                    <div>
                        <input id="c" name="checkbox"
                            type="checkbox" value="c"
                            checked={form.favorite.includes('c')}
                            onChange={handleFormMulti} />
                        <label htmlFor="c">C</label>
                    </div>
                </div>
            </form>
        </div>
    );
}
