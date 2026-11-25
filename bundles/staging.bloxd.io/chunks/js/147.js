export const id = 147;
export const ids = [147];
export const modules = {
  8303: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      BloxdFirebaseSdk: () => cu
    });
    var su = ju(1889),
      Uu = ju(3074),
      Zu = ju(103),
      Xu = ju(91),
      lu = ju(1735),
      qu = ju(2100);
    const fu = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var Cu = ju(3099),
      bu = ju(1758);
    class cu {
      constructor() {}
      static async setup() {
        try {
          return await cu.setupInternal()
        } catch (uu) {
          return console.error("Failed to setup Firebase SDK:", uu), null
        }
      }
      static async setupInternal() {
        const uu = await Promise.all([ju.e(270), ju.e(269)]).then((() => ju(40758))),
          Eu = await Promise.all([ju.e(270), ju.e(271)]).then((() => ju(40784))),
          Nu = await Promise.all([ju.e(270), ju.e(272)]).then((() => ju(40789))),
          Ou = uu.initializeApp({
            ...fu,
            measurementId: Uu.bloxdGa4MeasurementId
          });
        (0, Uu.setUpGtag)(), window.gtag("config", Uu.bloxdGa4MeasurementId), (0, Uu.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const Yu = Eu.getAnalytics(Ou),
          hu = {
            portal: Zu.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        Eu.setUserProperties(Yu, hu);
        const Du = Nu.initializeAuth(Ou, {
          persistence: [Nu.indexedDBLocalPersistence, Nu.browserLocalPersistence, Nu.browserSessionPersistence],
          popupRedirectResolver: (0, Xu.isMobileApp)() ? void 0 : Nu.browserPopupRedirectResolver
        });
        Nu.useDeviceLanguage(Du);
        const gu = new Nu.GoogleAuthProvider;
        gu.setCustomParameters({
          prompt: "select_account"
        });
        const Mu = new Nu.OAuthProvider(su.j[su.e.APPLE]),
          eu = new Nu.OAuthProvider(su.j[su.e.MICROSOFT]);
        eu.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const Gu = {
          [su.e.GOOGLE]: gu,
          [su.e.APPLE]: Mu,
          [su.e.MICROSOFT]: eu
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((uu => {
          const Eu = Nu.onIdTokenChanged(Du, (ju => {
            Eu(), uu()
          }))
        }));
        class pu extends cu {
          setUserProperties(uu) {
            Eu.setUserProperties(Yu, uu)
          }
          onIdTokenChanged(uu) {
            Nu.onIdTokenChanged(Du, uu)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(uu) {
            var Eu;
            const ju = await Nu.signInWithPopup(Du, Gu[uu]);
            return null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.user) && void 0 !== Eu ? Eu : null
          }
          async getCurrentUser(uu) {
            const Eu = Du.currentUser;
            if (!Eu) return null;
            const {
              signInProvider: ju
            } = await Eu.getIdTokenResult(!1);
            return ju === su.j[uu] ? Eu : null
          }
          async signOut(uu) {
            null !== await this.getCurrentUser(uu) && await Nu.signOut(Du)
          }
        }
        async function wu(uu, Eu) {
          const ju = await lu.d.request(`${uu}.${Eu}`, {});
          if (null === ju) return null;
          const su = "google" === uu ? Nu.GoogleAuthProvider.credential(ju.idToken) : Mu.credential({
            idToken: ju.idToken
          });
          return (await Nu.signInWithCredential(Du, su)).user
        }
        class Ju extends cu {
          setUserProperties(uu) {
            Eu.setUserProperties(Yu, uu)
          }
          onIdTokenChanged(uu) {
            Nu.onIdTokenChanged(Du, uu)
          }
          canSignIn(uu) {
            return null !== (0, qu.b)(uu)
          }
          async signInWithPopup(uu) {
            const Eu = (0, qu.b)(uu);
            if (null === Eu) return console.warn(`The app can't sign in with ${uu}; check canSignIn first`), null;
            try {
              return await wu(Eu, "signIn")
            } catch (ju) {
              if (ju instanceof bu.d && "timeout" === ju.code) return null;
              throw (0, Cu.reportClientError)("login_failed", ju, `app_${Eu}`), ju
            }
          }
          async getCurrentUser(uu) {
            const Eu = Du.currentUser;
            if (Eu) {
              const {
                signInProvider: ju
              } = await Eu.getIdTokenResult(!1);
              if (ju === su.j[uu]) return Eu
            }
            const ju = (0, qu.b)(uu);
            if (null === ju) return null;
            try {
              return await wu(ju, "getCurrentUser")
            } catch (Uu) {
              return console.error(`Failed to get the current ${uu} user from the app:`, Uu), null
            }
          }
          async signOut(uu) {
            const Eu = (0, qu.b)(uu);
            null !== Eu && lu.d.request(`${Eu}.signOut`, {}).catch((Eu => {
              console.error(`Failed to sign out of ${uu} in the app:`, Eu)
            }));
            const ju = Du.currentUser;
            if (ju) {
              const {
                signInProvider: Eu
              } = await ju.getIdTokenResult(!1);
              Eu === su.j[uu] && await Nu.signOut(Du)
            }
          }
        }
        return (0, Xu.isMobileApp)() ? (await lu.d.ready, new Ju) : new pu
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);