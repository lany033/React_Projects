//ejemplo de tipo clase que dispone de los metodos de ciclo de vida


import React, { Component } from 'react'

class lifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente');
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente');
    }
    componentDidMount(){
        console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de renderizarlo');
    }
    componentWillReceiveProps(){
        console.log('WILLRECEIVEPROPS:Si va recibir nuevas props');
    }
    shouldComponentUpdate(nextProps, nextState){
        //sirve para controlar si el componente debe o no actualizarse
        //return true o false
    }
    componentWillUpdate(nextProps,nextState){
        console.log('WillUpdate: Justo antes de actualizarse');
    }
    componentDidUpdate(nextProps, prevState){
        console.log('DidUpdate: Justo despues de actualizarse');
    }
    componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desaparecer');
    }


  render() {
    return (
      <div>lifeCycleExample</div>
    )
  }
}
