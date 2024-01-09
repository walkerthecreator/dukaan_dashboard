import {
  BadgePercent,
  Banknote,
  BarChartBig,
  Blocks,
  Home,
  ListOrdered,
  MousePointerSquare,
  Palette,
  SquareStack,
  Truck,
  UserRoundPlus,
  Users,
  Volume1,
  Wallet,
  Zap,
} from "lucide-react";

const sidebarLinks = [
  {
    name: "Home",
    icon: <Home size={20}/>,
  },
  {
    name: "Orders",
    icon: <ListOrdered size={20}/>,
  },
  {
    name: "Products",
    icon: <Blocks size={20}/>,
  },
  {
    name: "Delivery",
    icon: <Truck size={20}/>,
  },
  {
    name: "Marketing",
    icon: <Volume1 size={20}/>,
  },
  {
    name: "Analytics",
    icon: <BarChartBig size={20}/>,
  },
  {
    name: "Payouts",
    icon: <Banknote size={20}/>,
  },
  {
    name: "Tools",
    icon: <MousePointerSquare size={20}/>,
  },
  {
    name: "Discounts",
    icon: <BadgePercent size={20}/>,
  },
  {
    name: "Audience",
    icon: <Users size={20}/>,
  },
  {
    name: "Affiliates",
    icon: <UserRoundPlus size={20}/>,
  },
  {
    name: "Vendors",
    icon: <SquareStack size={20}/>,
  },
  {
    name: "Appearnce",
    icon: <Palette size={20}/>,
  },
  {
    name: "Plugins",
    icon: <Zap size={20}/>,
  },
];

function Sidebar() {
  return ( 
    <>
      <div className="w-[224px] pt-4 px-2 bg-[#1E2640] text-white sticky top-0 h-screen">
        <div className="px-4 flex justify-between items-center">

        <div className="w-[192px] flex gap-3">
          <img
            src="https://placehold.co/39x39"
            className="rounded"
            heigth="39"
            width="39"
            alt=""
          />

          <div>
            <h2 className="text-white text-sm font-medium">Nishyan</h2>
            <a className="text-[13px] text-white/80 underline underline-offset-2">
              Visit store
            </a>
          </div>
        </div>

        <span >
        <svg class="self-center hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z" fill="white"></path></svg>
        </span>
        </div>

        <div className="mt-4 w-[208px] flex flex-col gap-1">
          {sidebarLinks.map((item) => {
            return (
              <a className="flex items-center text-white/80 hover:text-white hover:bg-white/10 rounded-md cursor-pointer gap-3 text-sm h-9 py-2 px-4">
                <span className="text-xs">{item.icon}</span> {item.name}
              </a>
            );
          })}
        </div>

        <div className="bg-[#353C53] m-2 rounded flex gap-3 items-center p-2">
          <span className="p-2 bg-white/10 rounded">
            <Wallet />
          </span>
          <div>
            <span className="text-xs text-white/80">Available credits</span>
            <p className="text-white text-sm">222.10</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
