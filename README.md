# Dziennik w NextJS

## Jak działa NextJS

w folderze app wszystkie foldery z plikiem page.js są przypisywane do adresów  
np. folder /app/pages/about/ z plikiem index.js będzie dostępny pod adresem localhost:3000/about/  
pliki route.js odpowiadają za ścieki API, w nicz eksportujemy funkcje nazwane tak samo jak metody HTTP
każda strona jest komponentem Reacta, aby móc używać funkcji takich jak useState, useEffect, na początku pliku musimy napisać "use client"
