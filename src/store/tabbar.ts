import { useState } from "react";
import { createModel } from "hox";

// 直接通过 hox 进行封装
const useSelectedData = () => {
  const [selectedTab, setSelectedTab] = useState<string>("home");
  const [hidden, setHidden] = useState<boolean>(false);
  return {
    selectedTab,
    setSelectedTab,
    hidden,
    setHidden,
  };
};

export default createModel(useSelectedData);
