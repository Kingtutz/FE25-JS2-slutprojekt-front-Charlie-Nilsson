import { addMember } from "./members/membersfunctions"
import { getMembers } from "./members/getmembersfunc"
import { getAssignments } from "./assignments/assignmentgetters"
import { type NewMember } from "./members/memberstypes"
import type { NewAssignment } from "./assignments/assignmenttypes"
import { addAssignment } from "./assignments/assignmentfunctions"
export const baseUrl = 'http://localhost:3000/'

getMembers()
getAssignments()

const currentTime = new Date().toLocaleTimeString()
console.log(currentTime)

const addMemberform = document.querySelector("#addmember") as HTMLFormElement
addMemberform.addEventListener("submit", e => {
  e.preventDefault()
  const formData = new FormData(addMemberform)

  const newMember: NewMember = {
    name: formData.get('name') as string,
    catagory: formData.get('catagory') as string
  }
  console.log(newMember)


  addMember(newMember).then(getMembers).then(getAssignments)
  addMemberform.reset();
})

const addAssignmentForm = document.querySelector("#addassignment") as HTMLFormElement
addAssignmentForm.addEventListener("submit", e => {
  e.preventDefault()
  const formData = new FormData(addAssignmentForm)
  const newAssignment: NewAssignment = {
    title: formData.get("title") as string,
    catagory: formData.get("catagory") as string,
    description: formData.get("assignment") as string,
    status: "new",
    timestamp: currentTime,
    member: ""
  }
  console.log(newAssignment)
  addAssignment(newAssignment).then(getAssignments)
  addAssignmentForm.reset()
})
