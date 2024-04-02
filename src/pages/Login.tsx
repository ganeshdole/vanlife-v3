import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button" 
import { Link } from 'react-router-dom';

const LogInPage: React.FC = () => {
   return(
    <div className='flex min-h-screen bg-orange-50'>
        <div className='flex w-full justify-center items-center'>
        <Link to="/" className='absolute top-4 left-4  font-medium text-lg'>&larr; <span className='hover:underline'>Home Page</span></Link>
            <Card className='w-[400px] border-none bg-inherit'>
                <div className='flex flex-col justify-center'>
                    <CardHeader>
                        <CardTitle>Log in</CardTitle>
                        <CardDescription>Log in to your account to continue</CardDescription>
                    </CardHeader>    
                    <CardContent>
                        <form className='flex flex-col gap-4'>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" placeholder="jhon@vanlife.com" id="email"  />
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" placeholder="password" id="password" />
                            <Button>Log in</Button>
                        </form>
                        <Link  to="/" className='flex justify-center mt-1'>Forgot password?</Link>
                    </CardContent>
                    <CardFooter className='flex flex-row justify-between'>
                        <p>Don't have an account?</p>
                        <Button>Sign up</Button>
                    </CardFooter>
                </div>
            </Card>
        </div>
        <div className='hidden md:inline-block md:flex-col w-full object-cover'>
       
            <img src="./src/assets/images/login.jpg" alt="Login page image" className='object-cover w-full h-full scale-x-[-1] object-right' />
        </div>
    </div>
   )

};

export default LogInPage;