// User roles available in the system
export const UserRolesEnum = {
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBER: "member",
};

// An array of all user role values → ["admin", "project_admin", "member"]
export const AvailableUserRole = Object.values(UserRolesEnum);

// Task statuses for project management
export const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

// An array of all task status values → ["todo", "in_progress", "done"]
export const AvailableTaskStatus = Object.values(TaskStatusEnum);
