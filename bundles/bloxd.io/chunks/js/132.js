export const id = 132;
export const ids = [132];
export const modules = {
  7412: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      BloxdFirebaseSdk: () => jJ
    });
    var FJ = ZJ(1663),
      UJ = ZJ(2473),
      eJ = ZJ(87),
      XJ = ZJ(80),
      AJ = ZJ(1572),
      qJ = ZJ(1825);
    class jJ {
      constructor() {}
      static async setup() {
        try {
          return await jJ.setupInternal()
        } catch (JJ) {
          return console.error("Failed to setup Firebase SDK:", JJ), null
        }
      }
      static async setupInternal() {
        const JJ = await Promise.all([ZJ.e(246), ZJ.e(245)]).then((() => ZJ(39265))),
          cJ = await Promise.all([ZJ.e(246), ZJ.e(247)]).then((() => ZJ(39289))),
          hJ = await Promise.all([ZJ.e(246), ZJ.e(248)]).then((() => ZJ(39296))),
          DJ = JJ.initializeApp(YJ);
        (0, UJ.H)(), window.gtag("config", YJ.measurementId), (0, UJ.C)(), window.gtag("config", "AW-16469618203");
        const sJ = cJ.getAnalytics(DJ),
          nJ = {
            portal: eJ.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        cJ.setUserProperties(sJ, nJ);
        const GJ = hJ.getAuth();
        hJ.useDeviceLanguage(GJ);
        const fJ = new hJ.GoogleAuthProvider;
        fJ.setCustomParameters({
          prompt: "select_account"
        });
        const xJ = new hJ.OAuthProvider(FJ.k[FJ.e.APPLE]),
          rJ = new hJ.OAuthProvider(FJ.k[FJ.e.MICROSOFT]);
        rJ.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const vJ = {
          [FJ.e.GOOGLE]: fJ,
          [FJ.e.APPLE]: xJ,
          [FJ.e.MICROSOFT]: rJ
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((JJ => {
          const cJ = hJ.onIdTokenChanged(GJ, (ZJ => {
            cJ(), JJ()
          }))
        }));
        class mJ extends jJ {
          setUserProperties(JJ) {
            cJ.setUserProperties(sJ, JJ)
          }
          onIdTokenChanged(JJ) {
            hJ.onIdTokenChanged(GJ, JJ)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(JJ) {
            var cJ;
            const ZJ = await hJ.signInWithPopup(GJ, vJ[JJ]);
            return null !== (cJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.user) && void 0 !== cJ ? cJ : null
          }
          async getCurrentUser(JJ) {
            const cJ = GJ.currentUser;
            if (!cJ) return null;
            const {
              signInProvider: ZJ
            } = await cJ.getIdTokenResult(!1);
            return ZJ === FJ.k[JJ] ? cJ : null
          }
          async signOut(JJ) {
            null !== await this.getCurrentUser(JJ) && await hJ.signOut(GJ)
          }
        }
        async function QJ(JJ, cJ) {
          const ZJ = await AJ.d.request(`${JJ}.${cJ}`, {});
          if (null === ZJ) return null;
          const FJ = "google" === JJ ? hJ.GoogleAuthProvider.credential(ZJ.idToken) : xJ.credential({
            idToken: ZJ.idToken
          });
          return (await hJ.signInWithCredential(GJ, FJ)).user
        }
        class EJ extends jJ {
          setUserProperties(JJ) {
            cJ.setUserProperties(sJ, JJ)
          }
          onIdTokenChanged(JJ) {
            hJ.onIdTokenChanged(GJ, JJ)
          }
          canSignIn(JJ) {
            return null !== (0, qJ.e)(JJ)
          }
          async signInWithPopup(JJ) {
            const cJ = (0, qJ.e)(JJ);
            if (null === cJ) return console.warn(`The app can't sign in with ${JJ}; check canSignIn first`), null;
            try {
              return await QJ(cJ, "signIn")
            } catch (ZJ) {
              return console.error(`Failed to sign in with ${JJ} in the app:`, ZJ), null
            }
          }
          async getCurrentUser(JJ) {
            const cJ = GJ.currentUser;
            if (cJ) {
              const {
                signInProvider: ZJ
              } = await cJ.getIdTokenResult(!1);
              if (ZJ === FJ.k[JJ]) return cJ
            }
            const ZJ = (0, qJ.e)(JJ);
            if (null === ZJ) return null;
            try {
              return await QJ(ZJ, "getCurrentUser")
            } catch (UJ) {
              return console.error(`Failed to get the current ${JJ} user from the app:`, UJ), null
            }
          }
          async signOut(JJ) {
            const cJ = (0, qJ.e)(JJ);
            null !== cJ && AJ.d.request(`${cJ}.signOut`, {}).catch((cJ => {
              console.error(`Failed to sign out of ${JJ} in the app:`, cJ)
            }));
            const ZJ = GJ.currentUser;
            if (ZJ) {
              const {
                signInProvider: cJ
              } = await ZJ.getIdTokenResult(!1);
              cJ === FJ.k[JJ] && await hJ.signOut(GJ)
            }
          }
        }
        return (0, XJ.isMobileApp)() ? (await AJ.d.ready, new EJ) : new mJ
      }
    }
    const YJ = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97",
      measurementId: UJ.e
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);