export const id = 140;
export const ids = [140];
export const modules = {
  7533: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      BloxdFirebaseSdk: () => FT
    });
    var iT = IT(1715),
      zT = IT(2556),
      kT = IT(104),
      WT = IT(90),
      XT = IT(1635),
      BT = IT(1860);
    class FT {
      constructor() {}
      static async setup() {
        try {
          return await FT.setupInternal()
        } catch (TT) {
          return console.error("Failed to setup Firebase SDK:", TT), null
        }
      }
      static async setupInternal() {
        const TT = await Promise.all([IT.e(255), IT.e(254)]).then((() => IT(39283))),
          oT = await Promise.all([IT.e(255), IT.e(256)]).then((() => IT(39309))),
          DT = await Promise.all([IT.e(255), IT.e(257)]).then((() => IT(39311))),
          LT = TT.initializeApp(ST);
        (0, zT.E)(), window.gtag("config", ST.measurementId), (0, zT.B)(), window.gtag("config", "AW-16469618203");
        const xT = oT.getAnalytics(LT),
          cT = {
            portal: kT.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        oT.setUserProperties(xT, cT);
        const KT = DT.getAuth();
        DT.useDeviceLanguage(KT);
        const MT = new DT.GoogleAuthProvider;
        MT.setCustomParameters({
          prompt: "select_account"
        });
        const rT = new DT.OAuthProvider(iT.f[iT.b.APPLE]),
          AT = new DT.OAuthProvider(iT.f[iT.b.MICROSOFT]);
        AT.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const gT = {
          [iT.b.GOOGLE]: MT,
          [iT.b.APPLE]: rT,
          [iT.b.MICROSOFT]: AT
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((TT => {
          const oT = DT.onIdTokenChanged(KT, (IT => {
            oT(), TT()
          }))
        }));
        class hT extends FT {
          setUserProperties(TT) {
            oT.setUserProperties(xT, TT)
          }
          onIdTokenChanged(TT) {
            DT.onIdTokenChanged(KT, TT)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(TT) {
            var oT;
            const IT = await DT.signInWithPopup(KT, gT[TT]);
            return null !== (oT = null === IT || void 0 === IT ? void 0 : IT.user) && void 0 !== oT ? oT : null
          }
          async getCurrentUser(TT) {
            const oT = KT.currentUser;
            if (!oT) return null;
            const {
              signInProvider: IT
            } = await oT.getIdTokenResult(!1);
            return IT === iT.f[TT] ? oT : null
          }
          async signOut(TT) {
            null !== await this.getCurrentUser(TT) && await DT.signOut(KT)
          }
        }
        async function wT(TT, oT) {
          const IT = await XT.c.request(`${TT}.${oT}`, {});
          if (null === IT) return null;
          const iT = "google" === TT ? DT.GoogleAuthProvider.credential(IT.idToken) : rT.credential({
            idToken: IT.idToken
          });
          return (await DT.signInWithCredential(KT, iT)).user
        }
        class mT extends FT {
          setUserProperties(TT) {
            oT.setUserProperties(xT, TT)
          }
          onIdTokenChanged(TT) {
            DT.onIdTokenChanged(KT, TT)
          }
          canSignIn(TT) {
            return null !== (0, BT.e)(TT)
          }
          async signInWithPopup(TT) {
            const oT = (0, BT.e)(TT);
            if (null === oT) return console.warn(`The app can't sign in with ${TT}; check canSignIn first`), null;
            try {
              return await wT(oT, "signIn")
            } catch (IT) {
              return console.error(`Failed to sign in with ${TT} in the app:`, IT), null
            }
          }
          async getCurrentUser(TT) {
            const oT = KT.currentUser;
            if (oT) {
              const {
                signInProvider: IT
              } = await oT.getIdTokenResult(!1);
              if (IT === iT.f[TT]) return oT
            }
            const IT = (0, BT.e)(TT);
            if (null === IT) return null;
            try {
              return await wT(IT, "getCurrentUser")
            } catch (zT) {
              return console.error(`Failed to get the current ${TT} user from the app:`, zT), null
            }
          }
          async signOut(TT) {
            const oT = (0, BT.e)(TT);
            null !== oT && XT.c.request(`${oT}.signOut`, {}).catch((oT => {
              console.error(`Failed to sign out of ${TT} in the app:`, oT)
            }));
            const IT = KT.currentUser;
            if (IT) {
              const {
                signInProvider: oT
              } = await IT.getIdTokenResult(!1);
              oT === iT.f[TT] && await DT.signOut(KT)
            }
          }
        }
        return (0, WT.isMobileApp)() ? (await XT.c.ready, new mT) : new hT
      }
    }
    const ST = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97",
      measurementId: zT.d
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);