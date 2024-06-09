import { SignUpForm } from "@/components/authentication/sign-up-form";
import HeaderAuth from "@/components/utils/header/HeaderAuth";

export default function SignUpPage() {
  return (
    <div className='w-full sm:w-2/3 md:w-2/3 lg:w-1/3'>
      <HeaderAuth
        heading='Sign Up'
        subheading='Create an account to continue.'
      />
      <div className='bg-gray-100 dark:bg-gray-800 rounded-xl w-full shadow-transparent p-10 flex items-center justify-center'>
        <SignUpForm />
      </div>
    </div>
  );
}
