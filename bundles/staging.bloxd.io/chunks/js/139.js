export const id = 139;
export const ids = [139];
export const modules = {
  7666: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      BloxdFirebaseSdk: () => vb
    });
    var Ab = Ub(1725),
      Mb = Ub(2636),
      Tb = Ub(109),
      Eb = Ub(101),
      Yb = Ub(1605),
      Bb = Ub(1945);
    const eb = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    class vb {
      constructor() {}
      static async setup() {
        try {
          return await vb.setupInternal()
        } catch (bb) {
          return console.error("Failed to setup Firebase SDK:", bb), null
        }
      }
      static async setupInternal() {
        const bb = await Promise.all([Ub.e(256), Ub.e(255)]).then((() => Ub(39624))),
          ab = await Promise.all([Ub.e(256), Ub.e(257)]).then((() => Ub(39646))),
          Lb = await Promise.all([Ub.e(256), Ub.e(258)]).then((() => Ub(39653))),
          Pb = bb.initializeApp({
            ...eb,
            measurementId: Mb.b
          });
        (0, Mb.A)(), window.gtag("config", Mb.b), (0, Mb.v)(), window.gtag("config", "AW-16469618203");
        const Xb = ab.getAnalytics(Pb),
          jb = {
            portal: Tb.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        ab.setUserProperties(Xb, jb);
        const Rb = Lb.getAuth();
        Lb.useDeviceLanguage(Rb);
        const kb = new Lb.GoogleAuthProvider;
        kb.setCustomParameters({
          prompt: "select_account"
        });
        const yb = new Lb.OAuthProvider(Ab.j[Ab.e.APPLE]),
          Zb = new Lb.OAuthProvider(Ab.j[Ab.e.MICROSOFT]);
        Zb.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const Db = {
          [Ab.e.GOOGLE]: kb,
          [Ab.e.APPLE]: yb,
          [Ab.e.MICROSOFT]: Zb
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((bb => {
          const ab = Lb.onIdTokenChanged(Rb, (Ub => {
            ab(), bb()
          }))
        }));
        class zb extends vb {
          setUserProperties(bb) {
            ab.setUserProperties(Xb, bb)
          }
          onIdTokenChanged(bb) {
            Lb.onIdTokenChanged(Rb, bb)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(bb) {
            var ab;
            const Ub = await Lb.signInWithPopup(Rb, Db[bb]);
            return null !== (ab = null === Ub || void 0 === Ub ? void 0 : Ub.user) && void 0 !== ab ? ab : null
          }
          async getCurrentUser(bb) {
            const ab = Rb.currentUser;
            if (!ab) return null;
            const {
              signInProvider: Ub
            } = await ab.getIdTokenResult(!1);
            return Ub === Ab.j[bb] ? ab : null
          }
          async signOut(bb) {
            null !== await this.getCurrentUser(bb) && await Lb.signOut(Rb)
          }
        }
        async function xb(bb, ab) {
          const Ub = await Yb.d.request(`${bb}.${ab}`, {});
          if (null === Ub) return null;
          const Ab = "google" === bb ? Lb.GoogleAuthProvider.credential(Ub.idToken) : yb.credential({
            idToken: Ub.idToken
          });
          return (await Lb.signInWithCredential(Rb, Ab)).user
        }
        class ib extends vb {
          setUserProperties(bb) {
            ab.setUserProperties(Xb, bb)
          }
          onIdTokenChanged(bb) {
            Lb.onIdTokenChanged(Rb, bb)
          }
          canSignIn(bb) {
            return null !== (0, Bb.d)(bb)
          }
          async signInWithPopup(bb) {
            const ab = (0, Bb.d)(bb);
            if (null === ab) return console.warn(`The app can't sign in with ${bb}; check canSignIn first`), null;
            try {
              return await xb(ab, "signIn")
            } catch (Ub) {
              return console.error(`Failed to sign in with ${bb} in the app:`, Ub), null
            }
          }
          async getCurrentUser(bb) {
            const ab = Rb.currentUser;
            if (ab) {
              const {
                signInProvider: Ub
              } = await ab.getIdTokenResult(!1);
              if (Ub === Ab.j[bb]) return ab
            }
            const Ub = (0, Bb.d)(bb);
            if (null === Ub) return null;
            try {
              return await xb(Ub, "getCurrentUser")
            } catch (Mb) {
              return console.error(`Failed to get the current ${bb} user from the app:`, Mb), null
            }
          }
          async signOut(bb) {
            const ab = (0, Bb.d)(bb);
            null !== ab && Yb.d.request(`${ab}.signOut`, {}).catch((ab => {
              console.error(`Failed to sign out of ${bb} in the app:`, ab)
            }));
            const Ub = Rb.currentUser;
            if (Ub) {
              const {
                signInProvider: ab
              } = await Ub.getIdTokenResult(!1);
              ab === Ab.j[bb] && await Lb.signOut(Rb)
            }
          }
        }
        return (0, Eb.isMobileApp)() ? (await Yb.d.ready, new ib) : new zb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);