export const id = 139;
export const ids = [139];
export const modules = {
  7777: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      BloxdFirebaseSdk: () => lv
    });
    var hv = Pv(1805),
      Sv = Pv(2702),
      ev = Pv(81),
      gv = Pv(73),
      pv = Pv(1657),
      dv = Pv(1991);
    const Nv = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    class lv {
      constructor() {}
      static async setup() {
        try {
          return await lv.setupInternal()
        } catch (vv) {
          return console.error("Failed to setup Firebase SDK:", vv), null
        }
      }
      static async setupInternal() {
        const vv = await Promise.all([Pv.e(258), Pv.e(257)]).then((() => Pv(39812))),
          zv = await Promise.all([Pv.e(258), Pv.e(259)]).then((() => Pv(39838))),
          Tv = await Promise.all([Pv.e(258), Pv.e(260)]).then((() => Pv(39840))),
          Wv = vv.initializeApp({
            ...Nv,
            measurementId: Sv.c
          });
        (0, Sv.L)(), window.gtag("config", Sv.c), (0, Sv.F)(), window.gtag("config", "AW-16469618203");
        const wv = zv.getAnalytics(Wv),
          av = {
            portal: ev.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        zv.setUserProperties(wv, av);
        const sv = Tv.getAuth();
        Tv.useDeviceLanguage(sv);
        const Cv = new Tv.GoogleAuthProvider;
        Cv.setCustomParameters({
          prompt: "select_account"
        });
        const iv = new Tv.OAuthProvider(hv.f[hv.b.APPLE]),
          cv = new Tv.OAuthProvider(hv.f[hv.b.MICROSOFT]);
        cv.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const Gv = {
          [hv.b.GOOGLE]: Cv,
          [hv.b.APPLE]: iv,
          [hv.b.MICROSOFT]: cv
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((vv => {
          const zv = Tv.onIdTokenChanged(sv, (Pv => {
            zv(), vv()
          }))
        }));
        class mv extends lv {
          setUserProperties(vv) {
            zv.setUserProperties(wv, vv)
          }
          onIdTokenChanged(vv) {
            Tv.onIdTokenChanged(sv, vv)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(vv) {
            var zv;
            const Pv = await Tv.signInWithPopup(sv, Gv[vv]);
            return null !== (zv = null === Pv || void 0 === Pv ? void 0 : Pv.user) && void 0 !== zv ? zv : null
          }
          async getCurrentUser(vv) {
            const zv = sv.currentUser;
            if (!zv) return null;
            const {
              signInProvider: Pv
            } = await zv.getIdTokenResult(!1);
            return Pv === hv.f[vv] ? zv : null
          }
          async signOut(vv) {
            null !== await this.getCurrentUser(vv) && await Tv.signOut(sv)
          }
        }
        async function jv(vv, zv) {
          const Pv = await pv.d.request(`${vv}.${zv}`, {});
          if (null === Pv) return null;
          const hv = "google" === vv ? Tv.GoogleAuthProvider.credential(Pv.idToken) : iv.credential({
            idToken: Pv.idToken
          });
          return (await Tv.signInWithCredential(sv, hv)).user
        }
        class fv extends lv {
          setUserProperties(vv) {
            zv.setUserProperties(wv, vv)
          }
          onIdTokenChanged(vv) {
            Tv.onIdTokenChanged(sv, vv)
          }
          canSignIn(vv) {
            return null !== (0, dv.b)(vv)
          }
          async signInWithPopup(vv) {
            const zv = (0, dv.b)(vv);
            if (null === zv) return console.warn(`The app can't sign in with ${vv}; check canSignIn first`), null;
            try {
              return await jv(zv, "signIn")
            } catch (Pv) {
              return console.error(`Failed to sign in with ${vv} in the app:`, Pv), null
            }
          }
          async getCurrentUser(vv) {
            const zv = sv.currentUser;
            if (zv) {
              const {
                signInProvider: Pv
              } = await zv.getIdTokenResult(!1);
              if (Pv === hv.f[vv]) return zv
            }
            const Pv = (0, dv.b)(vv);
            if (null === Pv) return null;
            try {
              return await jv(Pv, "getCurrentUser")
            } catch (Sv) {
              return console.error(`Failed to get the current ${vv} user from the app:`, Sv), null
            }
          }
          async signOut(vv) {
            const zv = (0, dv.b)(vv);
            null !== zv && pv.d.request(`${zv}.signOut`, {}).catch((zv => {
              console.error(`Failed to sign out of ${vv} in the app:`, zv)
            }));
            const Pv = sv.currentUser;
            if (Pv) {
              const {
                signInProvider: zv
              } = await Pv.getIdTokenResult(!1);
              zv === hv.f[vv] && await Tv.signOut(sv)
            }
          }
        }
        return (0, gv.isMobileApp)() ? (await pv.d.ready, new fv) : new mv
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);