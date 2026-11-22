export const id = 144;
export const ids = [144];
export const modules = {
  7905: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      BloxdFirebaseSdk: () => xk
    });
    var Dk = ik(1799),
      fk = ik(2849),
      Sk = ik(107),
      bk = ik(99),
      rk = ik(1659),
      Pk = ik(2005);
    const mk = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var Mk = ik(2866),
      Kk = ik(1676);
    class xk {
      constructor() {}
      static async setup() {
        try {
          return await xk.setupInternal()
        } catch (kk) {
          return console.error("Failed to setup Firebase SDK:", kk), null
        }
      }
      static async setupInternal() {
        const kk = await Promise.all([ik.e(262), ik.e(261)]).then((() => ik(40071))),
          ek = await Promise.all([ik.e(262), ik.e(263)]).then((() => ik(40106))),
          nk = await Promise.all([ik.e(262), ik.e(264)]).then((() => ik(40111))),
          Uk = kk.initializeApp({
            ...mk,
            measurementId: fk.b
          });
        (0, fk.A)(), window.gtag("config", fk.b), (0, fk.v)(), window.gtag("config", "AW-16469618203");
        const Hk = ek.getAnalytics(Uk),
          wk = {
            portal: Sk.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        ek.setUserProperties(Hk, wk);
        const lk = nk.initializeAuth(Uk, {
          persistence: [nk.indexedDBLocalPersistence, nk.browserLocalPersistence, nk.browserSessionPersistence],
          popupRedirectResolver: (0, bk.isMobileApp)() ? void 0 : nk.browserPopupRedirectResolver
        });
        nk.useDeviceLanguage(lk);
        const pk = new nk.GoogleAuthProvider;
        pk.setCustomParameters({
          prompt: "select_account"
        });
        const yk = new nk.OAuthProvider(Dk.h[Dk.c.APPLE]),
          Yk = new nk.OAuthProvider(Dk.h[Dk.c.MICROSOFT]);
        Yk.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const Lk = {
          [Dk.c.GOOGLE]: pk,
          [Dk.c.APPLE]: yk,
          [Dk.c.MICROSOFT]: Yk
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((kk => {
          const ek = nk.onIdTokenChanged(lk, (ik => {
            ek(), kk()
          }))
        }));
        class Ck extends xk {
          setUserProperties(kk) {
            ek.setUserProperties(Hk, kk)
          }
          onIdTokenChanged(kk) {
            nk.onIdTokenChanged(lk, kk)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(kk) {
            var ek;
            const ik = await nk.signInWithPopup(lk, Lk[kk]);
            return null !== (ek = null === ik || void 0 === ik ? void 0 : ik.user) && void 0 !== ek ? ek : null
          }
          async getCurrentUser(kk) {
            const ek = lk.currentUser;
            if (!ek) return null;
            const {
              signInProvider: ik
            } = await ek.getIdTokenResult(!1);
            return ik === Dk.h[kk] ? ek : null
          }
          async signOut(kk) {
            null !== await this.getCurrentUser(kk) && await nk.signOut(lk)
          }
        }
        async function Ak(kk, ek) {
          const ik = await rk.b.request(`${kk}.${ek}`, {});
          if (null === ik) return null;
          const Dk = "google" === kk ? nk.GoogleAuthProvider.credential(ik.idToken) : yk.credential({
            idToken: ik.idToken
          });
          return (await nk.signInWithCredential(lk, Dk)).user
        }
        class jk extends xk {
          setUserProperties(kk) {
            ek.setUserProperties(Hk, kk)
          }
          onIdTokenChanged(kk) {
            nk.onIdTokenChanged(lk, kk)
          }
          canSignIn(kk) {
            return null !== (0, Pk.b)(kk)
          }
          async signInWithPopup(kk) {
            const ek = (0, Pk.b)(kk);
            if (null === ek) return console.warn(`The app can't sign in with ${kk}; check canSignIn first`), null;
            try {
              return await Ak(ek, "signIn")
            } catch (ik) {
              if (ik instanceof Kk.b && "timeout" === ik.code) return null;
              throw (0, Mk.reportClientError)("login_failed", ik, `app_${ek}`), ik
            }
          }
          async getCurrentUser(kk) {
            const ek = lk.currentUser;
            if (ek) {
              const {
                signInProvider: ik
              } = await ek.getIdTokenResult(!1);
              if (ik === Dk.h[kk]) return ek
            }
            const ik = (0, Pk.b)(kk);
            if (null === ik) return null;
            try {
              return await Ak(ik, "getCurrentUser")
            } catch (fk) {
              return console.error(`Failed to get the current ${kk} user from the app:`, fk), null
            }
          }
          async signOut(kk) {
            const ek = (0, Pk.b)(kk);
            null !== ek && rk.b.request(`${ek}.signOut`, {}).catch((ek => {
              console.error(`Failed to sign out of ${kk} in the app:`, ek)
            }));
            const ik = lk.currentUser;
            if (ik) {
              const {
                signInProvider: ek
              } = await ik.getIdTokenResult(!1);
              ek === Dk.h[kk] && await nk.signOut(lk)
            }
          }
        }
        return (0, bk.isMobileApp)() ? (await rk.b.ready, new jk) : new Ck
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);