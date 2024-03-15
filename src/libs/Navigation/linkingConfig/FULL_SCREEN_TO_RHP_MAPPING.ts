import type {FullScreenName} from '@libs/Navigation/types';
import SCREENS from '@src/SCREENS';

const FULL_SCREEN_TO_RHP_MAPPING: Partial<Record<FullScreenName, string[]>> = {
    [SCREENS.WORKSPACE.PROFILE]: [SCREENS.WORKSPACE.NAME, SCREENS.WORKSPACE.CURRENCY, SCREENS.WORKSPACE.DESCRIPTION, SCREENS.WORKSPACE.SHARE],
    [SCREENS.WORKSPACE.REIMBURSE]: [SCREENS.WORKSPACE.RATE_AND_UNIT, SCREENS.WORKSPACE.RATE_AND_UNIT_RATE, SCREENS.WORKSPACE.RATE_AND_UNIT_UNIT],
    [SCREENS.WORKSPACE.MEMBERS]: [
        SCREENS.WORKSPACE.INVITE,
        SCREENS.WORKSPACE.INVITE_MESSAGE,
        SCREENS.WORKSPACE.MEMBER_DETAILS,
        SCREENS.WORKSPACE.MEMBER_DETAILS_ROLE_SELECTION,
        SCREENS.WORKSPACE.OWNER_CHANGE_CHECK,
        SCREENS.WORKSPACE.OWNER_PAYMENT_CARD_FORM,
    ],
    [SCREENS.WORKSPACE.WORKFLOWS]: [
        SCREENS.WORKSPACE.WORKFLOWS_APPROVER,
        SCREENS.WORKSPACE.WORKFLOWS_AUTO_REPORTING_FREQUENCY,
        SCREENS.WORKSPACE.WORKFLOWS_AUTO_REPORTING_MONTHLY_OFFSET,
        SCREENS.WORKSPACE.WORKFLOWS_PAYER,
    ],
    [SCREENS.WORKSPACE.TAGS]: [SCREENS.WORKSPACE.TAGS_SETTINGS, SCREENS.WORKSPACE.TAGS_EDIT, SCREENS.WORKSPACE.TAG_CREATE],
    [SCREENS.WORKSPACE.CATEGORIES]: [SCREENS.WORKSPACE.CATEGORY_CREATE, SCREENS.WORKSPACE.CATEGORY_SETTINGS, SCREENS.WORKSPACE.CATEGORIES_SETTINGS, SCREENS.WORKSPACE.CATEGORY_EDIT],
};

export default FULL_SCREEN_TO_RHP_MAPPING;
