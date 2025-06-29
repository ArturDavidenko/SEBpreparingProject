import { http, HttpResponse } from 'msw'
import { Profile } from '../app/data/services/interfaces/profile.interface'
 
export const handlers = [
  http.get('https://api.example.com/user', () => {
    return HttpResponse.json({
      id: 'abc-123',
      firstName: 'Arturs',
      lastName: 'Davidenko',
    })
  }),

  http.get('https://api.example.com/profiles', () => {
    return HttpResponse.json<Profile[]>([
      {
        "id": "674c953b5b1f7ffe6ce47437",
        "firstName": "Valerijs",
        "lastName": "Davidenko",
        "phoneNumber": "27029494",
        "role": "admin",
        "orders": [],
        "image": null,
        "imageId": null
      },
      {
          "id": "674c9622540f2015a5115fdf",
          "firstName": "Artur",
          "lastName": "DavidenkoV2",
          "phoneNumber": "27029494",
          "role": "admin",
          "orders": [],
          "image": null,
          "imageId": null
      },
      {
          "id": "67ddf844e153d0c01f5571ee",
          "firstName": "Egors",
          "lastName": "Petrovs",
          "phoneNumber": "27021777",
          "role": "employeer",
          "orders": [
              "67ddfa16e153d0c01f5571f7",
              "67ddfa7ce153d0c01f5571f8",
              "67e1a63c4b7d49aa53c7a686",
              "67e1f8c3a63dd807098aca21",
              "67e2ac5bb23422998ac74386",
              "67e1eb7f312d0f0aaa850297",
              "67e2f340e532385c42f722ad",
              "67e2f367e532385c42f722ae"
          ],
          "image": null,
          "imageId": null
      },
      {
          "id": "67ddf86de153d0c01f5571ef",
          "firstName": "Maksim",
          "lastName": "Efremof",
          "phoneNumber": "2766852",
          "role": "employeer",
          "orders": [
              "67ddfa16e153d0c01f5571f7",
              "67ddfa7ce153d0c01f5571f8",
              "67e1f8c3a63dd807098aca21"
          ],
          "image": null,
          "imageId": "679d31a5d600c667d68e84b9"
      },
      {
          "id": "67ddf894e153d0c01f5571f0",
          "firstName": "Nikita",
          "lastName": "Solomjanij",
          "phoneNumber": "2502395",
          "role": "employeer",
          "orders": [
              "67ddfa16e153d0c01f5571f7",
              "67ddfa7ce153d0c01f5571f8",
              "67e2f30fe532385c42f722ac"
          ],
          "image": null,
          "imageId": "679d31a5d600c667d68e84b9"
      },
      {
          "id": "67ddf8c0e153d0c01f5571f1",
          "firstName": "Anton",
          "lastName": "Shulak",
          "phoneNumber": "2709123",
          "role": "employeer",
          "orders": [
              "67e2f340e532385c42f722ad"
          ],
          "image": null,
          "imageId": "679d31a5d600c667d68e84b9"
      },
      {
          "id": "67ddf8eee153d0c01f5571f2",
          "firstName": "Pavel",
          "lastName": "Durunov",
          "phoneNumber": "2500782",
          "role": "employeer",
          "orders": [
              "67ddfa7ce153d0c01f5571f8",
              "67e2f367e532385c42f722ae"
          ],
          "image": null,
          "imageId": null
      },
      {
          "id": "67e1f59f4258483db620f57e",
          "firstName": "Lev",
          "lastName": "Snikers",
          "phoneNumber": "27029999",
          "role": "manager",
          "orders": [
              "67e1f8c3a63dd807098aca21"
          ],
          "image": null,
          "imageId": null
      }
    ])
  })
]


