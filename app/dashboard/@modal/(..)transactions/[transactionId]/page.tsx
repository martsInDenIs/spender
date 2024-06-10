import { Modal } from './modal';

export default function PhotoModal({
    params: { transactionId },
}: {
    params: { transactionId: string };
}) {
    return <Modal>{transactionId}</Modal>;
}