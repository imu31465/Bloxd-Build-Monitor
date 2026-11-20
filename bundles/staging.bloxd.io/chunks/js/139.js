export const id = 139;
export const ids = [139];
export const modules = {
  7605: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      BloxdFirebaseSdk: () => Kz
    });
    var Fz = sz(1770),
      Wz = sz(2662),
      Xz = sz(116),
      Oz = sz(106),
      oz = sz(1636),
      vz = sz(1983);
    const Uz = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    class Kz {
      constructor() {}
      static async setup() {
        try {
          return await Kz.setupInternal()
        } catch (zz) {
          return console.error("Failed to setup Firebase SDK:", zz), null
        }
      }
      static async setupInternal() {
        const zz = await Promise.all([sz.e(256), sz.e(255)]).then((() => sz(39641))),
          tz = await Promise.all([sz.e(256), sz.e(257)]).then((() => sz(39669))),
          uz = await Promise.all([sz.e(256), sz.e(258)]).then((() => sz(39675))),
          Nz = zz.initializeApp({
            ...Uz,
            measurementId: Wz.e
          });
        (0, Wz.D)(), window.gtag("config", Wz.e), (0, Wz.z)(), window.gtag("config", "AW-16469618203");
        const bz = tz.getAnalytics(Nz),
          wz = {
            portal: Xz.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        tz.setUserProperties(bz, wz);
        const Dz = uz.getAuth();
        uz.useDeviceLanguage(Dz);
        const gz = new uz.GoogleAuthProvider;
        gz.setCustomParameters({
          prompt: "select_account"
        });
        const Hz = new uz.OAuthProvider(Fz.j[Fz.d.APPLE]),
          Bz = new uz.OAuthProvider(Fz.j[Fz.d.MICROSOFT]);
        Bz.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const Pz = {
          [Fz.d.GOOGLE]: gz,
          [Fz.d.APPLE]: Hz,
          [Fz.d.MICROSOFT]: Bz
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((zz => {
          const tz = uz.onIdTokenChanged(Dz, (sz => {
            tz(), zz()
          }))
        }));
        class rz extends Kz {
          setUserProperties(zz) {
            tz.setUserProperties(bz, zz)
          }
          onIdTokenChanged(zz) {
            uz.onIdTokenChanged(Dz, zz)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(zz) {
            var tz;
            const sz = await uz.signInWithPopup(Dz, Pz[zz]);
            return null !== (tz = null === sz || void 0 === sz ? void 0 : sz.user) && void 0 !== tz ? tz : null
          }
          async getCurrentUser(zz) {
            const tz = Dz.currentUser;
            if (!tz) return null;
            const {
              signInProvider: sz
            } = await tz.getIdTokenResult(!1);
            return sz === Fz.j[zz] ? tz : null
          }
          async signOut(zz) {
            null !== await this.getCurrentUser(zz) && await uz.signOut(Dz)
          }
        }
        async function Yz(zz, tz) {
          const sz = await oz.c.request(`${zz}.${tz}`, {});
          if (null === sz) return null;
          const Fz = "google" === zz ? uz.GoogleAuthProvider.credential(sz.idToken) : Hz.credential({
            idToken: sz.idToken
          });
          return (await uz.signInWithCredential(Dz, Fz)).user
        }
        class xz extends Kz {
          setUserProperties(zz) {
            tz.setUserProperties(bz, zz)
          }
          onIdTokenChanged(zz) {
            uz.onIdTokenChanged(Dz, zz)
          }
          canSignIn(zz) {
            return null !== (0, vz.d)(zz)
          }
          async signInWithPopup(zz) {
            const tz = (0, vz.d)(zz);
            if (null === tz) return console.warn(`The app can't sign in with ${zz}; check canSignIn first`), null;
            try {
              return await Yz(tz, "signIn")
            } catch (sz) {
              return console.error(`Failed to sign in with ${zz} in the app:`, sz), null
            }
          }
          async getCurrentUser(zz) {
            const tz = Dz.currentUser;
            if (tz) {
              const {
                signInProvider: sz
              } = await tz.getIdTokenResult(!1);
              if (sz === Fz.j[zz]) return tz
            }
            const sz = (0, vz.d)(zz);
            if (null === sz) return null;
            try {
              return await Yz(sz, "getCurrentUser")
            } catch (Wz) {
              return console.error(`Failed to get the current ${zz} user from the app:`, Wz), null
            }
          }
          async signOut(zz) {
            const tz = (0, vz.d)(zz);
            null !== tz && oz.c.request(`${tz}.signOut`, {}).catch((tz => {
              console.error(`Failed to sign out of ${zz} in the app:`, tz)
            }));
            const sz = Dz.currentUser;
            if (sz) {
              const {
                signInProvider: tz
              } = await sz.getIdTokenResult(!1);
              tz === Fz.j[zz] && await uz.signOut(Dz)
            }
          }
        }
        return (0, Oz.isMobileApp)() ? (await oz.c.ready, new xz) : new rz
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);