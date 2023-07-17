import './App.css';
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

function App() {
 

  const schema = yup.object().shape({
    FirstName : yup.string().required("*First name cannot be empty"),
    LastName : yup.string().required("*Last name cannot be empty"),
    EmailAddress : yup.string().email("*Looks like this is not an email").required("*Email cannot be empty"),
    Password : yup.string().required("*Password cannot be empty")
  })

  const { register, handleSubmit, formState : {errors} } = useForm({resolver: yupResolver(schema)});
function formHandle(data){
  console.log(data);
}
 

 
  return (
    <div className="App">
     <div className="left_container">
      <h1>Learn to code by watching others</h1>
      <p>Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.</p>
     </div>
     <div className="right_container">
      <div className="upper_box">
        <p>Try it free 7 days <span className="line">then $20/mo. thereafter</span></p>
      </div>
      <div className="lower_box">
        <form onSubmit={handleSubmit(formHandle)}>
          <div className="form_control">
          <input type="text"  name='FirstName' placeholder='FirstName' autoComplete='off' {...register("FirstName")}/>
          <p className='errors'>{errors.FirstName?.message}</p>
          </div>
          <div className="form_control">
          <input type="text" name='LastName' placeholder='LastName' autoComplete='off'  {...register("LastName")} />
          <p className='errors'>{errors.LastName?.message}</p>
          </div>
          <div className="form_control">
          <input type="text" name='EmailAddress' placeholder="Email Address" autoComplete='off' {...register("EmailAddress")} />
          <p className='errors'>{errors.EmailAddress?.message}</p>
          </div>
          <div className="form_control">
          <input type="password" name='Password' placeholder="Password" autoComplete='off' {...register("Password")}/>
          <p className='errors'>{errors.Password?.message}</p>
          </div>
          <button type="submit" className='button'>CLAIM YOUR FREE TRAIL</button>
        </form>
        <p className='footer'>By clicking the button you are agreeing to our <span className="line2">Terms and Services</span></p>
      </div>
     </div>
    </div>
  );
}

export default App;
