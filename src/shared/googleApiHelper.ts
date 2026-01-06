export const getAccessCodeUrl = (redirectUrl: string, clientId: string) => {
  return `https://accounts.google.com/o/oauth2/auth?response_type=code&redirect_uri=${redirectUrl}/signin&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&client_id=${clientId}`
}
