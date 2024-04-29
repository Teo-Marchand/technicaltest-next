import { deleteReceipt } from "@/app/action";
import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { TrashIcon } from "lucide-react";
import { ButtonAction } from "./button-action";

export function DeleteReceipt() {
  const deleteReceiptWithId = deleteReceipt.bind(null, "receiptId");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="destructive">
          <TrashIcon className="h-4 w-4 mr-2" />
          Supprimer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Receipt</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this receipt?
          </DialogDescription>
        </DialogHeader>
        <form action={deleteReceiptWithId}>
          <DialogFooter>
            <div>
              <Button variant="outline">Cancel</Button>
            </div>
            <ButtonAction variant="destructive">Delete</ButtonAction>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
