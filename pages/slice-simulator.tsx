import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";

import { components as mktComponents } from "../slices/marketing";
import { components as blogComponents } from "../slices/blog";
import { components as qiaraComponents } from "../slices/qiara";

const SliceSimulatorPage = () => (
  <SliceSimulator
    sliceZone={({ slices }) => (
      <SliceZone
        slices={slices}
        components={{ ...mktComponents, ...blogComponents, ...qiaraComponents }}
      />
    )}
    state={{}}
  />
);

export default SliceSimulatorPage;
