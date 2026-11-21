export const id = 140;
export const ids = [140];
export const modules = {
  7945: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      BloxdFirebaseSdk: () => Kd
    });
    var pd = kd(1849),
      Nd = kd(2793),
      Wd = kd(103),
      Pd = kd(95),
      Zd = kd(1726),
      gd = kd(2019);
    const Cd = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    class Kd {
      constructor() {}
      static async setup() {
        try {
          return await Kd.setupInternal()
        } catch (dd) {
          return console.error("Failed to setup Firebase SDK:", dd), null
        }
      }
      static async setupInternal() {
        const dd = await Promise.all([kd.e(258), kd.e(257)]).then((() => kd(40493))),
          Jd = await Promise.all([kd.e(258), kd.e(259)]).then((() => kd(40521))),
          od = await Promise.all([kd.e(258), kd.e(260)]).then((() => kd(40527))),
          ld = dd.initializeApp({
            ...Cd,
            measurementId: Nd.c
          });
        (0, Nd.E)(), window.gtag("config", Nd.c), (0, Nd.y)(), window.gtag("config", "AW-16469618203");
        const Qd = Jd.getAnalytics(ld),
          Ld = {
            portal: Wd.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        Jd.setUserProperties(Qd, Ld);
        const Od = od.initializeAuth(ld, {
          persistence: [od.indexedDBLocalPersistence, od.browserLocalPersistence, od.browserSessionPersistence],
          popupRedirectResolver: (0, Pd.isMobileApp)() ? void 0 : od.browserPopupRedirectResolver
        });
        od.useDeviceLanguage(Od);
        const ed = new od.GoogleAuthProvider;
        ed.setCustomParameters({
          prompt: "select_account"
        });
        const Rd = new od.OAuthProvider(pd.g[pd.e.APPLE]),
          Id = new od.OAuthProvider(pd.g[pd.e.MICROSOFT]);
        Id.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const Gd = {
          [pd.e.GOOGLE]: ed,
          [pd.e.APPLE]: Rd,
          [pd.e.MICROSOFT]: Id
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((dd => {
          const Jd = od.onIdTokenChanged(Od, (kd => {
            Jd(), dd()
          }))
        }));
        class vd extends Kd {
          setUserProperties(dd) {
            Jd.setUserProperties(Qd, dd)
          }
          onIdTokenChanged(dd) {
            od.onIdTokenChanged(Od, dd)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(dd) {
            var Jd;
            const kd = await od.signInWithPopup(Od, Gd[dd]);
            return null !== (Jd = null === kd || void 0 === kd ? void 0 : kd.user) && void 0 !== Jd ? Jd : null
          }
          async getCurrentUser(dd) {
            const Jd = Od.currentUser;
            if (!Jd) return null;
            const {
              signInProvider: kd
            } = await Jd.getIdTokenResult(!1);
            return kd === pd.g[dd] ? Jd : null
          }
          async signOut(dd) {
            null !== await this.getCurrentUser(dd) && await od.signOut(Od)
          }
        }
        async function xd(dd, Jd) {
          const kd = await Zd.e.request(`${dd}.${Jd}`, {});
          if (null === kd) return null;
          const pd = "google" === dd ? od.GoogleAuthProvider.credential(kd.idToken) : Rd.credential({
            idToken: kd.idToken
          });
          return (await od.signInWithCredential(Od, pd)).user
        }
        class qd extends Kd {
          setUserProperties(dd) {
            Jd.setUserProperties(Qd, dd)
          }
          onIdTokenChanged(dd) {
            od.onIdTokenChanged(Od, dd)
          }
          canSignIn(dd) {
            return null !== (0, gd.e)(dd)
          }
          async signInWithPopup(dd) {
            const Jd = (0, gd.e)(dd);
            if (null === Jd) return console.warn(`The app can't sign in with ${dd}; check canSignIn first`), null;
            try {
              return await xd(Jd, "signIn")
            } catch (kd) {
              return console.error(`Failed to sign in with ${dd} in the app:`, kd), null
            }
          }
          async getCurrentUser(dd) {
            const Jd = Od.currentUser;
            if (Jd) {
              const {
                signInProvider: kd
              } = await Jd.getIdTokenResult(!1);
              if (kd === pd.g[dd]) return Jd
            }
            const kd = (0, gd.e)(dd);
            if (null === kd) return null;
            try {
              return await xd(kd, "getCurrentUser")
            } catch (Nd) {
              return console.error(`Failed to get the current ${dd} user from the app:`, Nd), null
            }
          }
          async signOut(dd) {
            const Jd = (0, gd.e)(dd);
            null !== Jd && Zd.e.request(`${Jd}.signOut`, {}).catch((Jd => {
              console.error(`Failed to sign out of ${dd} in the app:`, Jd)
            }));
            const kd = Od.currentUser;
            if (kd) {
              const {
                signInProvider: Jd
              } = await kd.getIdTokenResult(!1);
              Jd === pd.g[dd] && await od.signOut(Od)
            }
          }
        }
        return (0, Pd.isMobileApp)() ? (await Zd.e.ready, new qd) : new vd
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);