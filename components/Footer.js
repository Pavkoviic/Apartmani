const Footer = () => {

  return (
    <footer className="gap-y-10 px-16 py-12 bg-gray-100 text-gray-600 " >
      <div className="max-w-7xl mx-auto px-8  grid grid-cols-2 md:grid-cols-2 sm:grid-cols:none ">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">Apartmani frontend</h5>
          <p>Završni rad</p>
          <p>Marko Pavković</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">Stranica napravljena koristeći</h5>
          <p>React</p>
          <p>Next.JS</p>
          <p>TailwindCSS</p>
        </div>
      </div>
        
    </footer>
  )
}
  
export default Footer