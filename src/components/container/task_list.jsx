import React, { useState, useEffect} from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    // estado del componente
    const [task, setTasks] = useState([defaultTask]);


    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log("Task State has been modified");
        return () => {
            console.log("TaskList component is going to unmount");
        };
    }, [tasks]);
    

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }
 

    return (
        <div>
            <h1>
                Your tasks:
            </h1>
            {/* TODO: Aplicar un For/Map para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
