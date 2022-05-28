import { useState } from "react";
import Validate from "./Validate";

const useForm = () => {
    const [values, setValues] = useState ({
      cardName: '',
      cardNumber: '',
      cardType: '',
      cardExpiration: '',
      cardSecurityCode: '',
      cardPostalCode: '',
      focus: ''
    })
    const [errors, setErrors] = useState({})

    const handleFocus = e => {
      setValues({
        ...values,
        focus: (e.target.name === 'cardSecurityCodes') ? 'cvc' : e.target.name 
      });

    }

    const handleChange = e => {
      const { name, value } = e.target
      setValues({
        ...values,
        [name]: value
      })
    }

    const handleSubmit = e => {
      e.preventDefault()
      setErrors(Validate(values))
    };

  return { handleChange, handleSubmit, handleFocus, values, errors};
};

export default useForm