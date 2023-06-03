import { useState } from 'react';
import Form from './components/Form'
import './App.css'
import Card from './components/Card';

function App() {

    const [data, setData] = useState();

    const handleSubmit = (formData) => {
      setData(formData);
    };

  
    return (
       
        <div>
        <Form className='form' onSubmit = {handleSubmit} />
        {data && <Card nombre={data.nombre} descripcion={data.descripcion} />}
        </div>
       
    );
}

export default App
