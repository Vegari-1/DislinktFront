import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import ConnRequestData from "../../models/data/ConnRequestData";
import EducationData from "../../models/data/EducationData";
import ProfileInfoData from "../../models/data/ProfileInfoData";
import ProfileSimple from "../../models/data/ProfileSimple";
import SkillData from "../../models/data/SkillData";
import WorkExperienceData from "../../models/data/WorkExperienceData";
import profileService from "../../services/ProfileService";
import {
  GET_PROFILE,
  GET_PROFILE_EDUCATION,
  GET_PROFILE_SKILLS,
  GET_PROFILE_WORK_EXPERIENCE,
} from "../actions/action-types";
import {
  acceptConnectionRequest,
  addEducation,
  addSkill,
  addWorkExperience,
  blockProfile,
  declineConnectionRequest,
  deleteEducation,
  deleteSkill,
  deleteWorkExperience,
  dislinkWithProfile,
  getProfile,
  getProfileAuthUser,
  getProfileEducation,
  getProfileSkills,
  linkWithProfile,
  saveProfile,
  searchNotBlockedProfiles,
  searchPublicProfiles,
} from "../actions/profile-actions";
import {
  setApiKey,
  setApiKeyModalOpen,
  setConnectionRequests,
  setProfile,
  setProfileEducations,
  setProfiles,
  setProfileSkills,
  setProfileWorkExperiences,
} from "../slices/profile";

