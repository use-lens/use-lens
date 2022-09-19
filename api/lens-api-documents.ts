import {
  AUTHENTICATION,
  GET_CHALLENGE
} from '../lens-api-examples/src/authentication/login';
import { REFRESH_AUTHENTICATION } from '../lens-api-examples/src/authentication/refresh';
import { VERIFY } from '../lens-api-examples/src/authentication/verify';

import { CLAIM_HANDLE } from '../lens-api-examples/src/claim/claim-handle';
import { CLAIMABLE_HANDLES } from '../lens-api-examples/src/claim/claimable-handles';
import { CLAIMED_HANDLES } from '../lens-api-examples/src/claim/claimed-handles';

import { CREATE_SET_DISPATCHER_TYPED_DATA } from '../lens-api-examples/src/dispatcher/set-dispatcher';

import { EXPLORE_PROFILES } from '../lens-api-examples/src/explore/explore-profiles';
import { EXPLORE_PUBLICATIONS } from '../lens-api-examples/src/explore/explore-publications';

import { APPROVE_FOLLOW } from '../lens-api-examples/src/follow/approve-follow';
import { DOES_FOLLOW } from '../lens-api-examples/src/follow/does-follow';
import { CREATE_FOLLOW_TYPED_DATA } from '../lens-api-examples/src/follow/follow';
import { GET_FOLLOWER_NFT_TOKEN_IDS } from '../lens-api-examples/src/follow/follower-nft-owned-token-ids';
import { GET_FOLLOWERS } from '../lens-api-examples/src/follow/followers';
import { GET_FOLLOWING } from '../lens-api-examples/src/follow/following';
import { GET_PENDING_APPROVAL_FOLLOWS } from '../lens-api-examples/src/follow/pending-approval-follows';
import { CREATE_SET_FOLLOW_MODULE_TYPED_DATA } from '../lens-api-examples/src/follow/set-follow-module';
import { CREATE_SET_FOLLOW_NFT_URI_TYPED_DATA } from '../lens-api-examples/src/follow/set-follow-nft';
import { CREATE_TOGGLE_FOLLOW_TYPED_DATA } from '../lens-api-examples/src/follow/toggle-follow';
import { CREATE_UNFOLLOW_TYPED_DATA } from '../lens-api-examples/src/follow/unfollow';

import { GET_PING } from '../lens-api-examples/src/health/ping';

import { HAS_TX_BEEN_INDEXED } from '../lens-api-examples/src/indexer/has-transaction-been-indexed';

import { MODULE_APPROVAL_DATA } from '../lens-api-examples/src/module/approve-module';
import { ALLOWANCE as APPROVED_MODULE_ALLOWANCE_AMOUNT } from '../lens-api-examples/src/module/approved-allowance-of-modules';
import { CREATE_COLLECT_TYPED_DATA } from '../lens-api-examples/src/module/collect';
import { ENABLED_MODULES } from '../lens-api-examples/src/module/enabled-modules';
import { ENABLED_CURRENCIES } from '../lens-api-examples/src/module/enabled-modules-currencies';

import { GET_USERS_NFTS } from '../lens-api-examples/src/nfts/get-users-nfts';
// import { } from '../lens-api-examples/src/nfts/nft-ownership-challenge'

import { GET_NOTIFICATIONS } from '../lens-api-examples/src/notifications/users-notifications';

import { CREATE_BURN_PROFILE_TYPED_DATA } from '../lens-api-examples/src/profile/burn-profile';
import { CREATE_PROFILE } from '../lens-api-examples/src/profile/create-profile';
import { GET_DEFAULT_PROFILES } from '../lens-api-examples/src/profile/get-default-profile';
import { GET_PROFILE } from '../lens-api-examples/src/profile/get-profile';
import { GET_PROFILES } from '../lens-api-examples/src/profile/get-profiles';
import { RECOMMENDED_PROFILES } from '../lens-api-examples/src/profile/recommended-profiles';
import { CREATE_SET_DEFAULT_PROFILE_TYPED_DATA } from '../lens-api-examples/src/profile/set-default-profile';
import { CREATE_SET_PROFILE_IMAGE_URI_TYPED_DATA, GET_NFT_CHALLENGE } from '../lens-api-examples/src/profile/set-profile-image-uri-nft';
// import { CREATE_SET_PROFILE_IMAGE_URI_TYPED_DATA } from '../lens-api-examples/src/profile/set-profile-image-uri-normal';
import { CREATE_SET_PROFILE_METADATA_TYPED_DATA } from '../lens-api-examples/src/profile/set-update-profile-metadata';

import { GET_GLOBAL_PROTOCOL_STATS } from '../lens-api-examples/src/protocol-stats/global-protocol-stats';

import { CREATE_COMMENT_TYPED_DATA } from '../lens-api-examples/src/publications/comment';
import { GET_PUBLICATION } from '../lens-api-examples/src/publications/get-publication';
import { GET_PUBLICATIONS } from '../lens-api-examples/src/publications/get-publications';
import { HAS_COLLECTED } from '../lens-api-examples/src/publications/has-collected-publication';
import { HAS_MIRRORED } from '../lens-api-examples/src/publications/has-mirrored-publication';
import { HIDE_PUBLICATION } from '../lens-api-examples/src/publications/hide-publication';
import { CREATE_MIRROR_TYPED_DATA } from '../lens-api-examples/src/publications/mirror';
import { CREATE_POST_TYPED_DATA } from '../lens-api-examples/src/publications/post';
import { WHO_COLLECTED } from '../lens-api-examples/src/publications/who-collected-publication';

import { ADD_REACTION } from '../lens-api-examples/src/reaction/add-reaction';
import { REMOVE_REACTION } from '../lens-api-examples/src/reaction/remove-reaction';

import { REPORT_PUBLICATION } from '../lens-api-examples/src/reporting/report-publication';

import { GET_PROFILE_REVENUE } from '../lens-api-examples/src/revenue/profile-revenue';
import { GET_PUBLICATION_REVENUE } from '../lens-api-examples/src/revenue/publication-revenue';

import { SEARCH } from '../lens-api-examples/src/search/search-profiles-or-publications';

import { GET_TIMELINE } from '../lens-api-examples/src/timeline/user-timeline';

export const LENS_API_DOCUMENTS = {
  GET_CHALLENGE,
  AUTHENTICATION,
  REFRESH_AUTHENTICATION,
  VERIFY,

  CLAIM_HANDLE,
  CLAIMABLE_HANDLES,
  CLAIMED_HANDLES,

  CREATE_SET_DISPATCHER_TYPED_DATA,

  EXPLORE_PROFILES,
  EXPLORE_PUBLICATIONS,

  APPROVE_FOLLOW,
  DOES_FOLLOW,
  CREATE_FOLLOW_TYPED_DATA,
  GET_FOLLOWER_NFT_TOKEN_IDS,
  GET_FOLLOWERS,
  GET_FOLLOWING,
  GET_PENDING_APPROVAL_FOLLOWS,
  CREATE_SET_FOLLOW_MODULE_TYPED_DATA,
  CREATE_SET_FOLLOW_NFT_URI_TYPED_DATA,
  CREATE_TOGGLE_FOLLOW_TYPED_DATA,
  CREATE_UNFOLLOW_TYPED_DATA,

  GET_PING,

  HAS_TX_BEEN_INDEXED,

  MODULE_APPROVAL_DATA,
  APPROVED_MODULE_ALLOWANCE_AMOUNT,
  CREATE_COLLECT_TYPED_DATA,
  ENABLED_MODULES,
  ENABLED_CURRENCIES,

  GET_USERS_NFTS,

  GET_NOTIFICATIONS,

  CREATE_BURN_PROFILE_TYPED_DATA,
  CREATE_PROFILE,
  GET_DEFAULT_PROFILES,
  GET_PROFILE,
  GET_PROFILES,
  RECOMMENDED_PROFILES,
  CREATE_SET_DEFAULT_PROFILE_TYPED_DATA,
  GET_NFT_CHALLENGE,
  CREATE_SET_PROFILE_IMAGE_URI_TYPED_DATA,
  CREATE_SET_PROFILE_METADATA_TYPED_DATA,

  GET_GLOBAL_PROTOCOL_STATS,

  CREATE_COMMENT_TYPED_DATA,
  GET_PUBLICATION,
  GET_PUBLICATIONS,
  HAS_COLLECTED,
  HAS_MIRRORED,
  HIDE_PUBLICATION,
  CREATE_MIRROR_TYPED_DATA,
  CREATE_POST_TYPED_DATA,
  WHO_COLLECTED,

  ADD_REACTION,
  REMOVE_REACTION,

  REPORT_PUBLICATION,

  GET_PROFILE_REVENUE,
  GET_PUBLICATION_REVENUE,

  SEARCH,

  GET_TIMELINE,
};
