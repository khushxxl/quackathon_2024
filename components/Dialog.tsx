import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusCircleIcon className="h-14 w-14 text-white cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Your NFT ART</DialogTitle>
          <DialogDescription>
            Let's Learn how does NFTs work by making one
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              NFT Title
            </Label>
            <Input id="name" placeholder="Enter Title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Choose Asset
            </Label>
            <Input id="username" className="col-span-3" type="file" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
