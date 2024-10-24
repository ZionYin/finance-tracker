"use client"

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts";
import { Plus } from "lucide-react";

const AccountsPage = () => {
    const newAccount = useNewAccount();

    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Card className="border-none drop-shadow-sm">
                <CardHeader className="gap-y-2 flex-row items-center justify-between">
                    <CardTitle className="text-xl line-clamp-1">
                        Accounts page
                    </CardTitle>
                    <Button size="sm" onClick={newAccount.onOpen}>
                        <Plus className="size-4 mr-r"/>
                        Add new
                    </Button>
                </CardHeader>
            </Card>
        </div>
    );
}

export default AccountsPage;