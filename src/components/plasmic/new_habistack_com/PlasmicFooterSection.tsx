// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rcEGNgTfxT6W6gDjnxsJgN
// Component: U7vWfIKj_6DL7R

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
import Logo from "../../Logo"; // plasmic-import: W2OIIjnAg7iDkl/component
import Button from "../../Button"; // plasmic-import: so4bLs3WV--Rks/component

import { useScreenVariants as useScreenVariants_6RWdC4Qzz3IWjw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 6RWdC4Qzz3IWjw/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_new_habistack_com.module.css"; // plasmic-import: rcEGNgTfxT6W6gDjnxsJgN/projectcss
import * as sty from "./PlasmicFooterSection.module.css"; // plasmic-import: U7vWfIKj_6DL7R/css

import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: U9yHloOgt4pKc_/icon
import GithubIcon from "./icons/PlasmicIcon__Github"; // plasmic-import: W2IZi-AbRHPWrq/icon
import LinkedinIcon from "./icons/PlasmicIcon__Linkedin"; // plasmic-import: n8T9m20qnSDjg3/icon
import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: fRP1Wu7C79b26c/icon

export type PlasmicFooterSection__VariantMembers = {};
export type PlasmicFooterSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterSection__VariantsArgs;
export const PlasmicFooterSection__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterSection__ArgsType = {};
type ArgPropType = keyof PlasmicFooterSection__ArgsType;
export const PlasmicFooterSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterSection__OverridesType = {
  root?: p.Flex<"div">;
  logo?: p.Flex<typeof Logo>;
};

export interface DefaultFooterSectionProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicFooterSection__RenderFunc(props: {
  variants: PlasmicFooterSection__VariantsArgs;
  args: PlasmicFooterSection__ArgsType;
  overrides: PlasmicFooterSection__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_6RWdC4Qzz3IWjw()
  });

  return (
    <div
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
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__fi7DM)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__lFrAm)}
        >
          <Logo
            data-plasmic-name={"logo"}
            data-plasmic-override={overrides.logo}
            _50Opaque={true}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__wo5Tz)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__js9ZB
              )}
            >
              {"Connect with us"}
            </div>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__eUtt)}
            >
              <TwitterIcon
                className={classNames(projectcss.all, sty.svg__azFiy)}
                role={"img"}
              />

              <GithubIcon
                className={classNames(projectcss.all, sty.svg__ffPt5)}
                role={"img"}
              />

              <LinkedinIcon
                className={classNames(projectcss.all, sty.svg__aAykv)}
                role={"img"}
              />
            </p.Stack>
          </p.Stack>
        </p.Stack>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zsHeJ)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__r2A7E
            )}
          >
            {"Product"}
          </div>
          {true ? (
            <Button
              className={classNames("__wab_instance", sty.button__dWlMs)}
              color={"navLink" as const}
              flat={true}
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wIfAi
                )}
              >
                {"Pricing"}
              </div>
            </Button>
          ) : null}
          <Button
            className={classNames("__wab_instance", sty.button__o5Pqb)}
            color={"navLink" as const}
            flat={true}
            link={"/dashboard" as const}
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rhVyv
              )}
            >
              {"Log in"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__pZtxW)}
            color={"navLink" as const}
            flat={true}
            link={"/docs" as const}
            submitsForm={true}
          >
            {"Documentation"}
          </Button>
          {true ? (
            <Button
              className={classNames("__wab_instance", sty.button___8VvUg)}
              color={"navLink" as const}
              flat={true}
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pwkDj
                )}
              >
                {"Integrations"}
              </div>
            </Button>
          ) : null}
          {true ? (
            <Button
              className={classNames("__wab_instance", sty.button___7FIb)}
              color={"navLink" as const}
              flat={true}
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nhkQf
                )}
              >
                {"Insights"}
              </div>
            </Button>
          ) : null}
        </p.Stack>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__sutlh)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__kWjIl
            )}
          >
            {"Company"}
          </div>
          {true ? (
            <Button
              className={classNames("__wab_instance", sty.button__p3Dy0)}
              color={"navLink" as const}
              flat={true}
              submitsForm={true}
            >
              {"About"}
            </Button>
          ) : null}
          {true ? (
            <Button
              className={classNames("__wab_instance", sty.button__gQwpD)}
              color={"navLink" as const}
              flat={true}
              submitsForm={true}
            >
              {"Contact us"}
            </Button>
          ) : null}
          {true ? (
            <Button
              className={classNames("__wab_instance", sty.button___2NzNf)}
              color={"navLink" as const}
              flat={true}
              submitsForm={true}
            >
              {"Careers"}
            </Button>
          ) : null}
          <Button
            className={classNames("__wab_instance", sty.button__vbwY6)}
            color={"navLink" as const}
            flat={true}
            link={"/blog" as const}
            submitsForm={true}
          >
            {"Blog"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__wzqud)}
            color={"navLink" as const}
            flat={true}
            link={"https://fathym.com/privacy-policy/" as const}
            submitsForm={true}
          >
            {"Privacy"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__gu00V)}
            color={"navLink" as const}
            flat={true}
            link={"https://fathym.com/terms-of-services/" as const}
            submitsForm={true}
          >
            {"Terms"}
          </Button>
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  logo: typeof Logo;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterSection__VariantsArgs;
    args?: PlasmicFooterSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooterSection__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */
