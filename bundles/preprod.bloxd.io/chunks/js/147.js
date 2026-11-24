export const id = 147;
export const ids = [147];
export const modules = {
  8220: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      BloxdFirebaseSdk: () => Pp
    });
    var Op = cp(1860),
      op = cp(3003),
      Ip = cp(108),
      Sp = cp(104),
      xp = cp(1705),
      Lp = cp(2080);
    const Yp = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var Dp = cp(3025),
      Ap = cp(1742);
    class Pp {
      constructor() {}
      static async setup() {
        try {
          return await Pp.setupInternal()
        } catch (pp) {
          return console.error("Failed to setup Firebase SDK:", pp), null
        }
      }
      static async setupInternal() {
        const pp = await Promise.all([cp.e(270), cp.e(269)]).then((() => cp(40682))),
          ip = await Promise.all([cp.e(270), cp.e(271)]).then((() => cp(40713))),
          Wp = await Promise.all([cp.e(270), cp.e(272)]).then((() => cp(40721))),
          yp = pp.initializeApp({
            ...Yp,
            measurementId: op.bloxdGa4MeasurementId
          });
        (0, op.setUpGtag)(), window.gtag("config", op.bloxdGa4MeasurementId), (0, op.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const Up = ip.getAnalytics(yp),
          wp = {
            portal: Ip.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        ip.setUserProperties(Up, wp);
        const vp = Wp.initializeAuth(yp, {
          persistence: [Wp.indexedDBLocalPersistence, Wp.browserLocalPersistence, Wp.browserSessionPersistence],
          popupRedirectResolver: (0, Sp.isMobileApp)() ? void 0 : Wp.browserPopupRedirectResolver
        });
        Wp.useDeviceLanguage(vp);
        const tp = new Wp.GoogleAuthProvider;
        tp.setCustomParameters({
          prompt: "select_account"
        });
        const Hp = new Wp.OAuthProvider(Op.g[Op.b.APPLE]),
          dp = new Wp.OAuthProvider(Op.g[Op.b.MICROSOFT]);
        dp.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const ep = {
          [Op.b.GOOGLE]: tp,
          [Op.b.APPLE]: Hp,
          [Op.b.MICROSOFT]: dp
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((pp => {
          const ip = Wp.onIdTokenChanged(vp, (cp => {
            ip(), pp()
          }))
        }));
        class jp extends Pp {
          setUserProperties(pp) {
            ip.setUserProperties(Up, pp)
          }
          onIdTokenChanged(pp) {
            Wp.onIdTokenChanged(vp, pp)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(pp) {
            var ip;
            const cp = await Wp.signInWithPopup(vp, ep[pp]);
            return null !== (ip = null === cp || void 0 === cp ? void 0 : cp.user) && void 0 !== ip ? ip : null
          }
          async getCurrentUser(pp) {
            const ip = vp.currentUser;
            if (!ip) return null;
            const {
              signInProvider: cp
            } = await ip.getIdTokenResult(!1);
            return cp === Op.g[pp] ? ip : null
          }
          async signOut(pp) {
            null !== await this.getCurrentUser(pp) && await Wp.signOut(vp)
          }
        }
        async function kp(pp, ip) {
          const cp = await xp.b.request(`${pp}.${ip}`, {});
          if (null === cp) return null;
          const Op = "google" === pp ? Wp.GoogleAuthProvider.credential(cp.idToken) : Hp.credential({
            idToken: cp.idToken
          });
          return (await Wp.signInWithCredential(vp, Op)).user
        }
        class mp extends Pp {
          setUserProperties(pp) {
            ip.setUserProperties(Up, pp)
          }
          onIdTokenChanged(pp) {
            Wp.onIdTokenChanged(vp, pp)
          }
          canSignIn(pp) {
            return null !== (0, Lp.b)(pp)
          }
          async signInWithPopup(pp) {
            const ip = (0, Lp.b)(pp);
            if (null === ip) return console.warn(`The app can't sign in with ${pp}; check canSignIn first`), null;
            try {
              return await kp(ip, "signIn")
            } catch (cp) {
              if (cp instanceof Ap.d && "timeout" === cp.code) return null;
              throw (0, Dp.reportClientError)("login_failed", cp, `app_${ip}`), cp
            }
          }
          async getCurrentUser(pp) {
            const ip = vp.currentUser;
            if (ip) {
              const {
                signInProvider: cp
              } = await ip.getIdTokenResult(!1);
              if (cp === Op.g[pp]) return ip
            }
            const cp = (0, Lp.b)(pp);
            if (null === cp) return null;
            try {
              return await kp(cp, "getCurrentUser")
            } catch (op) {
              return console.error(`Failed to get the current ${pp} user from the app:`, op), null
            }
          }
          async signOut(pp) {
            const ip = (0, Lp.b)(pp);
            null !== ip && xp.b.request(`${ip}.signOut`, {}).catch((ip => {
              console.error(`Failed to sign out of ${pp} in the app:`, ip)
            }));
            const cp = vp.currentUser;
            if (cp) {
              const {
                signInProvider: ip
              } = await cp.getIdTokenResult(!1);
              ip === Op.g[pp] && await Wp.signOut(vp)
            }
          }
        }
        return (0, Sp.isMobileApp)() ? (await xp.b.ready, new mp) : new jp
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);