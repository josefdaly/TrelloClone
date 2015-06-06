json.extract! board, :id, :title, :user_id

display_extras ||= false
if display_extras
  json.lists(board.lists) do |list|
    json.partial! 'api/lists/list', list: list
  end
end
