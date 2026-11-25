export const id = 149;
export const ids = [149];
export const modules = {
  8455: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      BloxdFirebaseSdk: () => rQ
    });
    var wQ = XQ(1898),
      qQ = XQ(3158),
      TQ = XQ(121),
      zQ = XQ(105),
      sQ = XQ(1747),
      FQ = XQ(2115);
    const PQ = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var gQ = XQ(3176),
      JQ = XQ(1776);
    class rQ {
      constructor() {}
      static async setup() {
        try {
          return await rQ.setupInternal()
        } catch (QQ) {
          return console.error("Failed to setup Firebase SDK:", QQ), null
        }
      }
      static async setupInternal() {
        const QQ = await Promise.all([XQ.e(274), XQ.e(273)]).then((() => XQ(40746))),
          WQ = await Promise.all([XQ.e(274), XQ.e(275)]).then((() => XQ(40773))),
          IQ = await Promise.all([XQ.e(274), XQ.e(276)]).then((() => XQ(40779))),
          jQ = QQ.initializeApp({
            ...PQ,
            measurementId: qQ.bloxdGa4MeasurementId
          });
        (0, qQ.setUpGtag)(), window.gtag("config", qQ.bloxdGa4MeasurementId), (0, qQ.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const BQ = WQ.getAnalytics(jQ),
          yQ = {
            portal: TQ.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        WQ.setUserProperties(BQ, yQ);
        const VQ = IQ.initializeAuth(jQ, {
          persistence: [IQ.indexedDBLocalPersistence, IQ.browserLocalPersistence, IQ.browserSessionPersistence],
          popupRedirectResolver: (0, zQ.isMobileApp)() ? void 0 : IQ.browserPopupRedirectResolver
        });
        IQ.useDeviceLanguage(VQ);
        const DQ = new IQ.GoogleAuthProvider;
        DQ.setCustomParameters({
          prompt: "select_account"
        });
        const pQ = new IQ.OAuthProvider(wQ.i[wQ.d.APPLE]),
          GQ = new IQ.OAuthProvider(wQ.i[wQ.d.MICROSOFT]);
        GQ.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const UQ = {
          [wQ.d.GOOGLE]: DQ,
          [wQ.d.APPLE]: pQ,
          [wQ.d.MICROSOFT]: GQ
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((QQ => {
          const WQ = IQ.onIdTokenChanged(VQ, (XQ => {
            WQ(), QQ()
          }))
        }));
        class bQ extends rQ {
          setUserProperties(QQ) {
            WQ.setUserProperties(BQ, QQ)
          }
          onIdTokenChanged(QQ) {
            IQ.onIdTokenChanged(VQ, QQ)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(QQ) {
            var WQ;
            const XQ = await IQ.signInWithPopup(VQ, UQ[QQ]);
            return null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.user) && void 0 !== WQ ? WQ : null
          }
          async getCurrentUser(QQ) {
            const WQ = VQ.currentUser;
            if (!WQ) return null;
            const {
              signInProvider: XQ
            } = await WQ.getIdTokenResult(!1);
            return XQ === wQ.i[QQ] ? WQ : null
          }
          async signOut(QQ) {
            null !== await this.getCurrentUser(QQ) && await IQ.signOut(VQ)
          }
        }
        async function vQ(QQ, WQ) {
          const XQ = await sQ.e.request(`${QQ}.${WQ}`, {});
          if (null === XQ) return null;
          const wQ = "google" === QQ ? IQ.GoogleAuthProvider.credential(XQ.idToken) : pQ.credential({
            idToken: XQ.idToken
          });
          return (await IQ.signInWithCredential(VQ, wQ)).user
        }
        class dQ extends rQ {
          setUserProperties(QQ) {
            WQ.setUserProperties(BQ, QQ)
          }
          onIdTokenChanged(QQ) {
            IQ.onIdTokenChanged(VQ, QQ)
          }
          canSignIn(QQ) {
            return null !== (0, FQ.c)(QQ)
          }
          async signInWithPopup(QQ) {
            const WQ = (0, FQ.c)(QQ);
            if (null === WQ) return console.warn(`The app can't sign in with ${QQ}; check canSignIn first`), null;
            try {
              return await vQ(WQ, "signIn")
            } catch (XQ) {
              if (XQ instanceof JQ.c && "timeout" === XQ.code) return null;
              throw (0, gQ.reportClientError)("login_failed", XQ, `app_${WQ}`), XQ
            }
          }
          async getCurrentUser(QQ) {
            const WQ = VQ.currentUser;
            if (WQ) {
              const {
                signInProvider: XQ
              } = await WQ.getIdTokenResult(!1);
              if (XQ === wQ.i[QQ]) return WQ
            }
            const XQ = (0, FQ.c)(QQ);
            if (null === XQ) return null;
            try {
              return await vQ(XQ, "getCurrentUser")
            } catch (qQ) {
              return console.error(`Failed to get the current ${QQ} user from the app:`, qQ), null
            }
          }
          async signOut(QQ) {
            const WQ = (0, FQ.c)(QQ);
            null !== WQ && sQ.e.request(`${WQ}.signOut`, {}).catch((WQ => {
              console.error(`Failed to sign out of ${QQ} in the app:`, WQ)
            }));
            const XQ = VQ.currentUser;
            if (XQ) {
              const {
                signInProvider: WQ
              } = await XQ.getIdTokenResult(!1);
              WQ === wQ.i[QQ] && await IQ.signOut(VQ)
            }
          }
        }
        return (0, zQ.isMobileApp)() ? (await sQ.e.ready, new dQ) : new bQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);