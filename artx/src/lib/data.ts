import schoolsData from '@/data/schools.json'
import programsData from '@/data/programs.json'
import type { School, Program } from './types'

export function getAllSchools(): School[] {
  return schoolsData as School[]
}

export function getSchoolById(id: string): School | undefined {
  return getAllSchools().find(s => s.id === id)
}

export function getAllPrograms(): Program[] {
  return programsData as Program[]
}

export function getProgramById(id: string): Program | undefined {
  return getAllPrograms().find(p => p.id === id)
}

export function getSchoolsByProgram(programId: string): School[] {
  return getAllSchools().filter(s => s.programs.includes(programId))
}

export function getProgramsBySchool(schoolId: string): Program[] {
  const school = getSchoolById(schoolId)
  if (!school) return []
  return getAllPrograms().filter(p => school.programs.includes(p.id))
}

export function getCountryLabel(code: string): string {
  const map: Record<string, string> = {
    US: '美国', UK: '英国', CA: '加拿大', AU: '澳大利亚', HK: '中国香港', SG: '新加坡', CN: '中国大陆'
  }
  return map[code] || code
}

export function getCountryFlag(code: string): string {
  const map: Record<string, string> = {
    US: '🇺🇸', UK: '🇬🇧', CA: '🇨🇦', AU: '🇦🇺', HK: '🇭🇰', SG: '🇸🇬', CN: '🇨🇳'
  }
  return map[code] || '🌍'
}

export function getTierLabel(tier: string): string {
  return tier === 'top' ? '顶尖档' : '中级档'
}

const PROGRAM_LABELS: Record<string, string> = {
  'illustration': '插画',
  'animation': '动画',
  'graphic-design': '视觉传达/平面设计',
  'industrial-design': '工业设计',
  'fine-art': '纯艺术',
  'fashion-design': '时尚设计',
  'game-design': '游戏设计',
  'interior-design': '室内设计',
  'photography': '摄影',
  'film-media': '电影与新媒体',
}

export function getProgramLabel(id: string): string {
  return PROGRAM_LABELS[id] || id
}

export function getLivingCostTierLabel(tier: string): string {
  const map: Record<string, string> = {
    'high': '高消费城市',
    'mid-high': '中高消费城市',
    'mid': '中等消费城市',
    'low': '低消费城市',
  }
  return map[tier] || tier
}
