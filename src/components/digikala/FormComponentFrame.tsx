"use client"
import {useState} from "react";
import styles from "@/components/digikala/FormComponentFrame.module.css";
import input from "@/components/digikala/Input/Input.module.css";
import textField from "@/components/digikala/TextField/TextField.module.css";

export default function FormComponentFrame() {
    const [username, setUsername] = useState("");
    return (
        <form>
            <label className={`${styles['FormComponentFrame']} w-full ${styles['FormComponentFrame--normal']}`}>
                <div
                    className={`${styles['FormComponentFrame__input-container']} px-2 flex items-center ${input['Input_InputWrapper--error']} relative text-neutral-800 bg-neutral-100 lg:bg-neutral-000 ${input['Input_InputWrapper']}`}>
                    <div className="grow text-body-3">
                        <input
                            className={`px-2 ${textField['TextField__input']} text-subtitle w-full ${textField['TextField']} ${textField['TextField--secondary']} text-subtitle w-full py-5 lg:py-2 rounded-medium`}
                            type="text" name="username" autoComplete="off" value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                </div>
                <p className="text-body-2 text-hint-text-error">لطفا این قسمت را خالی نگذارید</p>
            </label>
            <button
                className="relative flex items-center user-select-none styles_btn__Q4MvL text-button-1 styles_btn--large__1Muai styles_btn--primary__y0GEv rounded-medium w-full mt-6 lg:mt-8 text-button-1"
                type="submit" data-cro-id="login-register">
                <div className="flex items-center justify-center relative grow">ورود</div>
            </button>
        </form>);
}