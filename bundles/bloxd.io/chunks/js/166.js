export const id = 166;
export const ids = [166];
export const modules = {
  7896: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      BloxdFirebaseSdk: () => Ub
    });
    var eb = Mb(2040),
      Hb = Mb(4155),
      pb = Mb(122),
      Vb = Mb(110),
      gb = Mb(1889),
      lb = Mb(2248);
    const Lb = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97"
    };
    var Ib = Mb(1987),
      Ob = Mb(1925);
    class Ub {
      constructor() {}
      static async setup() {
        try {
          return await Ub.setupInternal()
        } catch (bb) {
          return console.error("Failed to setup Firebase SDK:", bb), null
        }
      }
      static async setupInternal() {
        const bb = await Promise.all([Mb.e(304), Mb.e(303)]).then((() => Mb(42183))),
          wb = await Promise.all([Mb.e(304), Mb.e(305)]).then((() => Mb(42204))),
          tb = await Promise.all([Mb.e(304), Mb.e(306)]).then((() => Mb(42208))),
          Cb = bb.initializeApp({
            ...Lb,
            measurementId: Hb.bloxdGa4MeasurementId
          });
        (0, Hb.setUpGtag)(), window.gtag("config", Hb.bloxdGa4MeasurementId), (0, Hb.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
        const Eb = wb.getAnalytics(Cb),
          Fb = {
            portal: pb.currentUrl.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        wb.setUserProperties(Eb, Fb);
        const Bb = tb.initializeAuth(Cb, {
          persistence: [tb.indexedDBLocalPersistence, tb.browserLocalPersistence, tb.browserSessionPersistence],
          popupRedirectResolver: (0, Vb.isMobileApp)() ? void 0 : tb.browserPopupRedirectResolver
        });
        tb.useDeviceLanguage(Bb);
        const sb = new tb.GoogleAuthProvider;
        sb.setCustomParameters({
          prompt: "select_account"
        });
        const mb = new tb.OAuthProvider(eb.j[eb.d.APPLE]),
          hb = new tb.OAuthProvider(eb.j[eb.d.MICROSOFT]);
        hb.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const zb = {
          [eb.d.GOOGLE]: sb,
          [eb.d.APPLE]: mb,
          [eb.d.MICROSOFT]: hb
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise((bb => {
          const wb = tb.onIdTokenChanged(Bb, (Mb => {
            wb(), bb()
          }))
        }));
        class Xb extends Ub {
          setUserProperties(bb) {
            wb.setUserProperties(Eb, bb)
          }
          onIdTokenChanged(bb) {
            tb.onIdTokenChanged(Bb, bb)
          }
          canSignIn() {
            return !0
          }
          async signInWithPopup(bb) {
            var wb;
            const Mb = await tb.signInWithPopup(Bb, zb[bb]);
            return null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.user) && void 0 !== wb ? wb : null
          }
          async getCurrentUser(bb) {
            const wb = Bb.currentUser;
            if (!wb) return null;
            const {
              signInProvider: Mb
            } = await wb.getIdTokenResult(!1);
            return Mb === eb.j[bb] ? wb : null
          }
          async signOut(bb) {
            null !== await this.getCurrentUser(bb) && await tb.signOut(Bb)
          }
        }
        async function xb(bb, wb) {
          const Mb = await gb.e.request(`${bb}.${wb}`, {});
          if (null === Mb) return null;
          const eb = "google" === bb ? tb.GoogleAuthProvider.credential(Mb.idToken) : mb.credential({
            idToken: Mb.idToken
          });
          return (await tb.signInWithCredential(Bb, eb)).user
        }
        class jb extends Ub {
          setUserProperties(bb) {
            wb.setUserProperties(Eb, bb)
          }
          onIdTokenChanged(bb) {
            tb.onIdTokenChanged(Bb, bb)
          }
          canSignIn(bb) {
            return null !== (0, lb.d)(bb)
          }
          async signInWithPopup(bb) {
            const wb = (0, lb.d)(bb);
            if (null === wb) return console.warn(`The app can't sign in with ${bb}; check canSignIn first`), null;
            try {
              return await xb(wb, "signIn")
            } catch (Mb) {
              if (Mb instanceof Ob.e && "timeout" === Mb.code) return null;
              throw (0, Ib.reportClientError)("login_failed", Mb, `app_${wb}`), Mb
            }
          }
          async getCurrentUser(bb) {
            const wb = Bb.currentUser;
            if (wb) {
              const {
                signInProvider: Mb
              } = await wb.getIdTokenResult(!1);
              if (Mb === eb.j[bb]) return wb
            }
            const Mb = (0, lb.d)(bb);
            if (null === Mb) return null;
            try {
              return await xb(Mb, "getCurrentUser")
            } catch (Hb) {
              return console.error(`Failed to get the current ${bb} user from the app:`, Hb), null
            }
          }
          async signOut(bb) {
            const wb = (0, lb.d)(bb);
            null !== wb && gb.e.request(`${wb}.signOut`, {}).catch((wb => {
              console.error(`Failed to sign out of ${bb} in the app:`, wb)
            }));
            const Mb = Bb.currentUser;
            if (Mb) {
              const {
                signInProvider: wb
              } = await Mb.getIdTokenResult(!1);
              wb === eb.j[bb] && await tb.signOut(Bb)
            }
          }
        }
        return (0, Vb.isMobileApp)() ? (await gb.e.ready, new jb) : new Xb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);