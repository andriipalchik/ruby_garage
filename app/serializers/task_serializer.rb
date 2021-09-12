class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :status, :priority, :deadline, :project_id
end
