export const id = 166;
export const ids = [166];
export const modules = {
  7651: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      BloxdFirebaseSdk: () => mr
    });
    var Zr = Qr(1992),
      Wr = Qr(4010),
      ar = Qr(120),
      jr = Qr(109),
      Ir = Qr(1815),
      fr = Qr(2200);
    const Er = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var pr = Qr(1912),
      xr = Qr(1846);
    class mr {
      constructor() {}
      static async setup() {
        try {
          return await mr.setupInternal()
        } catch (rr) {
          return console.error("Failed to setup Firebase SDK:", rr), null
        }
      }
      static async setupInternal() {
        const rr = await Promise.all([Qr.e(304), Qr.e(303)]).then((() => Qr(42348))),
          Sr = await Promise.all([Qr.e(304), Qr.e(305)]).then((() => Qr(42380))),
          Nr = await Promise.all([Qr.e(304), Qr.e(306)]).then((() => Qr(42388))),
          Ur = rr.initializeApp({
            ...Er,
            measurementId: Wr.bloxdGa4MeasurementId
          });
        (0, Wr.setUpGtag)(), window.gtag("config", Wr.bloxdGa4MeasurementId), (0, Wr.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const tr = Sr.getAnalytics(Ur),
          hr = {
            portal: ar.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        Sr.setUserProperties(tr, hr);
        const zr = Nr.initializeAuth(Ur, {
          persistence: [Nr.indexedDBLocalPersistence, Nr.browserLocalPersistence, Nr.browserSessionPersistence],
          popupRedirectResolver: (0, jr.isMobileApp)() ? void 0 : Nr.browserPopupRedirectResolver
        });
        Nr.useDeviceLanguage(zr);
        const Yr = new Nr.GoogleAuthProvider;
        Yr.setCustomParameters({
          prompt: "select_account"
        });
        const nr = new Nr.OAuthProvider(Zr.h[Zr.c.APPLE]),
          er = new Nr.OAuthProvider(Zr.h[Zr.c.MICROSOFT]);
        er.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const Kr = {
          [Zr.c.GOOGLE]: Yr,
          [Zr.c.APPLE]: nr,
          [Zr.c.MICROSOFT]: er
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((rr => {
          const Sr = Nr.onIdTokenChanged(zr, (Qr => {
            Sr(), rr()
          }))
        }));
        class yr extends mr {
          setUserProperties(rr) {
            Sr.setUserProperties(tr, rr)
          }
          onIdTokenChanged(rr) {
            Nr.onIdTokenChanged(zr, rr)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(rr) {
            var Sr;
            const Qr = await Nr.signInWithPopup(zr, Kr[rr]);
            return null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.user) && void 0 !== Sr ? Sr : null
          }
          async getCurrentUser(rr) {
            const Sr = zr.currentUser;
            if (!Sr) return null;
            const {
              signInProvider: Qr
            } = await Sr.getIdTokenResult(!1);
            return Qr === Zr.h[rr] ? Sr : null
          }
          async signOut(rr) {
            null !== await this.getCurrentUser(rr) && await Nr.signOut(zr)
          }
        }
        async function Br(rr, Sr) {
          const Qr = await Ir.b.request(`${rr}.${Sr}`, {});
          if (null === Qr) return null;
          const Zr = "google" === rr ? Nr.GoogleAuthProvider.credential(Qr.idToken) : nr.credential({
            idToken: Qr.idToken
          });
          return (await Nr.signInWithCredential(zr, Zr)).user
        }
        class Tr extends mr {
          setUserProperties(rr) {
            Sr.setUserProperties(tr, rr)
          }
          onIdTokenChanged(rr) {
            Nr.onIdTokenChanged(zr, rr)
          }
          canSignIn(rr) {
            return null !== (0, fr.d)(rr)
          }
          async signInWithPopup(rr) {
            const Sr = (0, fr.d)(rr);
            if (null === Sr) return console.warn(`The app can't sign in with ${rr}; check canSignIn first`), null;
            try {
              return await Br(Sr, "signIn")
            } catch (Qr) {
              if (Qr instanceof xr.e && "timeout" === Qr.code) return null;
              throw (0, pr.reportClientError)("login_failed", Qr, `app_${Sr}`), Qr
            }
          }
          async getCurrentUser(rr) {
            const Sr = zr.currentUser;
            if (Sr) {
              const {
                signInProvider: Qr
              } = await Sr.getIdTokenResult(!1);
              if (Qr === Zr.h[rr]) return Sr
            }
            const Qr = (0, fr.d)(rr);
            if (null === Qr) return null;
            try {
              return await Br(Qr, "getCurrentUser")
            } catch (Wr) {
              return console.error(`Failed to get the current ${rr} user from the app:`, Wr), null
            }
          }
          async signOut(rr) {
            const Sr = (0, fr.d)(rr);
            null !== Sr && Ir.b.request(`${Sr}.signOut`, {}).catch((Sr => {
              console.error(`Failed to sign out of ${rr} in the app:`, Sr)
            }));
            const Qr = zr.currentUser;
            if (Qr) {
              const {
                signInProvider: Sr
              } = await Qr.getIdTokenResult(!1);
              Sr === Zr.h[rr] && await Nr.signOut(zr)
            }
          }
        }
        return (0, jr.isMobileApp)() ? (await Ir.b.ready, new Tr) : new yr
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);