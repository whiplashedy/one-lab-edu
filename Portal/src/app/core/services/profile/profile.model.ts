export interface ProfileModel {
    id?: string;
    aboutMyself: string;
    birthday: string;
    direction: DirectionModel;
    email: string;
    fullName: string;
    gender: string;
    hobby: string[];
    phone: string;
    photo: string;
    position: PositionModel;
    projects: ProjectModel[];
    skills: SkillModel[];
    specialization: SpecializationModel;
    status: string;
    teamlead: string;
}

export interface ProjectModel {
    name: string;
    startDate: string;
    endDate: string;
    task: string;
}

export interface SkillModel {
    id: string;
    skillName: string;
}

export interface SpecializationModel {
    name: string;
    startDate: string;
    endDate: string;
}

export interface PositionModel {
    level: number;
    name: string;
    startDate: string;
}

export interface DirectionModel {
    level: number;
    name: string;
    parentDirection: string;
}
