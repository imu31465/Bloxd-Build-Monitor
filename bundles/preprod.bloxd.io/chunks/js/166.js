export const id = 166;
export const ids = [166];
export const modules = {
  7708: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      BloxdFirebaseSdk: () => xW
    });
    var mW = OW(1964),
      EW = OW(3960),
      NW = OW(109),
      PW = OW(100),
      LW = OW(1787),
      cW = OW(2152);
    const wW = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var tW = OW(1888),
      ZW = OW(1813);
    class xW {
      constructor() {}
      static async setup() {
        try {
          return await xW.setupInternal()
        } catch (WW) {
          return console.error("Failed to setup Firebase SDK:", WW), null
        }
      }
      static async setupInternal() {
        const WW = await Promise.all([OW.e(303), OW.e(302)]).then((() => OW(42026))),
          iW = await Promise.all([OW.e(303), OW.e(304)]).then((() => OW(42045))),
          lW = await Promise.all([OW.e(303), OW.e(305)]).then((() => OW(42048))),
          AW = WW.initializeApp({
            ...wW,
            measurementId: EW.bloxdGa4MeasurementId
          });
        (0, EW.setUpGtag)(), window.gtag("config", EW.bloxdGa4MeasurementId), (0, EW.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const bW = iW.getAnalytics(AW),
          jW = {
            portal: NW.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        iW.setUserProperties(bW, jW);
        const UW = lW.initializeAuth(AW, {
          persistence: [lW.indexedDBLocalPersistence, lW.browserLocalPersistence, lW.browserSessionPersistence],
          popupRedirectResolver: (0, PW.isMobileApp)() ? void 0 : lW.browserPopupRedirectResolver
        });
        lW.useDeviceLanguage(UW);
        const kW = new lW.GoogleAuthProvider;
        kW.setCustomParameters({
          prompt: "select_account"
        });
        const sW = new lW.OAuthProvider(mW.i[mW.c.APPLE]),
          MW = new lW.OAuthProvider(mW.i[mW.c.MICROSOFT]);
        MW.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const KW = {
          [mW.c.GOOGLE]: kW,
          [mW.c.APPLE]: sW,
          [mW.c.MICROSOFT]: MW
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((WW => {
          const iW = lW.onIdTokenChanged(UW, (OW => {
            iW(), WW()
          }))
        }));
        class SW extends xW {
          setUserProperties(WW) {
            iW.setUserProperties(bW, WW)
          }
          onIdTokenChanged(WW) {
            lW.onIdTokenChanged(UW, WW)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(WW) {
            var iW;
            const OW = await lW.signInWithPopup(UW, KW[WW]);
            return null !== (iW = null === OW || void 0 === OW ? void 0 : OW.user) && void 0 !== iW ? iW : null
          }
          async getCurrentUser(WW) {
            const iW = UW.currentUser;
            if (!iW) return null;
            const {
              signInProvider: OW
            } = await iW.getIdTokenResult(!1);
            return OW === mW.i[WW] ? iW : null
          }
          async signOut(WW) {
            null !== await this.getCurrentUser(WW) && await lW.signOut(UW)
          }
        }
        async function YW(WW, iW) {
          const OW = await LW.d.request(`${WW}.${iW}`, {});
          if (null === OW) return null;
          const mW = "google" === WW ? lW.GoogleAuthProvider.credential(OW.idToken) : sW.credential({
            idToken: OW.idToken
          });
          return (await lW.signInWithCredential(UW, mW)).user
        }
        class yW extends xW {
          setUserProperties(WW) {
            iW.setUserProperties(bW, WW)
          }
          onIdTokenChanged(WW) {
            lW.onIdTokenChanged(UW, WW)
          }
          canSignIn(WW) {
            return null !== (0, cW.c)(WW)
          }
          async signInWithPopup(WW) {
            const iW = (0, cW.c)(WW);
            if (null === iW) return console.warn(`The app can't sign in with ${WW}; check canSignIn first`), null;
            try {
              return await YW(iW, "signIn")
            } catch (OW) {
              if (OW instanceof ZW.d && "timeout" === OW.code) return null;
              throw (0, tW.reportClientError)("login_failed", OW, `app_${iW}`), OW
            }
          }
          async getCurrentUser(WW) {
            const iW = UW.currentUser;
            if (iW) {
              const {
                signInProvider: OW
              } = await iW.getIdTokenResult(!1);
              if (OW === mW.i[WW]) return iW
            }
            const OW = (0, cW.c)(WW);
            if (null === OW) return null;
            try {
              return await YW(OW, "getCurrentUser")
            } catch (EW) {
              return console.error(`Failed to get the current ${WW} user from the app:`, EW), null
            }
          }
          async signOut(WW) {
            const iW = (0, cW.c)(WW);
            null !== iW && LW.d.request(`${iW}.signOut`, {}).catch((iW => {
              console.error(`Failed to sign out of ${WW} in the app:`, iW)
            }));
            const OW = UW.currentUser;
            if (OW) {
              const {
                signInProvider: iW
              } = await OW.getIdTokenResult(!1);
              iW === mW.i[WW] && await lW.signOut(UW)
            }
          }
        }
        return (0, PW.isMobileApp)() ? (await LW.d.ready, new yW) : new SW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);