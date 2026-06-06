/**
 * Shape every city config must satisfy. Add a new city by creating
 * src/config/cities/<id>/config.ts that exports an object of this type, then
 * importing it from src/config/city.ts under the active VITE_CITY env var.
 */
export type CityConfig = {
  // Identity
  id: string
  name: string
  nameLower: string
  state: string
  stateAbbr: string
  metroLabel: string
  metroLabelShort: string
  domain: string
  siteName: string
  siteUrl: string

  // Geography
  counties: string[]
  primaryCounty: string
  secondaryCounty: string
  primaryZip: string
  // City names shown in JSON-LD areaServed, sitemap meta, and SEO copy
  topServiceAreaCities: string[]

  // Climate / soil
  frostLineInches: number
  soilType: string

  // Regulatory entities
  permitOffice: {
    name: string
    shortName: string
    url: string
  }
  historicCommission: {
    name: string
    abbr: string
    url: string
  }
  dig811: {
    name: string
    phone: string
    url: string
    noticeBusinessDays: number
  }
  adversePossession: {
    withColorOfTitleYears: number
    withoutColorOfTitleYears: number
  }
  poolBarrierCode: string

  // Company contact (the directory operator)
  company: {
    name: string
    phone: string
    phoneRaw: string
    areaCode: string
    email: string
    address: string
    hours: string
  }

  // Analytics
  ga4PropertyId: string

  // Hero illustrative numbers
  heroCardPrice: string
  heroCardSubline: string

  // SEO / messaging
  primaryKeyword: string
  hashTagLine: string
}
