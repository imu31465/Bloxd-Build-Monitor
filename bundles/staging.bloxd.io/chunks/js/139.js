export const id = 139;
export const ids = [139];
export const modules = {
  7731: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      BloxdFirebaseSdk: () => cU
    });
    var tU = gU(1718),
      pU = gU(2644),
      EU = gU(109),
      PU = gU(96),
      TU = gU(1614),
      qU = gU(1895);
    const KU = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    class cU {
      constructor() {}
      static async setup() {
        try {
          return await cU.setupInternal()
        } catch (UU) {
          return console.error("Failed to setup Firebase SDK:", UU), null
        }
      }
      static async setupInternal() {
        const UU = await Promise.all([gU.e(256), gU.e(255)]).then((() => gU(39880))),
          RU = await Promise.all([gU.e(256), gU.e(257)]).then((() => gU(39902))),
          GU = await Promise.all([gU.e(256), gU.e(258)]).then((() => gU(39911))),
          jU = UU.initializeApp({
            ...KU,
            measurementId: pU.e
          });
        (0, pU.J)(), window.gtag("config", pU.e), (0, pU.F)(), window.gtag("config", "AW-16469618203");
        const uU = RU.getAnalytics(jU),
          CU = {
            portal: EU.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        RU.setUserProperties(uU, CU);
        const hU = GU.getAuth();
        GU.useDeviceLanguage(hU);
        const QU = new GU.GoogleAuthProvider;
        QU.setCustomParameters({
          prompt: "select_account"
        });
        const eU = new GU.OAuthProvider(tU.i[tU.b.APPLE]),
          WU = new GU.OAuthProvider(tU.i[tU.b.MICROSOFT]);
        WU.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const fU = {
          [tU.b.GOOGLE]: QU,
          [tU.b.APPLE]: eU,
          [tU.b.MICROSOFT]: WU
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((UU => {
          const RU = GU.onIdTokenChanged(hU, (gU => {
            RU(), UU()
          }))
        }));
        class xU extends cU {
          setUserProperties(UU) {
            RU.setUserProperties(uU, UU)
          }
          onIdTokenChanged(UU) {
            GU.onIdTokenChanged(hU, UU)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(UU) {
            var RU;
            const gU = await GU.signInWithPopup(hU, fU[UU]);
            return null !== (RU = null === gU || void 0 === gU ? void 0 : gU.user) && void 0 !== RU ? RU : null
          }
          async getCurrentUser(UU) {
            const RU = hU.currentUser;
            if (!RU) return null;
            const {
              signInProvider: gU
            } = await RU.getIdTokenResult(!1);
            return gU === tU.i[UU] ? RU : null
          }
          async signOut(UU) {
            null !== await this.getCurrentUser(UU) && await GU.signOut(hU)
          }
        }
        async function mU(UU, RU) {
          const gU = await TU.b.request(`${UU}.${RU}`, {});
          if (null === gU) return null;
          const tU = "google" === UU ? GU.GoogleAuthProvider.credential(gU.idToken) : eU.credential({
            idToken: gU.idToken
          });
          return (await GU.signInWithCredential(hU, tU)).user
        }
        class IU extends cU {
          setUserProperties(UU) {
            RU.setUserProperties(uU, UU)
          }
          onIdTokenChanged(UU) {
            GU.onIdTokenChanged(hU, UU)
          }
          canSignIn(UU) {
            return null !== (0, qU.c)(UU)
          }
          async signInWithPopup(UU) {
            const RU = (0, qU.c)(UU);
            if (null === RU) return console.warn(`The app can't sign in with ${UU}; check canSignIn first`), null;
            try {
              return await mU(RU, "signIn")
            } catch (gU) {
              return console.error(`Failed to sign in with ${UU} in the app:`, gU), null
            }
          }
          async getCurrentUser(UU) {
            const RU = hU.currentUser;
            if (RU) {
              const {
                signInProvider: gU
              } = await RU.getIdTokenResult(!1);
              if (gU === tU.i[UU]) return RU
            }
            const gU = (0, qU.c)(UU);
            if (null === gU) return null;
            try {
              return await mU(gU, "getCurrentUser")
            } catch (pU) {
              return console.error(`Failed to get the current ${UU} user from the app:`, pU), null
            }
          }
          async signOut(UU) {
            const RU = (0, qU.c)(UU);
            null !== RU && TU.b.request(`${RU}.signOut`, {}).catch((RU => {
              console.error(`Failed to sign out of ${UU} in the app:`, RU)
            }));
            const gU = hU.currentUser;
            if (gU) {
              const {
                signInProvider: RU
              } = await gU.getIdTokenResult(!1);
              RU === tU.i[UU] && await GU.signOut(hU)
            }
          }
        }
        return (0, PU.isMobileApp)() ? (await TU.b.ready, new IU) : new xU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);