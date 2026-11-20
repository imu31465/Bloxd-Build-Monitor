export const id = 139;
export const ids = [139];
export const modules = {
  7841: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      BloxdFirebaseSdk: () => Vu
    });
    var Eu = yu(1758),
      Ku = yu(2719),
      Qu = yu(122),
      mu = yu(106),
      Ju = yu(1626),
      Nu = yu(1968);
    const Xu = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    class Vu {
      constructor() {}
      static async setup() {
        try {
          return await Vu.setupInternal()
        } catch (uu) {
          return console.error("Failed to setup Firebase SDK:", uu), null
        }
      }
      static async setupInternal() {
        const uu = await Promise.all([yu.e(256), yu.e(255)]).then((() => yu(40074))),
          Ru = await Promise.all([yu.e(256), yu.e(257)]).then((() => yu(40103))),
          ru = await Promise.all([yu.e(256), yu.e(258)]).then((() => yu(40111))),
          Bu = uu.initializeApp({
            ...Xu,
            measurementId: Ku.d
          });
        (0, Ku.F)(), window.gtag("config", Ku.d), (0, Ku.z)(), window.gtag("config", "AW-16469618203");
        const xu = Ru.getAnalytics(Bu),
          Su = {
            portal: Qu.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        Ru.setUserProperties(xu, Su);
        const pu = ru.getAuth();
        ru.useDeviceLanguage(pu);
        const Tu = new ru.GoogleAuthProvider;
        Tu.setCustomParameters({
          prompt: "select_account"
        });
        const Wu = new ru.OAuthProvider(Eu.g[Eu.b.APPLE]),
          ju = new ru.OAuthProvider(Eu.g[Eu.b.MICROSOFT]);
        ju.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const Hu = {
          [Eu.b.GOOGLE]: Tu,
          [Eu.b.APPLE]: Wu,
          [Eu.b.MICROSOFT]: ju
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((uu => {
          const Ru = ru.onIdTokenChanged(pu, (yu => {
            Ru(), uu()
          }))
        }));
        class du extends Vu {
          setUserProperties(uu) {
            Ru.setUserProperties(xu, uu)
          }
          onIdTokenChanged(uu) {
            ru.onIdTokenChanged(pu, uu)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(uu) {
            var Ru;
            const yu = await ru.signInWithPopup(pu, Hu[uu]);
            return null !== (Ru = null === yu || void 0 === yu ? void 0 : yu.user) && void 0 !== Ru ? Ru : null
          }
          async getCurrentUser(uu) {
            const Ru = pu.currentUser;
            if (!Ru) return null;
            const {
              signInProvider: yu
            } = await Ru.getIdTokenResult(!1);
            return yu === Eu.g[uu] ? Ru : null
          }
          async signOut(uu) {
            null !== await this.getCurrentUser(uu) && await ru.signOut(pu)
          }
        }
        async function bu(uu, Ru) {
          const yu = await Ju.d.request(`${uu}.${Ru}`, {});
          if (null === yu) return null;
          const Eu = "google" === uu ? ru.GoogleAuthProvider.credential(yu.idToken) : Wu.credential({
            idToken: yu.idToken
          });
          return (await ru.signInWithCredential(pu, Eu)).user
        }
        class Cu extends Vu {
          setUserProperties(uu) {
            Ru.setUserProperties(xu, uu)
          }
          onIdTokenChanged(uu) {
            ru.onIdTokenChanged(pu, uu)
          }
          canSignIn(uu) {
            return null !== (0, Nu.e)(uu)
          }
          async signInWithPopup(uu) {
            const Ru = (0, Nu.e)(uu);
            if (null === Ru) return console.warn(`The app can't sign in with ${uu}; check canSignIn first`), null;
            try {
              return await bu(Ru, "signIn")
            } catch (yu) {
              return console.error(`Failed to sign in with ${uu} in the app:`, yu), null
            }
          }
          async getCurrentUser(uu) {
            const Ru = pu.currentUser;
            if (Ru) {
              const {
                signInProvider: yu
              } = await Ru.getIdTokenResult(!1);
              if (yu === Eu.g[uu]) return Ru
            }
            const yu = (0, Nu.e)(uu);
            if (null === yu) return null;
            try {
              return await bu(yu, "getCurrentUser")
            } catch (Ku) {
              return console.error(`Failed to get the current ${uu} user from the app:`, Ku), null
            }
          }
          async signOut(uu) {
            const Ru = (0, Nu.e)(uu);
            null !== Ru && Ju.d.request(`${Ru}.signOut`, {}).catch((Ru => {
              console.error(`Failed to sign out of ${uu} in the app:`, Ru)
            }));
            const yu = pu.currentUser;
            if (yu) {
              const {
                signInProvider: Ru
              } = await yu.getIdTokenResult(!1);
              Ru === Eu.g[uu] && await ru.signOut(pu)
            }
          }
        }
        return (0, mu.isMobileApp)() ? (await Ju.d.ready, new Cu) : new du
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);