
export const CustomFooter = () => {
  return (
    <footer className="border-t py-12 px-4 lg:px-8 mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-gray-300">Horario</h3>
              <p className="text-sm text-muted-foreground">
                Martes, Jueves y Sábados <br /> de 07:30 hrs a 15:00 hrs.
              </p><br />
              <p className="text-sm text-muted-foreground">
                Miércoles, Viernes y Domingos <br /> de 08:30 hrs a 15:00 hrs.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-gray-300">Productos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Camisetas</li>
                <li><a href="#" className="hover:text-foreground">Sudaderas</a></li>
                <li><a href="#" className="hover:text-foreground">Chaquetas</a></li>
                <li><a href="#" className="hover:text-foreground">Accesorios</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Ayuda</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Contacto</a></li>
                <li><a href="#" className="hover:text-foreground">Envíos</a></li>
                <li><a href="#" className="hover:text-foreground">Devoluciones</a></li>
                <li><a href="#" className="hover:text-foreground">Guía de Tallas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-foreground">Sustentabilidad</a></li>
                <li><a href="#" className="hover:text-foreground">Carreras</a></li>
                <li><a href="#" className="hover:text-foreground">Prensa</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p> Calama |  &copy; { new Date().getFullYear() } | EC-Comercial | II Región Antofagasta</p>
          </div>
        </div>
      </footer>
  )
}
