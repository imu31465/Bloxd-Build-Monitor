export const id = 256;
export const ids = [256];
export const modules = {
  38062: (bb, wb, Mb) => {
    function eb(bb) {
      return "fetch" === bb || "timeout" === bb || "integrity" === bb ? "download" : "browser"
    }
    Mb.d(wb, {
      b: () => Hb,
      d: () => lb,
      g: () => Ib,
      k: () => gb,
      l: () => Vb,
      m: () => Lb,
      p: () => eb,
      q: () => pb
    });
    const Hb = "https://discord.gg/playbloxd";

    function pb(bb, wb) {
      return "download" === bb ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : "memory" === bb || "noContext" === bb || "graphicsLost" === bb ? {
        icon: "face-dizzy",
        title: `wasmUnsupported:${bb}Title`,
        help: `wasmUnsupported:${bb}Help${wb?"App":""}`,
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: wb ? "wasmUnsupported:titleApp" : "wasmUnsupported:title",
        help: wb ? "wasmUnsupported:helpApp" : "wasmUnsupported:" + ("noWebAssembly" === bb ? "noWebAssemblyHelp" : "help"),
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function Vb(bb, wb) {
      return {
        ...pb(bb, wb),
        help: wb ? "wasmUnsupported:stillBlockedHelpApp" : `wasmUnsupported:${bb}StillHelp`
      }
    }

    function gb(bb) {
      return {
        icon: "face-dizzy",
        title: `wasmUnsupported:${bb}Title`,
        help: "wasmScreens:noContextHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      }
    }

    function lb(bb, wb) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: wb ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: bb.code
        },
        discordLink: wb,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Lb() {
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

    function Ib(bb, wb, Mb) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: Mb ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: bb.reason
        },
        discordLink: null === bb.name,
        confirm: wb ? "general:reconnect" : bb.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);