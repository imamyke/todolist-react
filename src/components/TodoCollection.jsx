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
          onSave={({ id, title }) => onSave({ id, title })}
          onToggleDone={(id) => onToggleDone?.(id)}
          onChangeMode={({ id, isEdit }) => onChangeMode?.({ id, isEdit })}
          onDelete={() => onDelete?.(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoCollection;
