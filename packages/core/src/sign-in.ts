export const signIn = () => {
  // get challenge
  // sign message - wagmi / lib
  // auth
  // set/return cookies/localStorage access/refresh token
  // authLink for Apollo?

  // try {
  //   // Get challenge
  //   const challenge = await loadChallenge({
  //     variables: { request: { address } }
  //   });
  //
  //   if (!challenge?.data?.challenge?.text) {
  //     return toast.error(ERROR_MESSAGE);
  //   }
  //
  //   // Get signature
  //   const signature = await signMessageAsync({
  //     message: challenge?.data?.challenge?.text
  //   });
  //
  //   // Auth user and set cookies
  //   const auth = await authenticate({
  //     variables: { request: { address, signature } }
  //   });
  //   Cookies.set('accessToken', auth.data.authenticate.accessToken, COOKIE_CONFIG);
  //   Cookies.set('refreshToken', auth.data.authenticate.refreshToken, COOKIE_CONFIG);
  //
  //   // Get authed profiles
  //   const { data: profilesData } = await getProfiles({
  //     variables: { ownedBy: address }
  //   });
  //   setIsConnected(true);
  //   if (profilesData?.profiles?.items?.length === 0) {
  //     setHasProfile(false);
  //   } else {
  //     const profiles: Profile[] = profilesData?.profiles?.items
  //       ?.slice()
  //       ?.sort((a: Profile, b: Profile) => Number(a.id) - Number(b.id))
  //       ?.sort((a: Profile, b: Profile) => (!(a.isDefault !== b.isDefault) ? 0 : a.isDefault ? -1 : 1));
  //     setIsAuthenticated(true);
  //     setProfiles(profiles);
  //     setCurrentUser(profiles[0]);
  //   }
  //   Mixpanel.track(USER.SIWL, { result: 'success' });
  // } catch (error) {
  //   console.log(error);
  // }
};
