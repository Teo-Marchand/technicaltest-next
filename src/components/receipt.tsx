import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { CreateReceipt } from "./create-receipt";
import { DeleteReceipt } from "./delete-receipt";
import { ModifyReceipt } from "./modify-receipt";
import { getMonthlys, getReceipts, getTotalAmount } from "@/app/action";

export async function Receipt() {
  const receipts = await getReceipts();
  const recents = receipts.slice(0, 3);

  const monthlys = await getMonthlys();
  const totalAmount = await getTotalAmount();

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Tableau de bord</h1>
          <CreateReceipt />
        </header>
        <section>
          <h2 className="text-lg font-semibold mb-4">Reçus récents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recents.map((receipt) => (
              <Card key={receipt.id}>
                <CardHeader>
                  <CardTitle>{receipt.title}</CardTitle>
                  <CardDescription>
                    <span className="font-semibold">Date:</span>
                    {receipt.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span className="font-semibold">${receipt.amount}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <ModifyReceipt />
                  <DeleteReceipt />
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Monthly Total</h2>
          <div className="space-y-4">
            {monthlys.map((monthly) => (
              <Card key={monthly.title}>
                <CardHeader>
                  <CardTitle>{monthly.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <span>Total:</span>
                    <span className="font-semibold">${monthly.amount}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Overall Total</h2>
          <Card>
            <CardHeader>
              <CardTitle>All Receipts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <span>Total:</span>
                <span className="font-semibold">{totalAmount}</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
