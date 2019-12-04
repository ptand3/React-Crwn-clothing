import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {/*Keep a check if we actually needs a label or not*/}
         {label?
         (<label className={`${otherProps.value.length ? "shrink" : ''} form-input-label`}> 
         {label}
         </label>):null}
        </div>

    )
}

export default FormInput;