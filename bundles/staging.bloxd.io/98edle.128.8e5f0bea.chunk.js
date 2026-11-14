export const id = 128;
export const ids = [128];
export const modules = {
  7015: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      BloxdFirebaseSdk: () => yR
    });
    var wW = MW(1520),
      CW = MW(2202),
      zR = MW(122),
      AW = MW(116),
      bR = MW(2748);
    class yR {
      constructor() {}
      static async setup() {
        try {
          return await yR.setupInternal()
        } catch (WW) {
          return console.error("Failed to setup Firebase SDK:", WW), null
        }
      }
      static async setupInternal() {
        const WW = await Promise.all([MW.e(236), MW.e(235)]).then((() => MW(38092))),
          RW = await Promise.all([MW.e(236), MW.e(237)]).then((() => MW(38109))),
          eW = await Promise.all([MW.e(236), MW.e(238)]).then((() => MW(38118))),
          BW = WW.initializeApp(NW);
        (0, CW.N)(), window.gtag("config", NW.measurementId), (0, CW.F)(), window.gtag("config", "AW-16469618203");
        const tR = RW.getAnalytics(BW),
          TW = {
            portal: zR.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        RW.setUserProperties(tR, TW);
        const gR = eW.getAuth();
        eW.useDeviceLanguage(gR);
        const iR = new eW.GoogleAuthProvider;
        iR.setCustomParameters({
          prompt: "select_account"
        });
        const YW = new eW.OAuthProvider("apple.com"),
          JW = new eW.OAuthProvider("microsoft.com");
        JW.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const PW = {
          [wW.d.GOOGLE]: {
            provider: iR,
            RNSignInMessage: "googleSignInWithPopup",
            RNCurrentUserMessage: "googleGetCurrentUser",
            RNSignOutMessage: "googleSignOut"
          },
          [wW.d.APPLE]: {
            provider: YW,
            RNSignInMessage: "appleSignInWithPopup",
            RNCurrentUserMessage: "appleGetCurrentUser",
            RNSignOutMessage: "appleSignOut"
          },
          [wW.d.MICROSOFT]: {
            provider: JW,
            RNSignInMessage: "microsoftSignInWithPopup",
            RNCurrentUserMessage: "microsoftGetCurrentUser",
            RNSignOutMessage: "microsoftSignOut"
          }
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((WW => {
          const RW = eW.onIdTokenChanged(gR, (MW => {
            RW(), WW()
          }))
        }));
        class IW extends yR {
          setUserProperties(WW) {
            RW.setUserProperties(tR, WW)
          }
          onIdTokenChanged(WW) {
            eW.onIdTokenChanged(gR, WW)
          }
          async signInWithPopup(WW) {
            var RW;
            const MW = await eW.signInWithPopup(gR, PW[WW].provider);
            return null !== (RW = null === MW || void 0 === MW ? void 0 : MW.user) && void 0 !== RW ? RW : null
          }
          async getCurrentUser(WW) {
            const RW = gR.currentUser;
            if (!RW) return null;
            const {
              signInProvider: MW
            } = await RW.getIdTokenResult(!1);
            return MW === PW[WW].provider.providerId ? RW : null
          }
          async signOut(WW) {
            null !== await this.getCurrentUser(WW) && await eW.signOut(gR)
          }
        }
        class oW extends yR {
          setUserProperties(WW) {
            RW.setUserProperties(tR, WW)
          }
          onIdTokenChanged(WW) {
            eW.onIdTokenChanged(gR, WW)
          }
          async signInWithPopup(WW) {
            return await (0, bR.g)(PW[WW].RNSignInMessage, {
              firebaseUserContextType: WW
            }).then((async RW => {
              var MW;
              let CW;
              switch (WW) {
                case wW.d.GOOGLE:
                  CW = eW.GoogleAuthProvider.credential(RW.googleIdToken);
                  break;
                case wW.d.APPLE:
                  CW = YW.credential({
                    idToken: RW.appleIdToken
                  });
                  break;
                case wW.d.MICROSOFT:
                  CW = JW.credential({
                    idToken: RW.microsoftIdToken
                  });
                  break;
                default:
                  return null
              }
              const zR = await eW.signInWithCredential(gR, CW);
              return null !== (MW = null === zR || void 0 === zR ? void 0 : zR.user) && void 0 !== MW ? MW : null
            })).catch((RW => (console.error(`Failed to sign in with ${WW} popup:`, RW), null)))
          }
          async getCurrentUser(WW) {
            const RW = gR.currentUser;
            if (RW) {
              const {
                signInProvider: MW
              } = await RW.getIdTokenResult(!1);
              if (MW === PW[WW].provider.providerId) return RW
            }
            return await (0, bR.g)(PW[WW].RNCurrentUserMessage, {}).then((async RW => {
              var MW;
              let CW;
              switch (WW) {
                case wW.d.GOOGLE:
                  CW = eW.GoogleAuthProvider.credential(RW.googleIdToken);
                  break;
                case wW.d.APPLE:
                  CW = YW.credential({
                    idToken: RW.appleIdToken
                  });
                  break;
                case wW.d.MICROSOFT:
                  CW = JW.credential({
                    idToken: RW.microsoftIdToken
                  });
                  break;
                default:
                  return null
              }
              const zR = await eW.signInWithCredential(gR, CW);
              return null !== (MW = null === zR || void 0 === zR ? void 0 : zR.user) && void 0 !== MW ? MW : null
            })).catch((RW => (console.error(`Failed to get current ${WW} user from React Native wrapper`, RW), null)))
          }
          async signOut(WW) {
            (0, bR.i)(PW[WW].RNSignOutMessage, {});
            const RW = gR.currentUser;
            if (RW) {
              const {
                signInProvider: MW
              } = await RW.getIdTokenResult(!1);
              MW === PW[WW].provider.providerId && await eW.signOut(gR)
            }
          }
        }
        return (0, AW.isMobileApp)() ? new oW : new IW
      }
    }
    const NW = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97",
      measurementId: CW.e
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);