export const id = 131;
export const ids = [131];
export const modules = {
  6971: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      BloxdFirebaseSdk: () => Mc
    });
    var Vc = nc(1530),
      Ic = nc(2230),
      rB = nc(119),
      uc = nc(107),
      sc = nc(2831);
    class Mc {
      constructor() {}
      static async setup() {
        try {
          return await Mc.setupInternal()
        } catch (cB) {
          return console.error("Failed to setup Firebase SDK:", cB), null
        }
      }
      static async setupInternal() {
        const cB = await Promise.all([nc.e(242), nc.e(241)]).then((() => nc(38506))),
          Bc = await Promise.all([nc.e(242), nc.e(243)]).then((() => nc(38529))),
          qB = await Promise.all([nc.e(242), nc.e(244)]).then((() => nc(38534))),
          Oc = cB.initializeApp(Pc);
        (0, Ic.J)(), window.gtag("config", Pc.measurementId), (0, Ic.E)(), window.gtag("config", "AW-16469618203");
        const Tc = Bc.getAnalytics(Oc),
          fc = {
            portal: rB.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        Bc.setUserProperties(Tc, fc);
        const mB = qB.getAuth();
        qB.useDeviceLanguage(mB);
        const ec = new qB.GoogleAuthProvider;
        ec.setCustomParameters({
          prompt: "select_account"
        });
        const tB = new qB.OAuthProvider("apple.com"),
          Sc = new qB.OAuthProvider("microsoft.com");
        Sc.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const yB = {
          [Vc.d.GOOGLE]: {
            provider: ec,
            RNSignInMessage: "googleSignInWithPopup",
            RNCurrentUserMessage: "googleGetCurrentUser",
            RNSignOutMessage: "googleSignOut"
          },
          [Vc.d.APPLE]: {
            provider: tB,
            RNSignInMessage: "appleSignInWithPopup",
            RNCurrentUserMessage: "appleGetCurrentUser",
            RNSignOutMessage: "appleSignOut"
          },
          [Vc.d.MICROSOFT]: {
            provider: Sc,
            RNSignInMessage: "microsoftSignInWithPopup",
            RNCurrentUserMessage: "microsoftGetCurrentUser",
            RNSignOutMessage: "microsoftSignOut"
          }
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((cB => {
          const Bc = qB.onIdTokenChanged(mB, (nc => {
            Bc(), cB()
          }))
        }));
        class zB extends Mc {
          setUserProperties(cB) {
            Bc.setUserProperties(Tc, cB)
          }
          onIdTokenChanged(cB) {
            qB.onIdTokenChanged(mB, cB)
          }
          async signInWithPopup(cB) {
            var Bc;
            const nc = await qB.signInWithPopup(mB, yB[cB].provider);
            return null !== (Bc = null === nc || void 0 === nc ? void 0 : nc.user) && void 0 !== Bc ? Bc : null
          }
          async getCurrentUser(cB) {
            const Bc = mB.currentUser;
            if (!Bc) return null;
            const {
              signInProvider: nc
            } = await Bc.getIdTokenResult(!1);
            return nc === yB[cB].provider.providerId ? Bc : null
          }
          async signOut(cB) {
            null !== await this.getCurrentUser(cB) && await qB.signOut(mB)
          }
        }
        class pc extends Mc {
          setUserProperties(cB) {
            Bc.setUserProperties(Tc, cB)
          }
          onIdTokenChanged(cB) {
            qB.onIdTokenChanged(mB, cB)
          }
          async signInWithPopup(cB) {
            return await (0, sc.e)(yB[cB].RNSignInMessage, {
              firebaseUserContextType: cB
            }).then((async Bc => {
              var nc;
              let Ic;
              switch (cB) {
                case Vc.d.GOOGLE:
                  Ic = qB.GoogleAuthProvider.credential(Bc.googleIdToken);
                  break;
                case Vc.d.APPLE:
                  Ic = tB.credential({
                    idToken: Bc.appleIdToken
                  });
                  break;
                case Vc.d.MICROSOFT:
                  Ic = Sc.credential({
                    idToken: Bc.microsoftIdToken
                  });
                  break;
                default:
                  return null
              }
              const rB = await qB.signInWithCredential(mB, Ic);
              return null !== (nc = null === rB || void 0 === rB ? void 0 : rB.user) && void 0 !== nc ? nc : null
            })).catch((Bc => (console.error(`Failed to sign in with ${cB} popup:`, Bc), null)))
          }
          async getCurrentUser(cB) {
            const Bc = mB.currentUser;
            if (Bc) {
              const {
                signInProvider: nc
              } = await Bc.getIdTokenResult(!1);
              if (nc === yB[cB].provider.providerId) return Bc
            }
            return await (0, sc.e)(yB[cB].RNCurrentUserMessage, {}).then((async Bc => {
              var nc;
              let Ic;
              switch (cB) {
                case Vc.d.GOOGLE:
                  Ic = qB.GoogleAuthProvider.credential(Bc.googleIdToken);
                  break;
                case Vc.d.APPLE:
                  Ic = tB.credential({
                    idToken: Bc.appleIdToken
                  });
                  break;
                case Vc.d.MICROSOFT:
                  Ic = Sc.credential({
                    idToken: Bc.microsoftIdToken
                  });
                  break;
                default:
                  return null
              }
              const rB = await qB.signInWithCredential(mB, Ic);
              return null !== (nc = null === rB || void 0 === rB ? void 0 : rB.user) && void 0 !== nc ? nc : null
            })).catch((Bc => (console.error(`Failed to get current ${cB} user from React Native wrapper`, Bc), null)))
          }
          async signOut(cB) {
            (0, sc.f)(yB[cB].RNSignOutMessage, {});
            const Bc = mB.currentUser;
            if (Bc) {
              const {
                signInProvider: nc
              } = await Bc.getIdTokenResult(!1);
              nc === yB[cB].provider.providerId && await qB.signOut(mB)
            }
          }
        }
        return (0, uc.isMobileApp)() ? new pc : new zB
      }
    }
    const Pc = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97",
      measurementId: Ic.e
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);