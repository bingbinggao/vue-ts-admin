import {
  RouteConfigMultipleViews,
  RouteConfigSingleView,
} from "vue-router/types/router";

export interface Meta {
  title?: string;
  icon?: string;
}

export type RouteConfigPlus = (
  | RouteConfigSingleViewPlus
  | RouteConfigMultipleViewsPlus
) & {
  hidden?: boolean;
  alwaysShow?: boolean;
  noShowingChildren?: boolean;
};

interface RouteConfigSingleViewPlus extends RouteConfigSingleView {
  meta?: Meta;
  children?: RouteConfigPlus[];
}

interface RouteConfigMultipleViewsPlus extends RouteConfigMultipleViews {
  meta?: Meta;
  children?: RouteConfigPlus[];
}
