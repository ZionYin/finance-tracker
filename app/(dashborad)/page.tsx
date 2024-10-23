"use client";

import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts";

export default function Page() {
  const { isOpen, onOpen, onClose } = useNewAccount();

  return (
    <div>
      <Button onClick={onOpen}>
        Add an account
      </Button>
    </div>
  );
}
