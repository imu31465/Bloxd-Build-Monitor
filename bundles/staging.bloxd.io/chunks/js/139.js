export const id = 139;
export const ids = [139];
export const modules = {
  7783: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      BloxdFirebaseSdk: () => SD
    });
    var ID = cD(1808),
      pD = cD(2737),
      iD = cD(101),
      fD = cD(90),
      bD = cD(1664),
      QD = cD(2020);
    const wD = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    class SD {
      constructor() {}
      static async setup() {
        try {
          return await SD.setupInternal()
        } catch (DD) {
          return console.error("Failed to setup Firebase SDK:", DD), null
        }
      }
      static async setupInternal() {
        const DD = await Promise.all([cD.e(256), cD.e(255)]).then((() => cD(39623))),
          CD = await Promise.all([cD.e(256), cD.e(257)]).then((() => cD(39639))),
          BD = await Promise.all([cD.e(256), cD.e(258)]).then((() => cD(39645))),
          yD = DD.initializeApp({
            ...wD,
            measurementId: pD.b
          });
        (0, pD.F)(), window.gtag("config", pD.b), (0, pD.B)(), window.gtag("config", "AW-16469618203");
        const MD = CD.getAnalytics(yD),
          tD = {
            portal: iD.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        CD.setUserProperties(MD, tD);
        const ZD = BD.getAuth();
        BD.useDeviceLanguage(ZD);
        const oD = new BD.GoogleAuthProvider;
        oD.setCustomParameters({
          prompt: "select_account"
        });
        const vD = new BD.OAuthProvider(ID.h[ID.c.APPLE]),
          ND = new BD.OAuthProvider(ID.h[ID.c.MICROSOFT]);
        ND.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const gD = {
          [ID.c.GOOGLE]: oD,
          [ID.c.APPLE]: vD,
          [ID.c.MICROSOFT]: ND
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((DD => {
          const CD = BD.onIdTokenChanged(ZD, (cD => {
            CD(), DD()
          }))
        }));
        class XD extends SD {
          setUserProperties(DD) {
            CD.setUserProperties(MD, DD)
          }
          onIdTokenChanged(DD) {
            BD.onIdTokenChanged(ZD, DD)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(DD) {
            var CD;
            const cD = await BD.signInWithPopup(ZD, gD[DD]);
            return null !== (CD = null === cD || void 0 === cD ? void 0 : cD.user) && void 0 !== CD ? CD : null
          }
          async getCurrentUser(DD) {
            const CD = ZD.currentUser;
            if (!CD) return null;
            const {
              signInProvider: cD
            } = await CD.getIdTokenResult(!1);
            return cD === ID.h[DD] ? CD : null
          }
          async signOut(DD) {
            null !== await this.getCurrentUser(DD) && await BD.signOut(ZD)
          }
        }
        async function mD(DD, CD) {
          const cD = await bD.b.request(`${DD}.${CD}`, {});
          if (null === cD) return null;
          const ID = "google" === DD ? BD.GoogleAuthProvider.credential(cD.idToken) : vD.credential({
            idToken: cD.idToken
          });
          return (await BD.signInWithCredential(ZD, ID)).user
        }
        class nD extends SD {
          setUserProperties(DD) {
            CD.setUserProperties(MD, DD)
          }
          onIdTokenChanged(DD) {
            BD.onIdTokenChanged(ZD, DD)
          }
          canSignIn(DD) {
            return null !== (0, QD.c)(DD)
          }
          async signInWithPopup(DD) {
            const CD = (0, QD.c)(DD);
            if (null === CD) return console.warn(`The app can't sign in with ${DD}; check canSignIn first`), null;
            try {
              return await mD(CD, "signIn")
            } catch (cD) {
              return console.error(`Failed to sign in with ${DD} in the app:`, cD), null
            }
          }
          async getCurrentUser(DD) {
            const CD = ZD.currentUser;
            if (CD) {
              const {
                signInProvider: cD
              } = await CD.getIdTokenResult(!1);
              if (cD === ID.h[DD]) return CD
            }
            const cD = (0, QD.c)(DD);
            if (null === cD) return null;
            try {
              return await mD(cD, "getCurrentUser")
            } catch (pD) {
              return console.error(`Failed to get the current ${DD} user from the app:`, pD), null
            }
          }
          async signOut(DD) {
            const CD = (0, QD.c)(DD);
            null !== CD && bD.b.request(`${CD}.signOut`, {}).catch((CD => {
              console.error(`Failed to sign out of ${DD} in the app:`, CD)
            }));
            const cD = ZD.currentUser;
            if (cD) {
              const {
                signInProvider: CD
              } = await cD.getIdTokenResult(!1);
              CD === ID.h[DD] && await BD.signOut(ZD)
            }
          }
        }
        return (0, fD.isMobileApp)() ? (await bD.b.ready, new nD) : new XD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);