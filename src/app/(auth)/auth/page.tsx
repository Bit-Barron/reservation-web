"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Login } from "@/components/pages/auth/login";
import { Register } from "@/components/pages/auth/register";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Willkommen
          </CardTitle>
          <CardDescription className="text-center">
            Melden Sie sich an oder erstellen Sie ein neues Konto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Anmelden</TabsTrigger>
              <TabsTrigger value="register">Registrieren</TabsTrigger>
            </TabsList>
            <Login />
            <Register />
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Durch die Anmeldung stimmen Sie unseren Nutzungsbedingungen zu
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
