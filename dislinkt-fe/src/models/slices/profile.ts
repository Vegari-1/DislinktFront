import ConnRequestData from "../data/ConnRequestData";
import EducationData from "../data/EducationData";
import ProfileInfoData from "../data/ProfileInfoData";
import ProfileSimple from "../data/ProfileSimple";
import SkillData from "../data/SkillData";
import WorkExperienceData from "../data/WorkExperienceData";

export interface ProfileSliceValues {
  profile: ProfileInfoData;
  skills: SkillData[];
  workExperiences: WorkExperienceData[];
  educations: EducationData[];
  profiles: ProfileSimple[];
  connectionRequests: ConnRequestData[];
}
