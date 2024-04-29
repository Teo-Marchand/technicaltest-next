"use server";

export async function createReceipt(formData: FormData) {
  const rawFormData = {
    title: formData.get('title'),
    date: formData.get('date'),
    amount: formData.get('amount'),
  }
}

export async function updateReceipt(receiptId: string, formData: FormData) {
  const rawFormData = {
    title: formData.get('title'),
    date: formData.get('date'),
    amount: formData.get('amount'),
  }
}

export async function deleteReceipt(id: string) {
  console.log("Deleting receipt with id:", id);
}

export async function getReceipts() {
  console.log("Fetching receipts");
  return [
    { id: 1, title: "Lunch", date: "2022-01-01", amount: 10.0 },
    { id: 2, title: "Dinner", date: "2022-01-02", amount: 20.0 },
  ];
}

export async function getMonthlys() {
  console.log("Fetching monthlys");
  return [
    { title: "April 2024", amount: 1234.56 },
  ];
}

export async function getTotalAmount() {
  console.log("Fetching total amount");
  return 1234.56;
}