// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cEHjHBABazmDxgQhPGAjL
// Component: HqBHDfxgj2F

import * as React from "react";

import {
  Link,
  GatsbyLinkProps as LinkProps,
  navigate as __gatsbyNavigate
} from "gatsby";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: R_HdThxqzC5TC/component

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_new_habistack_com_css from "../new_habistack_com/plasmic_new_habistack_com.module.css"; // plasmic-import: rcEGNgTfxT6W6gDjnxsJgN/projectcss
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_habistack_marketing.module.css"; // plasmic-import: cEHjHBABazmDxgQhPGAjL/projectcss
import * as sty from "./PlasmicSolutions.module.css"; // plasmic-import: HqBHDfxgj2F/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: -19ZIVv2nz3-RT/icon
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: g9tUy9gczA-WH2/icon
import logisticsCardpngXEuVaaNzr from "./images/logisticsCardpng.png"; // plasmic-import: XEuVAANzr/picture
import eventCardpngEbW3KjThp from "./images/eventCardpng.png"; // plasmic-import: EbW3KjTHP/picture
import movementCardpngWTmz50D8Q from "./images/movementCardpng.png"; // plasmic-import: wTMZ50d8q/picture
import agricultureCardpngGZ9CeZz2 from "./images/agricultureCardpng.png"; // plasmic-import: gZ9CeZZ2-/picture
import energyCardpngLseQz1Et from "./images/energyCardpng.png"; // plasmic-import: LSEQz-1et/picture
import droneCardpngEfufM0Boh from "./images/droneCardpng.png"; // plasmic-import: efufM0Boh/picture

export type PlasmicSolutions__VariantMembers = {};
export type PlasmicSolutions__VariantsArgs = {};
type VariantPropType = keyof PlasmicSolutions__VariantsArgs;
export const PlasmicSolutions__VariantProps = new Array<VariantPropType>();

export type PlasmicSolutions__ArgsType = {};
type ArgPropType = keyof PlasmicSolutions__ArgsType;
export const PlasmicSolutions__ArgProps = new Array<ArgPropType>();

export type PlasmicSolutions__OverridesType = {
  root?: p.Flex<"section">;
  h2?: p.Flex<"h2">;
};

