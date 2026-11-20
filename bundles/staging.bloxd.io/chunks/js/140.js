export const id = 140;
export const ids = [140];
export const modules = {
  7990: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      BloxdFirebaseSdk: () => uq
    });
    var Yq = gq(1812),
      lq = gq(2834),
      Oq = gq(106),
      mq = gq(96),
      xq = gq(1677),
      Aq = gq(2029);
    const cq = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    class uq {
      constructor() {}
      static async setup() {
        try {
          return await uq.setupInternal()
        } catch (qq) {
          return console.error("Failed to setup Firebase SDK:", qq), null
        }
      }
      static async setupInternal() {
        const qq = await Promise.all([gq.e(258), gq.e(257)]).then((() => gq(40252))),
          Eq = await Promise.all([gq.e(258), gq.e(259)]).then((() => gq(40278))),
          Bq = await Promise.all([gq.e(258), gq.e(260)]).then((() => gq(40280))),
          Wq = qq.initializeApp({
            ...cq,
            measurementId: lq.b
          });
        (0, lq.I)(), window.gtag("config", lq.b), (0, lq.G)(), window.gtag("config", "AW-16469618203");
        const Nq = Eq.getAnalytics(Wq),
          aq = {
            portal: Oq.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        Eq.setUserProperties(Nq, aq);
        const Vq = Bq.initializeAuth(Wq, {
          persistence: [Bq.indexedDBLocalPersistence, Bq.browserLocalPersistence, Bq.browserSessionPersistence],
          popupRedirectResolver: (0, mq.isMobileApp)() ? void 0 : Bq.browserPopupRedirectResolver
        });
        Bq.useDeviceLanguage(Vq);
        const dq = new Bq.GoogleAuthProvider;
        dq.setCustomParameters({
          prompt: "select_account"
        });
        const jq = new Bq.OAuthProvider(Yq.k[Yq.d.APPLE]),
          Hq = new Bq.OAuthProvider(Yq.k[Yq.d.MICROSOFT]);
        Hq.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const oq = {
          [Yq.d.GOOGLE]: dq,
          [Yq.d.APPLE]: jq,
          [Yq.d.MICROSOFT]: Hq
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((qq => {
          const Eq = Bq.onIdTokenChanged(Vq, (gq => {
            Eq(), qq()
          }))
        }));
        class Pq extends uq {
          setUserProperties(qq) {
            Eq.setUserProperties(Nq, qq)
          }
          onIdTokenChanged(qq) {
            Bq.onIdTokenChanged(Vq, qq)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(qq) {
            var Eq;
            const gq = await Bq.signInWithPopup(Vq, oq[qq]);
            return null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.user) && void 0 !== Eq ? Eq : null
          }
          async getCurrentUser(qq) {
            const Eq = Vq.currentUser;
            if (!Eq) return null;
            const {
              signInProvider: gq
            } = await Eq.getIdTokenResult(!1);
            return gq === Yq.k[qq] ? Eq : null
          }
          async signOut(qq) {
            null !== await this.getCurrentUser(qq) && await Bq.signOut(Vq)
          }
        }
        async function Qq(qq, Eq) {
          const gq = await xq.c.request(`${qq}.${Eq}`, {});
          if (null === gq) return null;
          const Yq = "google" === qq ? Bq.GoogleAuthProvider.credential(gq.idToken) : jq.credential({
            idToken: gq.idToken
          });
          return (await Bq.signInWithCredential(Vq, Yq)).user
        }
        class yq extends uq {
          setUserProperties(qq) {
            Eq.setUserProperties(Nq, qq)
          }
          onIdTokenChanged(qq) {
            Bq.onIdTokenChanged(Vq, qq)
          }
          canSignIn(qq) {
            return null !== (0, Aq.e)(qq)
          }
          async signInWithPopup(qq) {
            const Eq = (0, Aq.e)(qq);
            if (null === Eq) return console.warn(`The app can't sign in with ${qq}; check canSignIn first`), null;
            try {
              return await Qq(Eq, "signIn")
            } catch (gq) {
              return console.error(`Failed to sign in with ${qq} in the app:`, gq), null
            }
          }
          async getCurrentUser(qq) {
            const Eq = Vq.currentUser;
            if (Eq) {
              const {
                signInProvider: gq
              } = await Eq.getIdTokenResult(!1);
              if (gq === Yq.k[qq]) return Eq
            }
            const gq = (0, Aq.e)(qq);
            if (null === gq) return null;
            try {
              return await Qq(gq, "getCurrentUser")
            } catch (lq) {
              return console.error(`Failed to get the current ${qq} user from the app:`, lq), null
            }
          }
          async signOut(qq) {
            const Eq = (0, Aq.e)(qq);
            null !== Eq && xq.c.request(`${Eq}.signOut`, {}).catch((Eq => {
              console.error(`Failed to sign out of ${qq} in the app:`, Eq)
            }));
            const gq = Vq.currentUser;
            if (gq) {
              const {
                signInProvider: Eq
              } = await gq.getIdTokenResult(!1);
              Eq === Yq.k[qq] && await Bq.signOut(Vq)
            }
          }
        }
        return (0, mq.isMobileApp)() ? (await xq.c.ready, new yq) : new Pq
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);