export const id = 145;
export const ids = [145];
export const modules = {
  7996: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      BloxdFirebaseSdk: () => Em
    });
    var hm = fm(1835),
      Am = fm(2903),
      am = fm(112),
      xm = fm(105),
      wm = fm(1681),
      Dm = fm(2027);
    const im = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var Rm = fm(2932),
      pm = fm(1696);
    class Em {
      constructor() {}
      static async setup() {
        try {
          return await Em.setupInternal()
        } catch (mm) {
          return console.error("Failed to setup Firebase SDK:", mm), null
        }
      }
      static async setupInternal() {
        const mm = await Promise.all([fm.e(266), fm.e(265)]).then((() => fm(40604))),
          Tm = await Promise.all([fm.e(266), fm.e(267)]).then((() => fm(40620))),
          om = await Promise.all([fm.e(266), fm.e(268)]).then((() => fm(40628))),
          Om = mm.initializeApp({
            ...im,
            measurementId: Am.e
          });
        (0, Am.L)(), window.gtag("config", Am.e), (0, Am.F)(), window.gtag("config", "AW-16469618203");
        const Ym = Tm.getAnalytics(Om),
          qm = {
            portal: am.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        Tm.setUserProperties(Ym, qm);
        const jm = om.initializeAuth(Om, {
          persistence: [om.indexedDBLocalPersistence, om.browserLocalPersistence, om.browserSessionPersistence],
          popupRedirectResolver: (0, xm.isMobileApp)() ? void 0 : om.browserPopupRedirectResolver
        });
        om.useDeviceLanguage(jm);
        const Vm = new om.GoogleAuthProvider;
        Vm.setCustomParameters({
          prompt: "select_account"
        });
        const Im = new om.OAuthProvider(hm.i[hm.e.APPLE]),
          Km = new om.OAuthProvider(hm.i[hm.e.MICROSOFT]);
        Km.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const Qm = {
          [hm.e.GOOGLE]: Vm,
          [hm.e.APPLE]: Im,
          [hm.e.MICROSOFT]: Km
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((mm => {
          const Tm = om.onIdTokenChanged(jm, (fm => {
            Tm(), mm()
          }))
        }));
        class nm extends Em {
          setUserProperties(mm) {
            Tm.setUserProperties(Ym, mm)
          }
          onIdTokenChanged(mm) {
            om.onIdTokenChanged(jm, mm)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(mm) {
            var Tm;
            const fm = await om.signInWithPopup(jm, Qm[mm]);
            return null !== (Tm = null === fm || void 0 === fm ? void 0 : fm.user) && void 0 !== Tm ? Tm : null
          }
          async getCurrentUser(mm) {
            const Tm = jm.currentUser;
            if (!Tm) return null;
            const {
              signInProvider: fm
            } = await Tm.getIdTokenResult(!1);
            return fm === hm.i[mm] ? Tm : null
          }
          async signOut(mm) {
            null !== await this.getCurrentUser(mm) && await om.signOut(jm)
          }
        }
        async function Jm(mm, Tm) {
          const fm = await wm.e.request(`${mm}.${Tm}`, {});
          if (null === fm) return null;
          const hm = "google" === mm ? om.GoogleAuthProvider.credential(fm.idToken) : Im.credential({
            idToken: fm.idToken
          });
          return (await om.signInWithCredential(jm, hm)).user
        }
        class cm extends Em {
          setUserProperties(mm) {
            Tm.setUserProperties(Ym, mm)
          }
          onIdTokenChanged(mm) {
            om.onIdTokenChanged(jm, mm)
          }
          canSignIn(mm) {
            return null !== (0, Dm.d)(mm)
          }
          async signInWithPopup(mm) {
            const Tm = (0, Dm.d)(mm);
            if (null === Tm) return console.warn(`The app can't sign in with ${mm}; check canSignIn first`), null;
            try {
              return await Jm(Tm, "signIn")
            } catch (fm) {
              if (fm instanceof pm.e && "timeout" === fm.code) return null;
              throw (0, Rm.reportClientError)("login_failed", fm, `app_${Tm}`), fm
            }
          }
          async getCurrentUser(mm) {
            const Tm = jm.currentUser;
            if (Tm) {
              const {
                signInProvider: fm
              } = await Tm.getIdTokenResult(!1);
              if (fm === hm.i[mm]) return Tm
            }
            const fm = (0, Dm.d)(mm);
            if (null === fm) return null;
            try {
              return await Jm(fm, "getCurrentUser")
            } catch (Am) {
              return console.error(`Failed to get the current ${mm} user from the app:`, Am), null
            }
          }
          async signOut(mm) {
            const Tm = (0, Dm.d)(mm);
            null !== Tm && wm.e.request(`${Tm}.signOut`, {}).catch((Tm => {
              console.error(`Failed to sign out of ${mm} in the app:`, Tm)
            }));
            const fm = jm.currentUser;
            if (fm) {
              const {
                signInProvider: Tm
              } = await fm.getIdTokenResult(!1);
              Tm === hm.i[mm] && await om.signOut(jm)
            }
          }
        }
        return (0, xm.isMobileApp)() ? (await wm.e.ready, new cm) : new nm
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);