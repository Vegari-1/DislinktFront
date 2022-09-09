import EduFormValues from "../models/forms/EduFormValues";
import ProfileInfoFormValues from "../models/forms/ProfileInfoFormValues";
import SkillFormValues from "../models/forms/SkillFormValues";
import WorkExpFormValues from "../models/forms/WorkExpFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  GET_PROFILE: "/profile/",
  SAVE_PROFILE: "/profile",
  GET_PROFILE_SKILL: "/skill",
  GET_PROFILE_WORK_EXPERIENCE: "/work-experience",
  GET_PROFILE_EDUCATION: "/education",
  GET_PUBLIC_PROFILES: "/profile?isPublic=true",
  SEARCH_PUBLIC_PROFILES: "/profile?isPublic=true&query=",
  LINK_WITH_PROFILE: "/profile/link/",
  DISLINK_WITH_PROFILE: "/profile/dislink/",
  BLOCK_PROFILE: "/profile/block/",
  GET_CONNECTION_REQUESTS: "/profile/conn-req",
  CONNECTION_REQUEST: "/profile/conn-req/:",
};

export class ProfileService extends ApiService {
  getProfile = async (id: string) => {
    // const { data } = await this.apiClient.get(ENDPOINTS.GET_PROFILE + id);

    // return data;
    return {
      id: "1",
      name: "Ksenija",
      surname: "Prcic",
      username: "resetKsenija",
      email: "ksenija@ksenija.com",
      gender: "Female",
      dateOfBirth: new Date(),
      phone: "392055235",
      info: "I am a robot human hybrid sent to this planet to investigate.",
      public: false,
      picture: "picture",
      following: true,
    };
  };

  getProfileSkills = async (id: string) => {
    // const { data } = await this.apiClient.get(
    //   ENDPOINTS.GET_PROFILE + id + ENDPOINTS.GET_PROFILE_SKILL
    // );

    // return data;

    return [
      { id: "1", name: "C#" },
      { id: "2", name: "Java" },
      { id: "3", name: "Angular" },
    ];
  };

  getProfileWorkExperience = async (id: string) => {
    // const { data } = await this.apiClient.get(
    //   ENDPOINTS.GET_PROFILE + id + ENDPOINTS.GET_PROFILE_WORK_EXPERIENCE
    // );

    // return data;

    return [
      {
        id: "1",
        position: "Software Engineer",
        company: "Company Uno",
        startDate: new Date(),
        endDate: new Date(),
      },
      {
        id: "2",
        position: "Extra Payed",
        company: "Company Dos",
        startDate: new Date(),
        endDate: new Date(),
      },
      {
        id: "3",
        position: "Boss",
        company: "Company Tres",
        startDate: new Date(),
        endDate: new Date(),
      },
    ];
  };

  getProfileEducation = async (id: string) => {
    // const { data } = await this.apiClient.get(
    //   ENDPOINTS.GET_PROFILE + id + ENDPOINTS.GET_PROFILE_EDUCATION
    // );

    // return data;
    return [
      {
        id: "1",
        school: "Gimnazija Jovan Jovanovic Zmaj",
        degree: "High School",
        field: "Bilingual English Science",
        startDate: new Date(),
        endDate: new Date(),
      },
      {
        id: "2",
        school: "Faculty of Technical Science",
        degree: "Bachelor",
        field: "Computer Science",
        startDate: new Date(),
        endDate: new Date(),
      },
    ];
  };

  getPublicProfiles = async () => {
    // const { data } = await this.apiClient.get(ENDPOINTS.GET_PUBLIC_PROFILES);

    // return data;
    return [
      {
        id: "347903f7-28d0-4dca-803d-3b0cc0e61e71",
        name: "Ksenija",
        surname: "Prcic",
        username: "ksenija",
        picture: "picture",
      },
      {
        id: "347903f7-28d0-4dca-803d-3b0cc0e61e71",
        name: "Ksenija",
        surname: "Prcic",
        username: "ksenija",
        picture: "picture",
      },
    ];
  };

