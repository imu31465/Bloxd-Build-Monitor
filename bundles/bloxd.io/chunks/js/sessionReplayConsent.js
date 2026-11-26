export const id = 60;
export const ids = [60];
export const modules = {
  35069: (VV, eV, xV) => {
    xV.d(eV, {
      askReplayConsent: () => vV,
      showReplayConsentFailed: () => rV
    });
    var JV = xV(1220),
      YV = xV(1279),
      UV = xV(1439),
      yV = xV(1612),
      pV = xV(1321);
    const QV = "session-recordings";
    const nV = ["recordedScreen", "recordedInput", "recordedDevice", "recordedNetwork", "recordedKept"];

    function wV() {
      const {
        t: VV
      } = (0, JV.A)();
      return (0, pV.jsxs)("div", {
        className: "ReplayConsentSubtitle",
        children: [(0, pV.jsx)("p", {
          children: VV("sessionReplayConsent:subtitle")
        }), (0, pV.jsxs)("details", {
          className: "ReplayConsentDetails",
          children: [(0, pV.jsx)("summary", {
            children: VV("sessionReplayConsent:whatsRecorded")
          }), (0, pV.jsx)("ul", {
            children: nV.map((eV => (0, pV.jsx)("li", {
              children: VV(`sessionReplayConsent:${eV}`)
            }, eV)))
          }), (0, pV.jsx)(yV.LinkPreserveSearch, {
            to: `/privacy-policy#${QV}`,
            target: "_blank",
            children: VV("sessionReplayConsent:privacyPolicy")
          })]
        })]
      })
    }

    function ZV(VV) {
      const eV = Number(VV),
        xV = (new Date).getFullYear();
      return /^\d{4}$/.test(VV) && eV > xV - 120 && eV <= xV ? null : (0, JV.u)(YV.c.get().getCurrentLanguageCode(), "sessionReplayConsent:yearInvalid")
    }
    async function vV() {
      const VV = "sessionReplayConsent",
        eV = await UV.NotificationProvider.showPromptPopup({
          title: "sessionReplayConsent:title",
          subtitle: (0, pV.jsx)(wV, {}),
          confirmText: "sessionReplayConsent:record",
          cancelText: "sessionReplayConsent:noThanks",
          neutral: !0,
          unlockPointerKey: VV
        }).getResult();
      if ("notificationTornDown" === eV) return null;
      if (!eV) return "no";
      const xV = await UV.NotificationProvider.showInputPopup({
        title: "sessionReplayConsent:birthYearTitle",
        subtitle: "sessionReplayConsent:birthYearWhy",
        placeholderText: "YYYY",
        maxLength: 4,
        inputMode: "numeric",
        submitText: "sessionReplayConsent:continue",
        validate: ZV,
        unlockPointerKey: VV
      }).getResult();
      return "notificationTornDown" === xV ? null : "submit" !== (null === xV || void 0 === xV ? void 0 : xV.type) ? "no" : (JV = Number(xV.value), (new Date).getFullYear() - JV > 18 ? "yes" : "notEligible");
      var JV
    }

    function rV() {
      UV.NotificationProvider.showAlertPopup({
        title: "sessionReplayConsent:failed",
        confirmText: "general:ok"
      })
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);