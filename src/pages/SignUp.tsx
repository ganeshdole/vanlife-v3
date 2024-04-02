import { Link } from 'react-router-dom';
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


const SignUp: React.FC = () => {

    return (
        <div className='flex min-h-screen bg-orange-50'>
        <div className='hidden md:inline-block md:flex-col w-full object-cover'>
        <Link to="/" className='absolute top-4 left-4  font-medium text-lg z-10'>&larr; <span className='hover:underline'>Home Page</span></Link>
       <img src="./src/assets/images/login.jpg" alt="Login page image" className='object-cover w-full h-full scale-x-[-1] object-right ' />
        </div>
        <div className='flex w-full justify-center items-center'>
        
            <Card className='w-[400px] border-none bg-inherit'>
                <div className='flex flex-col justify-center'>
                    <CardHeader>
                        <CardTitle>Sign up</CardTitle>
                        <CardDescription>Sign up to continue</CardDescription>
                    </CardHeader>    
                    <CardContent>
                        <form className='flex flex-col gap-4'>
                        <Label htmlFor="email">Name</Label>
                        <Input type="name" placeholder="Jhon doe" id="name"  />
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" placeholder="jhon@vanlife.com" id="email"  />
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" placeholder="password" id="password" />
                            <Button>Log in</Button>
                        </form>
                    </CardContent>
                    <CardFooter className='flex flex-row justify-between'>
                        <p>Already have an account?</p>
                        <Button><Link to="/login" replace>Login in</Link></Button>
                    </CardFooter>
                </div>
            </Card>
        </div>
        
    </div>
    );
};

export default SignUp;