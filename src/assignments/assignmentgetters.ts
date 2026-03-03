import { baseUrl } from "../main";
import { renderAssignments } from "../render/renderassignments";
import { fetchMembers } from "../members/membersfunctions";

export async function getAssignments() {
  try {
    const response = await fetch(baseUrl + "assignments");

    if (!response.ok) {
      console.error("Failed to fetch assignments:", response.status, response.statusText);
      return;
    }
    const assignments = await response.json();
    const members = await fetchMembers();
    renderAssignments(assignments, members)
  } catch (error) {
    console.error("Error fetching assignments:", error);
  }
}


