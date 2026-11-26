export const id = 159;
export const ids = [159];
export const modules = {
  7251: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      BloxdFirebaseSdk: () => GH
    });
    var AH = LH(1904),
      rH = LH(3209),
      SH = LH(92),
      hH = LH(81),
      tH = LH(1714),
      zH = LH(2116);
    const CH = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var EH = LH(1826),
      XH = LH(1751);
    class GH {
      constructor() {}
      static async setup() {
        try {
          return await GH.setupInternal()
        } catch (HH) {
          return console.error("Failed to setup Firebase SDK:", HH), null
        }
      }
      static async setupInternal() {
        const HH = await Promise.all([LH.e(297), LH.e(296)]).then((() => LH(41814))),
          BH = await Promise.all([LH.e(297), LH.e(298)]).then((() => LH(41842))),
          YH = await Promise.all([LH.e(297), LH.e(299)]).then((() => LH(41847))),
          uH = HH.initializeApp({
            ...CH,
            measurementId: rH.bloxdGa4MeasurementId
          });
        (0, rH.setUpGtag)(), window.gtag("config", rH.bloxdGa4MeasurementId), (0, rH.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const QH = BH.getAnalytics(uH),
          WH = {
            portal: SH.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        BH.setUserProperties(QH, WH);
        const MH = YH.initializeAuth(uH, {
          persistence: [YH.indexedDBLocalPersistence, YH.browserLocalPersistence, YH.browserSessionPersistence],
          popupRedirectResolver: (0, hH.isMobileApp)() ? void 0 : YH.browserPopupRedirectResolver
        });
        YH.useDeviceLanguage(MH);
        const xH = new YH.GoogleAuthProvider;
        xH.setCustomParameters({
          prompt: "select_account"
        });
        const vH = new YH.OAuthProvider(AH.h[AH.d.APPLE]),
          PH = new YH.OAuthProvider(AH.h[AH.d.MICROSOFT]);
        PH.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const TH = {
          [AH.d.GOOGLE]: xH,
          [AH.d.APPLE]: vH,
          [AH.d.MICROSOFT]: PH
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((HH => {
          const BH = YH.onIdTokenChanged(MH, (LH => {
            BH(), HH()
          }))
        }));
        class UH extends GH {
          setUserProperties(HH) {
            BH.setUserProperties(QH, HH)
          }
          onIdTokenChanged(HH) {
            YH.onIdTokenChanged(MH, HH)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(HH) {
            var BH;
            const LH = await YH.signInWithPopup(MH, TH[HH]);
            return null !== (BH = null === LH || void 0 === LH ? void 0 : LH.user) && void 0 !== BH ? BH : null
          }
          async getCurrentUser(HH) {
            const BH = MH.currentUser;
            if (!BH) return null;
            const {
              signInProvider: LH
            } = await BH.getIdTokenResult(!1);
            return LH === AH.h[HH] ? BH : null
          }
          async signOut(HH) {
            null !== await this.getCurrentUser(HH) && await YH.signOut(MH)
          }
        }
        async function VH(HH, BH) {
          const LH = await tH.b.request(`${HH}.${BH}`, {});
          if (null === LH) return null;
          const AH = "google" === HH ? YH.GoogleAuthProvider.credential(LH.idToken) : vH.credential({
            idToken: LH.idToken
          });
          return (await YH.signInWithCredential(MH, AH)).user
        }
        class OH extends GH {
          setUserProperties(HH) {
            BH.setUserProperties(QH, HH)
          }
          onIdTokenChanged(HH) {
            YH.onIdTokenChanged(MH, HH)
          }
          canSignIn(HH) {
            return null !== (0, zH.e)(HH)
          }
          async signInWithPopup(HH) {
            const BH = (0, zH.e)(HH);
            if (null === BH) return console.warn(`The app can't sign in with ${HH}; check canSignIn first`), null;
            try {
              return await VH(BH, "signIn")
            } catch (LH) {
              if (LH instanceof XH.d && "timeout" === LH.code) return null;
              throw (0, EH.reportClientError)("login_failed", LH, `app_${BH}`), LH
            }
          }
          async getCurrentUser(HH) {
            const BH = MH.currentUser;
            if (BH) {
              const {
                signInProvider: LH
              } = await BH.getIdTokenResult(!1);
              if (LH === AH.h[HH]) return BH
            }
            const LH = (0, zH.e)(HH);
            if (null === LH) return null;
            try {
              return await VH(LH, "getCurrentUser")
            } catch (rH) {
              return console.error(`Failed to get the current ${HH} user from the app:`, rH), null
            }
          }
          async signOut(HH) {
            const BH = (0, zH.e)(HH);
            null !== BH && tH.b.request(`${BH}.signOut`, {}).catch((BH => {
              console.error(`Failed to sign out of ${HH} in the app:`, BH)
            }));
            const LH = MH.currentUser;
            if (LH) {
              const {
                signInProvider: BH
              } = await LH.getIdTokenResult(!1);
              BH === AH.h[HH] && await YH.signOut(MH)
            }
          }
        }
        return (0, hH.isMobileApp)() ? (await tH.b.ready, new OH) : new UH
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);