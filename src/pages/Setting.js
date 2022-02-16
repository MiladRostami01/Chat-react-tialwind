import React from "react";
import SettingOption from "./../components/settingOption/SettingOption";
import { useLayoutMode } from "./../provider/layoutMode-provider";

function Setting() {
  const layoutMode = useLayoutMode();

  const layoutStyle = layoutMode === "grid" ? "md:grid-cols-2 " : "md:grid-cols-1";

  return (
    <div
      className={`w-full grid gap-4 row-auto md:overflow-y-auto md:h-[436px] h-auto ${layoutStyle}`}
    >
      <SettingOption />
      <SettingOption />
      <SettingOption />
      <SettingOption />
      <SettingOption />
      <SettingOption />
      <SettingOption />
    </div>
  );
}

export default Setting;
