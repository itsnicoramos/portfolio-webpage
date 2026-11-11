// Coursework and study, newest first. Checked against each repository's
// README on 2026-11-10. CSCI 161 and 162 intentionally carry no links: the
// links were removed from the previous site on purpose (commit 6d08983).

export type ArchiveEntry = {
  id: string
  title: string
  context: string
  period: string
  body: string
  tags: readonly string[]
  href?: string
}

export const archive: readonly ArchiveEntry[] = [
  {
    id: 'csci-162',
    title: 'CSCI 162 · Topics in Computer Science',
    context: 'Vancouver Island University',
    period: 'Spring 2026',
    body: 'C programming, number systems, digital logic with Karnaugh maps, debugging with GDB, MARIE assembly and relational databases in SQLite.',
    tags: ['C', 'MARIE Assembly', 'GDB', 'SQLite', 'Digital logic'],
  },
  {
    id: 'csci-161',
    title: 'CSCI 161 · Computer Science II',
    context: 'Vancouver Island University',
    period: 'Spring 2026',
    body: 'Hand-built data structures instead of the STL: dynamic arrays with recursive quicksort, doubly linked lists with merge sort, and a bug tracker on a binary search tree with removal and deep copy.',
    tags: ['C++', 'Linked lists', 'BST', 'Recursion', 'Make'],
  },
  {
    id: 'csci-159',
    title: 'CSCI 159 · Computer Science I',
    context: 'Vancouver Island University',
    period: 'Fall 2025',
    body: 'C++ labs from first programs and input validation to a Monte Carlo estimate of π, a grade calculator with bubble sort, a circular-queue package processor, and a bonus lab that rebuilds the queue on heap-allocated pointers.',
    tags: ['C++', 'g++', 'Arrays', 'Queues', 'Dynamic memory'],
    href: 'https://github.com/itsnicoramos/csci159-labs',
  },
  {
    id: 'csci-115',
    title: 'CSCI 115 · Web development final project',
    context: 'Vancouver Island University',
    period: '2025',
    body: 'A responsive personal site in plain HTML, CSS and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/itsnicoramos/csci115-project',
  },
  {
    id: 'cpp-todo-list',
    title: 'C++ to-do list',
    context: 'Personal practice',
    period: '2025',
    body: 'A command-line to-do list built only from structs, arrays and loops: no classes, no vectors, no file I/O.',
    tags: ['C++', 'Structs', 'Arrays'],
    href: 'https://github.com/itsnicoramos/cpp-todo-list',
  },
  {
    id: 'ai-engineering-from-scratch',
    title: 'AI Engineering from Scratch',
    context: 'Open-source curriculum by rohitg00',
    period: '2026, ongoing',
    body: 'Working through a free, MIT-licensed curriculum on model internals, retrieval pipelines and agent runtimes. My working copy lives on my GitHub; the course is not my work.',
    tags: ['Python', 'LLMs', 'RAG', 'Agents'],
    href: 'https://github.com/rohitg00/ai-engineering-from-scratch',
  },
  {
    id: 'course-claude-code',
    title: 'Master Claude Code, Plugins and Skills',
    context: 'Online course',
    period: '2026',
    body: 'Building Claude Code plugins and skills, automating workflows with Cowork and deploying autonomous agents.',
    tags: ['Claude Code', 'Skills', 'Agents'],
  },
  {
    id: 'course-prompt-engineering',
    title: 'Master Prompt Engineering',
    context: 'Online course',
    period: '2026',
    body: 'Designing, structuring and testing prompts to get reliable output from large language models.',
    tags: ['Prompt engineering', 'LLMs'],
  },
]
