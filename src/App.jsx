function  Header(){
  return (
    <div>
      <header className='head'>
        <nav className='nav'>
           <img src='/react-logo.png' alt='Unfind' width='100px' />      
        </nav>
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>
    </div>
  )
}

function  Content(params) {
  return(
    <div className='content'>
      <h1>Here is the text between the header and the list !</h1>

      <ol className='list'>
        <li> A</li>
        <li> B </li>
        <li> C </li>
      </ol>
    </div>      
  )
}

function  Footer(){
  return (
    <div>
      <footer className='footer'>
        <p> © 2023 Fermey development. All rights reserved. </p>
      </footer>
    </div>
  )
}

function  Exercice (){
  return (
    <div>
        <Header />
        <Content />
        <Footer />      
    </div>
  )
}
export default Exercice;
