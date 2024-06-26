import './App.css'
import About from './components/about/About'
import Featured from './components/featured/Featured'
import Footer from './components/footer/Footer'
import Hero from './components/herosection/Hero'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Sidebar from './components/sidebar/Sidebar'
import Steps from './components/steps/Steps'
import { ProductCartProvider } from './context/ProductContext'
import { SidebarProvider } from './context/SidebarContext'

function App() {

  return (
    <div className='App'>
      <ProductCartProvider>
        <SidebarProvider>
          <Navbar />
          <Sidebar />
          <Hero />
          <Steps />
          <Featured />
          <About />
          <Products />
          <Footer />
        </SidebarProvider>
      </ProductCartProvider>
    </div>
  )
}

export default App
