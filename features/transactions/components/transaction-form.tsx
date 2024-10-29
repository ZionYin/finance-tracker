import { z } from "zod";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { insertTransactionSchema } from "@/db/schema";
import { 
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

const formSchema = insertTransactionSchema.pick({
    name: true,
    amount: true,
    category: true,
})

type FormValues = z.input<typeof formSchema>;

type Props = {
    id?: string;
    defaultValues?: FormValues;
    onSubmit: (values: FormValues) => void;
    onDelete?: () => void;
    disabled?: boolean;
}

export const TransactionForm = ({
    id,
    defaultValues,
    onSubmit,
    onDelete,
    disabled
}: Props) => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues
    });

    const handleSubmit = (values: FormValues) => {
        onSubmit(values);
    };

    const handleDelete = () => {
        onDelete?.();
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4">
                <FormField 
                name="name"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input
                            disabled={disabled}
                            placeholder="e.g. Groceries, Rent" {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField 
                name="amount"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                            <Input
                            disabled={disabled}
                            type="number"
                            placeholder="e.g. 10.99" {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField 
                name="category"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                            <Input
                            disabled={disabled}
                            placeholder="e.g. Food, Transportation, Entertainment" {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <Button className="w-full" disabled={disabled}>
                    {id ? "Save changes" : "Create transaction"}
                </Button>
                {!!id && (
                    <Button
                    type="button"
                    disabled={disabled}
                    onClick={handleDelete}
                    className="w-full"
                    variant="outline"
                >
                    <Trash className="size-4 mr-2" />
                    Delete Transaction
                    </Button>
                )}
            </form>
        </Form>
    )
}
