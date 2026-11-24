export const id = 145;
export const ids = [145];
export const modules = {
  8073: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      BloxdFirebaseSdk: () => Zk
    });
    var Xk = Ik(1787),
      Tk = Ik(2837),
      ik = Ik(104),
      yk = Ik(95),
      lk = Ik(1631),
      ak = Ik(1969);
    const qk = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var Lk = Ik(2852),
      tk = Ik(1649);
    class Zk {
      constructor() {}
      static async setup() {
        try {
          return await Zk.setupInternal()
        } catch (kk) {
          return console.error("Failed to setup Firebase SDK:", kk), null
        }
      }
      static async setupInternal() {
        const kk = await Promise.all([Ik.e(266), Ik.e(265)]).then((() => Ik(40509))),
          Fk = await Promise.all([Ik.e(266), Ik.e(267)]).then((() => Ik(40532))),
          jk = await Promise.all([Ik.e(266), Ik.e(268)]).then((() => Ik(40536))),
          ek = kk.initializeApp({
            ...qk,
            measurementId: Tk.e
          });
        (0, Tk.E)(), window.gtag("config", Tk.e), (0, Tk.z)(), window.gtag("config", "AW-16469618203");
        const wk = Fk.getAnalytics(ek),
          Hk = {
            portal: ik.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        Fk.setUserProperties(wk, Hk);
        const Jk = jk.initializeAuth(ek, {
          persistence: [jk.indexedDBLocalPersistence, jk.browserLocalPersistence, jk.browserSessionPersistence],
          popupRedirectResolver: (0, yk.isMobileApp)() ? void 0 : jk.browserPopupRedirectResolver
        });
        jk.useDeviceLanguage(Jk);
        const xk = new jk.GoogleAuthProvider;
        xk.setCustomParameters({
          prompt: "select_account"
        });
        const Pk = new jk.OAuthProvider(Xk.i[Xk.d.APPLE]),
          Kk = new jk.OAuthProvider(Xk.i[Xk.d.MICROSOFT]);
        Kk.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const Qk = {
          [Xk.d.GOOGLE]: xk,
          [Xk.d.APPLE]: Pk,
          [Xk.d.MICROSOFT]: Kk
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((kk => {
          const Fk = jk.onIdTokenChanged(Jk, (Ik => {
            Fk(), kk()
          }))
        }));
        class sk extends Zk {
          setUserProperties(kk) {
            Fk.setUserProperties(wk, kk)
          }
          onIdTokenChanged(kk) {
            jk.onIdTokenChanged(Jk, kk)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(kk) {
            var Fk;
            const Ik = await jk.signInWithPopup(Jk, Qk[kk]);
            return null !== (Fk = null === Ik || void 0 === Ik ? void 0 : Ik.user) && void 0 !== Fk ? Fk : null
          }
          async getCurrentUser(kk) {
            const Fk = Jk.currentUser;
            if (!Fk) return null;
            const {
              signInProvider: Ik
            } = await Fk.getIdTokenResult(!1);
            return Ik === Xk.i[kk] ? Fk : null
          }
          async signOut(kk) {
            null !== await this.getCurrentUser(kk) && await jk.signOut(Jk)
          }
        }
        async function Vk(kk, Fk) {
          const Ik = await lk.b.request(`${kk}.${Fk}`, {});
          if (null === Ik) return null;
          const Xk = "google" === kk ? jk.GoogleAuthProvider.credential(Ik.idToken) : Pk.credential({
            idToken: Ik.idToken
          });
          return (await jk.signInWithCredential(Jk, Xk)).user
        }
        class zk extends Zk {
          setUserProperties(kk) {
            Fk.setUserProperties(wk, kk)
          }
          onIdTokenChanged(kk) {
            jk.onIdTokenChanged(Jk, kk)
          }
          canSignIn(kk) {
            return null !== (0, ak.d)(kk)
          }
          async signInWithPopup(kk) {
            const Fk = (0, ak.d)(kk);
            if (null === Fk) return console.warn(`The app can't sign in with ${kk}; check canSignIn first`), null;
            try {
              return await Vk(Fk, "signIn")
            } catch (Ik) {
              if (Ik instanceof tk.d && "timeout" === Ik.code) return null;
              throw (0, Lk.reportClientError)("login_failed", Ik, `app_${Fk}`), Ik
            }
          }
          async getCurrentUser(kk) {
            const Fk = Jk.currentUser;
            if (Fk) {
              const {
                signInProvider: Ik
              } = await Fk.getIdTokenResult(!1);
              if (Ik === Xk.i[kk]) return Fk
            }
            const Ik = (0, ak.d)(kk);
            if (null === Ik) return null;
            try {
              return await Vk(Ik, "getCurrentUser")
            } catch (Tk) {
              return console.error(`Failed to get the current ${kk} user from the app:`, Tk), null
            }
          }
          async signOut(kk) {
            const Fk = (0, ak.d)(kk);
            null !== Fk && lk.b.request(`${Fk}.signOut`, {}).catch((Fk => {
              console.error(`Failed to sign out of ${kk} in the app:`, Fk)
            }));
            const Ik = Jk.currentUser;
            if (Ik) {
              const {
                signInProvider: Fk
              } = await Ik.getIdTokenResult(!1);
              Fk === Xk.i[kk] && await jk.signOut(Jk)
            }
          }
        }
        return (0, yk.isMobileApp)() ? (await lk.b.ready, new zk) : new sk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);