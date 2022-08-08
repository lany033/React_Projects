import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const Tasks = () => {

    const taskSchema = Yup.object().shape(
        {
            nombreTarea: Yup.string().required('task is required'),
            // completado: Yup.boolean()
        }
    )
    
    const initialDates = {
        nombreTarea: '',
        // completado: false
    }

    return (
        <div>
            <h4>Lista de tareas</h4>
           <Formik
            initialValues={initialDates}
            validationSchema = {taskSchema}
            onSubmit = {async(values) => {
                await new Promise ((r) => setTimeout(r,1000))
                alert(JSON.stringify(values, null, 2))
                localStorage('datos',values)
            }}
           >
            {({errors,touched,isSubmitting}) => (
                <Form>
                    <label>Task</label>
                    <Field id="task" type="task" name="task" placeholder="Agrega tarea" />
                        {
                            errors.task && touched.task && (
                            <ErrorMessage name='task' component='div'></ErrorMessage>                               
                            )
                        }
                    <button type='submit'>Add</button>
                    { isSubmitting ? (<p>Tarea agregada</p>) : null}
                </Form>
            )}
           </Formik> 
        </div>
    );
}

export default Tasks;
