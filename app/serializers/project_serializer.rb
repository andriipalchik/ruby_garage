class ProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :tasks
end
