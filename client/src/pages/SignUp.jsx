import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'

export default function SignUp() {
  const [formData,setFormData]=useState({});
  const [error, setError] = useState(null);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim()});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setError('please fill out all fields');
    }
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to sign up');
      }

      const data = await res.json();
      console.log('Sign-up successful:', data);

      if(data.success===false){
        return setError(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/sign-in');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      setError(error.message); 
      setLoading(false); // Set the error state
    }
  };
  
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-24 max-w-3xl mx-auto flex-col  md:flex-row md:items-center gap-5">


       <div className=" flex-1 ">

       <Link to="/" className=" font-bold dark:text-white text-4xl">
  <span className="px-4 py-3 bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-600 rounded-lg text-4xl text-yellow-100">Sami's</span>
  <span className="text-3xl text-black-100">Blog</span>
</Link>

<p className='text-sm mt-5'> This is a blog app. You can sign with your email and password or with google</p>

           
         </div>

        <div className="flex-1">
          <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
            <div >
              <Label value='Your userName '/>
              <TextInput
              type='text'
              placeholder='Username'
              id='username'
              onChange={handleChange}/>
            </div>
            
            <div >
              <Label value='Your email '/>
              <TextInput
              type='email'
              placeholder='name@company.com'
              id='email'
              onChange={handleChange}/>
            </div>

            <div >
              <Label value='Your Password '/>
              <TextInput
              type='password'
              placeholder='Password'
              id='password'
              onChange={handleChange}/>
            </div>

            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ?(
                  <>
                  
                  <Spinner size='sm'/>
                  <span className='pl-3'>...Loading</span>
                  </>
                 
                ):'Sign Up'
              }
            </Button>
            </form>

            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to='/sign-in' className='text-blue-600'>Sign In</Link>
            </div>
            {
              error &&(
              
                <Alert className='mt-5' color='failure'>
                  {error}

                </Alert>
              )
            }
        </div>

      </div>
    </div>
  )
}
