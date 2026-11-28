export const id = 256;
export const ids = [256];
export const modules = {
  38397: (dd, Od, md) => {
    function Wd(dd) {
      return "fetch" === dd || "timeout" === dd || "integrity" === dd ? "download" : "browser"
    }
    md.d(Od, {
      d: () => Fd,
      f: () => hd,
      i: () => Qd,
      l: () => Kd,
      o: () => Xd,
      q: () => vd,
      u: () => Wd,
      v: () => Rd
    });
    const Fd = "https://discord.gg/playbloxd";

    function Rd(dd, Od) {
      return "download" === dd ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : "memory" === dd || "noContext" === dd || "graphicsLost" === dd ? {
        icon: "face-dizzy",
        title: `wasmUnsupported:${dd}Title`,
        help: `wasmUnsupported:${dd}Help${Od?"App":""}`,
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: Od ? "wasmUnsupported:titleApp" : "wasmUnsupported:title",
        help: Od ? "wasmUnsupported:helpApp" : "wasmUnsupported:" + ("noWebAssembly" === dd ? "noWebAssemblyHelp" : "help"),
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function Xd(dd, Od) {
      return {
        ...Rd(dd, Od),
        help: Od ? "wasmUnsupported:stillBlockedHelpApp" : `wasmUnsupported:${dd}StillHelp`
      }
    }

    function Kd(dd) {
      return {
        icon: "face-dizzy",
        title: `wasmUnsupported:${dd}Title`,
        help: "wasmScreens:noContextHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      }
    }

    function hd(dd, Od) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Od ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: dd.code
        },
        discordLink: Od,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function vd() {
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

    function Qd(dd, Od, md) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: md ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: dd.reason
        },
        discordLink: null === dd.name,
        confirm: Od ? "general:reconnect" : dd.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);