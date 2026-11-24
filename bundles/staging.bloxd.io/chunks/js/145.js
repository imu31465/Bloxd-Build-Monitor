export const id = 145;
export const ids = [145];
export const modules = {
  8251: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      BloxdFirebaseSdk: () => kS
    });
    var tS = gS(1953),
      bS = gS(3067),
      XS = gS(113),
      xS = gS(104),
      NS = gS(1792),
      qS = gS(2162);
    const uS = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var IS = gS(3083),
      fS = gS(1822);
    class kS {
      constructor() {}
      static async setup() {
        try {
          return await kS.setupInternal()
        } catch (SS) {
          return console.error("Failed to setup Firebase SDK:", SS), null
        }
      }
      static async setupInternal() {
        const SS = await Promise.all([gS.e(266), gS.e(265)]).then((() => gS(40535))),
          HS = await Promise.all([gS.e(266), gS.e(267)]).then((() => gS(40560))),
          aS = await Promise.all([gS.e(266), gS.e(268)]).then((() => gS(40563))),
          KS = SS.initializeApp({
            ...uS,
            measurementId: bS.e
          });
        (0, bS.w)(), window.gtag("config", bS.e), (0, bS.t)(), window.gtag("config", "AW-16469618203");
        const jS = HS.getAnalytics(KS),
          GS = {
            portal: XS.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        HS.setUserProperties(jS, GS);
        const CS = aS.initializeAuth(KS, {
          persistence: [aS.indexedDBLocalPersistence, aS.browserLocalPersistence, aS.browserSessionPersistence],
          popupRedirectResolver: (0, xS.isMobileApp)() ? void 0 : aS.browserPopupRedirectResolver
        });
        aS.useDeviceLanguage(CS);
        const nS = new aS.GoogleAuthProvider;
        nS.setCustomParameters({
          prompt: "select_account"
        });
        const PS = new aS.OAuthProvider(tS.k[tS.e.APPLE]),
          QS = new aS.OAuthProvider(tS.k[tS.e.MICROSOFT]);
        QS.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const DS = {
          [tS.e.GOOGLE]: nS,
          [tS.e.APPLE]: PS,
          [tS.e.MICROSOFT]: QS
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((SS => {
          const HS = aS.onIdTokenChanged(CS, (gS => {
            HS(), SS()
          }))
        }));
        class wS extends kS {
          setUserProperties(SS) {
            HS.setUserProperties(jS, SS)
          }
          onIdTokenChanged(SS) {
            aS.onIdTokenChanged(CS, SS)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(SS) {
            var HS;
            const gS = await aS.signInWithPopup(CS, DS[SS]);
            return null !== (HS = null === gS || void 0 === gS ? void 0 : gS.user) && void 0 !== HS ? HS : null
          }
          async getCurrentUser(SS) {
            const HS = CS.currentUser;
            if (!HS) return null;
            const {
              signInProvider: gS
            } = await HS.getIdTokenResult(!1);
            return gS === tS.k[SS] ? HS : null
          }
          async signOut(SS) {
            null !== await this.getCurrentUser(SS) && await aS.signOut(CS)
          }
        }
        async function hS(SS, HS) {
          const gS = await NS.d.request(`${SS}.${HS}`, {});
          if (null === gS) return null;
          const tS = "google" === SS ? aS.GoogleAuthProvider.credential(gS.idToken) : PS.credential({
            idToken: gS.idToken
          });
          return (await aS.signInWithCredential(CS, tS)).user
        }
        class ZS extends kS {
          setUserProperties(SS) {
            HS.setUserProperties(jS, SS)
          }
          onIdTokenChanged(SS) {
            aS.onIdTokenChanged(CS, SS)
          }
          canSignIn(SS) {
            return null !== (0, qS.c)(SS)
          }
          async signInWithPopup(SS) {
            const HS = (0, qS.c)(SS);
            if (null === HS) return console.warn(`The app can't sign in with ${SS}; check canSignIn first`), null;
            try {
              return await hS(HS, "signIn")
            } catch (gS) {
              if (gS instanceof fS.e && "timeout" === gS.code) return null;
              throw (0, IS.reportClientError)("login_failed", gS, `app_${HS}`), gS
            }
          }
          async getCurrentUser(SS) {
            const HS = CS.currentUser;
            if (HS) {
              const {
                signInProvider: gS
              } = await HS.getIdTokenResult(!1);
              if (gS === tS.k[SS]) return HS
            }
            const gS = (0, qS.c)(SS);
            if (null === gS) return null;
            try {
              return await hS(gS, "getCurrentUser")
            } catch (bS) {
              return console.error(`Failed to get the current ${SS} user from the app:`, bS), null
            }
          }
          async signOut(SS) {
            const HS = (0, qS.c)(SS);
            null !== HS && NS.d.request(`${HS}.signOut`, {}).catch((HS => {
              console.error(`Failed to sign out of ${SS} in the app:`, HS)
            }));
            const gS = CS.currentUser;
            if (gS) {
              const {
                signInProvider: HS
              } = await gS.getIdTokenResult(!1);
              HS === tS.k[SS] && await aS.signOut(CS)
            }
          }
        }
        return (0, xS.isMobileApp)() ? (await NS.d.ready, new ZS) : new wS
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);