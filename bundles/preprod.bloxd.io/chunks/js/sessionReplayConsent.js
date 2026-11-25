export const id = 60;
export const ids = [60];
export const modules = {
  34806: (MM, rM, iM) => {
    iM.d(rM, {
      askReplayConsent: () => mM,
      showReplayConsentFailed: () => HM
    });
    var OM = iM(1188),
      SM = iM(1258),
      jM = iM(1429),
      aM = iM(1591),
      PM = iM(1303);
    const nM = "session-recordings";
    const QM = ["recordedScreen", "recordedInput", "recordedDevice", "recordedNetwork", "recordedKept"];

    function zM() {
      const {
        t: MM
      } = (0, OM.A)();
      return (0, PM.jsxs)("div", {
        className: "ReplayConsentSubtitle",
        children: [(0, PM.jsx)("p", {
          children: MM("sessionReplayConsent:subtitle")
        }), (0, PM.jsxs)("details", {
          className: "ReplayConsentDetails",
          children: [(0, PM.jsx)("summary", {
            children: MM("sessionReplayConsent:whatsRecorded")
          }), (0, PM.jsx)("ul", {
            children: QM.map((rM => (0, PM.jsx)("li", {
              children: MM(`sessionReplayConsent:${rM}`)
            }, rM)))
          }), (0, PM.jsx)(aM.LinkPreserveSearch, {
            to: `/privacy-policy#${nM}`,
            target: "_blank",
            children: MM("sessionReplayConsent:privacyPolicy")
          })]
        })]
      })
    }

    function LM(MM) {
      const rM = Number(MM),
        iM = (new Date).getFullYear();
      return /^\d{4}$/.test(MM) && rM > iM - 120 && rM <= iM ? null : (0, OM.x)(SM.e.get().getCurrentLanguageCode(), "sessionReplayConsent:yearInvalid")
    }
    async function mM() {
      const MM = "sessionReplayConsent",
        rM = await jM.NotificationProvider.showPromptPopup({
          title: "sessionReplayConsent:title",
          subtitle: (0, PM.jsx)(zM, {}),
          confirmText: "sessionReplayConsent:record",
          cancelText: "sessionReplayConsent:noThanks",
          neutral: !0,
          unlockPointerKey: MM
        }).getResult();
      if ("notificationTornDown" === rM) return null;
      if (!rM) return "no";
      const iM = await jM.NotificationProvider.showInputPopup({
        title: "sessionReplayConsent:birthYearTitle",
        subtitle: "sessionReplayConsent:birthYearWhy",
        placeholderText: "YYYY",
        maxLength: 4,
        inputMode: "numeric",
        submitText: "sessionReplayConsent:continue",
        validate: LM,
        unlockPointerKey: MM
      }).getResult();
      return "notificationTornDown" === iM ? null : "submit" !== (null === iM || void 0 === iM ? void 0 : iM.type) ? "no" : (OM = Number(iM.value), (new Date).getFullYear() - OM > 18 ? "yes" : "notEligible");
      var OM
    }

    function HM() {
      jM.NotificationProvider.showAlertPopup({
        title: "sessionReplayConsent:failed",
        confirmText: "general:ok"
      })
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);