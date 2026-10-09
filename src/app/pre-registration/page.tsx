import { Send } from "lucide-react"

export default function PreRegistration() {
  return (
    <div className="container relative flex pt-12 pb-20 flex-col items-center justify-center lg:px-0 mx-auto min-h-[80vh]">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[600px] md:w-[800px]">
        <div className="rounded-lg border bg-card text-card-foreground max-w-4xl mx-auto shadow-lg w-full">
          <div className="flex flex-col space-y-1.5 p-6 text-center border-b">
            <h1 className="font-semibold tracking-tight font-headline text-3xl text-primary">Formulario de Preinscripción</h1>
            <p className="text-muted-foreground text-lg">Admisión 2026</p>
          </div>
          <div className="p-6">
            <form className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-primary border-b pb-2">Datos del Estudiante</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none" htmlFor="studentName">
                      Nombre Completo del Estudiante
                    </label>
                    <input
                      type="text"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      placeholder="Ej. Juan Pérez"
                      id="studentName"
                      name="studentName"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none" htmlFor="level">
                      Nivel al que Postula
                    </label>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="level"
                      name="level"
                    >
                      <option value="">Seleccione un nivel...</option>
                      <option value="inicial">Inicial</option>
                      <option value="primaria">Primaria</option>
                      <option value="secundaria">Secundaria</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium leading-none" htmlFor="dob">
                      Fecha de Nacimiento
                    </label>
                    <input
                      type="date"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="dob"
                      name="dob"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-primary border-b pb-2">Datos del Apoderado</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none" htmlFor="parentName">
                      Nombre Completo del Apoderado
                    </label>
                    <input
                      type="text"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      placeholder="Ej. María Gómez"
                      id="parentName"
                      name="parentName"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none" htmlFor="dni">
                      DNI
                    </label>
                    <input
                      type="text"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      placeholder="Número de documento"
                      id="dni"
                      name="dni"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none" htmlFor="phone">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      placeholder="Número de contacto"
                      id="phone"
                      name="phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none" htmlFor="email">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      placeholder="correo@ejemplo.com"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-primary border-b pb-2">Documentación</h3>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none" htmlFor="documents">
                    Subir Documentos (PDF, JPG, PNG)
                  </label>
                  <input
                    type="file"
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-primary file:text-primary-foreground file:px-4 file:py-1 file:rounded-md file:mr-4 file:cursor-pointer file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="documents"
                    name="documents"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </div>
              </div>

              <div className="pt-4 border-t">
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto"
                  type="submit"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
