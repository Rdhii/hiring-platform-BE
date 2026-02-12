export interface CreateCandidateDto {
    postJobId: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth?: string;
  domicile?: string;
  gender?: string;
  linkedinLink?: string;
  photoProfile?: string;
}