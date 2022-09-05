import { useState } from "react";
import { createModel } from "hox";

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
