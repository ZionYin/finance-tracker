import { z } from "zod";

import { insertAccountSchema } from "@/db/schema";
import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts"
import { AccountForm } from "@/features/accounts/components/account-form"

import { 
    Sheet, 
    SheetContent, 
    SheetDescription, 
    SheetHeader, 
    SheetTitle 
} from "@/components/ui/sheet"

const formSchema = insertAccountSchema.pick({
    name: true,
})

type FormValues = z.input<typeof formSchema>;

export const NewAccountSheet = () => {
    const { isOpen, onClose } = useNewAccount()

    const onSubmit = (values: FormValues) => {
        console.log(values)
    }

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>New Account</SheetTitle>
                    <SheetDescription>
                        Create a new account to track your transactions
                    </SheetDescription>
                </SheetHeader>
                <AccountForm 
                    defaultValues={{ name: "" }}
                    onSubmit={onSubmit} 
                    disabled={false}/>
            </SheetContent>
        </Sheet>
    )
}