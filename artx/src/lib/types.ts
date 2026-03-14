export interface School {
  id: string
  name_en: string
  name_zh: string
  abbreviation: string
  country: 'US' | 'UK' | 'CA' | 'AU' | 'HK' | 'SG' | 'CN'
  city_en: string
  city_zh: string
  type: string
  website: string
  qs_ranking: number | null
  acceptance_rate: string
  tuition_usd: number
  tier: 'top' | 'mid'
  sat_range: string | null
  test_optional: boolean
  programs: string[]
  portfolio: {
    pieces: string
    platform: string
    observational_drawing_required: boolean
    description: string
  }
  deadlines: {
    early_decision?: string
    early_action?: string
    regular_decision: string
  }
  living_cost: {
    monthly_low_usd: number
    monthly_high_usd: number
    tier: 'low' | 'mid' | 'mid-high' | 'high'
    source: string
  }
  financial_aid: {
    merit_scholarships: boolean
    need_based_aid: boolean
    description: string
  }
  application_url: string
  highlights: string[]
}

export interface Program {
  id: string
  name_zh: string
  name_en: string
  description: string
  typical_courses: string[]
  career_paths: {
    title: string
    salary_range: string
  }[]
  ai_outlook: string
  schools: string[]
}

export type CountryCode = School['country']
export type Tier = School['tier']
