export const id = 147;
export const ids = [147];
export const modules = {
  8222: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      BloxdFirebaseSdk: () => zB
    });
    var TB = ZB(1905),
      JB = ZB(3088),
      oB = ZB(118),
      GB = ZB(105),
      vB = ZB(1755),
      kB = ZB(2128);
    const cB = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var nB = ZB(3101),
      hB = ZB(1782);
    class zB {
      constructor() {}
      static async setup() {
        try {
          return await zB.setupInternal()
        } catch (BB) {
          return console.error("Failed to setup Firebase SDK:", BB), null
        }
      }
      static async setupInternal() {
        const BB = await Promise.all([ZB.e(270), ZB.e(269)]).then((() => ZB(40543))),
          IB = await Promise.all([ZB.e(270), ZB.e(271)]).then((() => ZB(40574))),
          FB = await Promise.all([ZB.e(270), ZB.e(272)]).then((() => ZB(40583))),
          NB = BB.initializeApp({
            ...cB,
            measurementId: JB.bloxdGa4MeasurementId
          });
        (0, JB.setUpGtag)(), window.gtag("config", JB.bloxdGa4MeasurementId), (0, JB.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const gB = IB.getAnalytics(NB),
          qB = {
            portal: oB.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        IB.setUserProperties(gB, qB);
        const yB = FB.initializeAuth(NB, {
          persistence: [FB.indexedDBLocalPersistence, FB.browserLocalPersistence, FB.browserSessionPersistence],
          popupRedirectResolver: (0, GB.isMobileApp)() ? void 0 : FB.browserPopupRedirectResolver
        });
        FB.useDeviceLanguage(yB);
        const UB = new FB.GoogleAuthProvider;
        UB.setCustomParameters({
          prompt: "select_account"
        });
        const WB = new FB.OAuthProvider(TB.h[TB.c.APPLE]),
          dB = new FB.OAuthProvider(TB.h[TB.c.MICROSOFT]);
        dB.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const CB = {
          [TB.c.GOOGLE]: UB,
          [TB.c.APPLE]: WB,
          [TB.c.MICROSOFT]: dB
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((BB => {
          const IB = FB.onIdTokenChanged(yB, (ZB => {
            IB(), BB()
          }))
        }));
        class QB extends zB {
          setUserProperties(BB) {
            IB.setUserProperties(gB, BB)
          }
          onIdTokenChanged(BB) {
            FB.onIdTokenChanged(yB, BB)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(BB) {
            var IB;
            const ZB = await FB.signInWithPopup(yB, CB[BB]);
            return null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.user) && void 0 !== IB ? IB : null
          }
          async getCurrentUser(BB) {
            const IB = yB.currentUser;
            if (!IB) return null;
            const {
              signInProvider: ZB
            } = await IB.getIdTokenResult(!1);
            return ZB === TB.h[BB] ? IB : null
          }
          async signOut(BB) {
            null !== await this.getCurrentUser(BB) && await FB.signOut(yB)
          }
        }
        async function sB(BB, IB) {
          const ZB = await vB.d.request(`${BB}.${IB}`, {});
          if (null === ZB) return null;
          const TB = "google" === BB ? FB.GoogleAuthProvider.credential(ZB.idToken) : WB.credential({
            idToken: ZB.idToken
          });
          return (await FB.signInWithCredential(yB, TB)).user
        }
        class wB extends zB {
          setUserProperties(BB) {
            IB.setUserProperties(gB, BB)
          }
          onIdTokenChanged(BB) {
            FB.onIdTokenChanged(yB, BB)
          }
          canSignIn(BB) {
            return null !== (0, kB.b)(BB)
          }
          async signInWithPopup(BB) {
            const IB = (0, kB.b)(BB);
            if (null === IB) return console.warn(`The app can't sign in with ${BB}; check canSignIn first`), null;
            try {
              return await sB(IB, "signIn")
            } catch (ZB) {
              if (ZB instanceof hB.e && "timeout" === ZB.code) return null;
              throw (0, nB.reportClientError)("login_failed", ZB, `app_${IB}`), ZB
            }
          }
          async getCurrentUser(BB) {
            const IB = yB.currentUser;
            if (IB) {
              const {
                signInProvider: ZB
              } = await IB.getIdTokenResult(!1);
              if (ZB === TB.h[BB]) return IB
            }
            const ZB = (0, kB.b)(BB);
            if (null === ZB) return null;
            try {
              return await sB(ZB, "getCurrentUser")
            } catch (JB) {
              return console.error(`Failed to get the current ${BB} user from the app:`, JB), null
            }
          }
          async signOut(BB) {
            const IB = (0, kB.b)(BB);
            null !== IB && vB.d.request(`${IB}.signOut`, {}).catch((IB => {
              console.error(`Failed to sign out of ${BB} in the app:`, IB)
            }));
            const ZB = yB.currentUser;
            if (ZB) {
              const {
                signInProvider: IB
              } = await ZB.getIdTokenResult(!1);
              IB === TB.h[BB] && await FB.signOut(yB)
            }
          }
        }
        return (0, GB.isMobileApp)() ? (await vB.d.ready, new wB) : new QB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);