export interface DefaultSolutionsProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSolutions__RenderFunc(props: {
  variants: PlasmicSolutions__VariantsArgs;
  args: PlasmicSolutions__ArgsType;
  overrides: PlasmicSolutions__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_new_habistack_com_css.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.column__tRznR)}>
        <h2
          data-plasmic-name={"h2"}
          data-plasmic-override={overrides.h2}
          className={classNames(
            projectcss.all,
            projectcss.h2,
            projectcss.__wab_text,
            sty.h2
          )}
        >
          {"Trusted and Verified Solutions."}
        </h2>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__eytsl
          )}
        >
          {
            "Bringing overwhelming technology to even the most basic of competitive battles,\nour data can solve your problems today."
          }
        </div>
        <div className={classNames(projectcss.all, sty.columns__q9LiM)}>
          <div className={classNames(projectcss.all, sty.column__xii0G)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__dp0Wb)}
              displayHeight={"230px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: logisticsCardpngXEuVaaNzr,
                fullWidth: 850,
                fullHeight: 375,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.columns__jmSyy)}>
              <div className={classNames(projectcss.all, sty.column__dLvC)}>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__pi4R
                  )}
                >
                  {"Logistics"}
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___5Qqx
                  )}
                >
                  {"Supply Chain"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nURq
                  )}
                >
                  {
                    "Choke points and bottle necks don't need unexpected interruptions. Much more than alerts, this is integrated intelligence.\n"
                  }
                </div>
                {true ? (
                  <Button
                    className={classNames("__wab_instance", sty.button__syDG)}
                    color={"softBlue" as const}
                    endIcon={
                      <ArrowRightsvgIcon
                        className={classNames(projectcss.all, sty.svg___93Nrd)}
                        role={"img"}
                      />
                    }
                    shape={"rounded" as const}
                    showEndIcon={true}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__f2TD
                      )}
                    >
                      {"READ MORE"}
                    </div>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.column__odXtq)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__f0Wki)}
              displayHeight={"230px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: eventCardpngEbW3KjThp,
                fullWidth: 850,
                fullHeight: 375,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.columns__eQb61)}>
              <div className={classNames(projectcss.all, sty.column__okhLt)}>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__txfO
                  )}
                >
                  {"Events"}
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mmZlc
                  )}
                >
                  {"Concerts & Sports"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___9FCD
                  )}
                >
                  {
                    "Corridors flooded with people? Let's make sure rain and floods don't interrupt. With our help the show will go on.\n"
                  }
                </div>
                {true ? (
                  <Button
                    className={classNames("__wab_instance", sty.button___7HM3)}
                    color={"softBlue" as const}
                    endIcon={
                      <ArrowRightsvgIcon
                        className={classNames(projectcss.all, sty.svg__l7QBw)}
                        role={"img"}
                      />
                    }
                    shape={"rounded" as const}
                    showEndIcon={true}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jusOo
                      )}
                    >
                      {"READ MORE"}
                    </div>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.column__vmdu)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img___7UlFm)}
              displayHeight={"230px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: movementCardpngWTmz50D8Q,
                fullWidth: 850,
                fullHeight: 375,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.columns__qyYzi)}>
              <div className={classNames(projectcss.all, sty.column__a9DT0)}>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__kbwyB
                  )}
                >
                  {"Movement"}
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4Ozu0
                  )}
                >
                  {"Transportation"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___1L96C
                  )}
                >
                  {
                    "The wheel might be where it all started but it's not where we're going. Now we need real intelligent tech to keep everything rolling."
                  }
                </div>
                {true ? (
                  <Button
                    className={classNames("__wab_instance", sty.button__feYIu)}
                    color={"softBlue" as const}
                    endIcon={
                      <ArrowRightsvgIcon
                        className={classNames(projectcss.all, sty.svg__rxxOj)}
                        role={"img"}
                      />
                    }
                    shape={"rounded" as const}
                    showEndIcon={true}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___8Vf5Z
                      )}
                    >
                      {"READ MORE"}
                    </div>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.columns__wr5Ky)}>
          <div className={classNames(projectcss.all, sty.column__dh1Xj)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__oJEeB)}
              displayHeight={"230px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: agricultureCardpngGZ9CeZz2,
                fullWidth: 850,
                fullHeight: 375,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.columns__x4QWz)}>
              <div className={classNames(projectcss.all, sty.column__utaoM)}>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4___3B1Zs
                  )}
                >
                  {"Resources"}
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bwEwh
                  )}
                >
                  {"Agriculture & Mining"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__sZeJc
                  )}
                >
                  {
                    "Money doesn't grow on trees but it'll certainly fall off of them if they don't make it through the storm. We also help with gold digging. ;)"
                  }
                </div>
                {true ? (
                  <Button
                    className={classNames("__wab_instance", sty.button__viHwi)}
                    color={"softBlue" as const}
                    endIcon={
                      <ArrowRightsvgIcon
                        className={classNames(projectcss.all, sty.svg__y4Fqw)}
                        role={"img"}
                      />
                    }
                    shape={"rounded" as const}
                    showEndIcon={true}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__q30Pp
                      )}
                    >
                      {"READ MORE"}
                    </div>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.column__iBfcX)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__vgXrP)}
              displayHeight={"230px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: energyCardpngLseQz1Et,
                fullWidth: 850,
                fullHeight: 375,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.columns__vsSly)}>
              <div className={classNames(projectcss.all, sty.column__svd7H)}>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__hnpQz
                  )}
                >
                  {"Energy"}
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__yZFg
                  )}
                >
                  {"Energy Outlook"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__chu0C
                  )}
                >
                  {
                    "Solar. Wind. Rain. Fire. The elements may help us make power but they can also disrupt its generation. We keep eyes on it.\n"
                  }
                </div>
                {true ? (
                  <Button
                    className={classNames("__wab_instance", sty.button__annL)}
                    color={"softBlue" as const}
                    endIcon={
                      <ArrowRightsvgIcon
                        className={classNames(projectcss.all, sty.svg___8PYsG)}
                        role={"img"}
                      />
                    }
                    shape={"rounded" as const}
                    showEndIcon={true}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qNw5L
                      )}
                    >
                      {"READ MORE"}
                    </div>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.column__rtko6)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img___30N6L)}
              displayHeight={"230px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: droneCardpngEfufM0Boh,
                fullWidth: 850,
                fullHeight: 375,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.columns__zvE7G)}>
              <div className={classNames(projectcss.all, sty.column___5Mh0G)}>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__hsEtN
                  )}
                >
                  {"Robots"}
                </h4>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__d6Mll
                  )}
                >
                  {"They're Coming"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lNuWs
                  )}
                >
                  {
                    "They're here today. Drones and self-driving vehicles may be getting smarter but they still need help navigating the weather."
                  }
                </div>
                {true ? (
                  <Button
                    className={classNames("__wab_instance", sty.button__k4UYt)}
                    color={"softBlue" as const}
                    endIcon={
                      <ArrowRightsvgIcon
                        className={classNames(projectcss.all, sty.svg__fPS)}
                        role={"img"}
                      />
                    }
                    shape={"rounded" as const}
                    showEndIcon={true}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jd5Up
                      )}
                    >
                      {"READ MORE"}
                    </div>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h2"],
  h2: ["h2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "section";
  h2: "h2";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSolutions__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSolutions__VariantsArgs;
    args?: PlasmicSolutions__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSolutions__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSolutions__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSolutions__ArgProps,
          internalVariantPropNames: PlasmicSolutions__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSolutions__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSolutions";
  } else {
    func.displayName = `PlasmicSolutions.${nodeName}`;
  }
  return func;
}

export const PlasmicSolutions = Object.assign(
  // Top-level PlasmicSolutions renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),

    // Metadata about props expected for PlasmicSolutions
    internalVariantProps: PlasmicSolutions__VariantProps,
    internalArgProps: PlasmicSolutions__ArgProps
  }
);

export default PlasmicSolutions;
/* prettier-ignore-end */
