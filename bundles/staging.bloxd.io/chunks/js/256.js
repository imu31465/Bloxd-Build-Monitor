export const id = 256;
export const ids = [256];
export const modules = {
  38320: (rr, Sr, Qr) => {
    function Zr(rr) {
      return "fetch" === rr || "timeout" === rr || "integrity" === rr ? "download" : "browser"
    }
    Qr.d(Sr, {
      d: () => Wr,
      e: () => fr,
      g: () => pr,
      h: () => Ir,
      l: () => jr,
      p: () => Er,
      t: () => Zr,
      u: () => ar
    });
    const Wr = "https://discord.gg/playbloxd";

    function ar(rr, Sr) {
      return "download" === rr ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : "memory" === rr || "noContext" === rr || "graphicsLost" === rr ? {
        icon: "face-dizzy",
        title: `wasmUnsupported:${rr}Title`,
        help: `wasmUnsupported:${rr}Help${Sr?"App":""}`,
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: Sr ? "wasmUnsupported:titleApp" : "wasmUnsupported:title",
        help: Sr ? "wasmUnsupported:helpApp" : "wasmUnsupported:" + ("noWebAssembly" === rr ? "noWebAssemblyHelp" : "help"),
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function jr(rr, Sr) {
      return {
        ...ar(rr, Sr),
        help: Sr ? "wasmUnsupported:stillBlockedHelpApp" : `wasmUnsupported:${rr}StillHelp`
      }
    }

    function Ir(rr) {
      return {
        icon: "face-dizzy",
        title: `wasmUnsupported:${rr}Title`,
        help: "wasmScreens:noContextHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      }
    }

    function fr(rr, Sr) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Sr ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: rr.code
        },
        discordLink: Sr,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Er() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:turnstilePageTitle",
        help: "wasmScreens:turnstilePageHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function pr(rr, Sr, Qr) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: Qr ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: rr.reason
        },
        discordLink: null === rr.name,
        confirm: Sr ? "general:reconnect" : rr.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);