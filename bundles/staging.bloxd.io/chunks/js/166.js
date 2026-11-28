export const id = 166;
export const ids = [166];
export const modules = {
  7642: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      BloxdFirebaseSdk: () => od
    });
    var Wd = md(1988),
      Fd = md(3986),
      Rd = md(118),
      Xd = md(107),
      Kd = md(1822),
      hd = md(2197);
    const vd = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var Qd = md(1916),
      td = md(1856);
    class od {
      constructor() {}
      static async setup() {
        try {
          return await od.setupInternal()
        } catch (dd) {
          return console.error("Failed to setup Firebase SDK:", dd), null
        }
      }
      static async setupInternal() {
        const dd = await Promise.all([md.e(304), md.e(303)]).then((() => md(42449))),
          Od = await Promise.all([md.e(304), md.e(305)]).then((() => md(42475))),
          Nd = await Promise.all([md.e(304), md.e(306)]).then((() => md(42479))),
          qd = dd.initializeApp({
            ...vd,
            measurementId: Fd.bloxdGa4MeasurementId
          });
        (0, Fd.setUpGtag)(), window.gtag("config", Fd.bloxdGa4MeasurementId), (0, Fd.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const Hd = Od.getAnalytics(qd),
          yd = {
            portal: Rd.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        Od.setUserProperties(Hd, yd);
        const bd = Nd.initializeAuth(qd, {
          persistence: [Nd.indexedDBLocalPersistence, Nd.browserLocalPersistence, Nd.browserSessionPersistence],
          popupRedirectResolver: (0, Xd.isMobileApp)() ? void 0 : Nd.browserPopupRedirectResolver
        });
        Nd.useDeviceLanguage(bd);
        const Td = new Nd.GoogleAuthProvider;
        Td.setCustomParameters({
          prompt: "select_account"
        });
        const pd = new Nd.OAuthProvider(Wd.l[Wd.e.APPLE]),
          Yd = new Nd.OAuthProvider(Wd.l[Wd.e.MICROSOFT]);
        Yd.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const gd = {
          [Wd.e.GOOGLE]: Td,
          [Wd.e.APPLE]: pd,
          [Wd.e.MICROSOFT]: Yd
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((dd => {
          const Od = Nd.onIdTokenChanged(bd, (md => {
            Od(), dd()
          }))
        }));
        class wd extends od {
          setUserProperties(dd) {
            Od.setUserProperties(Hd, dd)
          }
          onIdTokenChanged(dd) {
            Nd.onIdTokenChanged(bd, dd)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(dd) {
            var Od;
            const md = await Nd.signInWithPopup(bd, gd[dd]);
            return null !== (Od = null === md || void 0 === md ? void 0 : md.user) && void 0 !== Od ? Od : null
          }
          async getCurrentUser(dd) {
            const Od = bd.currentUser;
            if (!Od) return null;
            const {
              signInProvider: md
            } = await Od.getIdTokenResult(!1);
            return md === Wd.l[dd] ? Od : null
          }
          async signOut(dd) {
            null !== await this.getCurrentUser(dd) && await Nd.signOut(bd)
          }
        }
        async function Ed(dd, Od) {
          const md = await Kd.c.request(`${dd}.${Od}`, {});
          if (null === md) return null;
          const Wd = "google" === dd ? Nd.GoogleAuthProvider.credential(md.idToken) : pd.credential({
            idToken: md.idToken
          });
          return (await Nd.signInWithCredential(bd, Wd)).user
        }
        class Jd extends od {
          setUserProperties(dd) {
            Od.setUserProperties(Hd, dd)
          }
          onIdTokenChanged(dd) {
            Nd.onIdTokenChanged(bd, dd)
          }
          canSignIn(dd) {
            return null !== (0, hd.e)(dd)
          }
          async signInWithPopup(dd) {
            const Od = (0, hd.e)(dd);
            if (null === Od) return console.warn(`The app can't sign in with ${dd}; check canSignIn first`), null;
            try {
              return await Ed(Od, "signIn")
            } catch (md) {
              if (md instanceof td.c && "timeout" === md.code) return null;
              throw (0, Qd.reportClientError)("login_failed", md, `app_${Od}`), md
            }
          }
          async getCurrentUser(dd) {
            const Od = bd.currentUser;
            if (Od) {
              const {
                signInProvider: md
              } = await Od.getIdTokenResult(!1);
              if (md === Wd.l[dd]) return Od
            }
            const md = (0, hd.e)(dd);
            if (null === md) return null;
            try {
              return await Ed(md, "getCurrentUser")
            } catch (Fd) {
              return console.error(`Failed to get the current ${dd} user from the app:`, Fd), null
            }
          }
          async signOut(dd) {
            const Od = (0, hd.e)(dd);
            null !== Od && Kd.c.request(`${Od}.signOut`, {}).catch((Od => {
              console.error(`Failed to sign out of ${dd} in the app:`, Od)
            }));
            const md = bd.currentUser;
            if (md) {
              const {
                signInProvider: Od
              } = await md.getIdTokenResult(!1);
              Od === Wd.l[dd] && await Nd.signOut(bd)
            }
          }
        }
        return (0, Xd.isMobileApp)() ? (await Kd.c.ready, new Jd) : new wd
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);