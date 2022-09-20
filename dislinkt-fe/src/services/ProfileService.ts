import EducationData from "../models/data/EducationData";
import ProfileInfoData from "../models/data/ProfileInfoData";
import WorkExperienceData from "../models/data/WorkExperienceData";
import EduFormValues from "../models/forms/EduFormValues";
import ProfileInfoFormValues from "../models/forms/ProfileInfoFormValues";
import SkillFormValues from "../models/forms/SkillFormValues";
import WorkExpFormValues from "../models/forms/WorkExpFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  GET_PROFILE: "/profile-service/profile/",
  SAVE_PROFILE: "/profile-service/profile",
  GET_PROFILE_SKILL: "/skill",
  GET_PROFILE_WORK_EXPERIENCE: "/work-experience",
  GET_PROFILE_EDUCATION: "/education",
  GET_PUBLIC_PROFILES: "/profile-service/profile?isPublic=true",
  SEARCH_PUBLIC_PROFILES: "/profile-service/profile?isPublic=true&query=",
  GET_NOT_BLOCKED_PROFILES: "/profile-service/profile",
  SEARCH_NOT_BLOCKED_PROFILES: "/profile-service/profile?query=",
  CONNECT_WITH_PROFILE: "/profile-service/connection",
  BLOCK_PROFILE: "/profile-service/profile/block/",
  SKILL: "/profile-service/skill",
  WORK_EXPERIENCE: "/profile-service/workexperience",
  EDUCATION: "/profile-service/education",
  GET_CONNECTION_REQUESTS: "/profile-service/conn-req",
  CONNECTION_REQUEST: "/profile-service/conn-req/",
  GET_API_KEY: "/profile-service/profile/api-key",
};

export class ProfileService extends ApiService {
  getProfile = async (id: string) => {
    const { data } = await this.apiClient.get<ProfileInfoData>(
      ENDPOINTS.GET_PROFILE + id
    );
    data.dateOfBirth = new Date(data.dateOfBirth);
    return data;
  };

  getProfileAuthUser = async (id: string) => {
    const { data } = await this.apiClient.get<ProfileInfoData>(
      ENDPOINTS.GET_PROFILE + "auth/" + id
    );
    data.dateOfBirth = new Date(data.dateOfBirth);
    return data;
  };

  getProfileSkills = async (id: string) => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.GET_PROFILE + id + ENDPOINTS.GET_PROFILE_SKILL
    );

    return data;
  };

  getProfileWorkExperience = async (id: string) => {
    const { data } = await this.apiClient.get<WorkExperienceData[]>(
      ENDPOINTS.GET_PROFILE + id + ENDPOINTS.GET_PROFILE_WORK_EXPERIENCE
    );
    data.map((elem) => {
      elem.startDate = new Date(elem.startDate);
      if (elem.endDate !== null) {
        elem.endDate = new Date(elem.endDate);
      }
      return elem;
    });

    return data;
  };

  getProfileEducation = async (id: string) => {
    const { data } = await this.apiClient.get<EducationData[]>(
      ENDPOINTS.GET_PROFILE + id + ENDPOINTS.GET_PROFILE_EDUCATION
    );
    data.map((elem) => {
      elem.startDate = new Date(elem.startDate);
      if (elem.endDate !== null) {
        elem.endDate = new Date(elem.endDate);
      }
      return elem;
    });

    return data;
  };

  getPublicProfiles = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.GET_PUBLIC_PROFILES);

    return data;
  };

  searchPublicProfiles = async (query: string) => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.SEARCH_PUBLIC_PROFILES + query
    );

    return data;
  };

  getNotBlockedProfiles = async () => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.GET_NOT_BLOCKED_PROFILES
    );

    return data;
  };

  searchNotBlockedProfiles = async (query: string) => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.SEARCH_NOT_BLOCKED_PROFILES + query
    );

    return data;
  };

  linkWithProfile = async (id: string) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.CONNECT_WITH_PROFILE + "/" + id
    );

    return data;
  };

  dislinkWithProfile = async (id: string) => {
    const { data } = await this.apiClient.delete(
      ENDPOINTS.CONNECT_WITH_PROFILE + "/" + id
    );

    return data;
  };

  blockProfile = async (id: string) => {
    const { data } = await this.apiClient.post(ENDPOINTS.BLOCK_PROFILE + id);

    return data;
  };

  saveProfile = async (profileInfoFormValues: ProfileInfoFormValues) => {
    const { data } = await this.apiClient.put(
      ENDPOINTS.SAVE_PROFILE,
      profileInfoFormValues
    );
    data.dateOfBirth = new Date(data.dateOfBirth);

    return data;
  };

  addSkill = async (skillFormValues: SkillFormValues) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.SKILL,
      skillFormValues
    );

    return data;
  };

  deleteSkill = async (id: string) => {
    const { data } = await this.apiClient.delete(ENDPOINTS.SKILL + "/" + id);

    return data;
  };

  addWorkExperience = async (workExperienceFormValues: WorkExpFormValues) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.WORK_EXPERIENCE,
      workExperienceFormValues
    );

    return data;
  };

  deleteWorkExperience = async (id: string) => {
    const { data } = await this.apiClient.delete(
      ENDPOINTS.WORK_EXPERIENCE + "/" + id
    );

    return data;
  };

  addEducation = async (eduFormValues: EduFormValues) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.EDUCATION,
      eduFormValues
    );

    return data;
  };

  deleteEducation = async (id: string) => {
    const { data } = await this.apiClient.delete(
      ENDPOINTS.EDUCATION + "/" + id
    );

    return data;
  };

  getConnectionRequests = async () => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.GET_CONNECTION_REQUESTS
    );
    return data;
  };

  acceptConnectionRequest = async (id: string) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.CONNECTION_REQUEST + id
    );
    return data;
  };

  declineConnectionRequest = async (id: string) => {
    const { data } = await this.apiClient.delete(
      ENDPOINTS.CONNECTION_REQUEST + id
    );
    return data;
  };

  getApiKey = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.GET_API_KEY);
    return data;
  };
}

const profileService = new ProfileService();

export default profileService;
