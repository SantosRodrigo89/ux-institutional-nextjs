"use client";

import { Switch } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

const HomeTemplate = () => (
  <>
    <div>
      <span>HOME PAGE</span>
    </div>
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
    </div>
  </>
);

export default HomeTemplate;
