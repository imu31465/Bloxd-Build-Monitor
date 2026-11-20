export const id = 139;
export const ids = [139];
export const modules = {
  8111: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      BloxdFirebaseSdk: () => IT
    });
    var lT = cT(1853),
      MT = cT(2873),
      KT = cT(127),
      OT = cT(118),
      yT = cT(1710),
      fT = cT(2080);
    const xT = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    class IT {
      constructor() {}
      static async setup() {
        try {
          return await IT.setupInternal()
        } catch (TT) {
          return console.error("Failed to setup Firebase SDK:", TT), null
        }
      }
      static async setupInternal() {
        const TT = await Promise.all([cT.e(258), cT.e(257)]).then((() => cT(40133))),
          kT = await Promise.all([cT.e(258), cT.e(259)]).then((() => cT(40157))),
          AT = await Promise.all([cT.e(258), cT.e(260)]).then((() => cT(40160))),
          CT = TT.initializeApp({
            ...xT,
            measurementId: MT.e
          });
        (0, MT.H)(), window.gtag("config", MT.e), (0, MT.C)(), window.gtag("config", "AW-16469618203");
        const jT = kT.getAnalytics(CT),
          vT = {
            portal: KT.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        kT.setUserProperties(jT, vT);
        const tT = AT.getAuth();
        AT.useDeviceLanguage(tT);
        const hT = new AT.GoogleAuthProvider;
        hT.setCustomParameters({
          prompt: "select_account"
        });
        const NT = new AT.OAuthProvider(lT.g[lT.e.APPLE]),
          QT = new AT.OAuthProvider(lT.g[lT.e.MICROSOFT]);
        QT.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const ST = {
          [lT.e.GOOGLE]: hT,
          [lT.e.APPLE]: NT,
          [lT.e.MICROSOFT]: QT
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((TT => {
          const kT = AT.onIdTokenChanged(tT, (cT => {
            kT(), TT()
          }))
        }));
        class DT extends IT {
          setUserProperties(TT) {
            kT.setUserProperties(jT, TT)
          }
          onIdTokenChanged(TT) {
            AT.onIdTokenChanged(tT, TT)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(TT) {
            var kT;
            const cT = await AT.signInWithPopup(tT, ST[TT]);
            return null !== (kT = null === cT || void 0 === cT ? void 0 : cT.user) && void 0 !== kT ? kT : null
          }
          async getCurrentUser(TT) {
            const kT = tT.currentUser;
            if (!kT) return null;
            const {
              signInProvider: cT
            } = await kT.getIdTokenResult(!1);
            return cT === lT.g[TT] ? kT : null
          }
          async signOut(TT) {
            null !== await this.getCurrentUser(TT) && await AT.signOut(tT)
          }
        }
        async function aT(TT, kT) {
          const cT = await yT.c.request(`${TT}.${kT}`, {});
          if (null === cT) return null;
          const lT = "google" === TT ? AT.GoogleAuthProvider.credential(cT.idToken) : NT.credential({
            idToken: cT.idToken
          });
          return (await AT.signInWithCredential(tT, lT)).user
        }
        class FT extends IT {
          setUserProperties(TT) {
            kT.setUserProperties(jT, TT)
          }
          onIdTokenChanged(TT) {
            AT.onIdTokenChanged(tT, TT)
          }
          canSignIn(TT) {
            return null !== (0, fT.c)(TT)
          }
          async signInWithPopup(TT) {
            const kT = (0, fT.c)(TT);
            if (null === kT) return console.warn(`The app can't sign in with ${TT}; check canSignIn first`), null;
            try {
              return await aT(kT, "signIn")
            } catch (cT) {
              return console.error(`Failed to sign in with ${TT} in the app:`, cT), null
            }
          }
          async getCurrentUser(TT) {
            const kT = tT.currentUser;
            if (kT) {
              const {
                signInProvider: cT
              } = await kT.getIdTokenResult(!1);
              if (cT === lT.g[TT]) return kT
            }
            const cT = (0, fT.c)(TT);
            if (null === cT) return null;
            try {
              return await aT(cT, "getCurrentUser")
            } catch (MT) {
              return console.error(`Failed to get the current ${TT} user from the app:`, MT), null
            }
          }
          async signOut(TT) {
            const kT = (0, fT.c)(TT);
            null !== kT && yT.c.request(`${kT}.signOut`, {}).catch((kT => {
              console.error(`Failed to sign out of ${TT} in the app:`, kT)
            }));
            const cT = tT.currentUser;
            if (cT) {
              const {
                signInProvider: kT
              } = await cT.getIdTokenResult(!1);
              kT === lT.g[TT] && await AT.signOut(tT)
            }
          }
        }
        return (0, OT.isMobileApp)() ? (await yT.c.ready, new FT) : new DT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);