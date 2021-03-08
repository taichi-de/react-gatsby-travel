import React from "react"
import { GiEarthamerica } from "react-icons/gi"
import { FaMoneyCheck } from "react-icons/fa"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"

export const StatsData = [
  {
    icon: (
      <GiEarthamerica
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Over 200 Destinations",
    desc: "Travel to over 100 unique places",
  },
  {
    icon: (
      <MdAirplanemodeActive
        css={`
          color: #f3a82e;
        `}
      />
    ),
    title: "1 Million Trips Made",
    desc: "Over 1 Million trips completed last year",
  },
  {
    icon: (
      <MdTimer
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "Fastest Support",
    desc: "Access our support team 24/7",
  },
  {
    icon: (
      <FaMoneyCheck
        css={`
          color: #3af576;
        `}
      />
    ),
    title: "Best Deals",
    desc: "We offer the best prices",
  },
]
