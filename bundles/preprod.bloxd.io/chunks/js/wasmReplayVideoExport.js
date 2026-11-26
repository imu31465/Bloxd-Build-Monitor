export const id = 78;
export const ids = [72, 78, 108];
export const modules = {
  37717: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => YU,
      f: () => NU
    });
    var cU = zU(646),
      yU = zU(42),
      QU = zU(37674);
    const AU = "replayFileKeptForReload",
      FU = "replayFileKeptForReloadAt",
      oU = "replayFileKeptForReloadTab",
      DU = 3e5,
      EU = 5e3;
    async function YU(UU, XU) {
      const zU = Date.now(),
        QU = {
          at: zU,
          bytes: UU,
          source: XU
        },
        DU = await Promise.race([(async () => await yU.g.setItem(FU, zU) && yU.g.setItem(AU, QU))(), (0, cU.S)(EU).then((() => !1))]);
      DU || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const YU = {
        at: zU,
        cY: DU
      };
      yU.n.setItem(oU, YU)
    }
    async function NU() {
      var UU;
      const XU = yU.n.getItem(oU);
      null !== XU && yU.n.removeItem(oU);
      const zU = Date.now(),
        cU = await yU.g.getItem(FU),
        EU = null !== XU && zU - XU.at <= DU,
        YU = null !== XU && cU === XU.at;
      let NU = null;
      if (null !== cU && (YU || ("number" !== typeof cU || zU - cU > DU)) && (NU = EU && YU && XU.cY ? await yU.g.getItem(AU) : null, await Promise.all([yU.g.removeItem(FU), yU.g.removeItem(AU)])), !EU) return null;
      if ((null === (UU = NU) || void 0 === UU ? void 0 : UU.at) !== XU.at) throw new Error(QU.e.replayNotKept.text);
      return {
        bytes: NU.bytes,
        source: NU.source
      }
    }
  },
  37708: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      e: () => QU,
      g: () => yU
    });
    const cU = [9];

    function yU(UU) {
      return cU.includes(UU)
    }

    function QU(UU) {
      return null !== UU && UU >= 3 && UU < cU[0]
    }
  },
  37674: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU,
      i: () => DU,
      l: () => oU
    });
    var cU = zU(31);
    const yU = 1500,
      QU = 1e3,
      AU = {
        recordingStarted: {
          text: "Started recording",
          type: "Success"
        },
        recordingStopped: {
          text: "Stopped recording",
          type: "Success"
        },
        recordingSaved: {
          text: "Recording saved",
          type: "Success"
        },
        clipSaved: {
          text: "Clip saved",
          type: "Success"
        },
        limitReached: {
          text: "Your recording reached its size limit, so it was saved.",
          type: "Warning"
        },
        recordingDiscarded: {
          text: "Your recording stopped and couldn't be saved.",
          type: "Error"
        },
        recordingTurnedOff: {
          text: "This game turned off recording, so your recording was discarded",
          type: "Error",
          timeoutMs: 3e3
        },
        recordingFailed: {
          text: "Your recording couldn't be saved, so try again.",
          type: "Error"
        },
        clipFailed: {
          text: "Your clip couldn't be saved, so try again.",
          type: "Error"
        },
        clipEmpty: {
          text: "Clip buffer is empty",
          type: "Error"
        },
        clippingNotOn: {
          text: "Clipping is not enabled",
          type: "Error"
        },
        disallowed: {
          text: "Recording is turned off in this game",
          type: "Error"
        },
        closeViewerFirst: {
          text: "Close Replay Mode to start recording",
          type: "Error"
        },
        saveBusy: {
          text: "Wait for the last save to finish, then try again.",
          type: "Error"
        },
        saveClosed: {
          text: "The replay closed or changed before it was saved, so save it again.",
          type: "Error"
        },
        cantOpen: {
          text: "This replay can't be opened, so try a different file.",
          type: "Error"
        },
        replayTooOld: {
          text: "This replay was made with an older version of Bloxd and can't be opened.",
          type: "Error"
        },
        replayNotKept: {
          text: "Bloxd updated as your replay opened, so open it again.",
          type: "Error"
        },
        cropFailed: {
          text: "The crop didn't work, so try again.",
          type: "Error"
        },
        cropBusy: {
          text: "Wait for the crop to finish, then try again.",
          type: "Error"
        },
        viewerLoadFailed: {
          text: "The replay viewer didn't load, so try again.",
          type: "Error"
        },
        coreStopped: {
          text: "Reload the page to watch another replay.",
          type: "Error"
        }
      },
      FU = new Set(Object.values(AU).filter((UU => "Error" === UU.type)).map((UU => UU.text)));

    function oU(UU) {
      return UU instanceof Error && FU.has(UU.message) ? UU.message : void 0
    }

    function DU(UU) {
      var XU;
      const zU = null !== (XU = UU.timeoutMs) && void 0 !== XU ? XU : "Error" === UU.type ? yU : QU;
      cU.k.UY("showBottomMessage", {
        message: UU.text,
        timeoutLength: zU,
        type: UU.type
      })
    }
  },
  37728: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      g: () => yU
    });
    const cU = "data-replay-ui-active",
      yU = [{
        group: "middleTextTop",
        dataAttr: "data-replay-hide-middle-text-top",
        label: "Middle text top"
      }, {
        group: "middleTextUpper",
        dataAttr: "data-replay-hide-middle-text-upper",
        label: "Middle text upper"
      }, {
        group: "middleTextLower",
        dataAttr: "data-replay-hide-middle-text-lower",
        label: "Middle text lower"
      }, {
        group: "rightInfoText",
        dataAttr: "data-replay-hide-right-info-text",
        label: "Right info text"
      }, {
        group: "crosshair",
        dataAttr: "data-replay-hide-crosshair",
        label: "Crosshair"
      }, {
        group: "flyingMiddleText",
        dataAttr: "data-replay-hide-flying-middle-text",
        label: "Flying middle text"
      }, {
        group: "hotbar",
        dataAttr: "data-replay-hide-hotbar",
        label: "Hotbar (shop, inventory, item name)"
      }, {
        group: "auraBar",
        dataAttr: "data-replay-hide-aura-bar",
        label: "Aura XP bar"
      }, {
        group: "healthAndShield",
        dataAttr: "data-replay-hide-health-and-shield",
        label: "Health bar and shield bar"
      }, {
        group: "effectInfo",
        dataAttr: "data-replay-hide-effect-info",
        label: "Effect info"
      }, {
        group: "nametag",
        dataAttr: null,
        label: "Nametags"
      }, {
        group: "everythingElse",
        dataAttr: "data-replay-hide-everything-else",
        label: "Everything else"
      }]
  },
  37732: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => DU,
      g: () => YU,
      h: () => EU
    });
    var cU = zU(27),
      yU = zU(31),
      QU = zU(37728);

    function AU() {
      const UU = {};
      for (const {
          group: XU
        }
        of QU.g) UU[XU] = !0;
      return UU
    }
    let FU = AU();

    function oU() {
      yU.k.UY("replayViewer|uiVisibilityChanged")
    }

    function DU() {
      return FU
    }

    function EU(UU, XU) {
      FU[UU] !== XU && (FU = {
        ...FU,
        [UU]: XU
      }, "nametag" === UU && cU.e.set({
        areNametagsHidden: !XU
      }), oU())
    }

    function YU() {
      FU = AU(), cU.e.set({
        areNametagsHidden: !1
      }), oU()
    }
  },
  40119: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => wU
    });
    var cU = zU(1817),
      yU = zU(1410),
      QU = zU(61),
      AU = zU(1106),
      FU = zU.n(AU),
      oU = zU(1494),
      DU = zU(97);
    const EU = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      YU = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function NU(UU) {
      return "webm" === UU ? EU : YU
    }

    function IU(UU) {
      for (const XU of UU)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(XU)) return XU;
      return null
    }

    function pU(UU) {
      return null !== IU(NU(UU))
    }
    var aU = zU(1305);
    const tU = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function gU() {
      return pU("webm") ? "webm" : pU("mp4") ? "mp4" : "webm"
    }

    function kU(UU) {
      let {
        cards: XU
      } = UU;
      return (0, aU.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: XU.map((UU => (0, aU.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, aU.jsx)("div", {
            className: FU()("ReplayVideoExportOptionCard", {
              Selected: UU.selected,
              Disabled: UU.disabled
            }),
            onClick: () => {
              UU.disabled || UU.onSelect()
            },
            children: (0, aU.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, aU.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: UU.label
              }), (0, aU.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: UU.description
              })]
            })
          }), UU.disabled && UU.disabledReason && (0, aU.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: UU.disabledReason
          })]
        }, UU.id)))
      })
    }
    const GU = (0, QU.memo)((function(UU) {
      let {
        hasPlaybackMark: XU,
        canIncludeUi: zU,
        includeUiDisabledReason: cU,
        selectionRef: yU,
        closePopup: AU
      } = UU;
      const FU = pU("webm") || pU("mp4"),
        [EU, YU] = (0, QU.useState)(gU),
        [NU, IU] = (0, QU.useState)(zU),
        GU = FU && pU(EU);
      if (!FU) {
        const UU = (0, DU.isMobile)() ? "screen recording" : "OBS";
        return (0, aU.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, aU.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, aU.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${UU}.`
          }), (0, aU.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, aU.jsx)(oU.G, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                yU.options = null, AU()
              },
              children: "Close"
            })
          })]
        })
      }
      const BU = XU ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        ZU = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !NU,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            IU(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: NU,
          disabled: !zU,
          disabledReason: cU,
          onSelect: () => {
            IU(!0)
          }
        }],
        RU = tU.map((UU => {
          const XU = pU(UU.id);
          return {
            id: UU.id,
            label: UU.label,
            description: UU.description,
            selected: EU === UU.id,
            disabled: !XU,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              YU(UU.id)
            }
          }
        }));
      return (0, aU.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, aU.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, aU.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: BU
        }), (0, aU.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, aU.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, aU.jsx)(kU, {
            cards: ZU
          })]
        }), (0, aU.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, aU.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, aU.jsx)(kU, {
            cards: RU
          })]
        }), (0, aU.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, aU.jsx)(oU.l, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !GU,
            onClick: () => {
              yU.options = {
                format: EU,
                includeUi: zU && NU
              }, AU()
            },
            children: "Export"
          }), (0, aU.jsx)(oU.G, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              yU.options = null, AU()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var BU = zU(5378),
      ZU = zU(37728),
      RU = zU(37732);
    let PU = null;

    function WU() {
      return function() {
        const UU = (0, RU.d)();
        for (const {
            group: XU,
            dataAttr: zU
          }
          of ZU.g)
          if (zU && UU[XU]) return !0;
        return !1
      }() ? function() {
        var UU;
        return "function" === typeof(null === (UU = navigator.mediaDevices) || void 0 === UU ? void 0 : UU.getDisplayMedia)
      }() ? {
        canIncludeUi: !0,
        includeUiDisabledReason: null
      } : {
        canIncludeUi: !1,
        includeUiDisabledReason: "Not supported on this device"
      } : {
        canIncludeUi: !1,
        includeUiDisabledReason: "No UI to include"
      }
    }
    async function dU(UU, XU, zU) {
      return UU ? async function() {
        const UU = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const XU of UU.getAudioTracks()) XU.stop(), UU.removeTrack(XU);
        return UU
      }(): XU().captureStream(Math.max(1, Math.round(zU)))
    }
    var LU = zU(39900);
    let eU = !1;

    function CU(UU) {
      UU.holdInput(!1), (0, LU.h)(!1)
    }
    async function wU(UU) {
      var XU, zU;
      if ((0, LU.d)() || eU) return;
      const QU = UU();
      if (!QU) return;
      eU = !0;
      let AU = null;
      const FU = QU.playbackMarkInTick,
        {
          canIncludeUi: oU,
          includeUiDisabledReason: DU
        } = WU();
      try {
        AU = await async function(UU) {
          let {
            hasPlaybackMark: XU,
            canIncludeUi: zU,
            includeUiDisabledReason: cU
          } = UU;
          const QU = {
              options: null
            },
            AU = yU.NotificationProvider.showCustomPopup({
              body: UU => (0, aU.jsx)(GU, {
                hasPlaybackMark: XU,
                canIncludeUi: zU,
                includeUiDisabledReason: cU,
                selectionRef: QU,
                closePopup: UU
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await AU.getResult() ? null : QU.options
        }({
          hasPlaybackMark: null !== FU,
          canIncludeUi: oU,
          includeUiDisabledReason: DU
        })
      } finally {
        eU = !1
      }
      if (!AU) return;
      const EU = null !== (XU = null === (zU = QU.startFailure) || void 0 === zU ? void 0 : zU.call(QU)) && void 0 !== XU ? XU : null;
      if (null !== EU) return void yU.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: EU
      });
      if (! function(UU) {
          return !(0, LU.d)() && ((0, LU.h)(!0), UU.holdInput(!0), !0)
        }(QU)) return;
      let YU = null;
      try {
        YU = await dU(AU.includeUi, (() => QU.canvas()), QU.bq)
      } catch (qU) {
        return console.error("Failed to create video stream for export", qU), CU(QU), void yU.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: qU instanceof Error ? qU.message : "Could not start capture."
        })
      }
      let pU = null;
      const tU = [];
      let gU = null,
        kU = null;
      try {
        var ZU, RU, wU;
        pU = QU.playbackSpeed(), QU.closeViewer(), QU.setPlaybackSpeed(1), QU.pause(), QU.seekToTick(null !== FU && void 0 !== FU ? FU : 0);
        const UU = await async function() {
          const UU = BU.Howler.masterGain;
          if (!BU.Howler.ctx || !UU) return null;
          await BU.Howler.ctx.resume();
          const XU = BU.Howler.ctx.createMediaStreamDestination();
          UU.connect(XU), PU = XU;
          const [zU] = XU.stream.getAudioTracks();
          return null !== zU && void 0 !== zU ? zU : null
        }();
        kU = new MediaStream;
        for (const cU of YU.getVideoTracks()) kU.addTrack(cU);
        UU && kU.addTrack(UU);
        const XU = function(UU) {
          const XU = IU(NU(UU));
          if (!XU) throw new Error(`No MediaRecorder mime type available for ${UU}`);
          return XU
        }(AU.format);
        gU = new MediaRecorder(kU, {
          mimeType: XU,
          videoBitsPerSecond: 8e6
        }), gU.ondataavailable = UU => {
          UU.data.size > 0 && tU.push(UU.data)
        };
        const zU = new Promise((UU => {
          gU.onstop = () => {
            UU()
          }
        }));
        await (null === (ZU = QU.seekSettled) || void 0 === ZU ? void 0 : ZU.call(QU));
        const [oU] = YU.getVideoTracks();
        gU.start(250), QU.play();
        const DU = await
        function(UU, XU, zU) {
          return new Promise((cU => {
            let yU = !1;
            const QU = UU => {
                yU || (yU = !0, FU(), XU.removeEventListener("ended", AU), cU(UU))
              },
              AU = () => {
                QU("captureLost")
              },
              FU = UU.watchPlayback((() => {
                UU.isPlaying() || QU("completed")
              }));
            XU.addEventListener("ended", AU), zU.onerror = () => {
              QU("recorderError")
            }, "ended" !== XU.readyState ? UU.isPlaying() || QU("completed") : QU("captureLost")
          }))
        }(QU, oU, gU);
        if (QU.pause(), "inactive" !== gU.state && gU.stop(), await zU, "captureLost" === DU) return void yU.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === DU) return void yU.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const EU = null !== (RU = null === (wU = QU.playbackFailure) || void 0 === wU ? void 0 : wU.call(QU)) && void 0 !== RU ? RU : null;
        if (null !== EU) return void yU.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${EU} Nothing was saved.`
        });
        const aU = new Blob(tU, {
          type: XU
        });
        aU.size > 0 ? (0, cU.c)(aU, function(UU, XU) {
          const zU = function(UU) {
            return "mp4" === UU ? "mp4" : "webm"
          }(XU);
          if (UU) return `${UU.replace(/\.bloxdreplay$/i,"")}.${zU}`;
          return `bloxd-replay-${Date.now()}.${zU}`
        }(QU.fileName(), AU.format)) : yU.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (qU) {
        console.error("Replay video export failed", qU), yU.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: qU instanceof Error ? qU.message : "Something went wrong while exporting."
        })
      } finally {
        if (gU && "inactive" !== gU.state) try {
          gU.stop()
        } catch (qU) {
          console.error("Failed to stop MediaRecorder", qU)
        }! function() {
          const UU = BU.Howler.masterGain;
          if (PU && UU) {
            try {
              UU.disconnect(PU)
            } catch (qU) {
              console.error("Failed to disconnect Howler export tee", qU)
            }
            PU = null
          } else PU = null
        }();
        for (const UU of YU.getTracks()) UU.stop();
        if (kU)
          for (const UU of kU.getTracks()) UU.stop();
        null !== pU && QU.setPlaybackSpeed(pU), QU.pause(), CU(QU), QU.reopenViewer()
      }
    }
  },
  5378: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      Howl: () => yU.Howl,
      Howler: () => yU.Howler,
      musicOutput: () => tU,
      readyAudioContext: () => gU
    });
    var cU, yU = zU(5383),
      QU = zU(3837),
      AU = zU(5092);
    const FU = yU.Howler;

    function oU() {
      var UU, XU;
      if (FU.ctx || !FU.usingWebAudio || "undefined" === typeof AudioContext || !(0, AU.j)()) return;
      const zU = navigator.audioSession;
      let cU;
      "auto" === (null === zU || void 0 === zU ? void 0 : zU.type) && (zU.type = "ambient");
      try {
        cU = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const yU = cU.createGain();
      yU.gain.setValueAtTime(FU._muted ? 0 : null !== (UU = FU._volume) && void 0 !== UU ? UU : 1, cU.currentTime), yU.connect(cU.destination), FU.ctx = cU, FU.masterGain = yU, null === (XU = FU._setup) || void 0 === XU || XU.call(FU)
    }
    FU._mobileUnloaded = !0;
    const DU = FU.volume.bind(yU.Howler);
    FU.volume = function() {
      return oU(), DU(...arguments)
    };
    const EU = FU.mute.bind(yU.Howler);
    FU.mute = UU => (oU(), EU(UU));
    const YU = yU.Howl.prototype,
      NU = YU.init;

    function IU() {
      for (; FU._html5AudioPool.length < FU.html5PoolSize;) {
        const UU = new Audio;
        UU._unlocked = !0, FU._releaseHtml5Audio(UU)
      }
      for (const XU of FU._howls)
        if (!XU._webAudio)
          for (const zU of XU._getSoundIds()) {
            var UU;
            const cU = null === (UU = XU._soundById(zU)) || void 0 === UU ? void 0 : UU._node;
            cU && !cU._unlocked && (cU._unlocked = !0, cU.load())
          }
    }
    YU.init = function(UU) {
      return oU(), NU.call(this, UU)
    }, (0, AU.j)() && (FU._unlockAudio = () => {
      const UU = FU.ctx;
      if (FU._audioUnlocked || !UU) return;
      FU.autoUnlock = !1;
      const XU = UU.createBuffer(1, 1, 22050);
      FU._scratchBuffer = XU;
      const zU = new AbortController;
      let cU = "afterPaint";
      const yU = () => {
          var cU;
          if (FU._audioUnlocked) return;
          null === (cU = FU._autoResume) || void 0 === cU || cU.call(FU);
          const yU = UU.createBufferSource();
          yU.buffer = XU, yU.connect(UU.destination), yU.start(0), UU.resume().catch((() => {})), yU.onended = () => {
            yU.disconnect(0), FU._audioUnlocked = !0, zU.abort();
            for (const UU of FU._howls) UU._emit("unlock")
          }
        },
        oU = () => {
          IU(), yU()
        },
        DU = XU => {
          if (IU(), "inTap" === cU) {
            if ("running" === UU.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), yU()
          } else "afterPaint" === cU && (cU = "queued", (0, QU.d)(XU.timeStamp, (() => {
            cU = "inTap", yU()
          })))
        };
      for (const QU of ["touchstart", "touchend"]) document.addEventListener(QU, oU, {
        capture: !0,
        signal: zU.signal
      });
      for (const QU of AU.c) document.addEventListener(QU, DU, {
        capture: !0,
        signal: zU.signal
      })
    });
    let pU = 0;
    const aU = null === (cU = FU._autoSuspend) || void 0 === cU ? void 0 : cU.bind(yU.Howler);

    function tU() {
      gU();
      const {
        ctx: UU,
        masterGain: XU
      } = FU;
      return UU && XU ? {
        ctx: UU,
        destination: XU,
        holdAwake: UU => {
          var XU, zU;
          (pU += UU ? 1 : -1, UU) ? null === (XU = FU._autoResume) || void 0 === XU || XU.call(FU): null === (zU = FU._autoSuspend) || void 0 === zU || zU.call(FU)
        },
        wake: () => {
          var XU;
          "running" !== UU.state && (null === (XU = FU._autoResume) || void 0 === XU || XU.call(FU), UU.resume().catch((() => {})))
        }
      } : null
    }

    function gU() {
      var UU;
      (FU.volume(), FU.ctx && FU.autoUnlock) && (null === (UU = FU._unlockAudio) || void 0 === UU || UU.call(FU))
    }
    aU && (FU._autoSuspend = () => pU > 0 ? yU.Howler : aU())
  },
  53645: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU,
      f: () => yU
    });
    const cU = ["recording", "freecam", "keyframe"];

    function yU() {
      const UU = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(UU[1]) << 32n | BigInt(UU[0])
    }
  },
  63283: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      HOLD_TIMEOUT_MS: () => DU,
      ReplayViewer: () => YU
    });
    var cU = zU(37674),
      yU = zU(37717),
      QU = zU(37708),
      AU = zU(37732),
      FU = zU(5318),
      oU = zU(53645);
    const DU = 1e4,
      EU = new Set(["Fp"]);
    class YU {
      constructor(UU) {
        var XU;
        this.deps = UU, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (XU = UU.now) && void 0 !== XU ? XU : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== FU.od.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get uD() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? cU.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(UU, XU) {
        var zU, QU, AU, oU;
        const {
          client: DU
        } = this.deps;
        if (!this.playback) {
          if (!DU.setPlayback(!0)) throw new Error(cU.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const EU = this.epoch;
        let YU;
        try {
          YU = await DU.open(UU, (() => (0, yU.b)(UU, XU)))
        } finally {
          this.loadingOpens--
        }
        if (EU !== this.epoch && "reloading" !== YU) throw new Error(cU.e.coreStopped.text);
        if ("opening" !== YU) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const UU = function(UU) {
            switch (UU) {
              case "reloading":
                return null;
              case "stopped":
              case FU.bd.ModuleTrap:
                return cU.e.coreStopped;
              case FU.bd.ModuleLoad:
                return cU.e.viewerLoadFailed;
              case FU.bd.TooLarge:
                return cU.e.cantOpen
            }
          }(YU);
          if (null === UU) return;
          throw new Error(UU.text)
        }
        return this.rejectSave(new Error(cU.e.saveClosed.text)), this.fileName = null !== (zU = null !== (QU = XU.fileName) && void 0 !== QU ? QU : null === (AU = XU.fileHandle) || void 0 === AU ? void 0 : AU.name) && void 0 !== zU ? zU : null, this.fileHandle = null !== (oU = XU.fileHandle) && void 0 !== oU ? oU : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((UU, XU) => {
          this.pendingOpen = {
            resolve: UU,
            reject: XU
          }
        }))
      }
      play() {
        this.holds.has("Fp") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Fp")
      }
      seek(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = this.lastView;
        null !== zU && (XU || UU < zU.LY) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(UU, XU)
      }
      setSpeed(UU) {
        this.deps.client.setSpeed(UU)
      }
      setCameraMode(UU) {
        this.deps.client.setCameraMode(UU)
      }
      cycleCameraMode() {
        const UU = this.lastView;
        null !== UU && UU.state !== FU.od.None && this.setCameraMode(oU.d[(oU.d.indexOf(UU.cameraMode) + 1) % oU.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(UU) {
        this.edited(this.deps.client.setKeyframe(UU))
      }
      moveKeyframe(UU, XU) {
        this.edited(this.deps.client.moveKeyframe(UU, XU))
      }
      deleteKeyframes(UU, XU) {
        this.edited(this.deps.client.deleteKeyframes(UU, XU))
      }
      setMark(UU) {
        this.edited(this.deps.client.setMark(UU))
      }
      crop(UU, XU) {
        return !(XU <= UU) && (null !== this.pendingSave ? (this.deps.notify(cU.e.saveBusy), !1) : !!this.deps.client.crop(UU, XU) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(cU.e.saveBusy.text)) : new Promise(((UU, XU) => {
          const zU = {
            resolve: UU,
            reject: XU
          };
          this.pendingSave = zU, this.editsAtSave = this.edits, this.deps.client.save((0, oU.f)()).then((UU => {
            this.pendingSave === zU && this.saveStarted(UU)
          }), (UU => {
            this.pendingSave === zU && this.rejectSave(UU instanceof Error ? UU : new Error(String(UU)))
          }))
        }))
      }
      saveStarted(UU) {
        switch (UU) {
          case "sealing":
            return;
          case "busy":
            return void this.saveFailed(!0);
          case "refused":
            return void(this.saveRefused = !0);
          case "tooLarge":
            return void this.saveFailed(!1)
        }
      }
      markSaved(UU, XU) {
        var zU, cU;
        this.fileHandle = UU, this.fileName = null !== (zU = null !== (cU = null === UU || void 0 === UU ? void 0 : UU.name) && void 0 !== cU ? cU : XU) && void 0 !== zU ? zU : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(cU.e.coreStopped.text)), this.rejectSave(new Error(cU.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var UU, XU, zU;
        const cU = this.deps.client.view(),
          yU = cU !== this.lastView;
        this.lastView = cU, this.opening && null !== cU && cU.state !== FU.od.None && cU.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, AU.g)()), this.cropAsked ? (this.cropAsked = !1, null !== cU && cU.state === FU.od.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== cU && cU.state !== FU.od.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const QU = 0 === this.settleFrames && 0 === (null !== (UU = null === (XU = (zU = this.deps).meshPending) || void 0 === XU ? void 0 : XU.call(zU)) && void 0 !== UU ? UU : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && QU && this.release("opening"), this.holds.has("seek") && QU && this.release("seek"), this.holds.has("crop") && !this.cropRunning && QU && this.release("crop");
        const oU = this.now();
        for (const [AU, FU] of this.holds) !EU.has(AU) && oU - FU >= DU && this.release(AU);
        this.saveRefused && !this.cropping && this.saveFailed(!1), yU && this.deps.onChange()
      }
      cropped() {
        (0, AU.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(UU) {
        switch (UU.reason) {
          case FU.bd.TooLarge:
            break;
          case FU.bd.Open:
          case FU.bd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const XU = (0, QU.e)(UU.version) ? cU.e.replayTooOld : cU.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(XU), this.settleOpen(new Error(XU.text));
            break
          }
          case FU.bd.Crop:
            if (UU.code === FU.Zc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(cU.e.cropFailed);
            break;
          case FU.bd.ModuleTrap:
          case FU.bd.ModuleLoad:
          case FU.bd.Port:
            this.moduleEnded(UU.reason === FU.bd.ModuleTrap ? cU.e.coreStopped : cU.e.cantOpen);
            break;
          case FU.bd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${UU.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(UU) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(UU), this.settleOpen(new Error(UU.text))
      }
      saveDone(UU) {
        const XU = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === XU || void 0 === XU || XU.resolve(UU)
      }
      saveFailed(UU) {
        this.rejectSave(new Error(UU ? cU.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(UU) {
        UU && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(cU.e.cropBusy.text)) : this.deps.notify(cU.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(UU) {
        const XU = this.pendingOpen;
        this.pendingOpen = null, null === UU ? null === XU || void 0 === XU || XU.resolve() : null === XU || void 0 === XU || XU.reject(UU)
      }
      rejectSave(UU) {
        const XU = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === XU || void 0 === XU || XU.reject(UU)
      }
      hold(UU) {
        const XU = 0 === this.holds.size;
        this.holds.set(UU, this.now()), XU && this.deps.setHoldDraws(!0)
      }
      release(UU) {
        this.holds.delete(UU) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  63276: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      MESH_TAIL_MS: () => DU,
      PLAY_START_TIMEOUT_MS: () => FU,
      startWasmReplayVideoExport: () => YU
    });
    var cU = zU(40119),
      yU = zU(63283),
      QU = zU(5318),
      AU = zU(2591);
    const FU = yU.HOLD_TIMEOUT_MS + 5e3,
      oU = 50,
      DU = 200;

    function EU(UU) {
      var XU;
      return (null === (XU = UU.view) || void 0 === XU ? void 0 : XU.state) === QU.od.Cropping || UU.uD.includes("crop")
    }

    function YU(UU) {
      return (0, cU.c)((() => function(UU) {
        var XU, zU, cU, yU, YU, NU;
        const IU = UU.viewer(),
          pU = null !== (XU = null === IU || void 0 === IU ? void 0 : IU.view) && void 0 !== XU ? XU : null,
          aU = UU.canvas();
        if (!IU || !pU || pU.state === QU.od.None || 0 === pU.totalTicks || !aU || EU(IU)) return null;
        const tU = null !== (zU = UU.now) && void 0 !== zU ? zU : () => performance.now(),
          gU = IU.id,
          kU = () => {
            const XU = UU.viewer();
            return XU === IU && XU.id === gU && XU.isOpen ? XU : null
          },
          GU = Math.min(null !== (cU = null === (yU = pU.mark) || void 0 === yU ? void 0 : yU.outTick) && void 0 !== cU ? cU : 1 / 0, pU.totalTicks - 1);
        let BU = null,
          ZU = !1;
        const RU = () => {
          var UU, XU;
          return (null === (UU = kU()) || void 0 === UU || null === (XU = UU.view) || void 0 === XU ? void 0 : XU.state) === QU.od.Playing
        };
        return {
          bq: QU.Cd,
          playbackMarkInTick: null !== (YU = null === (NU = pU.mark) || void 0 === NU ? void 0 : NU.inTick) && void 0 !== YU ? YU : null,
          startFailure: () => {
            const UU = kU();
            return null === UU ? "Another replay opened. Export it again from there." : EU(UU) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var UU, XU;
            return null !== (UU = null === (XU = kU()) || void 0 === XU ? void 0 : XU.fileName) && void 0 !== UU ? UU : null
          },
          playbackSpeed: () => {
            var UU, XU, zU;
            return null !== (UU = null === (XU = kU()) || void 0 === XU || null === (zU = XU.view) || void 0 === zU ? void 0 : zU.speed) && void 0 !== UU ? UU : 1
          },
          setPlaybackSpeed: UU => {
            var XU;
            null === (XU = kU()) || void 0 === XU || XU.setSpeed(UU)
          },
          play: () => {
            var UU;
            ZU = !1, BU = tU(), null === (UU = kU()) || void 0 === UU || UU.play()
          },
          pause: () => {
            var UU;
            null === (UU = kU()) || void 0 === UU || UU.pause()
          },
          seekToTick: UU => {
            var XU;
            null === (XU = kU()) || void 0 === XU || XU.seek(UU, !0)
          },
          seekSettled: () => new Promise((UU => {
            const XU = setInterval((() => {
              const zU = kU();
              null === zU ? (clearInterval(XU), UU()) : zU.uD.includes("seek") || (clearInterval(XU), setTimeout(UU, DU))
            }), oU)
          })),
          isPlaying: () => {
            var UU, XU, zU;
            return null !== BU && null !== kU() && (!!RU() || !ZU && (null !== (UU = null === (XU = kU()) || void 0 === XU || null === (zU = XU.view) || void 0 === zU ? void 0 : zU.LY) && void 0 !== UU ? UU : 0) < GU && tU() - BU < FU)
          },
          watchPlayback: XU => {
            const zU = UU.watchViewer((() => {
                ZU ||= null !== BU && RU(), XU()
              })),
              cU = setTimeout(XU, FU + 1);
            return () => {
              clearTimeout(cU), zU()
            }
          },
          playbackFailure: () => {
            var UU, XU;
            const zU = kU();
            return null === zU ? "The replay closed before the video finished." : (null !== (UU = null === (XU = zU.view) || void 0 === XU ? void 0 : XU.LY) && void 0 !== UU ? UU : 0) >= GU ? null : ZU ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => aU,
          closeViewer: () => {
            UU.requestViewer("close")
          },
          reopenViewer: () => {
            UU.requestViewer("open")
          },
          holdInput: AU.c
        }
      }(UU)))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);