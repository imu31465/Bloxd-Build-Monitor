export const id = 147;
export const ids = [147];
export const modules = {
  8048: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      BloxdFirebaseSdk: () => rB
    });
    var QB = zB(1886),
      nB = zB(3015),
      dB = zB(121),
      IB = zB(106),
      NB = zB(1725),
      uB = zB(2105);
    const UB = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var aB = zB(3036),
      pB = zB(1754);
    class rB {
      constructor() {}
      static async setup() {
        try {
          return await rB.setupInternal()
        } catch (BB) {
          return console.error("Failed to setup Firebase SDK:", BB), null
        }
      }
      static async setupInternal() {
        const BB = await Promise.all([zB.e(270), zB.e(269)]).then((() => zB(40594))),
          jB = await Promise.all([zB.e(270), zB.e(271)]).then((() => zB(40625))),
          sB = await Promise.all([zB.e(270), zB.e(272)]).then((() => zB(40634))),
          JB = BB.initializeApp({
            ...UB,
            measurementId: nB.bloxdGa4MeasurementId
          });
        (0, nB.setUpGtag)(), window.gtag("config", nB.bloxdGa4MeasurementId), (0, nB.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const mB = jB.getAnalytics(JB),
          yB = {
            portal: dB.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        jB.setUserProperties(mB, yB);
        const kB = sB.initializeAuth(JB, {
          persistence: [sB.indexedDBLocalPersistence, sB.browserLocalPersistence, sB.browserSessionPersistence],
          popupRedirectResolver: (0, IB.isMobileApp)() ? void 0 : sB.browserPopupRedirectResolver
        });
        sB.useDeviceLanguage(kB);
        const GB = new sB.GoogleAuthProvider;
        GB.setCustomParameters({
          prompt: "select_account"
        });
        const LB = new sB.OAuthProvider(QB.h[QB.c.APPLE]),
          gB = new sB.OAuthProvider(QB.h[QB.c.MICROSOFT]);
        gB.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const tB = {
          [QB.c.GOOGLE]: GB,
          [QB.c.APPLE]: LB,
          [QB.c.MICROSOFT]: gB
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((BB => {
          const jB = sB.onIdTokenChanged(kB, (zB => {
            jB(), BB()
          }))
        }));
        class SB extends rB {
          setUserProperties(BB) {
            jB.setUserProperties(mB, BB)
          }
          onIdTokenChanged(BB) {
            sB.onIdTokenChanged(kB, BB)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(BB) {
            var jB;
            const zB = await sB.signInWithPopup(kB, tB[BB]);
            return null !== (jB = null === zB || void 0 === zB ? void 0 : zB.user) && void 0 !== jB ? jB : null
          }
          async getCurrentUser(BB) {
            const jB = kB.currentUser;
            if (!jB) return null;
            const {
              signInProvider: zB
            } = await jB.getIdTokenResult(!1);
            return zB === QB.h[BB] ? jB : null
          }
          async signOut(BB) {
            null !== await this.getCurrentUser(BB) && await sB.signOut(kB)
          }
        }
        async function MB(BB, jB) {
          const zB = await NB.c.request(`${BB}.${jB}`, {});
          if (null === zB) return null;
          const QB = "google" === BB ? sB.GoogleAuthProvider.credential(zB.idToken) : LB.credential({
            idToken: zB.idToken
          });
          return (await sB.signInWithCredential(kB, QB)).user
        }
        class EB extends rB {
          setUserProperties(BB) {
            jB.setUserProperties(mB, BB)
          }
          onIdTokenChanged(BB) {
            sB.onIdTokenChanged(kB, BB)
          }
          canSignIn(BB) {
            return null !== (0, uB.b)(BB)
          }
          async signInWithPopup(BB) {
            const jB = (0, uB.b)(BB);
            if (null === jB) return console.warn(`The app can't sign in with ${BB}; check canSignIn first`), null;
            try {
              return await MB(jB, "signIn")
            } catch (zB) {
              if (zB instanceof pB.b && "timeout" === zB.code) return null;
              throw (0, aB.reportClientError)("login_failed", zB, `app_${jB}`), zB
            }
          }
          async getCurrentUser(BB) {
            const jB = kB.currentUser;
            if (jB) {
              const {
                signInProvider: zB
              } = await jB.getIdTokenResult(!1);
              if (zB === QB.h[BB]) return jB
            }
            const zB = (0, uB.b)(BB);
            if (null === zB) return null;
            try {
              return await MB(zB, "getCurrentUser")
            } catch (nB) {
              return console.error(`Failed to get the current ${BB} user from the app:`, nB), null
            }
          }
          async signOut(BB) {
            const jB = (0, uB.b)(BB);
            null !== jB && NB.c.request(`${jB}.signOut`, {}).catch((jB => {
              console.error(`Failed to sign out of ${BB} in the app:`, jB)
            }));
            const zB = kB.currentUser;
            if (zB) {
              const {
                signInProvider: jB
              } = await zB.getIdTokenResult(!1);
              jB === QB.h[BB] && await sB.signOut(kB)
            }
          }
        }
        return (0, IB.isMobileApp)() ? (await NB.c.ready, new EB) : new SB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);