export const id = 119;
export const ids = [119];
export const modules = {
  6306: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Bu
    });
    var Eu = yu(1300),
      Ku = yu(64),
      Qu = yu(122),
      mu = yu(1483),
      Ju = yu(1207),
      Nu = yu(330),
      Xu = yu(624);
    const Vu = new URL(Ju.k[Nu.e.PRODUCTION]).origin;
    var ru = yu(1079);

    function Bu() {
      const uu = (0, mu.A)();
      return (0, Ku.useEffect)((() => {
        const Ru = Qu.currentUrl.getSearchParam("code");
        Qu.currentUrl.removeSearchParam("code"), null === Ru && (console.error("No authorization code found in the URL"), window.close());
        const yu = {
          type: `oauth_authentication_${uu.providerName}`,
          code: Ru
        };
        for (const uu of (Ku = window.location.origin) === Vu ? [Ku, `https://${Xu.d}`] : [Ku]) {
          var Eu;
          null === (Eu = window.opener) || void 0 === Eu || Eu.postMessage(yu, uu)
        }
        var Ku;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, ru.jsx)("div", {
        className: "AuthCallback",
        children: (0, ru.jsx)(Eu.b, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);