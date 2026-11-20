export const id = 139;
export const ids = [139];
export const modules = {
  7707: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      BloxdFirebaseSdk: () => fb
    });
    var kb = sb(1788),
      Wb = sb(2697),
      ab = sb(131),
      Tb = sb(117),
      Ub = sb(1670),
      Ib = sb(1982);
    const Hb = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    class fb {
      constructor() {}
      static async setup() {
        try {
          return await fb.setupInternal()
        } catch (bb) {
          return console.error("Failed to setup Firebase SDK:", bb), null
        }
      }
      static async setupInternal() {
        const bb = await Promise.all([sb.e(256), sb.e(255)]).then((() => sb(39923))),
          cb = await Promise.all([sb.e(256), sb.e(257)]).then((() => sb(39953))),
          Mb = await Promise.all([sb.e(256), sb.e(258)]).then((() => sb(39956))),
          Xb = bb.initializeApp({
            ...Hb,
            measurementId: Wb.b
          });
        (0, Wb.C)(), window.gtag("config", Wb.b), (0, Wb.w)(), window.gtag("config", "AW-16469618203");
        const nb = cb.getAnalytics(Xb),
          mb = {
            portal: ab.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        cb.setUserProperties(nb, mb);
        const lb = Mb.getAuth();
        Mb.useDeviceLanguage(lb);
        const Qb = new Mb.GoogleAuthProvider;
        Qb.setCustomParameters({
          prompt: "select_account"
        });
        const eb = new Mb.OAuthProvider(kb.h[kb.c.APPLE]),
          Cb = new Mb.OAuthProvider(kb.h[kb.c.MICROSOFT]);
        Cb.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const Nb = {
          [kb.c.GOOGLE]: Qb,
          [kb.c.APPLE]: eb,
          [kb.c.MICROSOFT]: Cb
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((bb => {
          const cb = Mb.onIdTokenChanged(lb, (sb => {
            cb(), bb()
          }))
        }));
        class Vb extends fb {
          setUserProperties(bb) {
            cb.setUserProperties(nb, bb)
          }
          onIdTokenChanged(bb) {
            Mb.onIdTokenChanged(lb, bb)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(bb) {
            var cb;
            const sb = await Mb.signInWithPopup(lb, Nb[bb]);
            return null !== (cb = null === sb || void 0 === sb ? void 0 : sb.user) && void 0 !== cb ? cb : null
          }
          async getCurrentUser(bb) {
            const cb = lb.currentUser;
            if (!cb) return null;
            const {
              signInProvider: sb
            } = await cb.getIdTokenResult(!1);
            return sb === kb.h[bb] ? cb : null
          }
          async signOut(bb) {
            null !== await this.getCurrentUser(bb) && await Mb.signOut(lb)
          }
        }
        async function Lb(bb, cb) {
          const sb = await Ub.b.request(`${bb}.${cb}`, {});
          if (null === sb) return null;
          const kb = "google" === bb ? Mb.GoogleAuthProvider.credential(sb.idToken) : eb.credential({
            idToken: sb.idToken
          });
          return (await Mb.signInWithCredential(lb, kb)).user
        }
        class ub extends fb {
          setUserProperties(bb) {
            cb.setUserProperties(nb, bb)
          }
          onIdTokenChanged(bb) {
            Mb.onIdTokenChanged(lb, bb)
          }
          canSignIn(bb) {
            return null !== (0, Ib.c)(bb)
          }
          async signInWithPopup(bb) {
            const cb = (0, Ib.c)(bb);
            if (null === cb) return console.warn(`The app can't sign in with ${bb}; check canSignIn first`), null;
            try {
              return await Lb(cb, "signIn")
            } catch (sb) {
              return console.error(`Failed to sign in with ${bb} in the app:`, sb), null
            }
          }
          async getCurrentUser(bb) {
            const cb = lb.currentUser;
            if (cb) {
              const {
                signInProvider: sb
              } = await cb.getIdTokenResult(!1);
              if (sb === kb.h[bb]) return cb
            }
            const sb = (0, Ib.c)(bb);
            if (null === sb) return null;
            try {
              return await Lb(sb, "getCurrentUser")
            } catch (Wb) {
              return console.error(`Failed to get the current ${bb} user from the app:`, Wb), null
            }
          }
          async signOut(bb) {
            const cb = (0, Ib.c)(bb);
            null !== cb && Ub.b.request(`${cb}.signOut`, {}).catch((cb => {
              console.error(`Failed to sign out of ${bb} in the app:`, cb)
            }));
            const sb = lb.currentUser;
            if (sb) {
              const {
                signInProvider: cb
              } = await sb.getIdTokenResult(!1);
              cb === kb.h[bb] && await Mb.signOut(lb)
            }
          }
        }
        return (0, Tb.isMobileApp)() ? (await Ub.b.ready, new ub) : new Vb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);