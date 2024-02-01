import * as Yup from "yup";

export const AddressSchema = Yup.object({
  city: Yup.string().min(3).max(25).required("Please enter your name"),
  
  state: Yup.string().min(3).max(15).required("Please enter your state"),
  vill: Yup.string().min(3).max(25).required("Please enter your village or street"),
  zip: Yup.string().min(5).max(12).required("Please enter zip code"),
  country:Yup.string().min(3).max(15).required("Please enter your country name"),
    
});