  searchPublicProfiles = async (query: string) => {
    // const { data } = await this.apiClient.get(
    //   ENDPOINTS.SEARCH_PUBLIC_PROFILES + query
    // );

    // return data;
    return [
      {
        id: "347903f7-28d0-4dca-803d-3b0cc0e61e71",
        name: "Ksenija",
        surname: "Prcic",
        username: "ksenija",
        picture: "picture",
      },
    ];
  };

  linkWithProfile = async (id: string) => {
    // const { data } = await this.apiClient.get(
    //   ENDPOINTS.LINK_WITH_PROFILE + id
    // );

    // return data;
    console.log("Linked with: " + id);
  };

  dislinkWithProfile = async (id: string) => {
    // const { data } = await this.apiClient.get(
    //   ENDPOINTS.DISLINK_WITH_PROFILE + id
    // );

    // return data;
    console.log("Dislinked with: " + id);
  };

  blockProfile = async (id: string) => {
    // const { data } = await this.apiClient.get(
    //   ENDPOINTS.BLOCK_PROFILE + id
    // );

    // return data;
    console.log("Blocked: " + id);
  };

  saveProfile = async (profileInfoFormValues: ProfileInfoFormValues) => {
    // const { data } = await this.apiClient.put(
    //   ENDPOINTS.SAVE_PROFILE,profileInfoFormValues
    // );

    // return data;
    console.log(profileInfoFormValues);
  };

  addSkill = async (skillFormValues: SkillFormValues) => {
    // const { data } = await this.apiClient.post(
    //   ENDPOINTS.GET_PROFILE_SKILL,skillFormValues
    // );

    // return data;
    console.log(skillFormValues);
  };

  deleteSkill = async (id: string) => {
    // const { data } = await this.apiClient.delete(
    //   ENDPOINTS.GET_PROFILE_SKILL + id
    // );

    // return data;
    console.log(id);
  };

  addWorkExperience = async (workExperienceFormValues: WorkExpFormValues) => {
    // const { data } = await this.apiClient.post(
    //   ENDPOINTS.GET_PROFILE_WORK_EXPERIENCE,workExperienceFormValues
    // );

    // return data;
    console.log(workExperienceFormValues);
  };

  deleteWorkExperience = async (id: string) => {
    // const { data } = await this.apiClient.delete(
    //   ENDPOINTS.GET_PROFILE_WORK_EXPERIENCE + id
    // );

    // return data;
    console.log(id);
  };

  addEducation = async (eduFormValues: EduFormValues) => {
    // const { data } = await this.apiClient.post(
    //   ENDPOINTS.GET_PROFILE_EDUCATION,eduFormValues
    // );

    // return data;
    console.log(eduFormValues);
  };

  deleteEducation = async (id: string) => {
    // const { data } = await this.apiClient.delete(
    //   ENDPOINTS.GET_PROFILE_WORK_EXPERIENCE + id
    // );

    // return data;
    console.log(id);
  };

  getConnectionRequests = async () => {
    // const { data } = await this.apiClient.get(
    //   ENDPOINTS.GET_CONNECTION_REQUESTS
    // );
    // return data;

    return [
      {
        id: "1",
        name: "Eva",
        surname: "Jankovic",
        username: "evaj10",
        picture: "data:image/gif;base64,",
      },
      {
        id: "2",
        name: "Petar",
        surname: "Petrovic",
        username: "pera9",
        picture: "data:image/gif;base64,",
      },
    ];
  };

  acceptConnectionRequest = async (id: string) => {
    // const { data } = await this.apiClient.post(
    //   ENDPOINTS.CONNECTION_REQUEST + id
    // );
    // return data;
    console.log("Accept: " + id);
  };

  declineConnectionRequest = async (id: string) => {
    // const { data } = await this.apiClient.delete(
    //   ENDPOINTS.CONNECTION_REQUEST + id
    // );
    // return data;
    console.log("Decline: " + id);
  };
}

const profileService = new ProfileService();

export default profileService;
