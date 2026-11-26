export const id = 158;
export const ids = [158];
export const modules = {
  7255: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      BloxdFirebaseSdk: () => vV
    });
    var JV = xV(1952),
      YV = xV(3245),
      UV = xV(110),
      yV = xV(99),
      pV = xV(1781),
      QV = xV(2184);
    const nV = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var wV = xV(3268),
      ZV = xV(1813);
    class vV {
      constructor() {}
      static async setup() {
        try {
          return await vV.setupInternal()
        } catch (VV) {
          return console.error("Failed to setup Firebase SDK:", VV), null
        }
      }
      static async setupInternal() {
        const VV = await Promise.all([xV.e(293), xV.e(292)]).then((() => xV(41779))),
          eV = await Promise.all([xV.e(293), xV.e(294)]).then((() => xV(41810))),
          rV = await Promise.all([xV.e(293), xV.e(295)]).then((() => xV(41819))),
          kV = VV.initializeApp({
            ...nV,
            measurementId: YV.bloxdGa4MeasurementId
          });
        (0, YV.setUpGtag)(), window.gtag("config", YV.bloxdGa4MeasurementId), (0, YV.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const bV = eV.getAnalytics(kV),
          EV = {
            portal: UV.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        eV.setUserProperties(bV, EV);
        const BV = rV.initializeAuth(kV, {
          persistence: [rV.indexedDBLocalPersistence, rV.browserLocalPersistence, rV.browserSessionPersistence],
          popupRedirectResolver: (0, yV.isMobileApp)() ? void 0 : rV.browserPopupRedirectResolver
        });
        rV.useDeviceLanguage(BV);
        const jV = new rV.GoogleAuthProvider;
        jV.setCustomParameters({
          prompt: "select_account"
        });
        const qV = new rV.OAuthProvider(JV.h[JV.d.APPLE]),
          tV = new rV.OAuthProvider(JV.h[JV.d.MICROSOFT]);
        tV.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const FV = {
          [JV.d.GOOGLE]: jV,
          [JV.d.APPLE]: qV,
          [JV.d.MICROSOFT]: tV
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((VV => {
          const eV = rV.onIdTokenChanged(BV, (xV => {
            eV(), VV()
          }))
        }));
        class TV extends vV {
          setUserProperties(VV) {
            eV.setUserProperties(bV, VV)
          }
          onIdTokenChanged(VV) {
            rV.onIdTokenChanged(BV, VV)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(VV) {
            var eV;
            const xV = await rV.signInWithPopup(BV, FV[VV]);
            return null !== (eV = null === xV || void 0 === xV ? void 0 : xV.user) && void 0 !== eV ? eV : null
          }
          async getCurrentUser(VV) {
            const eV = BV.currentUser;
            if (!eV) return null;
            const {
              signInProvider: xV
            } = await eV.getIdTokenResult(!1);
            return xV === JV.h[VV] ? eV : null
          }
          async signOut(VV) {
            null !== await this.getCurrentUser(VV) && await rV.signOut(BV)
          }
        }
        async function PV(VV, eV) {
          const xV = await pV.b.request(`${VV}.${eV}`, {});
          if (null === xV) return null;
          const JV = "google" === VV ? rV.GoogleAuthProvider.credential(xV.idToken) : qV.credential({
            idToken: xV.idToken
          });
          return (await rV.signInWithCredential(BV, JV)).user
        }
        class AV extends vV {
          setUserProperties(VV) {
            eV.setUserProperties(bV, VV)
          }
          onIdTokenChanged(VV) {
            rV.onIdTokenChanged(BV, VV)
          }
          canSignIn(VV) {
            return null !== (0, QV.e)(VV)
          }
          async signInWithPopup(VV) {
            const eV = (0, QV.e)(VV);
            if (null === eV) return console.warn(`The app can't sign in with ${VV}; check canSignIn first`), null;
            try {
              return await PV(eV, "signIn")
            } catch (xV) {
              if (xV instanceof ZV.c && "timeout" === xV.code) return null;
              throw (0, wV.reportClientError)("login_failed", xV, `app_${eV}`), xV
            }
          }
          async getCurrentUser(VV) {
            const eV = BV.currentUser;
            if (eV) {
              const {
                signInProvider: xV
              } = await eV.getIdTokenResult(!1);
              if (xV === JV.h[VV]) return eV
            }
            const xV = (0, QV.e)(VV);
            if (null === xV) return null;
            try {
              return await PV(xV, "getCurrentUser")
            } catch (YV) {
              return console.error(`Failed to get the current ${VV} user from the app:`, YV), null
            }
          }
          async signOut(VV) {
            const eV = (0, QV.e)(VV);
            null !== eV && pV.b.request(`${eV}.signOut`, {}).catch((eV => {
              console.error(`Failed to sign out of ${VV} in the app:`, eV)
            }));
            const xV = BV.currentUser;
            if (xV) {
              const {
                signInProvider: eV
              } = await xV.getIdTokenResult(!1);
              eV === JV.h[VV] && await rV.signOut(BV)
            }
          }
        }
        return (0, yV.isMobileApp)() ? (await pV.b.ready, new AV) : new TV
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);