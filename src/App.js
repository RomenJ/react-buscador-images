import  {Formik, Form, Field} from 'formik'
import {useState} from 'react'
import './header.css';
import './content.css';
import './article.css';

const App =()=> {
  const [photos,setPhotos]=useState([])
  const open=url=> window.open(url)
  console.log({photos})

  return (
   <div>
   <header>
    
    <Formik
    initialValues={{search: ''}} 
    onSubmit={async values=>{
//guad

      const response= await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
      {
        headers: {
          'Authorization': 'Client-ID M3dUd8-MVnhImxaf9yr-9j8-qrloncg_bjGy9qNv5JI'
        }

      })

      const data= await response.json()
      //llamar api unsplash
 
     console.log('Valor de data',data.results)
     setPhotos(data.results)
     // console.log(values.search)
    }}
    >
  
      <Form>
        <Field name="search" />
      </Form>
    </Formik>
    
   </header>


      <div className='container'>
        <div className='center'>

          {photos.map (photo=>
          <article key={photo.id} onClick={()=> open(photo.links.html)}>
            <img src={photo.urls.regular} />
            <p> {[photo.description, photo.alt_descriptiorn].join (' - ')}</p>
          </article>


          )}



        </div>


      </div>
   </div> 
  )
}

export default App;
