import { type NewAssignment, type UpdateAssignment } from "./assignmenttypes.ts"
import { baseUrl } from "../main"

export const addAssignment = async (newAssignment: NewAssignment) => {
  const option = {
    method: "POST",
    body: JSON.stringify(newAssignment),
    headers: {
      "Content-type": "application/json"
    }
  }
  const res = await fetch(baseUrl + "assignments", option)
  const data = await res.json()
  console.log(data)
}
export const updateAssignment = async (updateAssignment: UpdateAssignment) => {
  const option = {
    method: "PATCH",
    body: JSON.stringify(updateAssignment),
    headers: {
      "Content-type": "application/json"
    }
  }
  const res = await fetch(baseUrl + "assignments", option)
  const data = await res.json()
  console.log(data)
}
export const deleteAssignmentByID = async (id: string) => {
  const option = {
    method: "DELETE"
  }
  const res = await fetch(baseUrl + `assignments?id=${encodeURIComponent(id)}`, option)
  const data = await res.json()
  console.log(data)
}