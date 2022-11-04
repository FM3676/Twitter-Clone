//  Tab List Loop Render from More to Profile
import { IconsRenderList } from "~~/components/Logo/IconLoopRender";
import Tab from "./Tab.vue";

export default function TabList() {
  return (
    <>
      {IconsRenderList.map((item) => (
        <Tab>
          {{
            name: () => <>{item.name}</>,
            icon: () => <>{item.icon}</>,
          }}
        </Tab>
      ))}
    </>
  );
}
