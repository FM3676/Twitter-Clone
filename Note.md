# Note

## Login Feature

Everytime we Login, we generate `Refresh Token` and `Access Token` first.
Store the `Refresh Token` in **cookies**, then validate it and generate a new `Access Token`, visit the main resource by `Access Token`.

### How to get a **Access Token**

Validate Refresh token and use it to get the user INFO, and generate a new access token every time.
