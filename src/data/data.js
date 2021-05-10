import { ReactComponent as Home } from "../icons/noun_stadium_1759183.svg";
import { ReactComponent as Matches } from "../icons/noun_Cricket_61510.svg";
import { ReactComponent as Events } from "../icons/noun_Cricket Stadium_193227.svg";

export const sidebarData = [
  {
    name: "Home",
    ic: <Home />,
    to: "/",
  },
  {
    name: "Matches",
    ic: <Matches />,
    to: "/matches",
  },
  {
    name: "Events",
    ic: <Events />,
    to: "/events",
  },
];
