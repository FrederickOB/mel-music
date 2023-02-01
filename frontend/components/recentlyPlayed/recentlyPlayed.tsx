import React from "react";
import IconTopic from "./iconTopic";

export default function RecentlyPlayed() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 h-[15%]">
      <IconTopic />
      <IconTopic />
      <IconTopic />
      <IconTopic />
      <IconTopic />
      <IconTopic />
    </div>
  );
}
