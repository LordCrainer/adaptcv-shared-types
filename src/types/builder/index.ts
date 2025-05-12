import { BaseEntity } from "src/shared/base.entities"
import { AreasProfession } from "./constants"
import { IFileImage } from "src/shared/file-image"

export type yearsOfExperience =
  | 'less1year'
  | '1to2years'
  | '2to3years'
  | '5to10years'
  | '10plusyears'

export type Degree =
  | 'secondary'
  | 'highSchool'
  | 'technical'
  | 'undergraduate'
  | 'graduate'
  | 'masters'
  | 'doctorate'

export interface ISkill {
  skill?: string
  yearsOfExperience: yearsOfExperience | undefined
}

type Proficiency = 'beginner' | 'intermediate' | 'advanced' | 'native'
export interface ILanguageItem {
  name?: string
  proficiency: Proficiency
}

export interface IEducationItem {
  id: string
  institution: string
  degree: Degree | undefined
  fieldOfStudy: string
  startDate: string
  endDate: string
  city?: string
  country?: string
}

export interface IWorkExperience<T = any> {
  id: string
  jobTitle: string
  company: string
  startDate: string
  endDate: string
  description: T
  city?: string
  country?: string
}

export interface SocialMedia {
  linkedin: string
  github: string
  website: string
}
export interface IUserProfile {
  name: string
  profession?: string
  areaProfession?: AreasProfession
  email: string
  phone: string
  address: string
  country?: string
  city?: string
  image?: IFileImage
  socialMedia?: Partial<SocialMedia>
}

export interface IAboutMe {
  summary: string
  logo: IFileImage
  slogan: string
}

export interface Builder extends BaseEntity {
  _id?: string
  name: string
  userProfile: IUserProfile
  skills: ISkill[]
  languages: ILanguageItem[]
  education: IEducationItem[]
  workExperience: IWorkExperience[]
  status: 'draft' | 'published'
  aboutMe: IAboutMe
}

export type Sections = keyof Pick<
  Builder,
  | 'userProfile'
  | 'skills'
  | 'languages'
  | 'education'
  | 'workExperience'
  | 'aboutMe'
>