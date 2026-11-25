export const id = 147;
export const ids = [147];
export const modules = {
  8316: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      BloxdFirebaseSdk: () => lt
    });
    var Ot = Vt(1935),
      qt = Vt(2990),
      Dt = Vt(121),
      mt = Vt(106),
      dt = Vt(1784),
      jt = Vt(2125);
    const Ht = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var Xt = Vt(3012),
      Qt = Vt(1818);
    class lt {
      constructor() {}
      static async setup() {
        try {
          return await lt.setupInternal()
        } catch (tt) {
          return console.error("Failed to setup Firebase SDK:", tt), null
        }
      }
      static async setupInternal() {
        const tt = await Promise.all([Vt.e(270), Vt.e(269)]).then((() => Vt(40685))),
          et = await Promise.all([Vt.e(270), Vt.e(271)]).then((() => Vt(40710))),
          Et = await Promise.all([Vt.e(270), Vt.e(272)]).then((() => Vt(40715))),
          ft = tt.initializeApp({
            ...Ht,
            measurementId: qt.bloxdGa4MeasurementId
          });
        (0, qt.setUpGtag)(), window.gtag("config", qt.bloxdGa4MeasurementId), (0, qt.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const wt = et.getAnalytics(ft),
          yt = {
            portal: Dt.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        et.setUserProperties(wt, yt);
        const Nt = Et.initializeAuth(ft, {
          persistence: [Et.indexedDBLocalPersistence, Et.browserLocalPersistence, Et.browserSessionPersistence],
          popupRedirectResolver: (0, mt.isMobileApp)() ? void 0 : Et.browserPopupRedirectResolver
        });
        Et.useDeviceLanguage(Nt);
        const Mt = new Et.GoogleAuthProvider;
        Mt.setCustomParameters({
          prompt: "select_account"
        });
        const bt = new Et.OAuthProvider(Ot.f[Ot.c.APPLE]),
          Jt = new Et.OAuthProvider(Ot.f[Ot.c.MICROSOFT]);
        Jt.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const Ct = {
          [Ot.c.GOOGLE]: Mt,
          [Ot.c.APPLE]: bt,
          [Ot.c.MICROSOFT]: Jt
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((tt => {
          const et = Et.onIdTokenChanged(Nt, (Vt => {
            et(), tt()
          }))
        }));
        class ut extends lt {
          setUserProperties(tt) {
            et.setUserProperties(wt, tt)
          }
          onIdTokenChanged(tt) {
            Et.onIdTokenChanged(Nt, tt)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(tt) {
            var et;
            const Vt = await Et.signInWithPopup(Nt, Ct[tt]);
            return null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.user) && void 0 !== et ? et : null
          }
          async getCurrentUser(tt) {
            const et = Nt.currentUser;
            if (!et) return null;
            const {
              signInProvider: Vt
            } = await et.getIdTokenResult(!1);
            return Vt === Ot.f[tt] ? et : null
          }
          async signOut(tt) {
            null !== await this.getCurrentUser(tt) && await Et.signOut(Nt)
          }
        }
        async function Kt(tt, et) {
          const Vt = await dt.c.request(`${tt}.${et}`, {});
          if (null === Vt) return null;
          const Ot = "google" === tt ? Et.GoogleAuthProvider.credential(Vt.idToken) : bt.credential({
            idToken: Vt.idToken
          });
          return (await Et.signInWithCredential(Nt, Ot)).user
        }
        class ht extends lt {
          setUserProperties(tt) {
            et.setUserProperties(wt, tt)
          }
          onIdTokenChanged(tt) {
            Et.onIdTokenChanged(Nt, tt)
          }
          canSignIn(tt) {
            return null !== (0, jt.c)(tt)
          }
          async signInWithPopup(tt) {
            const et = (0, jt.c)(tt);
            if (null === et) return console.warn(`The app can't sign in with ${tt}; check canSignIn first`), null;
            try {
              return await Kt(et, "signIn")
            } catch (Vt) {
              if (Vt instanceof Qt.d && "timeout" === Vt.code) return null;
              throw (0, Xt.reportClientError)("login_failed", Vt, `app_${et}`), Vt
            }
          }
          async getCurrentUser(tt) {
            const et = Nt.currentUser;
            if (et) {
              const {
                signInProvider: Vt
              } = await et.getIdTokenResult(!1);
              if (Vt === Ot.f[tt]) return et
            }
            const Vt = (0, jt.c)(tt);
            if (null === Vt) return null;
            try {
              return await Kt(Vt, "getCurrentUser")
            } catch (qt) {
              return console.error(`Failed to get the current ${tt} user from the app:`, qt), null
            }
          }
          async signOut(tt) {
            const et = (0, jt.c)(tt);
            null !== et && dt.c.request(`${et}.signOut`, {}).catch((et => {
              console.error(`Failed to sign out of ${tt} in the app:`, et)
            }));
            const Vt = Nt.currentUser;
            if (Vt) {
              const {
                signInProvider: et
              } = await Vt.getIdTokenResult(!1);
              et === Ot.f[tt] && await Et.signOut(Nt)
            }
          }
        }
        return (0, mt.isMobileApp)() ? (await dt.c.ready, new ht) : new ut
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);