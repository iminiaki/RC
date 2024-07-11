// Task interface
interface Task {
    id: number;
    title: string;
    completed: boolean;
}

// ToDoList class interface
interface IToDoList {
    tasks: Task[];
    addTask(title: string): void;
    deleteTask(id: number): void;
    toggleTaskStatus(id: number): void;
    filterTasks(completed: boolean): Task[];
    searchTasks(query: string): Task[];
    getTasks(): Task[];
}

// ToDoList class *mutable*
// class ToDoList implements IToDoList {
//     tasks: Task[] = [];
//     private nextId: number = 1;

//     addTask(title: string): void {
//         const newTask: Task = {
//             id: this.nextId++,
//             title,
//             completed: false,
//         };
//         this.tasks.push(newTask);
//     }

//     deleteTask(id: number): void {
//         this.tasks = this.tasks.filter(task => task.id !== id);
//     }

//     toggleTaskStatus(id: number): void {
//         const task = this.tasks.find(task => task.id === id);
//         if (task) {
//             task.completed = !task.completed;
//         }
//     }

//     filterTasks(completed: boolean): Task[] {
//         return this.tasks.filter(task => task.completed === completed);
//     }

//     searchTasks(query: string): Task[] {
//         return this.tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()));
//     }

//     getTasks(): Task[] {
//         return this.tasks;
//     }
// }


// ToDoList class *immutable*

class ToDoList implements IToDoList {
    tasks: Task[] = [];
    private nextId: number = 1;

    constructor(tasks: Task[] = [], nextId: number = 1) {
        this.tasks = tasks;
        this.nextId = nextId;
    }

    addTask(title: string): IToDoList {
        const newTask: Task = {
            id: this.nextId,
            title,
            completed: false,
        };
        return new ToDoList([...this.tasks, newTask], this.nextId + 1);
    }

    deleteTask(id: number): IToDoList {
        const updatedTasks = this.tasks.filter(task => task.id !== id);
        return new ToDoList(updatedTasks, this.nextId);
    }

    toggleTaskStatus(id: number): IToDoList {
        const updatedTasks = this.tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        return new ToDoList(updatedTasks, this.nextId);
    }

    filterTasks(completed: boolean): Task[] {
        return this.tasks.filter(task => task.completed === completed);
    }

    searchTasks(query: string): Task[] {
        return this.tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()));
    }

    getTasks(): Task[] {
        return this.tasks;
    }
}
