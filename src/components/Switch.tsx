import { SwitchProps } from "@/types";
import { Switch } from "@headlessui/react";

export default function SwitchComponent({
  switchName,
  enabled,
  setEnabled
}: SwitchProps) {
  return (
    <div className="flex gap-4 justify-start md:justify-center items-center w-full">
      <span>{switchName}</span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
      >
        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
      </Switch>
    </div>
  );
}
