import Link from 'next/link'
import { prisma } from './db'
import TodoItem from "./components/TodoItem";
import React from 'react';

const toggleTodo = async (id: string, complete: boolean) => {
  'use server'

  console.log(id, complete)

  await prisma.todo.update({ where: { id }, data: { complete } })
}

function getTodo() {
  return prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodo();
  //create a sample to-do
  //await prisma.todo.create({ data: { title: "test", complete: false } })
  //delete all the to-do's
  //const del = await prisma.todo.deleteMany({});

  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>New To-Do</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          New To-Do Page
        </Link>
      </header>
      <ul className='pl-4'>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  )
}
