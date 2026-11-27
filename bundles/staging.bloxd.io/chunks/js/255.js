export const id = 255;
export const ids = [255];
export const modules = {
  37958: (RR, JR, GR) => {
    function yR(RR) {
      return "fetch" === RR || "timeout" === RR || "integrity" === RR ? "download" : "browser"
    }
    GR.d(JR, {
      d: () => tR,
      e: () => iR,
      f: () => VR,
      j: () => qR,
      k: () => ZR,
      n: () => fR,
      p: () => yR,
      t: () => uR
    });
    const tR = "https://discord.gg/playbloxd";

    function uR(RR, JR) {
      return "download" === RR ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : "memory" === RR || "noContext" === RR || "graphicsLost" === RR ? {
        icon: "face-dizzy",
        title: `wasmUnsupported:${RR}Title`,
        help: `wasmUnsupported:${RR}Help${JR?"App":""}`,
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: JR ? "wasmUnsupported:titleApp" : "wasmUnsupported:title",
        help: JR ? "wasmUnsupported:helpApp" : "wasmUnsupported:" + ("noWebAssembly" === RR ? "noWebAssemblyHelp" : "help"),
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function ZR(RR, JR) {
      return {
        ...uR(RR, JR),
        help: JR ? "wasmUnsupported:stillBlockedHelpApp" : `wasmUnsupported:${RR}StillHelp`
      }
    }

    function qR(RR) {
      return {
        icon: "face-dizzy",
        title: `wasmUnsupported:${RR}Title`,
        help: "wasmScreens:noContextHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      }
    }

    function iR(RR, JR) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: JR ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: RR.code
        },
        discordLink: JR,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function fR() {
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

    function VR(RR, JR, GR) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: GR ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: RR.reason
        },
        discordLink: null === RR.name,
        confirm: JR ? "general:reconnect" : RR.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);