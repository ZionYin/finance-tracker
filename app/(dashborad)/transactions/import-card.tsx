import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ImportTable } from "./import-table";

type Props = {
    data: string[][];
    onCancel: () => void;
    onSubmit: (data: any) => void;
}

const dataFormat = "yyyy-MM-dd HH:mm:ss";
const outputFormat = "yyyy-MM-dd";

const requireOptions = [
    "amount",
    "date",
    "payee",
]

interface SelectedColumnState {
    [key: string]: string | null
}

export const ImportCard = ({
    data,
    onCancel,
    onSubmit
}: Props) => {
    const [selectedColumns, setSelectedColumns] = useState<SelectedColumnState>({});

    const headers = data[0]
    const body = data.slice(1)

    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 flex-row items-center justify-between">
          <CardTitle className="text-xl line-clamp-1">
            Import Transactions
          </CardTitle>
          <div className="flex items-center gap-x-2">
            <Button size="sm" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </CardHeader>
        <CardContent>
            <ImportTable 
                headers={headers}
                body={body}
                selectedColumns={selectedColumns}
                onTableHeadSelectChange={() => {}}
            />
        </CardContent>
      </Card>
    </div>
    );
}