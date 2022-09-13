import EduFormValues from "../../models/forms/EduFormValues";
import ProfileInfoFormValues from "../../models/forms/ProfileInfoFormValues";
import SkillFormValues from "../../models/forms/SkillFormValues";
import WorkExpFormValues from "../../models/forms/WorkExpFormValues";
import {
  ACCEPT_CONNECTION_REQUEST,
  ADD_EDUCATION,
  ADD_SKILL,
  ADD_WORK_EXPERIENCE,
  BLOCK_PROFILE,
  DECLINE_CONNECTION_REQUEST,
  DELETE_EDUCATION,
  DELETE_SKILL,
  DELETE_WORK_EXPERIENCE,
  DISLINK_WITH_PROFILE,
  GET_CONNECTION_REQUESTS,
  GET_NOT_BLOCKED_PROFILES,
  GET_PROFILE,
  GET_PROFILE_AUTH_USER,
  GET_PROFILE_EDUCATION,
  GET_PROFILE_SKILLS,
  GET_PROFILE_WORK_EXPERIENCE,
  GET_PUBLIC_PROFILES,
  LINK_WITH_PROFILE,
  SAVE_PROFILE,
  SEARCH_PUBLIC_PROFILES,
} from "./action-types";

export const getProfile = (id: string) => {
  return {
    type: GET_PROFILE,
    payload: { id },
  };
};

export const getProfileAuthUser = (id: string) => {
  return {
    type: GET_PROFILE_AUTH_USER,
    payload: { id },
  };
};

export const getProfileSkills = (id: string) => {
  return {
    type: GET_PROFILE_SKILLS,
    payload: { id },
  };
};

export const getProfileWorkExperience = (id: string) => {
  return {
    type: GET_PROFILE_WORK_EXPERIENCE,
    payload: { id },
  };
};

export const getProfileEducation = (id: string) => {
  return {
    type: GET_PROFILE_EDUCATION,
    payload: { id },
  };
};

export const getPublicProfiles = () => {
  return { type: GET_PUBLIC_PROFILES };
};

export const searchPublicProfiles = (query: string) => {
  return {
    type: SEARCH_PUBLIC_PROFILES,
    payload: { query },
  };
};

export const getNotBlockedProfiles = () => {
  return { type: GET_NOT_BLOCKED_PROFILES };
};

export const searchNotBlockedProfiles = (query: string) => {
  return {
    type: SEARCH_PUBLIC_PROFILES,
    payload: { query },
  };
};

export const linkWithProfile = (id: string) => {
  return {
    type: LINK_WITH_PROFILE,
    payload: { id },
  };
};

export const dislinkWithProfile = (id: string) => {
  return {
    type: DISLINK_WITH_PROFILE,
    payload: { id },
  };
};

export const blockProfile = (id: string) => {
  return {
    type: BLOCK_PROFILE,
    payload: { id },
  };
};

export const saveProfile = (profileInfoFormValues: ProfileInfoFormValues) => {
  return {
    type: SAVE_PROFILE,
    payload: profileInfoFormValues,
  };
};

export const addSkill = (skillFormValues: SkillFormValues) => {
  return {
    type: ADD_SKILL,
    payload: skillFormValues,
  };
};

export const deleteSkill = (id: string, profileId: string) => {
  return {
    type: DELETE_SKILL,
    payload: { id, profileId },
  };
};

export const addWorkExperience = (
  workExperienceFormValues: WorkExpFormValues
) => {
  return {
    type: ADD_WORK_EXPERIENCE,
    payload: workExperienceFormValues,
  };
};

export const deleteWorkExperience = (id: string, profileId: string) => {
  return {
    type: DELETE_WORK_EXPERIENCE,
    payload: { id, profileId },
  };
};

export const addEducation = (eduFormValues: EduFormValues) => {
  return {
    type: ADD_EDUCATION,
    payload: eduFormValues,
  };
};

export const deleteEducation = (id: string, profileId: string) => {
  return {
    type: DELETE_EDUCATION,
    payload: { id, profileId },
  };
};

export const getConnectionRequests = () => {
  return {
    type: GET_CONNECTION_REQUESTS,
  };
};

export const acceptConnectionRequest = (id: string) => {
  return {
    type: ACCEPT_CONNECTION_REQUEST,
    payload: { id },
  };
};

export const declineConnectionRequest = (id: string) => {
  return {
    type: DECLINE_CONNECTION_REQUEST,
    payload: { id },
  };
};
