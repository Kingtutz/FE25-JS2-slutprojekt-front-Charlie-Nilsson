import { baseUrl } from "../main";
export const memberswrapper = document.querySelector("#memberwrapper") as HTMLDivElement
export async function getMembers() {
  try {
    const response = await fetch(baseUrl + "members");
    if (!response.ok) {
      console.error("Failed to fetch members:", response.status, response.statusText);
      throw Error;
    }
    const members = await response.json();

    console.log(members);

  } catch (error) {
    console.error("Error fetching members:", error);
  }
}

