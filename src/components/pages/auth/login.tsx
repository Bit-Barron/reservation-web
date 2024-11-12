import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { TabsContent } from "@radix-ui/react-tabs";
import { EyeOffIcon, EyeIcon } from "lucide-react";
import React, { useState } from "react";

export const Login: React.FC = ({}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <TabsContent value="login">
      <form>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-Mail</Label>
            <Input
              id="email"
              placeholder="m@example.de"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Passwort</Label>
            <div className="relative">
              <Input
                id="password"
                required
                type={showPassword ? "text" : "password"}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
                <span className="sr-only">
                  {showPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                </span>
              </Button>
            </div>
          </div>
        </div>
        <Button className="mt-6 w-full" type="submit">
          Anmelden
        </Button>
      </form>
    </TabsContent>
  );
};
