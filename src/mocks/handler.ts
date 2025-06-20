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
            firstName: "Valerijs",
            id: "674c953b5b1f7ffe6ce47437",
            image: null,
            imageId: null,
            lastName: "Davidenko",
            orders: [],
            phoneNumber: "27029494",
            role: "admin"
        },
        {
            firstName: "Arturs",
            id: "abc-123",
            image: null,
            imageId: null,
            lastName: "Davidenko",
            orders: [],
            phoneNumber: "11111111",
            role: "user"
        }
    ])
  })
]


