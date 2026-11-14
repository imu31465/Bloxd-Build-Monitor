export const id = 128;
export const ids = [128];
export const modules = {
  7036: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      BloxdFirebaseSdk: () => dF
    });
    var CF = SF(1537),
      AF = SF(2241),
      uF = SF(101),
      hF = SF(89),
      bW = SF(2848);
    class dF {
      constructor() {}
      static async setup() {
        try {
          return await dF.setupInternal()
        } catch (FF) {
          return console.error("Failed to setup Firebase SDK:", FF), null
        }
      }
      static async setupInternal() {
        const FF = await Promise.all([SF.e(236), SF.e(235)]).then((() => SF(38473))),
          WF = await Promise.all([SF.e(236), SF.e(237)]).then((() => SF(38498))),
          RF = await Promise.all([SF.e(236), SF.e(238)]).then((() => SF(38503))),
          iW = FF.initializeApp(PF);
        (0, AF.E)(), window.gtag("config", PF.measurementId), (0, AF.B)(), window.gtag("config", "AW-16469618203");
        const eF = WF.getAnalytics(iW),
          EF = {
            portal: uF.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        WF.setUserProperties(eF, EF);
        const QF = RF.getAuth();
        RF.useDeviceLanguage(QF);
        const rW = new RF.GoogleAuthProvider;
        rW.setCustomParameters({
          prompt: "select_account"
        });
        const gW = new RF.OAuthProvider("apple.com"),
          tW = new RF.OAuthProvider("microsoft.com");
        tW.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const TF = {
          [CF.d.GOOGLE]: {
            provider: rW,
            RNSignInMessage: "googleSignInWithPopup",
            RNCurrentUserMessage: "googleGetCurrentUser",
            RNSignOutMessage: "googleSignOut"
          },
          [CF.d.APPLE]: {
            provider: gW,
            RNSignInMessage: "appleSignInWithPopup",
            RNCurrentUserMessage: "appleGetCurrentUser",
            RNSignOutMessage: "appleSignOut"
          },
          [CF.d.MICROSOFT]: {
            provider: tW,
            RNSignInMessage: "microsoftSignInWithPopup",
            RNCurrentUserMessage: "microsoftGetCurrentUser",
            RNSignOutMessage: "microsoftSignOut"
          }
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((FF => {
          const WF = RF.onIdTokenChanged(QF, (SF => {
            WF(), FF()
          }))
        }));
        class aW extends dF {
          setUserProperties(FF) {
            WF.setUserProperties(eF, FF)
          }
          onIdTokenChanged(FF) {
            RF.onIdTokenChanged(QF, FF)
          }
          async signInWithPopup(FF) {
            var WF;
            const SF = await RF.signInWithPopup(QF, TF[FF].provider);
            return null !== (WF = null === SF || void 0 === SF ? void 0 : SF.user) && void 0 !== WF ? WF : null
          }
          async getCurrentUser(FF) {
            const WF = QF.currentUser;
            if (!WF) return null;
            const {
              signInProvider: SF
            } = await WF.getIdTokenResult(!1);
            return SF === TF[FF].provider.providerId ? WF : null
          }
          async signOut(FF) {
            null !== await this.getCurrentUser(FF) && await RF.signOut(QF)
          }
        }
        class kW extends dF {
          setUserProperties(FF) {
            WF.setUserProperties(eF, FF)
          }
          onIdTokenChanged(FF) {
            RF.onIdTokenChanged(QF, FF)
          }
          async signInWithPopup(FF) {
            return await (0, bW.g)(TF[FF].RNSignInMessage, {
              firebaseUserContextType: FF
            }).then((async WF => {
              var SF;
              let AF;
              switch (FF) {
                case CF.d.GOOGLE:
                  AF = RF.GoogleAuthProvider.credential(WF.googleIdToken);
                  break;
                case CF.d.APPLE:
                  AF = gW.credential({
                    idToken: WF.appleIdToken
                  });
                  break;
                case CF.d.MICROSOFT:
                  AF = tW.credential({
                    idToken: WF.microsoftIdToken
                  });
                  break;
                default:
                  return null
              }
              const uF = await RF.signInWithCredential(QF, AF);
              return null !== (SF = null === uF || void 0 === uF ? void 0 : uF.user) && void 0 !== SF ? SF : null
            })).catch((WF => (console.error(`Failed to sign in with ${FF} popup:`, WF), null)))
          }
          async getCurrentUser(FF) {
            const WF = QF.currentUser;
            if (WF) {
              const {
                signInProvider: SF
              } = await WF.getIdTokenResult(!1);
              if (SF === TF[FF].provider.providerId) return WF
            }
            return await (0, bW.g)(TF[FF].RNCurrentUserMessage, {}).then((async WF => {
              var SF;
              let AF;
              switch (FF) {
                case CF.d.GOOGLE:
                  AF = RF.GoogleAuthProvider.credential(WF.googleIdToken);
                  break;
                case CF.d.APPLE:
                  AF = gW.credential({
                    idToken: WF.appleIdToken
                  });
                  break;
                case CF.d.MICROSOFT:
                  AF = tW.credential({
                    idToken: WF.microsoftIdToken
                  });
                  break;
                default:
                  return null
              }
              const uF = await RF.signInWithCredential(QF, AF);
              return null !== (SF = null === uF || void 0 === uF ? void 0 : uF.user) && void 0 !== SF ? SF : null
            })).catch((WF => (console.error(`Failed to get current ${FF} user from React Native wrapper`, WF), null)))
          }
          async signOut(FF) {
            (0, bW.k)(TF[FF].RNSignOutMessage, {});
            const WF = QF.currentUser;
            if (WF) {
              const {
                signInProvider: SF
              } = await WF.getIdTokenResult(!1);
              SF === TF[FF].provider.providerId && await RF.signOut(QF)
            }
          }
        }
        return (0, hF.isMobileApp)() ? new kW : new aW
      }
    }
    const PF = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97",
      measurementId: AF.d
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);