import { Button, Label, TextInput } from 'flowbite-react'
import {Link} from 'react-router-dom'
export default function SignUp() {
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
          <form className='flex flex-col gap-4' >
            <div >
              <Label value='Your userName '/>
              <TextInput
              type='text'
              placeholder='Username'
              id='username'/>
            </div>
            
            <div >
              <Label value='Your email '/>
              <TextInput
              type='text'
              placeholder='name@company.com'
              id='email'/>
            </div>

            <div >
              <Label value='Your Password '/>
              <TextInput
              type='text'
              placeholder='Password'
              id='password'/>
            </div>

            <Button gradientDuoTone='purpleToPink' type='submit'>
              sign up
            </Button>
            </form>

            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to='/sign-in' className='text-blue-600'>Sign In</Link>
            </div>
        </div>

      </div>
    </div>
  )
}
