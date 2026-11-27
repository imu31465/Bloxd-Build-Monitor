export const id = 166;
export const ids = [166];
export const modules = {
  7840: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      BloxdFirebaseSdk: () => wR
    });
    var yR = GR(2046),
      tR = GR(4053),
      uR = GR(112),
      ZR = GR(103),
      qR = GR(1879),
      iR = GR(2261);
    const fR = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var VR = GR(1972),
      KR = GR(1916);
    class wR {
      constructor() {}
      static async setup() {
        try {
          return await wR.setupInternal()
        } catch (RR) {
          return console.error("Failed to setup Firebase SDK:", RR), null
        }
      }
      static async setupInternal() {
        const RR = await Promise.all([GR.e(303), GR.e(302)]).then((() => GR(42036))),
          JR = await Promise.all([GR.e(303), GR.e(304)]).then((() => GR(42054))),
          rR = await Promise.all([GR.e(303), GR.e(305)]).then((() => GR(42062))),
          eR = RR.initializeApp({
            ...fR,
            measurementId: tR.bloxdGa4MeasurementId
          });
        (0, tR.setUpGtag)(), window.gtag("config", tR.bloxdGa4MeasurementId), (0, tR.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const aR = JR.getAnalytics(eR),
          LR = {
            portal: uR.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        JR.setUserProperties(aR, LR);
        const nR = rR.initializeAuth(eR, {
          persistence: [rR.indexedDBLocalPersistence, rR.browserLocalPersistence, rR.browserSessionPersistence],
          popupRedirectResolver: (0, ZR.isMobileApp)() ? void 0 : rR.browserPopupRedirectResolver
        });
        rR.useDeviceLanguage(nR);
        const UR = new rR.GoogleAuthProvider;
        UR.setCustomParameters({
          prompt: "select_account"
        });
        const WR = new rR.OAuthProvider(yR.j[yR.e.APPLE]),
          AR = new rR.OAuthProvider(yR.j[yR.e.MICROSOFT]);
        AR.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const CR = {
          [yR.e.GOOGLE]: UR,
          [yR.e.APPLE]: WR,
          [yR.e.MICROSOFT]: AR
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((RR => {
          const JR = rR.onIdTokenChanged(nR, (GR => {
            JR(), RR()
          }))
        }));
        class XR extends wR {
          setUserProperties(RR) {
            JR.setUserProperties(aR, RR)
          }
          onIdTokenChanged(RR) {
            rR.onIdTokenChanged(nR, RR)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(RR) {
            var JR;
            const GR = await rR.signInWithPopup(nR, CR[RR]);
            return null !== (JR = null === GR || void 0 === GR ? void 0 : GR.user) && void 0 !== JR ? JR : null
          }
          async getCurrentUser(RR) {
            const JR = nR.currentUser;
            if (!JR) return null;
            const {
              signInProvider: GR
            } = await JR.getIdTokenResult(!1);
            return GR === yR.j[RR] ? JR : null
          }
          async signOut(RR) {
            null !== await this.getCurrentUser(RR) && await rR.signOut(nR)
          }
        }
        async function MR(RR, JR) {
          const GR = await qR.c.request(`${RR}.${JR}`, {});
          if (null === GR) return null;
          const yR = "google" === RR ? rR.GoogleAuthProvider.credential(GR.idToken) : WR.credential({
            idToken: GR.idToken
          });
          return (await rR.signInWithCredential(nR, yR)).user
        }
        class BR extends wR {
          setUserProperties(RR) {
            JR.setUserProperties(aR, RR)
          }
          onIdTokenChanged(RR) {
            rR.onIdTokenChanged(nR, RR)
          }
          canSignIn(RR) {
            return null !== (0, iR.d)(RR)
          }
          async signInWithPopup(RR) {
            const JR = (0, iR.d)(RR);
            if (null === JR) return console.warn(`The app can't sign in with ${RR}; check canSignIn first`), null;
            try {
              return await MR(JR, "signIn")
            } catch (GR) {
              if (GR instanceof KR.b && "timeout" === GR.code) return null;
              throw (0, VR.reportClientError)("login_failed", GR, `app_${JR}`), GR
            }
          }
          async getCurrentUser(RR) {
            const JR = nR.currentUser;
            if (JR) {
              const {
                signInProvider: GR
              } = await JR.getIdTokenResult(!1);
              if (GR === yR.j[RR]) return JR
            }
            const GR = (0, iR.d)(RR);
            if (null === GR) return null;
            try {
              return await MR(GR, "getCurrentUser")
            } catch (tR) {
              return console.error(`Failed to get the current ${RR} user from the app:`, tR), null
            }
          }
          async signOut(RR) {
            const JR = (0, iR.d)(RR);
            null !== JR && qR.c.request(`${JR}.signOut`, {}).catch((JR => {
              console.error(`Failed to sign out of ${RR} in the app:`, JR)
            }));
            const GR = nR.currentUser;
            if (GR) {
              const {
                signInProvider: JR
              } = await GR.getIdTokenResult(!1);
              JR === yR.j[RR] && await rR.signOut(nR)
            }
          }
        }
        return (0, ZR.isMobileApp)() ? (await qR.c.ready, new BR) : new XR
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);