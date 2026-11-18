export const id = 132;
export const ids = [132];
export const modules = {
  7420: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      BloxdFirebaseSdk: () => gB
    });
    var VB = dB(1644),
      yB = dB(2465),
      pB = dB(101),
      lB = dB(95),
      JB = dB(1573),
      YB = dB(1794);
    class gB {
      constructor() {}
      static async setup() {
        try {
          return await gB.setupInternal()
        } catch (BB) {
          return console.error("Failed to setup Firebase SDK:", BB), null
        }
      }
      static async setupInternal() {
        const BB = await Promise.all([dB.e(246), dB.e(245)]).then((() => dB(39243))),
          TB = await Promise.all([dB.e(246), dB.e(247)]).then((() => dB(39264))),
          kB = await Promise.all([dB.e(246), dB.e(248)]).then((() => dB(39267))),
          LB = BB.initializeApp(oB);
        (0, yB.A)(), window.gtag("config", oB.measurementId), (0, yB.x)(), window.gtag("config", "AW-16469618203");
        const OB = TB.getAnalytics(LB),
          DB = {
            portal: pB.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        TB.setUserProperties(OB, DB);
        const uB = kB.getAuth();
        kB.useDeviceLanguage(uB);
        const HB = new kB.GoogleAuthProvider;
        HB.setCustomParameters({
          prompt: "select_account"
        });
        const EB = new kB.OAuthProvider(VB.j[VB.c.APPLE]),
          vB = new kB.OAuthProvider(VB.j[VB.c.MICROSOFT]);
        vB.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const mB = {
          [VB.c.GOOGLE]: HB,
          [VB.c.APPLE]: EB,
          [VB.c.MICROSOFT]: vB
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((BB => {
          const TB = kB.onIdTokenChanged(uB, (dB => {
            TB(), BB()
          }))
        }));
        class iB extends gB {
          setUserProperties(BB) {
            TB.setUserProperties(OB, BB)
          }
          onIdTokenChanged(BB) {
            kB.onIdTokenChanged(uB, BB)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(BB) {
            var TB;
            const dB = await kB.signInWithPopup(uB, mB[BB]);
            return null !== (TB = null === dB || void 0 === dB ? void 0 : dB.user) && void 0 !== TB ? TB : null
          }
          async getCurrentUser(BB) {
            const TB = uB.currentUser;
            if (!TB) return null;
            const {
              signInProvider: dB
            } = await TB.getIdTokenResult(!1);
            return dB === VB.j[BB] ? TB : null
          }
          async signOut(BB) {
            null !== await this.getCurrentUser(BB) && await kB.signOut(uB)
          }
        }
        async function NB(BB, TB) {
          const dB = await JB.d.request(`${BB}.${TB}`, {});
          if (null === dB) return null;
          const VB = "google" === BB ? kB.GoogleAuthProvider.credential(dB.idToken) : EB.credential({
            idToken: dB.idToken
          });
          return (await kB.signInWithCredential(uB, VB)).user
        }
        class tB extends gB {
          setUserProperties(BB) {
            TB.setUserProperties(OB, BB)
          }
          onIdTokenChanged(BB) {
            kB.onIdTokenChanged(uB, BB)
          }
          canSignIn(BB) {
            return null !== (0, YB.b)(BB)
          }
          async signInWithPopup(BB) {
            const TB = (0, YB.b)(BB);
            if (null === TB) return console.warn(`The app can't sign in with ${BB}; check canSignIn first`), null;
            try {
              return await NB(TB, "signIn")
            } catch (dB) {
              return console.error(`Failed to sign in with ${BB} in the app:`, dB), null
            }
          }
          async getCurrentUser(BB) {
            const TB = uB.currentUser;
            if (TB) {
              const {
                signInProvider: dB
              } = await TB.getIdTokenResult(!1);
              if (dB === VB.j[BB]) return TB
            }
            const dB = (0, YB.b)(BB);
            if (null === dB) return null;
            try {
              return await NB(dB, "getCurrentUser")
            } catch (yB) {
              return console.error(`Failed to get the current ${BB} user from the app:`, yB), null
            }
          }
          async signOut(BB) {
            const TB = (0, YB.b)(BB);
            null !== TB && JB.d.request(`${TB}.signOut`, {}).catch((TB => {
              console.error(`Failed to sign out of ${BB} in the app:`, TB)
            }));
            const dB = uB.currentUser;
            if (dB) {
              const {
                signInProvider: TB
              } = await dB.getIdTokenResult(!1);
              TB === VB.j[BB] && await kB.signOut(uB)
            }
          }
        }
        return (0, lB.isMobileApp)() ? (await JB.d.ready, new tB) : new iB
      }
    }
    const oB = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97",
      measurementId: yB.d
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);