import type { CityConfig } from '../../types'

export const nashville: CityConfig = {
  id: 'nashville',
  name: 'Nashville',
  nameLower: 'nashville',
  state: 'Tennessee',
  stateAbbr: 'TN',
  metroLabel: 'Middle Tennessee',
  metroLabelShort: 'Nashville metro',
  domain: 'nashvillefenceguide.com',
  siteName: 'Nashville Fence Guide',
  siteUrl: 'https://nashvillefenceguide.com',

  counties: [
    'Davidson',
    'Williamson',
    'Sumner',
    'Wilson',
    'Rutherford',
    'Maury',
    'Montgomery',
  ],
  primaryCounty: 'Davidson',
  secondaryCounty: 'Williamson',
  primaryZip: '37203',
  topServiceAreaCities: [
    'Nashville',
    'Brentwood',
    'Franklin',
    'Hendersonville',
    'Mount Juliet',
    'Murfreesboro',
    'Belle Meade',
  ],

  frostLineInches: 10,
  soilType: 'clay',

  permitOffice: {
    name: 'Metro Nashville Codes',
    shortName: 'Metro Codes',
    url: 'https://www.nashville.gov/departments/codes/construction-and-permits/building-permits-central/fence',
  },
  historicCommission: {
    name: 'Historic Zoning Commission',
    abbr: 'HZC',
    url: 'https://www.nashville.gov/departments/historical-commission',
  },
  dig811: {
    name: 'Tennessee 811',
    phone: '811',
    url: 'https://tennessee811.com',
    noticeBusinessDays: 3,
  },
  adversePossession: {
    withColorOfTitleYears: 7,
    withoutColorOfTitleYears: 20,
  },
  poolBarrierCode: '2018 ISPSC',

  company: {
    name: 'Nashville Fence Guide',
    phone: '(615) 560-9956',
    phoneRaw: '+16155609956',
    areaCode: '615',
    email: 'hello@nashvillefenceguide.com',
    address: 'Nashville, TN',
    hours: 'Mon–Sat, 7:00 AM – 7:00 PM',
  },

  ga4PropertyId: 'G-9YZEPGM4X7',

  heroCardPrice: '$4,800',
  heroCardSubline: 'for 150 linear ft in Nashville',

  primaryKeyword: 'Fence Installation Nashville',
  hashTagLine: "Nashville's #1 Fence Resource & Contractor Referral Platform",
}
