import { RabbitIcon } from "@phosphor-icons/react/ssr";

export function RegistryLogo() {
  return (
    <>
      <div className="flex-shrink-0 rounded-md bg-primary p-1">
        <RabbitIcon className="size-5 text-secondary" />
      </div>
      <span className="font-semibold">Registry</span>
    </>
  );
}
