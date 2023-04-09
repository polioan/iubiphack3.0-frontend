/* eslint-disable @typescript-eslint/no-empty-interface */

namespace App {
  interface ServerErrorData {
    Message: string
  }

  interface LoginResponce {
    AccessToken: string
    RefreshToken: string
    FirstName: string
    LastName: string
    Surname: string
    Email: string
    PhoneNumber: string
  }

  interface LoginInput {
    Email: string
    Password: string
  }

  interface RegisterResponce extends LoginResponce {}

  interface RegisterInput extends LoginInput {
    FirstName: string
    LastName: string
    Surname: string
    PhoneNumber: string
  }

  interface RefreshResponce {
    AccessToken: string
    RefreshToken: string
  }

  interface ProfileResponce extends Omit<RegisterInput, 'Password'> {}
}
