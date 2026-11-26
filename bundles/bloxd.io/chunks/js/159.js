export const id = 159;
export const ids = [159];
export const modules = {
  7243: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      BloxdFirebaseSdk: () => zB
    });
    var YB = GB(1938),
      DB = GB(3262),
      QB = GB(98),
      oB = GB(92),
      jB = GB(1748),
      yB = GB(2149);
    const JB = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var MB = GB(1856),
      PB = GB(1784);
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
        const BB = await Promise.all([GB.e(297), GB.e(296)]).then((() => GB(41506))),
          OB = await Promise.all([GB.e(297), GB.e(298)]).then((() => GB(41533))),
          lB = await Promise.all([GB.e(297), GB.e(299)]).then((() => GB(41540))),
          pB = BB.initializeApp({
            ...JB,
            measurementId: DB.bloxdGa4MeasurementId
          });
        (0, DB.setUpGtag)(), window.gtag("config", DB.bloxdGa4MeasurementId), (0, DB.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const qB = OB.getAnalytics(pB),
          ZB = {
            portal: QB.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        OB.setUserProperties(qB, ZB);
        const NB = lB.initializeAuth(pB, {
          persistence: [lB.indexedDBLocalPersistence, lB.browserLocalPersistence, lB.browserSessionPersistence],
          popupRedirectResolver: (0, oB.isMobileApp)() ? void 0 : lB.browserPopupRedirectResolver
        });
        lB.useDeviceLanguage(NB);
        const RB = new lB.GoogleAuthProvider;
        RB.setCustomParameters({
          prompt: "select_account"
        });
        const WB = new lB.OAuthProvider(YB.i[YB.b.APPLE]),
          AB = new lB.OAuthProvider(YB.i[YB.b.MICROSOFT]);
        AB.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const VB = {
          [YB.b.GOOGLE]: RB,
          [YB.b.APPLE]: WB,
          [YB.b.MICROSOFT]: AB
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((BB => {
          const OB = lB.onIdTokenChanged(NB, (GB => {
            OB(), BB()
          }))
        }));
        class SB extends zB {
          setUserProperties(BB) {
            OB.setUserProperties(qB, BB)
          }
          onIdTokenChanged(BB) {
            lB.onIdTokenChanged(NB, BB)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(BB) {
            var OB;
            const GB = await lB.signInWithPopup(NB, VB[BB]);
            return null !== (OB = null === GB || void 0 === GB ? void 0 : GB.user) && void 0 !== OB ? OB : null
          }
          async getCurrentUser(BB) {
            const OB = NB.currentUser;
            if (!OB) return null;
            const {
              signInProvider: GB
            } = await OB.getIdTokenResult(!1);
            return GB === YB.i[BB] ? OB : null
          }
          async signOut(BB) {
            null !== await this.getCurrentUser(BB) && await lB.signOut(NB)
          }
        }
        async function nB(BB, OB) {
          const GB = await jB.e.request(`${BB}.${OB}`, {});
          if (null === GB) return null;
          const YB = "google" === BB ? lB.GoogleAuthProvider.credential(GB.idToken) : WB.credential({
            idToken: GB.idToken
          });
          return (await lB.signInWithCredential(NB, YB)).user
        }
        class UB extends zB {
          setUserProperties(BB) {
            OB.setUserProperties(qB, BB)
          }
          onIdTokenChanged(BB) {
            lB.onIdTokenChanged(NB, BB)
          }
          canSignIn(BB) {
            return null !== (0, yB.e)(BB)
          }
          async signInWithPopup(BB) {
            const OB = (0, yB.e)(BB);
            if (null === OB) return console.warn(`The app can't sign in with ${BB}; check canSignIn first`), null;
            try {
              return await nB(OB, "signIn")
            } catch (GB) {
              if (GB instanceof PB.b && "timeout" === GB.code) return null;
              throw (0, MB.reportClientError)("login_failed", GB, `app_${OB}`), GB
            }
          }
          async getCurrentUser(BB) {
            const OB = NB.currentUser;
            if (OB) {
              const {
                signInProvider: GB
              } = await OB.getIdTokenResult(!1);
              if (GB === YB.i[BB]) return OB
            }
            const GB = (0, yB.e)(BB);
            if (null === GB) return null;
            try {
              return await nB(GB, "getCurrentUser")
            } catch (DB) {
              return console.error(`Failed to get the current ${BB} user from the app:`, DB), null
            }
          }
          async signOut(BB) {
            const OB = (0, yB.e)(BB);
            null !== OB && jB.e.request(`${OB}.signOut`, {}).catch((OB => {
              console.error(`Failed to sign out of ${BB} in the app:`, OB)
            }));
            const GB = NB.currentUser;
            if (GB) {
              const {
                signInProvider: OB
              } = await GB.getIdTokenResult(!1);
              OB === YB.i[BB] && await lB.signOut(NB)
            }
          }
        }
        return (0, oB.isMobileApp)() ? (await jB.e.ready, new UB) : new SB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);