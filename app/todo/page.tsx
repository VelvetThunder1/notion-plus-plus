"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function Todo() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('/api/tasks');
        const data = await response.json();
        setTasks(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="flex justify-center items-center max-w-xl mx-auto p-5">
                <Input placeholder="Task"></Input>
                <Button variant="secondary" className="ml-3 rounded-full h-9 w-9" type="submit">
                    <Plus></Plus>
                </Button>
            </div>
            <div className="flex flex-col justify-center items-center max-w-md mx-auto p-5">
                {tasks.map((task) => (
                    <Input defaultValue={task.title} className="m-2"></Input>
                ))}
            </div>
        </>
    )
}