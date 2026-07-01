import { useChatStore } from "@/store/useChatStore";
import { MdOutlineArrowDropDown } from "react-icons/md";

const BADGES = [
  { id: "all", name: "All" },
  { id: "unread", name: "Unread" },
  { id: "favourites", name: "Favourites" },
  { id: "groups", name: "Groups" },
];

const REMAIN_BADGES = BADGES.filter((b) => b.id !== "all");

function ActiveTabSwitch({ size }) {
  // const { activeTab, setActiveTab } = useChatStore();
  const activeTab = useChatStore((state) => state.activeTab);
  const setActiveTab = useChatStore((state) => state.setActiveTab);

  const isSmall = size.inPixels < 370;

  // const { activeBadge, inactiveBadges } = useMemo(() => {
  //   const active =
  //     REMAIN_BADGES.find((b) => b.id === activeTab) || REMAIN_BADGES[0];
  //   const inactive = REMAIN_BADGES.filter((b) => b.id !== active.id);
  //   return { activeBadge: active, inactiveBadges: inactive };
  // }, [activeTab]);

  const activeBadge =
    REMAIN_BADGES.find((b) => b.id === activeTab) || REMAIN_BADGES[0];

  const inactiveBadges = REMAIN_BADGES.filter((b) => b.id !== activeBadge.id);

  return (
    <div className="tabs tabs-box tabs-sm bg-transparent p-2 m-2 gap-4">
      <button
        onClick={() => setActiveTab("all")}
        className={`tab rounded-2xl outline-1 px-4 ${activeTab === "all" ? "bg-[#7678ed]" : "bg-white"}`}
      >
        All
      </button>

      {isSmall ? (
        <>
          <button
            onClick={() => setActiveTab(activeBadge.id)}
            className={`tab rounded-2xl outline-1 px-4 ${activeTab === activeBadge.id ? "bg-[#7678ed]" : "bg-white"}`}
          >
            {activeBadge.name}
          </button>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className={`tab rounded-2xl outline-1 px-3`}
              // className="btn btn-ghost btn-circle avatar"
            >
              <MdOutlineArrowDropDown />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow"
            >
              {inactiveBadges.map((badge) => (
                <li key={badge.id}>
                  <button onClick={() => setActiveTab(badge.id)}>
                    {badge.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          {REMAIN_BADGES.map((badge) => (
            <button
              key={badge.id}
              onClick={() => setActiveTab(badge.id)}
              className={`tab rounded-2xl outline-1 ${activeTab === badge.id ? "bg-[#7678ed]" : "bg-white"} `}
            >
              {badge.name}
            </button>
          ))}
        </>
      )}
    </div>
  );
}

export default ActiveTabSwitch;
