import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
//importamos la hoja de estilos
import '../../styles/task.css'
import { LEVELS } from '../../models/levels.enum';

//PROPS -> DATOS PRIMITIVOS, OBJETOS, CLASES Y FUNCIONES, 
//Se le pasan los datos al hijo desde el props, buena practica es usar el proptypes
const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Tarea creada');
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    //Funcion q retorna un badge despendiendo del nivel de la tarea
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
                case LEVELS.URGENT:
                    return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>)
                case LEVELS.BLOCKING:
                    return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>)
                default:
                    break
        }
    }

    function taskIconCompleted() {
        if (task.completed) {
            // Se debe poner como funcion anonima para que el evento se de cuando se ejecute la accion no al renderizar el elemento al inicio
            return (<i onClick={ () => complete(task) } className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        } else {
            return (<i onClick={ () => complete(task) } className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }

    const taskPending = {
        color: 'tomato',
        fontWeight: 'bold',
        
    }


    return (
            <tr className = 'fw-normal' style = { task.completed ? taskCompleted : taskPending }>
                <th>
                    <span className='ms-2'>{task.name}</span>
                </th>
                <td className='align-middle'>
                    <span>{task.description}</span>
                </td>
                <td className='align-middle'>
                    <span>{taskLevelBadge()}</span>
                </td>
                <td className='align-middle'>
                    { taskIconCompleted() }
                    <i className='bi-trash' onClick={() => remove(task)} style={{color: 'tomato', fontWeight: 'bold'}}></i>
                </td>
            </tr>
       
        // <div>
        //     <h2 className='task-name'>
        //         Nombre: { task.name }
        //     </h2>
        //     <h3>
        //         Descripcion: { task.description }
        //     </h3>
        //     <h4>
        //         Level: { task.level }
        //     </h4>
        //     <h5>
        //         This task is: { task.completed ? 'COMPLETED' : 'PENDING' }
        //     </h5>
        // </div>
    );
};

TaskComponent.propTypes = {
    //verificar q sea una tarea
    task: PropTypes.instanceOf(Task).isRequired, //nos aseguramos q siempre desde el padre le pasemos la funcion (is required)
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default TaskComponent;
