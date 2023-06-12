import { Address } from "./address.model";
import { Gender } from "./gender.model";


export interface Student {
  id : string,
  firstName : string,
  lastName : string,
  mobile : number,
  dateOfBirth : string,
  email : string,
  profileImageUrl : string,
  genderId : string,
  Gender : Gender,
  address : Address
}
