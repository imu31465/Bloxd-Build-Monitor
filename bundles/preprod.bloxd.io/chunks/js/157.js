export const id = 157;
export const ids = [157];
export const modules = {
  7299: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      BloxdFirebaseSdk: () => NU
    });
    var cU = zU(1919),
      yU = zU(3221),
      QU = zU(111),
      AU = zU(97),
      FU = zU(1734),
      oU = zU(2111);
    const DU = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var EU = zU(1835),
      YU = zU(1765);
    class NU {
      constructor() {}
      static async setup() {
        try {
          return await NU.setupInternal()
        } catch (UU) {
          return console.error("Failed to setup Firebase SDK:", UU), null
        }
      }
      static async setupInternal() {
        const UU = await Promise.all([zU.e(291), zU.e(290)]).then((() => zU(41577))),
          XU = await Promise.all([zU.e(291), zU.e(292)]).then((() => zU(41610))),
          IU = await Promise.all([zU.e(291), zU.e(293)]).then((() => zU(41615))),
          pU = UU.initializeApp({
            ...DU,
            measurementId: yU.bloxdGa4MeasurementId
          });
        (0, yU.setUpGtag)(), window.gtag("config", yU.bloxdGa4MeasurementId), (0, yU.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const aU = XU.getAnalytics(pU),
          tU = {
            portal: QU.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        XU.setUserProperties(aU, tU);
        const gU = IU.initializeAuth(pU, {
          persistence: [IU.indexedDBLocalPersistence, IU.browserLocalPersistence, IU.browserSessionPersistence],
          popupRedirectResolver: (0, AU.isMobileApp)() ? void 0 : IU.browserPopupRedirectResolver
        });
        IU.useDeviceLanguage(gU);
        const kU = new IU.GoogleAuthProvider;
        kU.setCustomParameters({
          prompt: "select_account"
        });
        const GU = new IU.OAuthProvider(cU.h[cU.d.APPLE]),
          BU = new IU.OAuthProvider(cU.h[cU.d.MICROSOFT]);
        BU.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const ZU = {
          [cU.d.GOOGLE]: kU,
          [cU.d.APPLE]: GU,
          [cU.d.MICROSOFT]: BU
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((UU => {
          const XU = IU.onIdTokenChanged(gU, (zU => {
            XU(), UU()
          }))
        }));
        class RU extends NU {
          setUserProperties(UU) {
            XU.setUserProperties(aU, UU)
          }
          onIdTokenChanged(UU) {
            IU.onIdTokenChanged(gU, UU)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(UU) {
            var XU;
            const zU = await IU.signInWithPopup(gU, ZU[UU]);
            return null !== (XU = null === zU || void 0 === zU ? void 0 : zU.user) && void 0 !== XU ? XU : null
          }
          async getCurrentUser(UU) {
            const XU = gU.currentUser;
            if (!XU) return null;
            const {
              signInProvider: zU
            } = await XU.getIdTokenResult(!1);
            return zU === cU.h[UU] ? XU : null
          }
          async signOut(UU) {
            null !== await this.getCurrentUser(UU) && await IU.signOut(gU)
          }
        }
        async function PU(UU, XU) {
          const zU = await FU.d.request(`${UU}.${XU}`, {});
          if (null === zU) return null;
          const cU = "google" === UU ? IU.GoogleAuthProvider.credential(zU.idToken) : GU.credential({
            idToken: zU.idToken
          });
          return (await IU.signInWithCredential(gU, cU)).user
        }
        class WU extends NU {
          setUserProperties(UU) {
            XU.setUserProperties(aU, UU)
          }
          onIdTokenChanged(UU) {
            IU.onIdTokenChanged(gU, UU)
          }
          canSignIn(UU) {
            return null !== (0, oU.e)(UU)
          }
          async signInWithPopup(UU) {
            const XU = (0, oU.e)(UU);
            if (null === XU) return console.warn(`The app can't sign in with ${UU}; check canSignIn first`), null;
            try {
              return await PU(XU, "signIn")
            } catch (zU) {
              if (zU instanceof YU.d && "timeout" === zU.code) return null;
              throw (0, EU.reportClientError)("login_failed", zU, `app_${XU}`), zU
            }
          }
          async getCurrentUser(UU) {
            const XU = gU.currentUser;
            if (XU) {
              const {
                signInProvider: zU
              } = await XU.getIdTokenResult(!1);
              if (zU === cU.h[UU]) return XU
            }
            const zU = (0, oU.e)(UU);
            if (null === zU) return null;
            try {
              return await PU(zU, "getCurrentUser")
            } catch (yU) {
              return console.error(`Failed to get the current ${UU} user from the app:`, yU), null
            }
          }
          async signOut(UU) {
            const XU = (0, oU.e)(UU);
            null !== XU && FU.d.request(`${XU}.signOut`, {}).catch((XU => {
              console.error(`Failed to sign out of ${UU} in the app:`, XU)
            }));
            const zU = gU.currentUser;
            if (zU) {
              const {
                signInProvider: XU
              } = await zU.getIdTokenResult(!1);
              XU === cU.h[UU] && await IU.signOut(gU)
            }
          }
        }
        return (0, AU.isMobileApp)() ? (await FU.d.ready, new WU) : new RU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);