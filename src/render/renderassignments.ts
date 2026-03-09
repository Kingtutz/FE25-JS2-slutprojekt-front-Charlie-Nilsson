import { deleteAssignmentByID, updateAssignment } from "../assignments/assignmentfunctions"
import { getAssignments } from "../assignments/assignmentgetters"
import { type Assignment } from "../assignments/assignmenttypes"
import { currentTime } from "../main"
import { type Member } from "../members/memberstypes"

export const newassignmentwrapper = document.querySelector("#newassignments") as HTMLDivElement
export const ongoingassignmentwrapper = document.querySelector("#ongoingassignments") as HTMLDivElement
export const doneassignmentwrapper = document.querySelector("#doneassignments") as HTMLDivElement

export function renderAssignments(assignments: Assignment[], members: Member[]) {
  newassignmentwrapper.innerHTML = ""
  ongoingassignmentwrapper.innerHTML = ""
  doneassignmentwrapper.innerHTML = ""
  assignments.forEach((assignment: Assignment) => {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const time = document.createElement("p");
    const assignedmember = document.createElement("p");
    const catagory = document.createElement("p");
    const categoryform = document.createElement("form");
    const selector = document.createElement("select");
    const finishedTime = document.createElement("p")
    const assign = document.createElement("button");
    const done = document.createElement("button");
    const remove = document.createElement("button");

    div.classList = "assignmentcard"
    assign.innerText = "Assign"
    selector.name = "member";
    catagory.innerText = assignment.catagory;
    title.innerText = assignment.title;
    description.innerText = assignment.description
    time.innerText = "Added: " + assignment.timestamp
    assignedmember.innerText = "Assigned to: " + assignment.member
    finishedTime.innerText = "Finished at: " + assignment.finishtime

    const defaultOption = document.createElement("option");
    defaultOption.value = "NaN";
    defaultOption.innerText = "Select member";
    selector.append(defaultOption);

    members.forEach((member: Member) => {
      const option = document.createElement("option");
      option.value = member.name;
      option.innerText = `${member.name} (${member.catagory})`;
      if (assignment.member === member.name) {
        option.selected = true;
      }
      if (member.catagory === assignment.catagory) {
        selector.append(option);
      }
    });

    categoryform.append(selector, assign)

    assign.addEventListener("click", e => {
      e.preventDefault()
      if (!assignment.id) {
        return
      }
      const selectedMemberId = selector.value
      const patchAssignment = {
        id: assignment.id,
        status: "Ongoing",
        member: selectedMemberId,
        finishedTime: ""
      }
      if (selectedMemberId === "NaN") {
        alert("Please choose a member!!")
      } else {

        updateAssignment(patchAssignment).then(getAssignments)
      }
    })
    if (assignment.status === "new") {
      newassignmentwrapper.append(div);

      div.append(title, description, catagory, time, categoryform);
    }
    else if (assignment.status === "Ongoing") {
      ongoingassignmentwrapper.append(div);
      done.innerText = "done"

      done.addEventListener("click", e => {
        e.preventDefault()
        const patchAssignment = {
          id: assignment.id,
          status: "Done",
          finishtime: currentTime
        }
        updateAssignment(patchAssignment).then(getAssignments)
      })

      remove.innerText = "remove"
      remove.addEventListener("click", e => {
        e.preventDefault()
        deleteAssignmentByID(assignment.id).then(getAssignments)
      })
      finishedTime.innerText = "Not done yet" + currentTime

      div.append(title, description, catagory, time, finishedTime, assignedmember, remove, done);

    } else if (assignment.status === "Done") {
      doneassignmentwrapper.append(div);
      finishedTime.innerText = assignment.finishtime
      remove.innerText = "remove"
      remove.addEventListener("click", e => {
        e.preventDefault()
        deleteAssignmentByID(assignment.id).then(getAssignments)
      })
      div.append(title, description, catagory, time, finishedTime, assignedmember, remove);
    }
  })
}