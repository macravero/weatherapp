# Weatherapp para challenge FrontEnd

Proyecto bootstrapeado con Create-react-app, basándome en la consigna de full client side application.

La aplicación presenta dos vistas, la de ciudades en la izquierda, y la del clima en la derecha. La primera, tiene una lista de botones que representan cada ciudad, y reciben dinámicamente la localización actual del usuario para setearla como primer botón. La segunda vista representa el clima actual en detalle, el clima del día siguiente, y un pronóstico de los próximos cuatro días, como requerido en el ejercicio.

La Api de geolocalización utilizada es la brindada en el ejercicio, [ip-api](https://ip-api.com/), combinada con la [one call api](https://openweathermap.org/api/one-call-api) para detectar la ubicación actual del usuario mediante latitud y longitud. La api key está almacenada en un .env público sólo por razones de testeo del ejercicio, y en producción debería desacoplarse por motivos de seguridad.

Los íconos utilizados son de la librería [React Icons](https://react-icons.github.io/react-icons/) y se renderizan respecto a las keys provistas por los posibles estados de clima de la api de [Open Weather Map](https://openweathermap.org/api).

La aplicación cuenta con un contexto que se encarga de contener y actualizar la location(posición geográfica del usuario), ya sea detectando la IP en el primer render, o accediendo a su actualización através de acciones del useReducer hook. Al actualizarse la location, un useEffect dentro de la vista de clima dispara la nueva request para recibir datos de forecast. Esto sucede si se detecta location en el primer render. Sinó muestra un mensaje de error y pide seleccionar otra ciudad de la lista (prepoblada).

Para el maquetado, se utilizó [styled components](https://styled-components.com/) con un theme provider para permitir controlar mejor los estilos de la aplicación a futuro. Dentro del theme, se pueden modificar las propiedades del objeto y éstas van a propagar a todos los componentes que las estén consumiendo. También se declaró un globalStyle sencillo que funcionó como CSS reset.

Para parsear los días en la respuesta, se creó una función utilitaria que recibe el dato de datetime(dt) y lo multiplica por mil, para luego generar un nuevo objeto Fecha con la función new Date. Esto es posible porque el dato es una Unix timestamp.

Para las requests y manejo de errores, se utilizó Axios. En el archivo de `Constants` se exportan dos configuraciones instanciadas de las requests, donde se pueden modificar los timeouts o las mismas direcciones de ser necesario a futuro. También se utilizó [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) para brindarle un wrapper de control de errores a las vistas. Tomar en cuenta que create-react-app viene con un error boundary propio que tapa la pantalla. Se creo un componente básico como error fallback.

Se inició el testeo de algunos componentes con React Testing Library, pero es un work in progress y un faltante.

## Inicialización y uso

Para utilizar la aplicación, es necesario instalar las dependencias con `yarn install`. Luego, se puede correr local con `yarn start`. Se puede generar una versión para producción con `yarn build`.

En el inicio, los componentes de la aplicación estarán en modo loading, ya que la botonera está esperando la respuesta al intento de detectar la ciudad y el forecast aún no recibe location. Al finalizar la request, el usuarió podrá ver en la vista derecha el clima de su geolocalización actual o, en caso de haber un problema con la detección, un mensaje que le indique elegir otra ciudad de la lista.

Al apretar un botón con otra ciudad, el usuario verá una animación de carga importada de [react-loading](https://www.npmjs.com/package/react-loading) mientras se resuelve la request para recibir los datos de forecast.

## Tech debt

### Detalles mayores:

El plan inicial era tener una versión funcional con suficiente tiempo para planificar <strong>un refactor hacia TypeScript</strong>, y está sin terminar. Decidí entregar la versión funcional de la app para no extender el proceso, pero es un work in progress.

El testeo unitario está muy flojo por cuestiones de tiempos, y debería mejorarlo o al menos poner más ejemplos de casos de coverage.

No estoy realizando ningún tipo de data caching, al menos si el clima es idéntico en una franja de tiempo determinado.

### Otros detalles:

La estructura final de HTML podría mejorar mucho, para pulir tanto accesibilidad como SEO.

Se puede mejorar la forma de importar componentes y files, así como aprovechar ciertas características de styled components para hacer más componentes reutilizables que requieran menos configuración repetitiva.
