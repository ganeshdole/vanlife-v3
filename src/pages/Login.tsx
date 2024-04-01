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

const LogInPage: React.FC = () => {
   return(
    <div className='flex min-h-screen bg-orange-50'>
        <div className='hidden md:inline-block md:flex-col w-full object-cover'>
            <img src="./src/assets/images/login.jpg" alt="Login page image" className='object-cover w-full h-full scale-x-[-1]' />
        </div>
        <div className='flex w-full justify-center items-center'>
            <Card className='w-[400px] '>
                <div className='flex flex-col justify-center'>
                    <CardHeader>
                        <CardTitle>Sign in</CardTitle>
                        <CardDescription>Log in to your account to continue</CardDescription>
                    </CardHeader>    
                    <CardContent>
                        <form className='flex flex-col gap-4'>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" placeholder="jhon@vanlife.com" id="email" />
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" placeholder="password" id="password" />
                            <Button>Sign in</Button>
                        </form>
                    </CardContent>
                    <CardFooter className='flex  flex-row justify-between'>
                        <Button>Forgot password?</Button>
                        <Button>Create an account</Button>
                    </CardFooter>
                </div>
            </Card>
        </div>
    </div>
   )

};

export default LogInPage;