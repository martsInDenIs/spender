import List from "@/components/common/List";
import Transaction from "@/components/dashboard/Transaction";
import { getTransactions } from "@/lib/api/transactions/api";
import { getTranslations } from "next-intl/server";

export default async function Page() {
    const t = await getTranslations();

    const transactions = await getTransactions();

    return <section className='bg-4 h-full rounded-md text-white flex flex-col gap-6 p-4 pt-10 flex-1 h-full'>
        <div className='text-center flex flex-col gap-2'>
            <h1 className='text-5xl'>{t('transactions.header')}</h1>
            <hr />
        </div>
        <List listEmptyPlaceholder={<p className="empty-list-placeholder mt-20">{t('components.list.emptyPlaceholder')}</p>}>
            {transactions?.map((transaction) => <Transaction {...transaction} key={transaction.id} />)}
        </List>
    </section>;
}