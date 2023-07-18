interface LanguageProps {
  EN: string;
  BN: string;
}

interface DataMapProps {
  [key: string]: LanguageProps;
}

const data_map: DataMapProps = {
  antiCorruptionCommission: { EN: "", BN: "দুর্নীতি দমন কমিশন" },
  commissioner: { EN: "", BN: "কমিশনার" },
  chairman: { EN: "", BN: "চেয়ারম্যান" },
  secretary: { EN: "", BN: "সচিব" },
  assetManager: { EN: "", BN: "সম্পদ ব্যবস্থাপক" },
  directorPublicRelation: { EN: "", BN: "পরিচালক ( জনসংযোগ )" },
  medicalOfficer: { EN: "", BN: "মেডিকেল অফিসার" },
  reserve: { EN: "", BN: "রিজার্ভ" },

  directorGeneralAdministrationOrganizationFinance: {
    EN: "",
    BN: "মহাপরিচালক ( প্রশাসন, সংস্থাপন ও অর্থ ) ( প্রশাসন )",
  },
  directorGeneralTrainingInformationTechnology: {
    EN: "",
    BN: "মহাপরিচালক ( প্রশিক্ষণ ও তথ্যপ্রযুক্তি )",
  },
  directorGeneralEnquiriesInvestigationsEnquiriesInvestigations: {
    EN: "",
    BN: "মহাপরিচালক ( অনুসন্ধান ও তদন্ত ) ( অনুসন্ধান ও তদন্ত )",
  },
  directorGeneralSpecialInvestigationsInvestigationsSpecialInvestigations: {
    EN: "",
    BN: "মহাপরিচালক ( বিশেষ অনুসন্ধান ও তদন্ত ) ( বিশেষ তদন্ত ) ",
  },
  directorGeneralPendingMattersInspectionMoneyLaundering: {
    EN: "",
    BN: "মহাপরিচালক ( অনিষ্পন্ন বিষয়াদি ও পরিদর্শন ) ( মানিলন্ডারিং )",
  },
  directorGeneralLegalProsecutionLegal: {
    EN: "",
    BN: "মহাপরিচালক ( লিগ্যাল এন্ড প্রসিকিউশন ) ( লিগ্যাল )",
  },
  directorGeneralPreventionPublicAwarenessResearchTestingPrevention: {
    EN: "",
    BN: "মহাপরিচালক ( প্রতিরোধ, গণসচেতনতা, গবেষণা ও পরীক্ষণ ) ( প্রতিরোধ )",
  },
  directorAdministrationOrganizationHumanResources: {
    EN: "",
    BN: "পরিচালক ( প্রশাসন, সংস্থাপন ) ( মানবসম্পদ )",
  },
  directorFinanceAccounts: { EN: "", BN: "পরিচালক ( অর্থ  ও  হিসাব )" },
  enforcementUnit: { EN: "", BN: "এনফোর্সমেন্ট ইউনিট" },
  directorAdministrationResearch: {
    EN: "",
    BN: "পরিচালক ( প্রশাসন ও গবেষণা )",
  },
  systemAnalystInformationTechnologyShell: {
    EN: "",
    BN: "সিস্টেম এনালিস্ট ( তথ্য ও প্রযুক্তি শেল )",
  },
  directorInquiryInvestigationInquiryInvestigation1DhakaDivision: {
    EN: "",
    BN: "পরিচালক ( অনুসন্ধান ও তদন্ত ) ( অনুসন্ধান ও তদন্ত -১ ) ( ঢাকা বিভাগ )",
  },
  directorInquiryInvestigationInquiryInvestigationIIMymensinghDivision: {
    EN: "",
    BN: "পরিচালক ( অনুসন্ধান ও তদন্ত ) ( অনুসন্ধান ও তদন্ত -২ ) ( ময়মনসিংহ বিভাগ )",
  },
  directorInquiryInvestigationInquiryInvestigation3RajshahiDivision: {
    EN: "",
    BN: "পরিচালক ( অনুসন্ধান ও তদন্ত ) ( অনুসন্ধান ও তদন্ত -৩ ) ( রাজশাহী বিভাগ )",
  },
  directorInquiryInvestigationInquiryInvestigation4RangpurDivision: {
    EN: "",
    BN: "পরিচালক ( অনুসন্ধান ও তদন্ত ) ( অনুসন্ধান ও তদন্ত -৪ ) ( রংপুর বিভাগ )",
  },
  directorDailyRecentComplaintsShell: {
    EN: "",
    BN: "পরিচালক ( দৈনিক ও সাম্প্রতিক অভিযোগ শেল )",
  },
  directorInquiryInvestigationInquiryInvestigation5ChittagongDivision: {
    EN: "",
    BN: "পরিচালক ( অনুসন্ধান ও তদন্ত ) ( অনুসন্ধান ও তদন্ত -৫ ) ( চট্টগ্রাম বিভাগ )",
  },
  directorInquiryInvestigationInquiryInvestigation6SylhetDivision: {
    EN: "",
    BN: "পরিচালক ( অনুসন্ধান ও তদন্ত ) ( অনুসন্ধান ও তদন্ত -৬ ) ( সিলেট বিভাগ )",
  },
  directorInquiryInvestigationInquiryInvestigation7KhulnaDivision: {
    EN: "",
    BN: "পরিচালক ( অনুসন্ধান ও তদন্ত ) ( অনুসন্ধান ও তদন্ত -৭ ) ( খুলনা বিভাগ )",
  },
  directorInquiryInvestigationInquiryInvestigation8BarisalDivision: {
    EN: "",
    BN: "পরিচালক ( অনুসন্ধান ও তদন্ত ) ( অনুসন্ধান ও তদন্ত -৮ ) ( বরিশাল বিভাগ )",
  },
  directorSpecialInvestigationsInvestigations1: {
    EN: "",
    BN: "পরিচালক ( বিশেষ অনুসন্ধান ও তদন্ত - ১ )",
  },
  directorSpecialInvestigationsInvestigations2: {
    EN: "",
    BN: "পরিচালক ( বিশেষ অনুসন্ধান ও তদন্ত - ২ )",
  },
  directorSpecialInvestigationsInvestigations3: {
    EN: "",
    BN: "পরিচালক ( বিশেষ অনুসন্ধান ও তদন্ত - ৩ )",
  },
  directorNonBInspectionMoneyLaundering: {
    EN: "",
    BN: "পরিচালক ( অনিঃ বিঃ ও পরিদর্শন ) ( মানিলন্ডারিং )",
  },
  directorBank: { EN: "", BN: "পরিচালক ( ব্যাঙ্ক )" },
  directorInsuranceOtherFinancialInstitutions: {
    EN: "",
    BN: "পরিচালক ( বীমা ও অন্যান্য আর্থিক প্রতিষ্ঠান )",
  },
  directorLegal: { EN: "", BN: "পরিচালক ( লিগ্যাল )" },
  directorProsecution: { EN: "", BN: "পরিচালক  ( প্রসিকিউশন )" },
  directorPreventionPublicAwarenessPreventionPublicAwareness1DhakaMymensinghRajshahiRangpur:
    {
      EN: "",
      BN: "পরিচালক ( প্রতিরোধ ও গণসচেতনতা ) ( প্রতিরোধ ও গণসচেতনতা-১ ) ( ঢাকা , ময়মনসিংহ, রাজশাহী ও রংপুর )",
    },
  directorPreventionPublicAwareness2ChittagongSylhetKhulnaBarisal: {
    EN: "",
    BN: "পরিচালক ( প্রতিরোধ ও গণসচেতনতা-২ ) ( চট্টগ্রাম, সিলেট, খুলনা ও বরিশাল )",
  },
  directorNISUNCACFocalPoint: {
    EN: "",
    BN: "পরিচালক ( NIS এবং UNCAC Focal Point )",
  },
  directorSystemsDevelopmentCoordination: {
    EN: "",
    BN: "পরিচালক ( সিস্টেম উন্নয়ন ও সমন্বয় )",
  },
  directorResearchTestingResearchTesting: {
    EN: "",
    BN: "পরিচালক ( গবেষণা পরীক্ষণ ও প্রশিক্ষণ ) ( গবেষণা ও পরীক্ষণ )",
  },
  deputyDirectorAdministrationLogisticsAdministration: {
    EN: "",
    BN: "উপপরিচালক ( প্রশাসন ও লজিস্টেকস ) ( প্রশাসন )",
  },
  deputyDirectorOrganisationHumanResources: {
    EN: "",
    BN: "উপপরিচালক (সংস্থাপন ) ( মানবসম্পদ )",
  },
  deputyDirectorInspection: { EN: "", BN: "উপপরিচালক (পরিদর্শন )" },
  deputyDirectorFinanceAccountsFinanceAccountsAudit: {
    EN: "",
    BN: "উপপরিচালক ( অর্থ ও হিসাব ) ( অর্থ , হিসাব ও নিরীক্ষা )",
  },
  deputyDirectorAdministration: { EN: "", BN: "উপপরিচালক ( ব্যাবস্থাপনা )" },
  deputyDirectorTrainingRecords: {
    EN: "",
    BN: "উপপরিচালক ( প্রশিক্ষণ ও রেকর্ড )",
  },
  softwareCell: { EN: "", BN: "সফটওয়্যার সেল" },
  maintenanceNetworkCell: { EN: "", BN: "মেইন্টেনেন্স ও নেটওয়ার্ক সেল" },
  helpdesk: { EN: "", BN: "হেল্পডেস্ক" },
  deputyDirectorSupremeCourt: { EN: "", BN: "উপপরিচালক ( সুপ্রীম কোর্ট )" },
  deputyDirectorSpecialJudgesCourt: {
    EN: "",
    BN: "উপপরিচালক ( বিশেষ জজ আদালত )",
  },
  deputyDirectorProsecutionProsecutionGeneral: {
    EN: "",
    BN: "উপপরিচালক ( প্রসিকিউশন ) প্রসিকিউশন ( সার্বিক )",
  },
  deputyDirectorLegalProsecutionDhaka: {
    EN: "",
    BN: "উপপরিচালক ( লিগ্যাল ) প্রসিকিউশন ( ঢাকা )",
  },
  deputyDirectorPreventionPublicAwarenessPrevention: {
    EN: "",
    BN: "উপপরিচালক ( ( প্রতিরোধ ও গণসচেতনতা ) ( প্রতিরোধ  )",
  },
  deputyDirectorPublicAwarenessPublicHearing: {
    EN: "",
    BN: "উপপরিচালক ( গণসচেতনতা ও গনশুনানী )",
  },
  deputyDirectorPrevention: { EN: "", BN: "উপপরিচালক ( প্রতিরোধ  )" },
  deputyDirectorCoordinationDevelopmentAssociates: {
    EN: "",
    BN: "উপপরিচালক ( উন্নয়ন সহযোগী সমন্বয় )",
  },
  deputyDirectorSystemsReformsDevelopment: {
    EN: "",
    BN: "উপপরিচালক ( সিস্টেম সংস্কার ও উন্নয়ন )",
  },
  deputyDirectorOutreachProgrammeCommitteeIntegrityAssociation: {
    EN: "",
    BN: "উপপরিচালক ( আউটরিচ প্রোগ্রাম, কমিটি ও সততা সংঘ )",
  },
  deputyDirectorResearchResearchWingPublicationsLibraries: {
    EN: "",
    BN: "উপপরিচালক ( গবেষণা ও পরীক্ষণ শাখা  ) ( প্রকাশনা ও লাইব্রেরী )",
  },
  deputyDirectorExaminationBranchResearchSurvey: {
    EN: "",
    BN: "উপপরিচালক ( পরীক্ষণ শাখা  )  ( গবেষণা ও জরিপ )",
  },
};

const getValue = (key: string, lng: string): string => {
  const value: string = key
    ? (data_map[key.split("$")[0] as keyof DataMapProps] as LanguageProps)?.[
        lng as keyof LanguageProps
      ]
    : '"' + "UNKNOWN" + '"';
  return value ? '"' + value + '"' : '"' + "UNKNOWN" + '"';
};

export { getValue };
