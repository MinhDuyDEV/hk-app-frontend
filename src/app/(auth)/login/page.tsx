import { LoginForm } from "@/components/authentication/login-form";
import HeaderAuth from "@/components/utils/header/HeaderAuth";

export default function LoginPage() {
  return (
    <div className='w-full sm:w-2/3 md:w-2/3 lg:w-1/3'>
      <HeaderAuth
        heading='Login'
        subheading='Welcome back, you are been missed!'
      />
      <div className='bg-gray-100 dark:bg-gray-800 rounded-xl w-full shadow-transparent p-10 flex items-center justify-center'>
        <LoginForm />
      </div>
    </div>
  );
}
