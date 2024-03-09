import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithForm({ name }: { name: string }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      
      
    </Card>
  );
}
