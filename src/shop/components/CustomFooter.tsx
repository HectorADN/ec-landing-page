
export const CustomFooter = () => {
  return (
    <footer className="border-t py-12 px-4 lg:px-8 mt-16">
        <div className="container mx-auto">
          <div className="flex items-center justify-center pb-20">
            <img src="/public/img/logo-ec.png"
                className="h-[80px] rounded-full shadow-blue-100 shadow"
                alt="EC-Comercial" />
          </div>
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
              <h4 className="font-medium mb-4 text-gray-300">Dirección</h4>
              <p className="text-sm text-muted-foreground">
                Terminal Agropecuario <br /> Local - 16 <br />
                Av. Grau 1158 <br /> Calama
              </p>
            </div>
            
            
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p> Calama |  &copy; { new Date().getFullYear() } | EC-Comercial | II Región Antofagasta</p>
          </div>
        </div>
      </footer>
  )
}
