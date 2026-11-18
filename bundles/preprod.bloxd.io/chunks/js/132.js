export const id = 132;
export const ids = [132];
export const modules = {
  7242: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      BloxdFirebaseSdk: () => Py
    });
    var Uy = Wy(1538),
      hy = Wy(2293),
      fy = Wy(103),
      Zy = Wy(94),
      cb = Wy(1524);
    class Py {
      constructor() {}
      static async setup() {
        try {
          return await Py.setupInternal()
        } catch (yb) {
          return console.error("Failed to setup Firebase SDK:", yb), null
        }
      }
      static async setupInternal() {
        const yb = await Promise.all([Wy.e(245), Wy.e(244)]).then((() => Wy(39011))),
          bb = await Promise.all([Wy.e(245), Wy.e(246)]).then((() => Wy(39037))),
          By = await Promise.all([Wy.e(245), Wy.e(247)]).then((() => Wy(39040))),
          Ky = yb.initializeApp(oy);
        (0, hy.F)(), window.gtag("config", oy.measurementId), (0, hy.A)(), window.gtag("config", "AW-16469618203");
        const ey = bb.getAnalytics(Ky),
          qb = {
            portal: fy.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        bb.setUserProperties(ey, qb);
        const sy = By.getAuth();
        By.useDeviceLanguage(sy);
        const Sy = new By.GoogleAuthProvider;
        Sy.setCustomParameters({
          prompt: "select_account"
        });
        const Ey = new By.OAuthProvider("apple.com"),
          ly = new By.OAuthProvider("microsoft.com");
        ly.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const mb = {
          [Uy.d.GOOGLE]: {
            provider: Sy,
            rn: {
              signInMessage: "googleSignInWithPopup",
              currentUserMessage: "googleGetCurrentUser",
              signOutMessage: "googleSignOut"
            }
          },
          [Uy.d.APPLE]: {
            provider: Ey,
            rn: {
              signInMessage: "appleSignInWithPopup",
              currentUserMessage: "appleGetCurrentUser",
              signOutMessage: "appleSignOut"
            }
          },
          [Uy.d.MICROSOFT]: {
            provider: ly,
            rn: null
          }
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((yb => {
          const bb = By.onIdTokenChanged(sy, (Wy => {
            bb(), yb()
          }))
        }));
        class Cy extends Py {
          setUserProperties(yb) {
            bb.setUserProperties(ey, yb)
          }
          onIdTokenChanged(yb) {
            By.onIdTokenChanged(sy, yb)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(yb) {
            var bb;
            const Wy = await By.signInWithPopup(sy, mb[yb].provider);
            return null !== (bb = null === Wy || void 0 === Wy ? void 0 : Wy.user) && void 0 !== bb ? bb : null
          }
          async getCurrentUser(yb) {
            const bb = sy.currentUser;
            if (!bb) return null;
            const {
              signInProvider: Wy
            } = await bb.getIdTokenResult(!1);
            return Wy === mb[yb].provider.providerId ? bb : null
          }
          async signOut(yb) {
            null !== await this.getCurrentUser(yb) && await By.signOut(sy)
          }
        }
        class Ty extends Py {
          setUserProperties(yb) {
            bb.setUserProperties(ey, yb)
          }
          onIdTokenChanged(yb) {
            By.onIdTokenChanged(sy, yb)
          }
          canSignIn(yb) {
            return null !== mb[yb].rn
          }
          async signInWithPopup(yb) {
            const bb = mb[yb].rn;
            return null === bb ? (console.warn(`signInWithPopup called for ${yb}, which the mobile app can't sign in to; check canSignIn first`), null) : await (0, cb.l)(bb.signInMessage, {
              firebaseUserContextType: yb
            }).then((async bb => {
              var Wy;
              if (null === bb) return null;
              let hy;
              switch (yb) {
                case Uy.d.GOOGLE:
                  hy = By.GoogleAuthProvider.credential(bb.googleIdToken);
                  break;
                case Uy.d.APPLE:
                  hy = Ey.credential({
                    idToken: bb.appleIdToken
                  });
                  break;
                default:
                  return null
              }
              const fy = await By.signInWithCredential(sy, hy);
              return null !== (Wy = null === fy || void 0 === fy ? void 0 : fy.user) && void 0 !== Wy ? Wy : null
            })).catch((bb => (console.error(`Failed to sign in with ${yb} popup:`, bb), null)))
          }
          async getCurrentUser(yb) {
            const bb = sy.currentUser;
            if (bb) {
              const {
                signInProvider: Wy
              } = await bb.getIdTokenResult(!1);
              if (Wy === mb[yb].provider.providerId) return bb
            }
            const Wy = mb[yb].rn;
            return null === Wy ? null : await (0, cb.l)(Wy.currentUserMessage, {}).then((async bb => {
              var Wy;
              if (null === bb) return null;
              let hy;
              switch (yb) {
                case Uy.d.GOOGLE:
                  hy = By.GoogleAuthProvider.credential(bb.googleIdToken);
                  break;
                case Uy.d.APPLE:
                  hy = Ey.credential({
                    idToken: bb.appleIdToken
                  });
                  break;
                default:
                  return null
              }
              const fy = await By.signInWithCredential(sy, hy);
              return null !== (Wy = null === fy || void 0 === fy ? void 0 : fy.user) && void 0 !== Wy ? Wy : null
            })).catch((bb => (console.error(`Failed to get current ${yb} user from React Native wrapper`, bb), null)))
          }
          async signOut(yb) {
            const bb = mb[yb].rn;
            null !== bb && (0, cb.o)(bb.signOutMessage, {});
            const Wy = sy.currentUser;
            if (Wy) {
              const {
                signInProvider: bb
              } = await Wy.getIdTokenResult(!1);
              bb === mb[yb].provider.providerId && await By.signOut(sy)
            }
          }
        }
        return (0, Zy.isMobileApp)() ? new Ty : new Cy
      }
    }
    const oy = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97",
      measurementId: hy.c
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);