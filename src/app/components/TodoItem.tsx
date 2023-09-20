'use client'

//type props for todo items
type TodoProps = {
    id: string,
    title: string,
    complete: boolean,
    toggleTodo: (id: string, complete: boolean) => void
}

//todo function
export default function TodoItem({ id, title, complete, toggleTodo }: TodoProps) {

    return (
        <>
            <li className="flex gap-1 items-center">
                <input
                    defaultChecked={complete}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                    id={id}
                    type="checkbox"
                    className="cursor-pointer peer" />
                <label
                    htmlFor={id}
                    className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
                    {title}
                </label>
            </li>
        </>
    )
}
