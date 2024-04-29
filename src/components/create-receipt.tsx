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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createReceipt } from "@/app/action";
import { ButtonAction } from "./button-action";

export function CreateReceipt() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Créer un reçu</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Créer un reçu</DialogTitle>
          <DialogDescription>
            Remplissez les détails pour créer un nouveau reçu.
          </DialogDescription>
        </DialogHeader>
        <form action={createReceipt}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="title">
                Intitulé
              </Label>
              <Input className="col-span-3" id="title" type="text" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="date">
                Date
              </Label>
              <Input className="col-span-3" id="date" type="date" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right" htmlFor="amount">
                Montant
              </Label>
              <Input className="col-span-3" id="amount" type="number" />
            </div>
          </div>
          <DialogFooter>
            <div>
              <Button variant="outline">Fermer</Button>
            </div>
            <ButtonAction type="submit">Enregistrer</ButtonAction>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
