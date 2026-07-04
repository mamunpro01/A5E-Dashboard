type Props = {
  online: boolean;
};

export default function StatusBadge({
  online,
}: Props) {
  return (
    <span
      className={
        online
          ? "rounded-full bg-green-600 px-2 py-1 text-xs"
          : "rounded-full bg-red-600 px-2 py-1 text-xs"
      }
    >
      {online ? "Online" : "Offline"}
    </span>
  );
}
