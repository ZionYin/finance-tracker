import { z } from "zod";

import { insertTransactionSchema } from "@/db/schema";
import { useNewTransaction } from "@/features/transactions/hooks/use-new-transaction"
import { TransactionForm } from "@/features/transactions/components/transaction-form"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet"
import { useCreateTransaction } from "../api/use-create-transaction";

const formSchema = insertTransactionSchema.omit({
    id: true
})

type FormValues = z.input<typeof formSchema>;

export const NewTransactionSheet = () => {
    const { isOpen, onClose } = useNewTransaction()

    const mutation = useCreateTransaction()

    const onSubmit = (values: FormValues) => {
        mutation.mutate(values, {
            onSuccess: () => {
                onClose()
            },
        })
    }

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>New Transaction</SheetTitle>
                    <SheetDescription>
                        Create a new transaction to track your expenses
                    </SheetDescription>
                </SheetHeader>
                <TransactionForm
                    // defaultValues={{ name: "", amount: 0, category: "" }}
                    onSubmit={onSubmit}
                    disabled={mutation.isPending} />
            </SheetContent>
        </Sheet>
    )
}
