// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hVrCe6QR8zQ6ffGdoxKcVS
// Component: F7LdSJsvOs-gz8

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
import Technology from "../../Technology"; // plasmic-import: DmmpgIxUem9eKV/component

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_new_habistack_com_css from "../new_habistack_com/plasmic_new_habistack_com.module.css"; // plasmic-import: rcEGNgTfxT6W6gDjnxsJgN/projectcss
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as plasmic_habistack_marketing_css from "../habistack_marketing/plasmic_habistack_marketing.module.css"; // plasmic-import: cEHjHBABazmDxgQhPGAjL/projectcss
import * as plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import * as projectcss from "./plasmic_v_2_fathym_platform_marketing.module.css"; // plasmic-import: hVrCe6QR8zQ6ffGdoxKcVS/projectcss
import * as sty from "./PlasmicPlatformTechnology.module.css"; // plasmic-import: F7LdSJsvOs-gz8/css

export type PlasmicPlatformTechnology__VariantMembers = {};
export type PlasmicPlatformTechnology__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlatformTechnology__VariantsArgs;
export const PlasmicPlatformTechnology__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPlatformTechnology__ArgsType = {};
type ArgPropType = keyof PlasmicPlatformTechnology__ArgsType;
export const PlasmicPlatformTechnology__ArgProps = new Array<ArgPropType>();

export type PlasmicPlatformTechnology__OverridesType = {
  root?: p.Flex<typeof Technology>;
};

export interface DefaultPlatformTechnologyProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicPlatformTechnology__RenderFunc(props: {
  variants: PlasmicPlatformTechnology__VariantsArgs;
  args: PlasmicPlatformTechnology__ArgsType;
  overrides: PlasmicPlatformTechnology__OverridesType;
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
    <Technology
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof Technology;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlatformTechnology__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlatformTechnology__VariantsArgs;
    args?: PlasmicPlatformTechnology__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlatformTechnology__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPlatformTechnology__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPlatformTechnology__ArgProps,
          internalVariantPropNames: PlasmicPlatformTechnology__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPlatformTechnology__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlatformTechnology";
  } else {
    func.displayName = `PlasmicPlatformTechnology.${nodeName}`;
  }
  return func;
}

export const PlasmicPlatformTechnology = Object.assign(
  // Top-level PlasmicPlatformTechnology renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPlatformTechnology
    internalVariantProps: PlasmicPlatformTechnology__VariantProps,
    internalArgProps: PlasmicPlatformTechnology__ArgProps
  }
);

export default PlasmicPlatformTechnology;
/* prettier-ignore-end */
