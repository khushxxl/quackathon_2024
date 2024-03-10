"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function CalculatorCard() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundFrequency, setCompoundFrequency] = useState(1);
  const [result, setResult] = useState<any>(null);

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = compoundFrequency;

    const compoundInterest = p * Math.pow(1 + r / n, n * t) - p;
    setResult(compoundInterest.toFixed(2));
  };
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Compound Interest</CardTitle>
        <CardDescription>
          Get know how much your next investment benefits you
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Principal Amount</Label>
              <Input
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                id="name"
                placeholder="Enter Principal Amount in £"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="ar">Annual Interest Rate</Label>
              <Input
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                id="ar"
                placeholder="Value will be in %"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="years">Years</Label>
              <Input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                id="years"
                placeholder="Value will be in  years"
              />
            </div>

            <div className="flex items-center space-x-3  space-y-1.5">
              <Label htmlFor="">Compound Frequency</Label>

              <select
                className="border-2 border-gray-400"
                value={compoundFrequency}
                onChange={(e) => setCompoundFrequency(parseInt(e.target.value))}
              >
                <option value={1}>Annually</option>
                <option value={2}>Semi-annually</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
              </select>
            </div>
            {result && (
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="ci">Calculated Compund Interest</Label>
                <Label htmlFor="ci">£{result}</Label>
              </div>
            )}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={calculateCompoundInterest}>Calculate</Button>
      </CardFooter>
    </Card>
  );
}
