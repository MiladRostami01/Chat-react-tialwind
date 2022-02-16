import React from "react";
import Card from "../components/hoc/Card/Card";
import { useLayoutMode } from "../provider/layoutMode-provider";

// import './Groups.css'

import cuisine from "./../assets/img/cuisine.svg";
import art from "./../assets/img/art.svg";
import workout from "./../assets/img/workout.svg";
import gaming from "./../assets/img/gaming.svg";
import hiking from "./../assets/img/hiking.svg";
import yoga from "./../assets/img/yoga.svg";

const GroupsData = [
  {
    title: "Cuisine",
    members: 36,
    image: cuisine,
    id: 1
  },
  {
    title: "Art",
    members: 9,
    image: art,
    id: 2
  },
  {
    title: "workout",
    members: 27,
    image: workout,
    id: 3
  },
  {
    title: "Gaming",
    members: 105,
    image: gaming,
    id: 4
  },
  {
    title: "Hiking",
    members: 97,
    image: hiking,
    id: 5
  },
  {
    title: "Yoga",
    members: 65,
    image: yoga,
    id: 6
  },
  {
    title: "Cuisine",
    members: 36,
    image: cuisine,
    id: 7
  },
  {
    title: "Art",
    members: 9,
    image: art,
    id: 8
  },
  {
    title: "workout",
    members: 27,
    image: workout,
    id: 9
  },
  {
    title: "Gaming",
    members: 105,
    image: gaming,
    id: 10
  },
  {
    title: "Hiking",
    members: 97,
    image: hiking,
    id: 11
  },
  {
    title: "Yoga",
    members: 65,
    image: yoga,
    id: 12
  }
];

function Groups() {
  const layoutMode = useLayoutMode();

  const layoutStyle = layoutMode === "grid" ? "md:grid-cols-4 " : "md:grid-cols-2";

  return (
    <div
      className={`w-full grid gap-4 row-auto md:overflow-y-auto md:h-[436px] h-auto ${layoutStyle}`}
    >
      <Card>
        <div className="h-[56px] w-[56px] flex justify-center items-center cursor-pointer bg-veryDark rounded-full">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 6.66666V25.3333"
              stroke="#808FBE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66666 16H25.3333"
              stroke="#808FBE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="text-textColor text-[18px] mt-2 font-medium ml-4">
          Create Group
        </div>
      </Card>
      {GroupsData.map(group => {
        return (
          <Card key={group.id}>
            <div>
              <img src={group.image} alt={group.image} />
            </div>
            <div className={`text-center ${layoutMode === "list" ? "ml-5" : ""}`}>
              <div className="text-textColor text-[18px] mt-2 font-bold">
                {group.title}
              </div>
              <div className="text-textColor text-[14px] font-medium">
                {group.members} members
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default Groups;
