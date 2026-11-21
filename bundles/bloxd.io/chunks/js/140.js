export const id = 140;
export const ids = [140];
export const modules = {
  7889: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      BloxdFirebaseSdk: () => uQ
    });
    var LQ = wQ(1821),
      qQ = wQ(2845),
      oQ = wQ(106),
      DQ = wQ(96),
      kQ = wQ(1694),
      vQ = wQ(2004);
    const mQ = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    class uQ {
      constructor() {}
      static async setup() {
        try {
          return await uQ.setupInternal()
        } catch (QQ) {
          return console.error("Failed to setup Firebase SDK:", QQ), null
        }
      }
      static async setupInternal() {
        const QQ = await Promise.all([wQ.e(258), wQ.e(257)]).then((() => wQ(39927))),
          FQ = await Promise.all([wQ.e(258), wQ.e(259)]).then((() => wQ(39963))),
          HQ = await Promise.all([wQ.e(258), wQ.e(260)]).then((() => wQ(39965))),
          bQ = QQ.initializeApp({
            ...mQ,
            measurementId: qQ.d
          });
        (0, qQ.F)(), window.gtag("config", qQ.d), (0, qQ.B)(), window.gtag("config", "AW-16469618203");
        const YQ = FQ.getAnalytics(bQ),
          xQ = {
            portal: oQ.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        FQ.setUserProperties(YQ, xQ);
        const AQ = HQ.initializeAuth(bQ, {
          persistence: [HQ.indexedDBLocalPersistence, HQ.browserLocalPersistence, HQ.browserSessionPersistence],
          popupRedirectResolver: (0, DQ.isMobileApp)() ? void 0 : HQ.browserPopupRedirectResolver
        });
        HQ.useDeviceLanguage(AQ);
        const tQ = new HQ.GoogleAuthProvider;
        tQ.setCustomParameters({
          prompt: "select_account"
        });
        const eQ = new HQ.OAuthProvider(LQ.i[LQ.d.APPLE]),
          MQ = new HQ.OAuthProvider(LQ.i[LQ.d.MICROSOFT]);
        MQ.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const GQ = {
          [LQ.d.GOOGLE]: tQ,
          [LQ.d.APPLE]: eQ,
          [LQ.d.MICROSOFT]: MQ
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((QQ => {
          const FQ = HQ.onIdTokenChanged(AQ, (wQ => {
            FQ(), QQ()
          }))
        }));
        class pQ extends uQ {
          setUserProperties(QQ) {
            FQ.setUserProperties(YQ, QQ)
          }
          onIdTokenChanged(QQ) {
            HQ.onIdTokenChanged(AQ, QQ)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(QQ) {
            var FQ;
            const wQ = await HQ.signInWithPopup(AQ, GQ[QQ]);
            return null !== (FQ = null === wQ || void 0 === wQ ? void 0 : wQ.user) && void 0 !== FQ ? FQ : null
          }
          async getCurrentUser(QQ) {
            const FQ = AQ.currentUser;
            if (!FQ) return null;
            const {
              signInProvider: wQ
            } = await FQ.getIdTokenResult(!1);
            return wQ === LQ.i[QQ] ? FQ : null
          }
          async signOut(QQ) {
            null !== await this.getCurrentUser(QQ) && await HQ.signOut(AQ)
          }
        }
        async function cQ(QQ, FQ) {
          const wQ = await kQ.d.request(`${QQ}.${FQ}`, {});
          if (null === wQ) return null;
          const LQ = "google" === QQ ? HQ.GoogleAuthProvider.credential(wQ.idToken) : eQ.credential({
            idToken: wQ.idToken
          });
          return (await HQ.signInWithCredential(AQ, LQ)).user
        }
        class CQ extends uQ {
          setUserProperties(QQ) {
            FQ.setUserProperties(YQ, QQ)
          }
          onIdTokenChanged(QQ) {
            HQ.onIdTokenChanged(AQ, QQ)
          }
          canSignIn(QQ) {
            return null !== (0, vQ.b)(QQ)
          }
          async signInWithPopup(QQ) {
            const FQ = (0, vQ.b)(QQ);
            if (null === FQ) return console.warn(`The app can't sign in with ${QQ}; check canSignIn first`), null;
            try {
              return await cQ(FQ, "signIn")
            } catch (wQ) {
              return console.error(`Failed to sign in with ${QQ} in the app:`, wQ), null
            }
          }
          async getCurrentUser(QQ) {
            const FQ = AQ.currentUser;
            if (FQ) {
              const {
                signInProvider: wQ
              } = await FQ.getIdTokenResult(!1);
              if (wQ === LQ.i[QQ]) return FQ
            }
            const wQ = (0, vQ.b)(QQ);
            if (null === wQ) return null;
            try {
              return await cQ(wQ, "getCurrentUser")
            } catch (qQ) {
              return console.error(`Failed to get the current ${QQ} user from the app:`, qQ), null
            }
          }
          async signOut(QQ) {
            const FQ = (0, vQ.b)(QQ);
            null !== FQ && kQ.d.request(`${FQ}.signOut`, {}).catch((FQ => {
              console.error(`Failed to sign out of ${QQ} in the app:`, FQ)
            }));
            const wQ = AQ.currentUser;
            if (wQ) {
              const {
                signInProvider: FQ
              } = await wQ.getIdTokenResult(!1);
              FQ === LQ.i[QQ] && await HQ.signOut(AQ)
            }
          }
        }
        return (0, DQ.isMobileApp)() ? (await kQ.d.ready, new CQ) : new pQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);