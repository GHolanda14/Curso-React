import React from 'react'
import styles from './ShowCars.module.css'

const ShowCars = ({marca,cor,valor}) => {
  return (
    <div className={styles.ShowCar}>
        <h2>Marca: {marca}</h2>
        <h2>Cor: {cor}</h2>
        <h2>Valor: {valor}</h2>
    </div>
  )
}

export default ShowCars