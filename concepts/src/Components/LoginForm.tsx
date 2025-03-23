import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
  userName : string
  password: string
  
}



const LoginForm = () => {
  const [userName , setUserName] = useState("");
  const [password , setPassword] = useState("");
  const [userNameError , setUserNameError ] = useState("");
  const [passwordError , setPasswordError ] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState : { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = ( data , e) => {
    // e?.preventDefault();
    console.log(data);
  }
  // console.log(watch("userName"))
  // function changeUserName(name : string){
  //   setUserName(name);
  // }

  // function changePassword(pass : string){
  //   setPassword(pass);
  // }

  // function onSubmit(){
  //   if(userName.length <1){
  //     setUserNameError("UserName Cannot Empty")
  //     return;
  //   }
  //   if(password.length <1){
  //     setPasswordError("Password Cannot Empty")
  //     return;
  //   }
  //   if(password.length <6){
  //     setPasswordError("Password Should be Greter than 6 characters")
  //     return;
  //   }
  //   setUserNameError("");
  //   setPasswordError("");
  //   console.log("UserName is ", userName);
  //   console.log("Password is ", password);
  // }

  
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden
">    

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Username</label>
        <input {...register("userName" , {required : "UserName is Required" , minLength : {value : 3 , message:"Min 3 Length is Required"}})}  className="border-2 rounded-sm ouline-purple h-10 w-65" type="text" placeholder="Enter User Name" defaultValue={""}/>
        {/* {userNameError.length > 0 && <h1>{userNameError}</h1> }
         */}
         {errors.userName && <span>{errors.userName.message?.toString()}</span>}
        <label htmlFor="">Password</label>
        <input
  {...register("password", {
    pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()+_{}\[\]:;"'<>,.?/~`-]).{6,}$/
  })}
  className="border-2 rounded-sm outline-purple h-10 w-65"
  type="password"
  placeholder="Enter Password"
  defaultValue=""
/>
        {/* {passwordError.length > 0 && <h1>{passwordError}</h1> } */}
        {errors.password && <span>This field is required</span>}

        <button type="submit">Login</button>

        
        
      </form>
    </div>
  )
}

export default LoginForm
