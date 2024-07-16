import { TodoLis } from "../components/TodoList";

export default function Home({params }) {
    return (
        <main className="min-h-screen flex-col">
            <TodoList user={params.user} />
        </main>
    );
}