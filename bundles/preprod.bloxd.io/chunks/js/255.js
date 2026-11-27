export const id = 255;
export const ids = [255];
export const modules = {
  37998: (WW, iW, OW) => {
    function mW(WW) {
      return "fetch" === WW || "timeout" === WW || "integrity" === WW ? "download" : "browser"
    }
    OW.d(iW, {
      b: () => EW,
      e: () => cW,
      f: () => tW,
      g: () => LW,
      h: () => PW,
      i: () => wW,
      k: () => mW,
      m: () => NW
    });
    const EW = "https://discord.gg/playbloxd";

    function NW(WW, iW) {
      return "download" === WW ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : "memory" === WW || "noContext" === WW || "graphicsLost" === WW ? {
        icon: "face-dizzy",
        title: `wasmUnsupported:${WW}Title`,
        help: `wasmUnsupported:${WW}Help${iW?"App":""}`,
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: iW ? "wasmUnsupported:titleApp" : "wasmUnsupported:title",
        help: iW ? "wasmUnsupported:helpApp" : "wasmUnsupported:" + ("noWebAssembly" === WW ? "noWebAssemblyHelp" : "help"),
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function PW(WW, iW) {
      return {
        ...NW(WW, iW),
        help: iW ? "wasmUnsupported:stillBlockedHelpApp" : `wasmUnsupported:${WW}StillHelp`
      }
    }

    function LW(WW) {
      return {
        icon: "face-dizzy",
        title: `wasmUnsupported:${WW}Title`,
        help: "wasmScreens:noContextHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      }
    }

    function cW(WW, iW) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: iW ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: WW.code
        },
        discordLink: iW,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function wW() {
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

    function tW(WW, iW, OW) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: OW ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: WW.reason
        },
        discordLink: null === WW.name,
        confirm: iW ? "general:reconnect" : WW.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);