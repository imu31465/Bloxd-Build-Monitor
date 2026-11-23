export const id = 145;
export const ids = [145];
export const modules = {
  8102: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      BloxdFirebaseSdk: () => NC
    });
    var QC = ZC(1762),
      wC = ZC(2909),
      bC = ZC(88),
      nC = ZC(77),
      fC = ZC(1609),
      oC = ZC(1944);
    const qC = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var FC = ZC(2927),
      WC = ZC(1633);
    class NC {
      constructor() {}
      static async setup() {
        try {
          return await NC.setupInternal()
        } catch (CC) {
          return console.error("Failed to setup Firebase SDK:", CC), null
        }
      }
      static async setupInternal() {
        const CC = await Promise.all([ZC.e(266), ZC.e(265)]).then((() => ZC(40325))),
          zC = await Promise.all([ZC.e(266), ZC.e(267)]).then((() => ZC(40357))),
          MC = await Promise.all([ZC.e(266), ZC.e(268)]).then((() => ZC(40364))),
          gC = CC.initializeApp({
            ...qC,
            measurementId: wC.d
          });
        (0, wC.F)(), window.gtag("config", wC.d), (0, wC.z)(), window.gtag("config", "AW-16469618203");
        const SC = zC.getAnalytics(gC),
          pC = {
            portal: bC.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        zC.setUserProperties(SC, pC);
        const PC = MC.initializeAuth(gC, {
          persistence: [MC.indexedDBLocalPersistence, MC.browserLocalPersistence, MC.browserSessionPersistence],
          popupRedirectResolver: (0, nC.isMobileApp)() ? void 0 : MC.browserPopupRedirectResolver
        });
        MC.useDeviceLanguage(PC);
        const GC = new MC.GoogleAuthProvider;
        GC.setCustomParameters({
          prompt: "select_account"
        });
        const RC = new MC.OAuthProvider(QC.k[QC.e.APPLE]),
          AC = new MC.OAuthProvider(QC.k[QC.e.MICROSOFT]);
        AC.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const xC = {
          [QC.e.GOOGLE]: GC,
          [QC.e.APPLE]: RC,
          [QC.e.MICROSOFT]: AC
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((CC => {
          const zC = MC.onIdTokenChanged(PC, (ZC => {
            zC(), CC()
          }))
        }));
        class JC extends NC {
          setUserProperties(CC) {
            zC.setUserProperties(SC, CC)
          }
          onIdTokenChanged(CC) {
            MC.onIdTokenChanged(PC, CC)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(CC) {
            var zC;
            const ZC = await MC.signInWithPopup(PC, xC[CC]);
            return null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.user) && void 0 !== zC ? zC : null
          }
          async getCurrentUser(CC) {
            const zC = PC.currentUser;
            if (!zC) return null;
            const {
              signInProvider: ZC
            } = await zC.getIdTokenResult(!1);
            return ZC === QC.k[CC] ? zC : null
          }
          async signOut(CC) {
            null !== await this.getCurrentUser(CC) && await MC.signOut(PC)
          }
        }
        async function IC(CC, zC) {
          const ZC = await fC.d.request(`${CC}.${zC}`, {});
          if (null === ZC) return null;
          const QC = "google" === CC ? MC.GoogleAuthProvider.credential(ZC.idToken) : RC.credential({
            idToken: ZC.idToken
          });
          return (await MC.signInWithCredential(PC, QC)).user
        }
        class iC extends NC {
          setUserProperties(CC) {
            zC.setUserProperties(SC, CC)
          }
          onIdTokenChanged(CC) {
            MC.onIdTokenChanged(PC, CC)
          }
          canSignIn(CC) {
            return null !== (0, oC.e)(CC)
          }
          async signInWithPopup(CC) {
            const zC = (0, oC.e)(CC);
            if (null === zC) return console.warn(`The app can't sign in with ${CC}; check canSignIn first`), null;
            try {
              return await IC(zC, "signIn")
            } catch (ZC) {
              if (ZC instanceof WC.e && "timeout" === ZC.code) return null;
              throw (0, FC.reportClientError)("login_failed", ZC, `app_${zC}`), ZC
            }
          }
          async getCurrentUser(CC) {
            const zC = PC.currentUser;
            if (zC) {
              const {
                signInProvider: ZC
              } = await zC.getIdTokenResult(!1);
              if (ZC === QC.k[CC]) return zC
            }
            const ZC = (0, oC.e)(CC);
            if (null === ZC) return null;
            try {
              return await IC(ZC, "getCurrentUser")
            } catch (wC) {
              return console.error(`Failed to get the current ${CC} user from the app:`, wC), null
            }
          }
          async signOut(CC) {
            const zC = (0, oC.e)(CC);
            null !== zC && fC.d.request(`${zC}.signOut`, {}).catch((zC => {
              console.error(`Failed to sign out of ${CC} in the app:`, zC)
            }));
            const ZC = PC.currentUser;
            if (ZC) {
              const {
                signInProvider: zC
              } = await ZC.getIdTokenResult(!1);
              zC === QC.k[CC] && await MC.signOut(PC)
            }
          }
        }
        return (0, nC.isMobileApp)() ? (await fC.d.ready, new iC) : new JC
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);