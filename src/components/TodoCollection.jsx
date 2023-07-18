import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  onToggleDone,
  onSave,
  onDelete,
  onChangeMode,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={(id) => onToggleDone?.(id)}
          onChangeMode={({ id, isEdit }) => onChangeMode?.({ id, isEdit })}
        />
      ))}
    </div>
  );
};

export default TodoCollection;
