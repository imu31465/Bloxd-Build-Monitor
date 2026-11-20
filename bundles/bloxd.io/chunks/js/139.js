export const id = 139;
export const ids = [139];
export const modules = {
  7739: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      BloxdFirebaseSdk: () => sk
    });
    var Rk = Bk(1751),
      tk = Bk(2728),
      ak = Bk(109),
      Xk = Bk(98),
      bk = Bk(1625),
      wk = Bk(1948);
    const dk = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    class sk {
      constructor() {}
      static async setup() {
        try {
          return await sk.setupInternal()
        } catch (kk) {
          return console.error("Failed to setup Firebase SDK:", kk), null
        }
      }
      static async setupInternal() {
        const kk = await Promise.all([Bk.e(256), Bk.e(255)]).then((() => Bk(39916))),
          Fk = await Promise.all([Bk.e(256), Bk.e(257)]).then((() => Bk(39936))),
          Vk = await Promise.all([Bk.e(256), Bk.e(258)]).then((() => Bk(39943))),
          Jk = kk.initializeApp({
            ...dk,
            measurementId: tk.e
          });
        (0, tk.E)(), window.gtag("config", tk.e), (0, tk.B)(), window.gtag("config", "AW-16469618203");
        const Ak = Fk.getAnalytics(Jk),
          ek = {
            portal: ak.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        Fk.setUserProperties(Ak, ek);
        const yk = Vk.getAuth();
        Vk.useDeviceLanguage(yk);
        const fk = new Vk.GoogleAuthProvider;
        fk.setCustomParameters({
          prompt: "select_account"
        });
        const mk = new Vk.OAuthProvider(Rk.f[Rk.b.APPLE]),
          Wk = new Vk.OAuthProvider(Rk.f[Rk.b.MICROSOFT]);
        Wk.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const vk = {
          [Rk.b.GOOGLE]: fk,
          [Rk.b.APPLE]: mk,
          [Rk.b.MICROSOFT]: Wk
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((kk => {
          const Fk = Vk.onIdTokenChanged(yk, (Bk => {
            Fk(), kk()
          }))
        }));
        class ik extends sk {
          setUserProperties(kk) {
            Fk.setUserProperties(Ak, kk)
          }
          onIdTokenChanged(kk) {
            Vk.onIdTokenChanged(yk, kk)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(kk) {
            var Fk;
            const Bk = await Vk.signInWithPopup(yk, vk[kk]);
            return null !== (Fk = null === Bk || void 0 === Bk ? void 0 : Bk.user) && void 0 !== Fk ? Fk : null
          }
          async getCurrentUser(kk) {
            const Fk = yk.currentUser;
            if (!Fk) return null;
            const {
              signInProvider: Bk
            } = await Fk.getIdTokenResult(!1);
            return Bk === Rk.f[kk] ? Fk : null
          }
          async signOut(kk) {
            null !== await this.getCurrentUser(kk) && await Vk.signOut(yk)
          }
        }
        async function Yk(kk, Fk) {
          const Bk = await bk.d.request(`${kk}.${Fk}`, {});
          if (null === Bk) return null;
          const Rk = "google" === kk ? Vk.GoogleAuthProvider.credential(Bk.idToken) : mk.credential({
            idToken: Bk.idToken
          });
          return (await Vk.signInWithCredential(yk, Rk)).user
        }
        class Lk extends sk {
          setUserProperties(kk) {
            Fk.setUserProperties(Ak, kk)
          }
          onIdTokenChanged(kk) {
            Vk.onIdTokenChanged(yk, kk)
          }
          canSignIn(kk) {
            return null !== (0, wk.d)(kk)
          }
          async signInWithPopup(kk) {
            const Fk = (0, wk.d)(kk);
            if (null === Fk) return console.warn(`The app can't sign in with ${kk}; check canSignIn first`), null;
            try {
              return await Yk(Fk, "signIn")
            } catch (Bk) {
              return console.error(`Failed to sign in with ${kk} in the app:`, Bk), null
            }
          }
          async getCurrentUser(kk) {
            const Fk = yk.currentUser;
            if (Fk) {
              const {
                signInProvider: Bk
              } = await Fk.getIdTokenResult(!1);
              if (Bk === Rk.f[kk]) return Fk
            }
            const Bk = (0, wk.d)(kk);
            if (null === Bk) return null;
            try {
              return await Yk(Bk, "getCurrentUser")
            } catch (tk) {
              return console.error(`Failed to get the current ${kk} user from the app:`, tk), null
            }
          }
          async signOut(kk) {
            const Fk = (0, wk.d)(kk);
            null !== Fk && bk.d.request(`${Fk}.signOut`, {}).catch((Fk => {
              console.error(`Failed to sign out of ${kk} in the app:`, Fk)
            }));
            const Bk = yk.currentUser;
            if (Bk) {
              const {
                signInProvider: Fk
              } = await Bk.getIdTokenResult(!1);
              Fk === Rk.f[kk] && await Vk.signOut(yk)
            }
          }
        }
        return (0, Xk.isMobileApp)() ? (await bk.d.ready, new Lk) : new ik
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);