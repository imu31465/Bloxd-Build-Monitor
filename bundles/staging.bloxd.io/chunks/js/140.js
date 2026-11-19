export const id = 140;
export const ids = [140];
export const modules = {
  7532: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      BloxdFirebaseSdk: () => aY
    });
    var FY = DY(1769),
      AY = DY(2579),
      IY = DY(115),
      RY = DY(99),
      OY = DY(1665),
      gY = DY(1906);
    class aY {
      constructor() {}
      static async setup() {
        try {
          return await aY.setupInternal()
        } catch (YY) {
          return console.error("Failed to setup Firebase SDK:", YY), null
        }
      }
      static async setupInternal() {
        const YY = await Promise.all([DY.e(255), DY.e(254)]).then((() => DY(39623))),
          rY = await Promise.all([DY.e(255), DY.e(256)]).then((() => DY(39643))),
          uY = await Promise.all([DY.e(255), DY.e(257)]).then((() => DY(39647))),
          sY = YY.initializeApp(vY);
        (0, AY.A)(), window.gtag("config", vY.measurementId), (0, AY.v)(), window.gtag("config", "AW-16469618203");
        const iY = rY.getAnalytics(sY),
          yY = {
            portal: IY.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        rY.setUserProperties(iY, yY);
        const QY = uY.getAuth();
        uY.useDeviceLanguage(QY);
        const oY = new uY.GoogleAuthProvider;
        oY.setCustomParameters({
          prompt: "select_account"
        });
        const WY = new uY.OAuthProvider(FY.i[FY.b.APPLE]),
          EY = new uY.OAuthProvider(FY.i[FY.b.MICROSOFT]);
        EY.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const mY = {
          [FY.b.GOOGLE]: oY,
          [FY.b.APPLE]: WY,
          [FY.b.MICROSOFT]: EY
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((YY => {
          const rY = uY.onIdTokenChanged(QY, (DY => {
            rY(), YY()
          }))
        }));
        class VY extends aY {
          setUserProperties(YY) {
            rY.setUserProperties(iY, YY)
          }
          onIdTokenChanged(YY) {
            uY.onIdTokenChanged(QY, YY)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(YY) {
            var rY;
            const DY = await uY.signInWithPopup(QY, mY[YY]);
            return null !== (rY = null === DY || void 0 === DY ? void 0 : DY.user) && void 0 !== rY ? rY : null
          }
          async getCurrentUser(YY) {
            const rY = QY.currentUser;
            if (!rY) return null;
            const {
              signInProvider: DY
            } = await rY.getIdTokenResult(!1);
            return DY === FY.i[YY] ? rY : null
          }
          async signOut(YY) {
            null !== await this.getCurrentUser(YY) && await uY.signOut(QY)
          }
        }
        async function SY(YY, rY) {
          const DY = await OY.e.request(`${YY}.${rY}`, {});
          if (null === DY) return null;
          const FY = "google" === YY ? uY.GoogleAuthProvider.credential(DY.idToken) : WY.credential({
            idToken: DY.idToken
          });
          return (await uY.signInWithCredential(QY, FY)).user
        }
        class lY extends aY {
          setUserProperties(YY) {
            rY.setUserProperties(iY, YY)
          }
          onIdTokenChanged(YY) {
            uY.onIdTokenChanged(QY, YY)
          }
          canSignIn(YY) {
            return null !== (0, gY.e)(YY)
          }
          async signInWithPopup(YY) {
            const rY = (0, gY.e)(YY);
            if (null === rY) return console.warn(`The app can't sign in with ${YY}; check canSignIn first`), null;
            try {
              return await SY(rY, "signIn")
            } catch (DY) {
              return console.error(`Failed to sign in with ${YY} in the app:`, DY), null
            }
          }
          async getCurrentUser(YY) {
            const rY = QY.currentUser;
            if (rY) {
              const {
                signInProvider: DY
              } = await rY.getIdTokenResult(!1);
              if (DY === FY.i[YY]) return rY
            }
            const DY = (0, gY.e)(YY);
            if (null === DY) return null;
            try {
              return await SY(DY, "getCurrentUser")
            } catch (AY) {
              return console.error(`Failed to get the current ${YY} user from the app:`, AY), null
            }
          }
          async signOut(YY) {
            const rY = (0, gY.e)(YY);
            null !== rY && OY.e.request(`${rY}.signOut`, {}).catch((rY => {
              console.error(`Failed to sign out of ${YY} in the app:`, rY)
            }));
            const DY = QY.currentUser;
            if (DY) {
              const {
                signInProvider: rY
              } = await DY.getIdTokenResult(!1);
              rY === FY.i[YY] && await uY.signOut(QY)
            }
          }
        }
        return (0, RY.isMobileApp)() ? (await OY.e.ready, new lY) : new VY
      }
    }
    const vY = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97",
      measurementId: AY.b
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);