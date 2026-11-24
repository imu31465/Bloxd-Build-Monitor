export const id = 147;
export const ids = [147];
export const modules = {
  8201: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      BloxdFirebaseSdk: () => LT
    });
    var WT = mT(1959),
      zT = mT(3047),
      MT = mT(108),
      gT = mT(102),
      nT = mT(1802),
      HT = mT(2159);
    const kT = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var jT = mT(3068),
      lT = mT(1839);
    class LT {
      constructor() {}
      static async setup() {
        try {
          return await LT.setupInternal()
        } catch (TT) {
          return console.error("Failed to setup Firebase SDK:", TT), null
        }
      }
      static async setupInternal() {
        const TT = await Promise.all([mT.e(270), mT.e(269)]).then((() => mT(40625))),
          UT = await Promise.all([mT.e(270), mT.e(271)]).then((() => mT(40653))),
          pT = await Promise.all([mT.e(270), mT.e(272)]).then((() => mT(40659))),
          BT = TT.initializeApp({
            ...kT,
            measurementId: zT.bloxdGa4MeasurementId
          });
        (0, zT.setUpGtag)(), window.gtag("config", zT.bloxdGa4MeasurementId), (0, zT.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const ZT = UT.getAnalytics(BT),
          cT = {
            portal: MT.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        UT.setUserProperties(ZT, cT);
        const vT = pT.initializeAuth(BT, {
          persistence: [pT.indexedDBLocalPersistence, pT.browserLocalPersistence, pT.browserSessionPersistence],
          popupRedirectResolver: (0, gT.isMobileApp)() ? void 0 : pT.browserPopupRedirectResolver
        });
        pT.useDeviceLanguage(vT);
        const fT = new pT.GoogleAuthProvider;
        fT.setCustomParameters({
          prompt: "select_account"
        });
        const qT = new pT.OAuthProvider(WT.i[WT.d.APPLE]),
          iT = new pT.OAuthProvider(WT.i[WT.d.MICROSOFT]);
        iT.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const bT = {
          [WT.d.GOOGLE]: fT,
          [WT.d.APPLE]: qT,
          [WT.d.MICROSOFT]: iT
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((TT => {
          const UT = pT.onIdTokenChanged(vT, (mT => {
            UT(), TT()
          }))
        }));
        class OT extends LT {
          setUserProperties(TT) {
            UT.setUserProperties(ZT, TT)
          }
          onIdTokenChanged(TT) {
            pT.onIdTokenChanged(vT, TT)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(TT) {
            var UT;
            const mT = await pT.signInWithPopup(vT, bT[TT]);
            return null !== (UT = null === mT || void 0 === mT ? void 0 : mT.user) && void 0 !== UT ? UT : null
          }
          async getCurrentUser(TT) {
            const UT = vT.currentUser;
            if (!UT) return null;
            const {
              signInProvider: mT
            } = await UT.getIdTokenResult(!1);
            return mT === WT.i[TT] ? UT : null
          }
          async signOut(TT) {
            null !== await this.getCurrentUser(TT) && await pT.signOut(vT)
          }
        }
        async function eT(TT, UT) {
          const mT = await nT.e.request(`${TT}.${UT}`, {});
          if (null === mT) return null;
          const WT = "google" === TT ? pT.GoogleAuthProvider.credential(mT.idToken) : qT.credential({
            idToken: mT.idToken
          });
          return (await pT.signInWithCredential(vT, WT)).user
        }
        class YT extends LT {
          setUserProperties(TT) {
            UT.setUserProperties(ZT, TT)
          }
          onIdTokenChanged(TT) {
            pT.onIdTokenChanged(vT, TT)
          }
          canSignIn(TT) {
            return null !== (0, HT.d)(TT)
          }
          async signInWithPopup(TT) {
            const UT = (0, HT.d)(TT);
            if (null === UT) return console.warn(`The app can't sign in with ${TT}; check canSignIn first`), null;
            try {
              return await eT(UT, "signIn")
            } catch (mT) {
              if (mT instanceof lT.e && "timeout" === mT.code) return null;
              throw (0, jT.reportClientError)("login_failed", mT, `app_${UT}`), mT
            }
          }
          async getCurrentUser(TT) {
            const UT = vT.currentUser;
            if (UT) {
              const {
                signInProvider: mT
              } = await UT.getIdTokenResult(!1);
              if (mT === WT.i[TT]) return UT
            }
            const mT = (0, HT.d)(TT);
            if (null === mT) return null;
            try {
              return await eT(mT, "getCurrentUser")
            } catch (zT) {
              return console.error(`Failed to get the current ${TT} user from the app:`, zT), null
            }
          }
          async signOut(TT) {
            const UT = (0, HT.d)(TT);
            null !== UT && nT.e.request(`${UT}.signOut`, {}).catch((UT => {
              console.error(`Failed to sign out of ${TT} in the app:`, UT)
            }));
            const mT = vT.currentUser;
            if (mT) {
              const {
                signInProvider: UT
              } = await mT.getIdTokenResult(!1);
              UT === WT.i[TT] && await pT.signOut(vT)
            }
          }
        }
        return (0, gT.isMobileApp)() ? (await nT.e.ready, new YT) : new OT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);