export const id = 140;
export const ids = [140];
export const modules = {
  7767: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      BloxdFirebaseSdk: () => ab
    });
    var Bb = hb(1727),
      Ob = hb(2712),
      Gb = hb(94),
      Ub = hb(86),
      Lb = hb(1593),
      Yb = hb(1926);
    const Sb = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    class ab {
      constructor() {}
      static async setup() {
        try {
          return await ab.setupInternal()
        } catch (bb) {
          return console.error("Failed to setup Firebase SDK:", bb), null
        }
      }
      static async setupInternal() {
        const bb = await Promise.all([hb.e(258), hb.e(257)]).then((() => hb(39953))),
          ub = await Promise.all([hb.e(258), hb.e(259)]).then((() => hb(39986))),
          Hb = await Promise.all([hb.e(258), hb.e(260)]).then((() => hb(39989))),
          wb = bb.initializeApp({
            ...Sb,
            measurementId: Ob.e
          });
        (0, Ob.A)(), window.gtag("config", Ob.e), (0, Ob.w)(), window.gtag("config", "AW-16469618203");
        const Zb = ub.getAnalytics(wb),
          Xb = {
            portal: Gb.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        ub.setUserProperties(Zb, Xb);
        const pb = Hb.initializeAuth(wb, {
          persistence: [Hb.indexedDBLocalPersistence, Hb.browserLocalPersistence, Hb.browserSessionPersistence],
          popupRedirectResolver: (0, Ub.isMobileApp)() ? void 0 : Hb.browserPopupRedirectResolver
        });
        Hb.useDeviceLanguage(pb);
        const ob = new Hb.GoogleAuthProvider;
        ob.setCustomParameters({
          prompt: "select_account"
        });
        const Ab = new Hb.OAuthProvider(Bb.g[Bb.b.APPLE]),
          lb = new Hb.OAuthProvider(Bb.g[Bb.b.MICROSOFT]);
        lb.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const Kb = {
          [Bb.b.GOOGLE]: ob,
          [Bb.b.APPLE]: Ab,
          [Bb.b.MICROSOFT]: lb
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((bb => {
          const ub = Hb.onIdTokenChanged(pb, (hb => {
            ub(), bb()
          }))
        }));
        class Wb extends ab {
          setUserProperties(bb) {
            ub.setUserProperties(Zb, bb)
          }
          onIdTokenChanged(bb) {
            Hb.onIdTokenChanged(pb, bb)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(bb) {
            var ub;
            const hb = await Hb.signInWithPopup(pb, Kb[bb]);
            return null !== (ub = null === hb || void 0 === hb ? void 0 : hb.user) && void 0 !== ub ? ub : null
          }
          async getCurrentUser(bb) {
            const ub = pb.currentUser;
            if (!ub) return null;
            const {
              signInProvider: hb
            } = await ub.getIdTokenResult(!1);
            return hb === Bb.g[bb] ? ub : null
          }
          async signOut(bb) {
            null !== await this.getCurrentUser(bb) && await Hb.signOut(pb)
          }
        }
        async function Cb(bb, ub) {
          const hb = await Lb.e.request(`${bb}.${ub}`, {});
          if (null === hb) return null;
          const Bb = "google" === bb ? Hb.GoogleAuthProvider.credential(hb.idToken) : Ab.credential({
            idToken: hb.idToken
          });
          return (await Hb.signInWithCredential(pb, Bb)).user
        }
        class db extends ab {
          setUserProperties(bb) {
            ub.setUserProperties(Zb, bb)
          }
          onIdTokenChanged(bb) {
            Hb.onIdTokenChanged(pb, bb)
          }
          canSignIn(bb) {
            return null !== (0, Yb.d)(bb)
          }
          async signInWithPopup(bb) {
            const ub = (0, Yb.d)(bb);
            if (null === ub) return console.warn(`The app can't sign in with ${bb}; check canSignIn first`), null;
            try {
              return await Cb(ub, "signIn")
            } catch (hb) {
              return console.error(`Failed to sign in with ${bb} in the app:`, hb), null
            }
          }
          async getCurrentUser(bb) {
            const ub = pb.currentUser;
            if (ub) {
              const {
                signInProvider: hb
              } = await ub.getIdTokenResult(!1);
              if (hb === Bb.g[bb]) return ub
            }
            const hb = (0, Yb.d)(bb);
            if (null === hb) return null;
            try {
              return await Cb(hb, "getCurrentUser")
            } catch (Ob) {
              return console.error(`Failed to get the current ${bb} user from the app:`, Ob), null
            }
          }
          async signOut(bb) {
            const ub = (0, Yb.d)(bb);
            null !== ub && Lb.e.request(`${ub}.signOut`, {}).catch((ub => {
              console.error(`Failed to sign out of ${bb} in the app:`, ub)
            }));
            const hb = pb.currentUser;
            if (hb) {
              const {
                signInProvider: ub
              } = await hb.getIdTokenResult(!1);
              ub === Bb.g[bb] && await Hb.signOut(pb)
            }
          }
        }
        return (0, Ub.isMobileApp)() ? (await Lb.e.ready, new db) : new Wb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);