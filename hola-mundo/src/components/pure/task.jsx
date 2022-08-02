import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
//importamos la hoja de estilos
import '../../styles/task.css'

//PROPS -> DATOS PRIMITIVOS, OBJETOS, CLASES Y FUNCIONES
const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Tarea creada');
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    return (
        <div>
            <h2 className='task-name'>
                Nombre: { task.name }
            </h2>
            <h3>
                Descripcion: { task.description }
            </h3>
            <h4>
                Level: { task.level }
            </h4>
            <h5>
                This task is: { task.completed ? 'COMPLETED' : 'PENDING' }
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    //verificar q sea una tarea
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
