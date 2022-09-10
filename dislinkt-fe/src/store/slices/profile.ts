import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ConnRequestData from "../../models/data/ConnRequestData";
import EducationData from "../../models/data/EducationData";
import ProfileInfoData from "../../models/data/ProfileInfoData";
import ProfileSimple from "../../models/data/ProfileSimple";
import SkillData from "../../models/data/SkillData";
import WorkExperienceData from "../../models/data/WorkExperienceData";
import { ProfileSliceValues } from "../../models/slices/profile";

const initProfileValues: ProfileSliceValues = {
  profile: {
    id: "",
    name: "",
    surname: "",
    username: "",
    email: "",
    gender: "",
    dateOfBirth: new Date(),
    phone: "",
    biography: "",
    public: false,
    picture: "",
    following: false,
  },
  skills: [],
  workExperiences: [],
  educations: [],
  profiles: [],
  connectionRequests: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initProfileValues,
  reducers: {
    setProfile(state, action: PayloadAction<ProfileInfoData>) {
      state.profile = action.payload;
    },
    setProfileSkills(state, action: PayloadAction<SkillData[]>) {
      state.skills = action.payload;
    },
    setProfileWorkExperiences(
      state,
      action: PayloadAction<WorkExperienceData[]>
    ) {
      state.workExperiences = action.payload;
    },
    setProfileEducations(state, action: PayloadAction<EducationData[]>) {
      state.educations = action.payload;
    },
    setProfiles(state, action: PayloadAction<ProfileSimple[]>) {
      state.profiles = action.payload;
    },
    setConnectionRequests(state, action: PayloadAction<ConnRequestData[]>) {
      state.connectionRequests = action.payload;
    },
  },
});

export const {
  setProfile,
  setProfileSkills,
  setProfileWorkExperiences,
  setProfileEducations,
  setProfiles,
  setConnectionRequests,
} = profileSlice.actions;

export default profileSlice.reducer;
