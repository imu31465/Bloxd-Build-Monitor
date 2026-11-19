export const id = 139;
export const ids = [139];
export const modules = {
  7777: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      BloxdFirebaseSdk: () => Oz
    });
    var Ez = bz(1790),
      nz = bz(2709),
      iz = bz(104),
      lz = bz(96),
      Mz = bz(1638),
      tz = bz(1979);
    const Hz = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    class Oz {
      constructor() {}
      static async setup() {
        try {
          return await Oz.setupInternal()
        } catch (zz) {
          return console.error("Failed to setup Firebase SDK:", zz), null
        }
      }
      static async setupInternal() {
        const zz = await Promise.all([bz.e(256), bz.e(255)]).then((() => bz(39654))),
          uz = await Promise.all([bz.e(256), bz.e(257)]).then((() => bz(39686))),
          pz = await Promise.all([bz.e(256), bz.e(258)]).then((() => bz(39688))),
          dz = zz.initializeApp({
            ...Hz,
            measurementId: nz.e
          });
        (0, nz.H)(), window.gtag("config", nz.e), (0, nz.E)(), window.gtag("config", "AW-16469618203");
        const Fz = uz.getAnalytics(dz),
          Zz = {
            portal: iz.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        uz.setUserProperties(Fz, Zz);
        const Rz = pz.getAuth();
        pz.useDeviceLanguage(Rz);
        const Kz = new pz.GoogleAuthProvider;
        Kz.setCustomParameters({
          prompt: "select_account"
        });
        const wz = new pz.OAuthProvider(Ez.g[Ez.e.APPLE]),
          Xz = new pz.OAuthProvider(Ez.g[Ez.e.MICROSOFT]);
        Xz.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const fz = {
          [Ez.e.GOOGLE]: Kz,
          [Ez.e.APPLE]: wz,
          [Ez.e.MICROSOFT]: Xz
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((zz => {
          const uz = pz.onIdTokenChanged(Rz, (bz => {
            uz(), zz()
          }))
        }));
        class sz extends Oz {
          setUserProperties(zz) {
            uz.setUserProperties(Fz, zz)
          }
          onIdTokenChanged(zz) {
            pz.onIdTokenChanged(Rz, zz)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(zz) {
            var uz;
            const bz = await pz.signInWithPopup(Rz, fz[zz]);
            return null !== (uz = null === bz || void 0 === bz ? void 0 : bz.user) && void 0 !== uz ? uz : null
          }
          async getCurrentUser(zz) {
            const uz = Rz.currentUser;
            if (!uz) return null;
            const {
              signInProvider: bz
            } = await uz.getIdTokenResult(!1);
            return bz === Ez.g[zz] ? uz : null
          }
          async signOut(zz) {
            null !== await this.getCurrentUser(zz) && await pz.signOut(Rz)
          }
        }
        async function rz(zz, uz) {
          const bz = await Mz.d.request(`${zz}.${uz}`, {});
          if (null === bz) return null;
          const Ez = "google" === zz ? pz.GoogleAuthProvider.credential(bz.idToken) : wz.credential({
            idToken: bz.idToken
          });
          return (await pz.signInWithCredential(Rz, Ez)).user
        }
        class oz extends Oz {
          setUserProperties(zz) {
            uz.setUserProperties(Fz, zz)
          }
          onIdTokenChanged(zz) {
            pz.onIdTokenChanged(Rz, zz)
          }
          canSignIn(zz) {
            return null !== (0, tz.d)(zz)
          }
          async signInWithPopup(zz) {
            const uz = (0, tz.d)(zz);
            if (null === uz) return console.warn(`The app can't sign in with ${zz}; check canSignIn first`), null;
            try {
              return await rz(uz, "signIn")
            } catch (bz) {
              return console.error(`Failed to sign in with ${zz} in the app:`, bz), null
            }
          }
          async getCurrentUser(zz) {
            const uz = Rz.currentUser;
            if (uz) {
              const {
                signInProvider: bz
              } = await uz.getIdTokenResult(!1);
              if (bz === Ez.g[zz]) return uz
            }
            const bz = (0, tz.d)(zz);
            if (null === bz) return null;
            try {
              return await rz(bz, "getCurrentUser")
            } catch (nz) {
              return console.error(`Failed to get the current ${zz} user from the app:`, nz), null
            }
          }
          async signOut(zz) {
            const uz = (0, tz.d)(zz);
            null !== uz && Mz.d.request(`${uz}.signOut`, {}).catch((uz => {
              console.error(`Failed to sign out of ${zz} in the app:`, uz)
            }));
            const bz = Rz.currentUser;
            if (bz) {
              const {
                signInProvider: uz
              } = await bz.getIdTokenResult(!1);
              uz === Ez.g[zz] && await pz.signOut(Rz)
            }
          }
        }
        return (0, lz.isMobileApp)() ? (await Mz.d.ready, new oz) : new sz
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);