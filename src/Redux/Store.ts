export type mySkillsType = {
  skillComponent: Array<skillsType>
}

export type skillsType = {
  skill: string
}

export let mySkills: mySkillsType = {
  skillComponent: [
    {skill: "HTML"},
    {skill: "CSS"},
    {skill: "React"}
  ]
}