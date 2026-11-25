export const id = 158;
export const ids = [158];
export const modules = {
  7173: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      BloxdFirebaseSdk: () => mM
    });
    var OM = iM(1940),
      SM = iM(3241),
      jM = iM(94),
      aM = iM(83),
      PM = iM(1771),
      nM = iM(2157);
    const QM = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var zM = iM(3258),
      LM = iM(1810);
    class mM {
      constructor() {}
      static async setup() {
        try {
          return await mM.setupInternal()
        } catch (MM) {
          return console.error("Failed to setup Firebase SDK:", MM), null
        }
      }
      static async setupInternal() {
        const MM = await Promise.all([iM.e(293), iM.e(292)]).then((() => iM(41593))),
          rM = await Promise.all([iM.e(293), iM.e(294)]).then((() => iM(41619))),
          HM = await Promise.all([iM.e(293), iM.e(295)]).then((() => iM(41628))),
          hM = MM.initializeApp({
            ...QM,
            measurementId: SM.bloxdGa4MeasurementId
          });
        (0, SM.setUpGtag)(), window.gtag("config", SM.bloxdGa4MeasurementId), (0, SM.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const JM = rM.getAnalytics(hM),
          dM = {
            portal: jM.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        rM.setUserProperties(JM, dM);
        const yM = HM.initializeAuth(hM, {
          persistence: [HM.indexedDBLocalPersistence, HM.browserLocalPersistence, HM.browserSessionPersistence],
          popupRedirectResolver: (0, aM.isMobileApp)() ? void 0 : HM.browserPopupRedirectResolver
        });
        HM.useDeviceLanguage(yM);
        const lM = new HM.GoogleAuthProvider;
        lM.setCustomParameters({
          prompt: "select_account"
        });
        const EM = new HM.OAuthProvider(OM.j[OM.d.APPLE]),
          UM = new HM.OAuthProvider(OM.j[OM.d.MICROSOFT]);
        UM.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const GM = {
          [OM.d.GOOGLE]: lM,
          [OM.d.APPLE]: EM,
          [OM.d.MICROSOFT]: UM
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((MM => {
          const rM = HM.onIdTokenChanged(yM, (iM => {
            rM(), MM()
          }))
        }));
        class CM extends mM {
          setUserProperties(MM) {
            rM.setUserProperties(JM, MM)
          }
          onIdTokenChanged(MM) {
            HM.onIdTokenChanged(yM, MM)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(MM) {
            var rM;
            const iM = await HM.signInWithPopup(yM, GM[MM]);
            return null !== (rM = null === iM || void 0 === iM ? void 0 : iM.user) && void 0 !== rM ? rM : null
          }
          async getCurrentUser(MM) {
            const rM = yM.currentUser;
            if (!rM) return null;
            const {
              signInProvider: iM
            } = await rM.getIdTokenResult(!1);
            return iM === OM.j[MM] ? rM : null
          }
          async signOut(MM) {
            null !== await this.getCurrentUser(MM) && await HM.signOut(yM)
          }
        }
        async function eM(MM, rM) {
          const iM = await PM.e.request(`${MM}.${rM}`, {});
          if (null === iM) return null;
          const OM = "google" === MM ? HM.GoogleAuthProvider.credential(iM.idToken) : EM.credential({
            idToken: iM.idToken
          });
          return (await HM.signInWithCredential(yM, OM)).user
        }
        class bM extends mM {
          setUserProperties(MM) {
            rM.setUserProperties(JM, MM)
          }
          onIdTokenChanged(MM) {
            HM.onIdTokenChanged(yM, MM)
          }
          canSignIn(MM) {
            return null !== (0, nM.d)(MM)
          }
          async signInWithPopup(MM) {
            const rM = (0, nM.d)(MM);
            if (null === rM) return console.warn(`The app can't sign in with ${MM}; check canSignIn first`), null;
            try {
              return await eM(rM, "signIn")
            } catch (iM) {
              if (iM instanceof LM.e && "timeout" === iM.code) return null;
              throw (0, zM.reportClientError)("login_failed", iM, `app_${rM}`), iM
            }
          }
          async getCurrentUser(MM) {
            const rM = yM.currentUser;
            if (rM) {
              const {
                signInProvider: iM
              } = await rM.getIdTokenResult(!1);
              if (iM === OM.j[MM]) return rM
            }
            const iM = (0, nM.d)(MM);
            if (null === iM) return null;
            try {
              return await eM(iM, "getCurrentUser")
            } catch (SM) {
              return console.error(`Failed to get the current ${MM} user from the app:`, SM), null
            }
          }
          async signOut(MM) {
            const rM = (0, nM.d)(MM);
            null !== rM && PM.e.request(`${rM}.signOut`, {}).catch((rM => {
              console.error(`Failed to sign out of ${MM} in the app:`, rM)
            }));
            const iM = yM.currentUser;
            if (iM) {
              const {
                signInProvider: rM
              } = await iM.getIdTokenResult(!1);
              rM === OM.j[MM] && await HM.signOut(yM)
            }
          }
        }
        return (0, aM.isMobileApp)() ? (await PM.e.ready, new bM) : new CM
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);