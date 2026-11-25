export const id = 147;
export const ids = [147];
export const modules = {
  8132: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      BloxdFirebaseSdk: () => fG
    });
    var wG = ZG(1815),
      SG = ZG(2897),
      LG = ZG(86),
      yG = ZG(80),
      kG = ZG(1634),
      UG = ZG(2021);
    const YG = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var VG = ZG(2920),
      pG = ZG(1673);
    class fG {
      constructor() {}
      static async setup() {
        try {
          return await fG.setupInternal()
        } catch (GG) {
          return console.error("Failed to setup Firebase SDK:", GG), null
        }
      }
      static async setupInternal() {
        const GG = await Promise.all([ZG.e(270), ZG.e(269)]).then((() => ZG(40882))),
          bG = await Promise.all([ZG.e(270), ZG.e(271)]).then((() => ZG(40909))),
          QG = await Promise.all([ZG.e(270), ZG.e(272)]).then((() => ZG(40916))),
          KG = GG.initializeApp({
            ...YG,
            measurementId: SG.bloxdGa4MeasurementId
          });
        (0, SG.setUpGtag)(), window.gtag("config", SG.bloxdGa4MeasurementId), (0, SG.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const hG = bG.getAnalytics(KG),
          dG = {
            portal: LG.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        bG.setUserProperties(hG, dG);
        const JG = QG.initializeAuth(KG, {
          persistence: [QG.indexedDBLocalPersistence, QG.browserLocalPersistence, QG.browserSessionPersistence],
          popupRedirectResolver: (0, yG.isMobileApp)() ? void 0 : QG.browserPopupRedirectResolver
        });
        QG.useDeviceLanguage(JG);
        const rG = new QG.GoogleAuthProvider;
        rG.setCustomParameters({
          prompt: "select_account"
        });
        const zG = new QG.OAuthProvider(wG.f[wG.b.APPLE]),
          EG = new QG.OAuthProvider(wG.f[wG.b.MICROSOFT]);
        EG.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const oG = {
          [wG.b.GOOGLE]: rG,
          [wG.b.APPLE]: zG,
          [wG.b.MICROSOFT]: EG
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((GG => {
          const bG = QG.onIdTokenChanged(JG, (ZG => {
            bG(), GG()
          }))
        }));
        class XG extends fG {
          setUserProperties(GG) {
            bG.setUserProperties(hG, GG)
          }
          onIdTokenChanged(GG) {
            QG.onIdTokenChanged(JG, GG)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(GG) {
            var bG;
            const ZG = await QG.signInWithPopup(JG, oG[GG]);
            return null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.user) && void 0 !== bG ? bG : null
          }
          async getCurrentUser(GG) {
            const bG = JG.currentUser;
            if (!bG) return null;
            const {
              signInProvider: ZG
            } = await bG.getIdTokenResult(!1);
            return ZG === wG.f[GG] ? bG : null
          }
          async signOut(GG) {
            null !== await this.getCurrentUser(GG) && await QG.signOut(JG)
          }
        }
        async function uG(GG, bG) {
          const ZG = await kG.c.request(`${GG}.${bG}`, {});
          if (null === ZG) return null;
          const wG = "google" === GG ? QG.GoogleAuthProvider.credential(ZG.idToken) : zG.credential({
            idToken: ZG.idToken
          });
          return (await QG.signInWithCredential(JG, wG)).user
        }
        class iG extends fG {
          setUserProperties(GG) {
            bG.setUserProperties(hG, GG)
          }
          onIdTokenChanged(GG) {
            QG.onIdTokenChanged(JG, GG)
          }
          canSignIn(GG) {
            return null !== (0, UG.e)(GG)
          }
          async signInWithPopup(GG) {
            const bG = (0, UG.e)(GG);
            if (null === bG) return console.warn(`The app can't sign in with ${GG}; check canSignIn first`), null;
            try {
              return await uG(bG, "signIn")
            } catch (ZG) {
              if (ZG instanceof pG.b && "timeout" === ZG.code) return null;
              throw (0, VG.reportClientError)("login_failed", ZG, `app_${bG}`), ZG
            }
          }
          async getCurrentUser(GG) {
            const bG = JG.currentUser;
            if (bG) {
              const {
                signInProvider: ZG
              } = await bG.getIdTokenResult(!1);
              if (ZG === wG.f[GG]) return bG
            }
            const ZG = (0, UG.e)(GG);
            if (null === ZG) return null;
            try {
              return await uG(ZG, "getCurrentUser")
            } catch (SG) {
              return console.error(`Failed to get the current ${GG} user from the app:`, SG), null
            }
          }
          async signOut(GG) {
            const bG = (0, UG.e)(GG);
            null !== bG && kG.c.request(`${bG}.signOut`, {}).catch((bG => {
              console.error(`Failed to sign out of ${GG} in the app:`, bG)
            }));
            const ZG = JG.currentUser;
            if (ZG) {
              const {
                signInProvider: bG
              } = await ZG.getIdTokenResult(!1);
              bG === wG.f[GG] && await QG.signOut(JG)
            }
          }
        }
        return (0, yG.isMobileApp)() ? (await kG.c.ready, new iG) : new XG
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);