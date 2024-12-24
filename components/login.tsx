"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Cookies from 'js-cookie';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Auth, AuthService, ApiError } from '../openapi';
import { login } from '@/redux/slices/authSlice';
import { JwtUserPayload } from '@/types/types';
import { jwtDecode } from 'jwt-decode';
import { save } from '@/redux/slices/userSlice';
import { toast } from 'react-toastify';
import { useDispatch } from '@/redux/store';

const Login = () => {
  const { postAuthLogin } = AuthService;
  const dispatch = useDispatch();
  const form = useForm<Auth>({
    resolver: zodResolver(z.object({
      email: z.string().email(),
      password: z.string().min(6).max(100),
    })),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState<ApiError | null>();
  const router = useRouter();

  async function onSubmit(data: Auth) {
    try {
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { token }: any = await postAuthLogin(data);
      const decoded: JwtUserPayload = jwtDecode(token);
      dispatch(login(token));
      dispatch(
        save({
          email: decoded.email,
          id: decoded.id,
          username: decoded.username,
          name: decoded.name,
        }),
      );
      toast.success("Login successful!");
      router.push('/');
    } catch (error) {
      setError(error as ApiError);
    }
  }

  console.log("🚀 ~ file: login.tsx:39 ~ onSubmit ~   router:", Cookies.get('token'));

  return (
    <>
      {error && (
        <p className="text-red-500 mb-2" role="alert">
          {error?.message}
        </p>
      )}
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <div className="space-y-4 md:space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" type="email" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter Email
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="password" type='password' {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter Password
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between">
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
                <Button type="submit" className='w-full'>Submit</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;