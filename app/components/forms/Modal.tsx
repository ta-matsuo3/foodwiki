"use client";

import styles from "./Modal.module.css"
import { useState } from "react";
import FormCheckMulti from "./form/FormCheckMulti";
import FormTextarea from "./form/FormTextarea";

export default function Modal({ }) {

    interface FormState {
        comment: string;
        favorite: string[]; // 型は用途に合わせて
    }

    const [form, setForm] = useState<FormState>({
        comment: '',
        favorite: [],
    });

    const handleClick = () => {
        console.log(form);
    }

    return (
        <>
            <div className="modal_mask" >
                <div className="modal" onClick={(e) => e.stopPropagation()}>

                    <div className="modal_main">
                        {/* <FormRadio setForm={setForm} form={form} /> */}
                        {/* <FormSelect setForm={setForm} form={form} /> */}
                        <FormCheckMulti setForm={setForm} form={form} />
                        <FormTextarea setForm={setForm} form={form} />
                        <button className="btn" type="button" onClick={handleClick}>SUBMIT</button>
                    </div>
                </div>
            </div >
        </>
    )

}