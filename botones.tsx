import { Button } from "@/components/ui/button"
import { Check, AlertTriangle, Info, Star } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-gray-100 items-start max-w-md mx-auto">
      <div className="w-full">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Alto Contraste</h2>
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg">
          <Check className="w-6 h-6" />
          <span className="text-lg">Confirmar</span>
          <span className="sr-only">(Botón verde con icono de marca de verificación)</span>
        </Button>
      </div>

      <div className="w-full">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Evitar Combinaciones Problemáticas</h2>
        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg border-2 border-black">
          <AlertTriangle className="w-6 h-6" />
          <span className="text-lg">Advertencia</span>
          <span className="sr-only">(Botón amarillo con icono de triángulo de advertencia)</span>
        </Button>
      </div>

      <div className="w-full">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Incorporación de Patrones</h2>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-stripe"></div>
          <Info className="w-6 h-6 z-10" />
          <span className="text-lg z-10">Información</span>
          <span className="sr-only">(Botón azul con icono de información y rayas diagonales)</span>
        </Button>
      </div>

      <div className="w-full">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Etiquetas y Descripciones Textuales</h2>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-dots"></div>
          <Star className="w-6 h-6 z-10" />
          <span className="text-lg z-10">Favorito</span>
          <span className="sr-only">(Botón morado con icono de estrella y patrón de puntos)</span>
        </Button>
      </div>

      <style jsx>{`
        .bg-stripe {
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,.7) 10px,
            rgba(255,255,255,.7) 20px
          );
        }
        .bg-dots {
          background-image: radial-gradient(
            rgba(255,255,255,.7) 2px,
            transparent 2px
          );
          background-size: 10px 10px;
        }
      `}</style>
    </div>
  )
}