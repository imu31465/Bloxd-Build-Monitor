export const id = 159;
export const ids = [159];
export const modules = {
  7327: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      BloxdFirebaseSdk: () => ke
    });
    var ye = He(1892),
      be = He(3142),
      Me = He(103),
      Ke = He(97),
      Ue = He(1682),
      Fe = He(2095);
    const Je = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var oe = He(1814),
      Re = He(1720);
    class ke {
      constructor() {}
      static async setup() {
        try {
          return await ke.setupInternal()
        } catch (ee) {
          return console.error("Failed to setup Firebase SDK:", ee), null
        }
      }
      static async setupInternal() {
        const ee = await Promise.all([He.e(297), He.e(296)]).then((() => He(41621))),
          ie = await Promise.all([He.e(297), He.e(298)]).then((() => He(41649))),
          qe = await Promise.all([He.e(297), He.e(299)]).then((() => He(41654))),
          fe = ee.initializeApp({
            ...Je,
            measurementId: be.bloxdGa4MeasurementId
          });
        (0, be.setUpGtag)(), window.gtag("config", be.bloxdGa4MeasurementId), (0, be.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const Te = ie.getAnalytics(fe),
          pe = {
            portal: Me.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        ie.setUserProperties(Te, pe);
        const Xe = qe.initializeAuth(fe, {
          persistence: [qe.indexedDBLocalPersistence, qe.browserLocalPersistence, qe.browserSessionPersistence],
          popupRedirectResolver: (0, Ke.isMobileApp)() ? void 0 : qe.browserPopupRedirectResolver
        });
        qe.useDeviceLanguage(Xe);
        const ze = new qe.GoogleAuthProvider;
        ze.setCustomParameters({
          prompt: "select_account"
        });
        const Be = new qe.OAuthProvider(ye.f[ye.c.APPLE]),
          Ee = new qe.OAuthProvider(ye.f[ye.c.MICROSOFT]);
        Ee.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const ge = {
          [ye.c.GOOGLE]: ze,
          [ye.c.APPLE]: Be,
          [ye.c.MICROSOFT]: Ee
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((ee => {
          const ie = qe.onIdTokenChanged(Xe, (He => {
            ie(), ee()
          }))
        }));
        class Oe extends ke {
          setUserProperties(ee) {
            ie.setUserProperties(Te, ee)
          }
          onIdTokenChanged(ee) {
            qe.onIdTokenChanged(Xe, ee)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(ee) {
            var ie;
            const He = await qe.signInWithPopup(Xe, ge[ee]);
            return null !== (ie = null === He || void 0 === He ? void 0 : He.user) && void 0 !== ie ? ie : null
          }
          async getCurrentUser(ee) {
            const ie = Xe.currentUser;
            if (!ie) return null;
            const {
              signInProvider: He
            } = await ie.getIdTokenResult(!1);
            return He === ye.f[ee] ? ie : null
          }
          async signOut(ee) {
            null !== await this.getCurrentUser(ee) && await qe.signOut(Xe)
          }
        }
        async function de(ee, ie) {
          const He = await Ue.c.request(`${ee}.${ie}`, {});
          if (null === He) return null;
          const ye = "google" === ee ? qe.GoogleAuthProvider.credential(He.idToken) : Be.credential({
            idToken: He.idToken
          });
          return (await qe.signInWithCredential(Xe, ye)).user
        }
        class We extends ke {
          setUserProperties(ee) {
            ie.setUserProperties(Te, ee)
          }
          onIdTokenChanged(ee) {
            qe.onIdTokenChanged(Xe, ee)
          }
          canSignIn(ee) {
            return null !== (0, Fe.b)(ee)
          }
          async signInWithPopup(ee) {
            const ie = (0, Fe.b)(ee);
            if (null === ie) return console.warn(`The app can't sign in with ${ee}; check canSignIn first`), null;
            try {
              return await de(ie, "signIn")
            } catch (He) {
              if (He instanceof Re.d && "timeout" === He.code) return null;
              throw (0, oe.reportClientError)("login_failed", He, `app_${ie}`), He
            }
          }
          async getCurrentUser(ee) {
            const ie = Xe.currentUser;
            if (ie) {
              const {
                signInProvider: He
              } = await ie.getIdTokenResult(!1);
              if (He === ye.f[ee]) return ie
            }
            const He = (0, Fe.b)(ee);
            if (null === He) return null;
            try {
              return await de(He, "getCurrentUser")
            } catch (be) {
              return console.error(`Failed to get the current ${ee} user from the app:`, be), null
            }
          }
          async signOut(ee) {
            const ie = (0, Fe.b)(ee);
            null !== ie && Ue.c.request(`${ie}.signOut`, {}).catch((ie => {
              console.error(`Failed to sign out of ${ee} in the app:`, ie)
            }));
            const He = Xe.currentUser;
            if (He) {
              const {
                signInProvider: ie
              } = await He.getIdTokenResult(!1);
              ie === ye.f[ee] && await qe.signOut(Xe)
            }
          }
        }
        return (0, Ke.isMobileApp)() ? (await Ue.c.ready, new We) : new Oe
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);