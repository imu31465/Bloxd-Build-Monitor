export const id = 145;
export const ids = [145];
export const modules = {
  8111: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      BloxdFirebaseSdk: () => UD
    });
    var pD = wD(1837),
      sD = wD(2901),
      KD = wD(113),
      rD = wD(103),
      LD = wD(1702),
      cD = wD(2035);
    const gD = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var RD = wD(2925),
      AD = wD(1724);
    class UD {
      constructor() {}
      static async setup() {
        try {
          return await UD.setupInternal()
        } catch (DD) {
          return console.error("Failed to setup Firebase SDK:", DD), null
        }
      }
      static async setupInternal() {
        const DD = await Promise.all([wD.e(266), wD.e(265)]).then((() => wD(40424))),
          zD = await Promise.all([wD.e(266), wD.e(267)]).then((() => wD(40450))),
          fD = await Promise.all([wD.e(266), wD.e(268)]).then((() => wD(40455))),
          ID = DD.initializeApp({
            ...gD,
            measurementId: sD.b
          });
        (0, sD.E)(), window.gtag("config", sD.b), (0, sD.z)(), window.gtag("config", "AW-16469618203");
        const BD = zD.getAnalytics(ID),
          GD = {
            portal: KD.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        zD.setUserProperties(BD, GD);
        const hD = fD.initializeAuth(ID, {
          persistence: [fD.indexedDBLocalPersistence, fD.browserLocalPersistence, fD.browserSessionPersistence],
          popupRedirectResolver: (0, rD.isMobileApp)() ? void 0 : fD.browserPopupRedirectResolver
        });
        fD.useDeviceLanguage(hD);
        const nD = new fD.GoogleAuthProvider;
        nD.setCustomParameters({
          prompt: "select_account"
        });
        const MD = new fD.OAuthProvider(pD.g[pD.d.APPLE]),
          OD = new fD.OAuthProvider(pD.g[pD.d.MICROSOFT]);
        OD.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const JD = {
          [pD.d.GOOGLE]: nD,
          [pD.d.APPLE]: MD,
          [pD.d.MICROSOFT]: OD
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((DD => {
          const zD = fD.onIdTokenChanged(hD, (wD => {
            zD(), DD()
          }))
        }));
        class ED extends UD {
          setUserProperties(DD) {
            zD.setUserProperties(BD, DD)
          }
          onIdTokenChanged(DD) {
            fD.onIdTokenChanged(hD, DD)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(DD) {
            var zD;
            const wD = await fD.signInWithPopup(hD, JD[DD]);
            return null !== (zD = null === wD || void 0 === wD ? void 0 : wD.user) && void 0 !== zD ? zD : null
          }
          async getCurrentUser(DD) {
            const zD = hD.currentUser;
            if (!zD) return null;
            const {
              signInProvider: wD
            } = await zD.getIdTokenResult(!1);
            return wD === pD.g[DD] ? zD : null
          }
          async signOut(DD) {
            null !== await this.getCurrentUser(DD) && await fD.signOut(hD)
          }
        }
        async function QD(DD, zD) {
          const wD = await LD.c.request(`${DD}.${zD}`, {});
          if (null === wD) return null;
          const pD = "google" === DD ? fD.GoogleAuthProvider.credential(wD.idToken) : MD.credential({
            idToken: wD.idToken
          });
          return (await fD.signInWithCredential(hD, pD)).user
        }
        class XD extends UD {
          setUserProperties(DD) {
            zD.setUserProperties(BD, DD)
          }
          onIdTokenChanged(DD) {
            fD.onIdTokenChanged(hD, DD)
          }
          canSignIn(DD) {
            return null !== (0, cD.e)(DD)
          }
          async signInWithPopup(DD) {
            const zD = (0, cD.e)(DD);
            if (null === zD) return console.warn(`The app can't sign in with ${DD}; check canSignIn first`), null;
            try {
              return await QD(zD, "signIn")
            } catch (wD) {
              if (wD instanceof AD.c && "timeout" === wD.code) return null;
              throw (0, RD.reportClientError)("login_failed", wD, `app_${zD}`), wD
            }
          }
          async getCurrentUser(DD) {
            const zD = hD.currentUser;
            if (zD) {
              const {
                signInProvider: wD
              } = await zD.getIdTokenResult(!1);
              if (wD === pD.g[DD]) return zD
            }
            const wD = (0, cD.e)(DD);
            if (null === wD) return null;
            try {
              return await QD(wD, "getCurrentUser")
            } catch (sD) {
              return console.error(`Failed to get the current ${DD} user from the app:`, sD), null
            }
          }
          async signOut(DD) {
            const zD = (0, cD.e)(DD);
            null !== zD && LD.c.request(`${zD}.signOut`, {}).catch((zD => {
              console.error(`Failed to sign out of ${DD} in the app:`, zD)
            }));
            const wD = hD.currentUser;
            if (wD) {
              const {
                signInProvider: zD
              } = await wD.getIdTokenResult(!1);
              zD === pD.g[DD] && await fD.signOut(hD)
            }
          }
        }
        return (0, rD.isMobileApp)() ? (await LD.c.ready, new XD) : new ED
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);