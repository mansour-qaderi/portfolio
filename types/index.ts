import {
  AG_SCOUT_TAG,
  AG_VIEWER_TAG,
  CRM_TAG,
  SELAM_HALI_MOBILE_TAG,
  TAGLET_MOBILE_TAG,
  SELAM_HALI_TAG,
  TAGLET_TAG,
  UMBRELLA_TAG,
} from "@/constants";

export type ProjectTag =
  | typeof AG_SCOUT_TAG
  | typeof AG_VIEWER_TAG
  | typeof CRM_TAG
  | typeof SELAM_HALI_MOBILE_TAG
  | typeof TAGLET_MOBILE_TAG
  | typeof SELAM_HALI_TAG
  | typeof TAGLET_TAG
  | typeof UMBRELLA_TAG;