export function* handleGetProfile({
  payload,
}: ReturnType<typeof getProfile>): Generator<any, void, ProfileInfoData> {
  try {
    const profile: ProfileInfoData = yield call(
      profileService.getProfile,
      payload.id
    );
    yield put(setProfile(profile));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleGetProfileAuthUser({
  payload,
}: ReturnType<typeof getProfileAuthUser>): Generator<
  any,
  void,
  ProfileInfoData
> {
  try {
    const profile: ProfileInfoData = yield call(
      profileService.getProfileAuthUser,
      payload.id
    );
    yield put(setProfile(profile));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleGetProfileSkills({
  payload,
}: ReturnType<typeof getProfileSkills>): Generator<any, void, SkillData[]> {
  try {
    const skills: SkillData[] = yield call(
      profileService.getProfileSkills,
      payload.id
    );

    yield put(setProfileSkills(skills));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleGetProfileWorkExperience({
  payload,
}: ReturnType<typeof getProfileSkills>): Generator<
  any,
  void,
  WorkExperienceData[]
> {
  try {
    const workExperiences: WorkExperienceData[] = yield call(
      profileService.getProfileWorkExperience,
      payload.id
    );

    yield put(setProfileWorkExperiences(workExperiences));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleGetProfileEducation({
  payload,
}: ReturnType<typeof getProfileEducation>): Generator<
  any,
  void,
  EducationData[]
> {
  try {
    const educations: EducationData[] = yield call(
      profileService.getProfileEducation,
      payload.id
    );

    yield put(setProfileEducations(educations));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleGetPublicProfiles(): Generator<
  any,
  void,
  ProfileSimple[]
> {
  try {
    const profiles: ProfileSimple[] = yield call(
      profileService.getPublicProfiles
    );

    yield put(setProfiles(profiles));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleSearchPublicProfiles({
  payload,
}: ReturnType<typeof searchPublicProfiles>): Generator<
  any,
  void,
  ProfileSimple[]
> {
  try {
    const profiles: ProfileSimple[] = yield call(
      profileService.searchPublicProfiles,
      payload.query
    );

    yield put(setProfiles(profiles));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleGetNotBlockedProfiles(): Generator<
  any,
  void,
  ProfileSimple[]
> {
  try {
    const profiles: ProfileSimple[] = yield call(
      profileService.getNotBlockedProfiles
    );

    yield put(setProfiles(profiles));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleSearchNotBlockedProfiles({
  payload,
}: ReturnType<typeof searchNotBlockedProfiles>): Generator<
  any,
  void,
  ProfileSimple[]
> {
  try {
    const profiles: ProfileSimple[] = yield call(
      profileService.searchNotBlockedProfiles,
      payload.query
    );

    yield put(setProfiles(profiles));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleLinkWithProfile({
  payload,
}: ReturnType<typeof linkWithProfile>): Generator<any, void, void> {
  try {
    yield call(profileService.linkWithProfile, payload.id);
    yield call(handleGetProfileAuthUser, {
      type: GET_PROFILE,
      payload: { id: payload.id },
    });
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleDislinkWithProfile({
  payload,
}: ReturnType<typeof dislinkWithProfile>): Generator<any, void, void> {
  try {
    yield call(profileService.dislinkWithProfile, payload.id);
    yield call(handleGetProfileAuthUser, {
      type: GET_PROFILE,
      payload: { id: payload.id },
    });
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleBlockProfile({
  payload,
}: ReturnType<typeof blockProfile>): Generator<any, void, void> {
  try {
    yield call(profileService.blockProfile, payload.id);
    yield call(handleGetNotBlockedProfiles);
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleSaveProfile({
  payload,
}: ReturnType<typeof saveProfile>): Generator<any, void, void> {
  try {
    yield call(profileService.saveProfile, payload);
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleAddSkill({
  payload,
}: ReturnType<typeof addSkill>): Generator<any, void, void> {
  try {
    yield call(profileService.addSkill, payload);
    yield call(handleGetProfileSkills, {
      type: GET_PROFILE_SKILLS,
      payload: { id: payload.profileId! },
    });
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleDeleteSkill({
  payload,
}: ReturnType<typeof deleteSkill>): Generator<any, void, void> {
  try {
    yield call(profileService.deleteSkill, payload.id);
    yield call(handleGetProfileSkills, {
      type: GET_PROFILE_SKILLS,
      payload: { id: payload.profileId },
    });
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleAddWorkExperience({
  payload,
}: ReturnType<typeof addWorkExperience>): Generator<any, void, void> {
  try {
    yield call(profileService.addWorkExperience, payload);
    yield call(handleGetProfileWorkExperience, {
      type: GET_PROFILE_WORK_EXPERIENCE,
      payload: { id: payload.profileId! },
    });
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleDeleteWorkExperience({
  payload,
}: ReturnType<typeof deleteWorkExperience>): Generator<any, void, void> {
  try {
    yield call(profileService.deleteWorkExperience, payload.id);
    yield call(handleGetProfileWorkExperience, {
      type: GET_PROFILE_WORK_EXPERIENCE,
      payload: { id: payload.profileId },
    });
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleAddEducation({
  payload,
}: ReturnType<typeof addEducation>): Generator<any, void, void> {
  try {
    yield call(profileService.addEducation, payload);
    yield call(handleGetProfileEducation, {
      type: GET_PROFILE_EDUCATION,
      payload: { id: payload.profileId! },
    });
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleDeleteEducation({
  payload,
}: ReturnType<typeof deleteEducation>): Generator<any, void, void> {
  try {
    yield call(profileService.deleteEducation, payload.id);
    yield call(handleGetProfileEducation, {
      type: GET_PROFILE_EDUCATION,
      payload: { id: payload.profileId },
    });
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleGetConnectionRequests(): Generator<
  any,
  void,
  ConnRequestData[]
> {
  try {
    const connectionRequests: ConnRequestData[] = yield call(
      profileService.getConnectionRequests
    );

    yield put(setConnectionRequests(connectionRequests));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleAcceptConnectionRequest({
  payload,
}: ReturnType<typeof acceptConnectionRequest>): Generator<any, void, void> {
  try {
    yield call(profileService.acceptConnectionRequest, payload.id);

    yield handleGetConnectionRequests();
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleDeclineConnectionRequest({
  payload,
}: ReturnType<typeof declineConnectionRequest>): Generator<any, void, void> {
  try {
    yield call(profileService.declineConnectionRequest, payload.id);

    yield handleGetConnectionRequests();
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleGetApiKey(): Generator<any, void, string> {
  try {
    const apiKey: string = yield call(profileService.getApiKey);
    yield put(setApiKey(apiKey));
    yield put(setApiKeyModalOpen(true));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleCloseApiKeyModal(): Generator<any, void, void> {
  yield put(setApiKeyModalOpen(false));
}
