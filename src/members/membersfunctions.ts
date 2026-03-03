import { type NewMember, type Member } from "./memberstypes"
import { baseUrl } from "../main"

export const addMember = async (NewMember: NewMember) => {
  const option = {
    method: "POST",
    body: JSON.stringify(NewMember),
    headers: {
      "Content-type": "application/json"
    }
  }
  const res = await fetch(baseUrl + "members", option)
  const data = await res.json()
  console.log(data)
}


export async function fetchMembers(): Promise<Member[]> {
  try {
    const response = await fetch(baseUrl + "members");
    if (!response.ok) {
      console.error("Failed to fetch members:", response.status, response.statusText);
      return [];
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
}