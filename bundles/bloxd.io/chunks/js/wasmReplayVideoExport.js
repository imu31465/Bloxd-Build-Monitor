export const id = 67;
export const ids = [61, 67, 95];
export const modules = {
  37009: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => hB,
      c: () => zB
    });
    var TB = ZB(665),
      JB = ZB(36),
      oB = ZB(36969);
    const GB = "replayFileKeptForReload",
      vB = "replayFileKeptForReloadAt",
      kB = "replayFileKeptForReloadTab",
      cB = 3e5,
      nB = 5e3;
    async function hB(BB, IB) {
      const ZB = Date.now(),
        oB = {
          at: ZB,
          bytes: BB,
          source: IB
        },
        cB = await Promise.race([(async () => await JB.i.setItem(vB, ZB) && JB.i.setItem(GB, oB))(), (0, TB.Q)(nB).then((() => !1))]);
      cB || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const hB = {
        at: ZB,
        XF: cB
      };
      JB.n.setItem(kB, hB)
    }
    async function zB() {
      var BB;
      const IB = JB.n.getItem(kB);
      null !== IB && JB.n.removeItem(kB);
      const ZB = Date.now(),
        TB = await JB.i.getItem(vB),
        nB = null !== IB && ZB - IB.at <= cB,
        hB = null !== IB && TB === IB.at;
      let zB = null;
      if (null !== TB && (hB || ("number" !== typeof TB || ZB - TB > cB)) && (zB = nB && hB && IB.XF ? await JB.i.getItem(GB) : null, await Promise.all([JB.i.removeItem(vB), JB.i.removeItem(GB)])), !nB) return null;
      if ((null === (BB = zB) || void 0 === BB ? void 0 : BB.at) !== IB.at) throw new Error(oB.b.replayNotKept.text);
      return {
        bytes: zB.bytes,
        source: zB.source
      }
    }
  },
  37003: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB,
      e: () => oB,
      f: () => JB
    });
    const TB = [9];

    function JB(BB) {
      return TB.includes(BB)
    }

    function oB(BB) {
      return null !== BB && BB >= 3 && BB < TB[0]
    }
  },
  36969: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB,
      d: () => cB,
      g: () => kB
    });
    var TB = ZB(24);
    const JB = 1500,
      oB = 1e3,
      GB = {
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
      vB = new Set(Object.values(GB).filter((BB => "Error" === BB.type)).map((BB => BB.text)));

    function kB(BB) {
      return BB instanceof Error && vB.has(BB.message) ? BB.message : void 0
    }

    function cB(BB) {
      var IB;
      const ZB = null !== (IB = BB.timeoutMs) && void 0 !== IB ? IB : "Error" === BB.type ? JB : oB;
      TB.l.Gq("showBottomMessage", {
        message: BB.text,
        timeoutLength: ZB,
        type: BB.type
      })
    }
  },
  37019: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB,
      d: () => JB
    });
    const TB = "data-replay-ui-active",
      JB = [{
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
  37024: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => cB,
      f: () => hB,
      h: () => nB
    });
    var TB = ZB(20),
      JB = ZB(24),
      oB = ZB(37019);

    function GB() {
      const BB = {};
      for (const {
          group: IB
        }
        of oB.d) BB[IB] = !0;
      return BB
    }
    let vB = GB();

    function kB() {
      JB.l.Gq("replayViewer|uiVisibilityChanged")
    }

    function cB() {
      return vB
    }

    function nB(BB, IB) {
      vB[BB] !== IB && (vB = {
        ...vB,
        [BB]: IB
      }, "nametag" === BB && TB.d.set({
        areNametagsHidden: !IB
      }), kB())
    }

    function hB() {
      vB = GB(), TB.d.set({
        areNametagsHidden: !1
      }), kB()
    }
  },
  39319: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => aB
    });
    var TB = ZB(1821),
      JB = ZB(1403),
      oB = ZB(63),
      GB = ZB(1091),
      vB = ZB.n(GB),
      kB = ZB(1516),
      cB = ZB(105);
    const nB = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      hB = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function zB(BB) {
      return "webm" === BB ? nB : hB
    }

    function FB(BB) {
      for (const IB of BB)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(IB)) return IB;
      return null
    }

    function NB(BB) {
      return null !== FB(zB(BB))
    }
    var gB = ZB(1153);
    const qB = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function yB() {
      return NB("webm") ? "webm" : NB("mp4") ? "mp4" : "webm"
    }

    function UB(BB) {
      let {
        cards: IB
      } = BB;
      return (0, gB.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: IB.map((BB => (0, gB.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, gB.jsx)("div", {
            className: vB()("ReplayVideoExportOptionCard", {
              Selected: BB.selected,
              Disabled: BB.disabled
            }),
            onClick: () => {
              BB.disabled || BB.onSelect()
            },
            children: (0, gB.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, gB.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: BB.label
              }), (0, gB.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: BB.description
              })]
            })
          }), BB.disabled && BB.disabledReason && (0, gB.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: BB.disabledReason
          })]
        }, BB.id)))
      })
    }
    const WB = (0, oB.memo)((function(BB) {
      let {
        hasPlaybackMark: IB,
        canIncludeUi: ZB,
        includeUiDisabledReason: TB,
        selectionRef: JB,
        closePopup: GB
      } = BB;
      const vB = NB("webm") || NB("mp4"),
        [nB, hB] = (0, oB.useState)(yB),
        [zB, FB] = (0, oB.useState)(ZB),
        WB = vB && NB(nB);
      if (!vB) {
        const BB = (0, cB.isMobile)() ? "screen recording" : "OBS";
        return (0, gB.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, gB.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, gB.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${BB}.`
          }), (0, gB.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, gB.jsx)(kB.M, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                JB.options = null, GB()
              },
              children: "Close"
            })
          })]
        })
      }
      const dB = IB ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        CB = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !zB,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            FB(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: zB,
          disabled: !ZB,
          disabledReason: TB,
          onSelect: () => {
            FB(!0)
          }
        }],
        QB = qB.map((BB => {
          const IB = NB(BB.id);
          return {
            id: BB.id,
            label: BB.label,
            description: BB.description,
            selected: nB === BB.id,
            disabled: !IB,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              hB(BB.id)
            }
          }
        }));
      return (0, gB.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, gB.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, gB.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: dB
        }), (0, gB.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, gB.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, gB.jsx)(UB, {
            cards: CB
          })]
        }), (0, gB.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, gB.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, gB.jsx)(UB, {
            cards: QB
          })]
        }), (0, gB.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, gB.jsx)(kB.p, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !WB,
            onClick: () => {
              JB.options = {
                format: nB,
                includeUi: ZB && zB
              }, GB()
            },
            children: "Export"
          }), (0, gB.jsx)(kB.M, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              JB.options = null, GB()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var dB = ZB(5028),
      CB = ZB(37019),
      QB = ZB(37024);
    let sB = null;

    function wB() {
      return function() {
        const BB = (0, QB.b)();
        for (const {
            group: IB,
            dataAttr: ZB
          }
          of CB.d)
          if (ZB && BB[IB]) return !0;
        return !1
      }() ? function() {
        var BB;
        return "function" === typeof(null === (BB = navigator.mediaDevices) || void 0 === BB ? void 0 : BB.getDisplayMedia)
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
    async function OB(BB, IB, ZB) {
      return BB ? async function() {
        const BB = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const IB of BB.getAudioTracks()) IB.stop(), BB.removeTrack(IB);
        return BB
      }(): IB().captureStream(Math.max(1, Math.round(ZB)))
    }
    var YB = ZB(39152);
    let iB = !1;

    function pB(BB) {
      BB.holdInput(!1), (0, YB.e)(!1)
    }
    async function aB(BB) {
      var IB, ZB;
      if ((0, YB.d)() || iB) return;
      const oB = BB();
      if (!oB) return;
      iB = !0;
      let GB = null;
      const vB = oB.playbackMarkInTick,
        {
          canIncludeUi: kB,
          includeUiDisabledReason: cB
        } = wB();
      try {
        GB = await async function(BB) {
          let {
            hasPlaybackMark: IB,
            canIncludeUi: ZB,
            includeUiDisabledReason: TB
          } = BB;
          const oB = {
              options: null
            },
            GB = JB.NotificationProvider.showCustomPopup({
              body: BB => (0, gB.jsx)(WB, {
                hasPlaybackMark: IB,
                canIncludeUi: ZB,
                includeUiDisabledReason: TB,
                selectionRef: oB,
                closePopup: BB
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await GB.getResult() ? null : oB.options
        }({
          hasPlaybackMark: null !== vB,
          canIncludeUi: kB,
          includeUiDisabledReason: cB
        })
      } finally {
        iB = !1
      }
      if (!GB) return;
      const nB = null !== (IB = null === (ZB = oB.startFailure) || void 0 === ZB ? void 0 : ZB.call(oB)) && void 0 !== IB ? IB : null;
      if (null !== nB) return void JB.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: nB
      });
      if (! function(BB) {
          return !(0, YB.d)() && ((0, YB.e)(!0), BB.holdInput(!0), !0)
        }(oB)) return;
      let hB = null;
      try {
        hB = await OB(GB.includeUi, (() => oB.canvas()), oB.bM)
      } catch (HB) {
        return console.error("Failed to create video stream for export", HB), pB(oB), void JB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: HB instanceof Error ? HB.message : "Could not start capture."
        })
      }
      let NB = null;
      const qB = [];
      let yB = null,
        UB = null;
      try {
        var CB, QB, aB;
        NB = oB.playbackSpeed(), oB.closeViewer(), oB.setPlaybackSpeed(1), oB.pause(), oB.seekToTick(null !== vB && void 0 !== vB ? vB : 0);
        const BB = await async function() {
          const BB = dB.Howler.masterGain;
          if (!dB.Howler.ctx || !BB) return null;
          await dB.Howler.ctx.resume();
          const IB = dB.Howler.ctx.createMediaStreamDestination();
          BB.connect(IB), sB = IB;
          const [ZB] = IB.stream.getAudioTracks();
          return null !== ZB && void 0 !== ZB ? ZB : null
        }();
        UB = new MediaStream;
        for (const TB of hB.getVideoTracks()) UB.addTrack(TB);
        BB && UB.addTrack(BB);
        const IB = function(BB) {
          const IB = FB(zB(BB));
          if (!IB) throw new Error(`No MediaRecorder mime type available for ${BB}`);
          return IB
        }(GB.format);
        yB = new MediaRecorder(UB, {
          mimeType: IB,
          videoBitsPerSecond: 8e6
        }), yB.ondataavailable = BB => {
          BB.data.size > 0 && qB.push(BB.data)
        };
        const ZB = new Promise((BB => {
          yB.onstop = () => {
            BB()
          }
        }));
        await (null === (CB = oB.seekSettled) || void 0 === CB ? void 0 : CB.call(oB));
        const [kB] = hB.getVideoTracks();
        yB.start(250), oB.play();
        const cB = await
        function(BB, IB, ZB) {
          return new Promise((TB => {
            let JB = !1;
            const oB = BB => {
                JB || (JB = !0, vB(), IB.removeEventListener("ended", GB), TB(BB))
              },
              GB = () => {
                oB("captureLost")
              },
              vB = BB.watchPlayback((() => {
                BB.isPlaying() || oB("completed")
              }));
            IB.addEventListener("ended", GB), ZB.onerror = () => {
              oB("recorderError")
            }, "ended" !== IB.readyState ? BB.isPlaying() || oB("completed") : oB("captureLost")
          }))
        }(oB, kB, yB);
        if (oB.pause(), "inactive" !== yB.state && yB.stop(), await ZB, "captureLost" === cB) return void JB.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === cB) return void JB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const nB = null !== (QB = null === (aB = oB.playbackFailure) || void 0 === aB ? void 0 : aB.call(oB)) && void 0 !== QB ? QB : null;
        if (null !== nB) return void JB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${nB} Nothing was saved.`
        });
        const gB = new Blob(qB, {
          type: IB
        });
        gB.size > 0 ? (0, TB.d)(gB, function(BB, IB) {
          const ZB = function(BB) {
            return "mp4" === BB ? "mp4" : "webm"
          }(IB);
          if (BB) return `${BB.replace(/\.bloxdreplay$/i,"")}.${ZB}`;
          return `bloxd-replay-${Date.now()}.${ZB}`
        }(oB.fileName(), GB.format)) : JB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (HB) {
        console.error("Replay video export failed", HB), JB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: HB instanceof Error ? HB.message : "Something went wrong while exporting."
        })
      } finally {
        if (yB && "inactive" !== yB.state) try {
          yB.stop()
        } catch (HB) {
          console.error("Failed to stop MediaRecorder", HB)
        }! function() {
          const BB = dB.Howler.masterGain;
          if (sB && BB) {
            try {
              BB.disconnect(sB)
            } catch (HB) {
              console.error("Failed to disconnect Howler export tee", HB)
            }
            sB = null
          } else sB = null
        }();
        for (const BB of hB.getTracks()) BB.stop();
        if (UB)
          for (const BB of UB.getTracks()) BB.stop();
        null !== NB && oB.setPlaybackSpeed(NB), oB.pause(), pB(oB), oB.reopenViewer()
      }
    }
  },
  5028: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      Howl: () => JB.Howl,
      Howler: () => JB.Howler,
      musicOutput: () => qB,
      readyAudioContext: () => yB
    });
    var TB, JB = ZB(5031),
      oB = ZB(3625),
      GB = ZB(4824);
    const vB = JB.Howler;

    function kB() {
      var BB, IB;
      if (vB.ctx || !vB.usingWebAudio || "undefined" === typeof AudioContext || !(0, GB.i)()) return;
      const ZB = navigator.audioSession;
      let TB;
      "auto" === (null === ZB || void 0 === ZB ? void 0 : ZB.type) && (ZB.type = "ambient");
      try {
        TB = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const JB = TB.createGain();
      JB.gain.setValueAtTime(vB._muted ? 0 : null !== (BB = vB._volume) && void 0 !== BB ? BB : 1, TB.currentTime), JB.connect(TB.destination), vB.ctx = TB, vB.masterGain = JB, null === (IB = vB._setup) || void 0 === IB || IB.call(vB)
    }
    vB._mobileUnloaded = !0;
    const cB = vB.volume.bind(JB.Howler);
    vB.volume = function() {
      return kB(), cB(...arguments)
    };
    const nB = vB.mute.bind(JB.Howler);
    vB.mute = BB => (kB(), nB(BB));
    const hB = JB.Howl.prototype,
      zB = hB.init;

    function FB() {
      for (; vB._html5AudioPool.length < vB.html5PoolSize;) {
        const BB = new Audio;
        BB._unlocked = !0, vB._releaseHtml5Audio(BB)
      }
      for (const IB of vB._howls)
        if (!IB._webAudio)
          for (const ZB of IB._getSoundIds()) {
            var BB;
            const TB = null === (BB = IB._soundById(ZB)) || void 0 === BB ? void 0 : BB._node;
            TB && !TB._unlocked && (TB._unlocked = !0, TB.load())
          }
    }
    hB.init = function(BB) {
      return kB(), zB.call(this, BB)
    }, (0, GB.i)() && (vB._unlockAudio = () => {
      const BB = vB.ctx;
      if (vB._audioUnlocked || !BB) return;
      vB.autoUnlock = !1;
      const IB = BB.createBuffer(1, 1, 22050);
      vB._scratchBuffer = IB;
      const ZB = new AbortController;
      let TB = "afterPaint";
      const JB = () => {
          var TB;
          if (vB._audioUnlocked) return;
          null === (TB = vB._autoResume) || void 0 === TB || TB.call(vB);
          const JB = BB.createBufferSource();
          JB.buffer = IB, JB.connect(BB.destination), JB.start(0), BB.resume().catch((() => {})), JB.onended = () => {
            JB.disconnect(0), vB._audioUnlocked = !0, ZB.abort();
            for (const BB of vB._howls) BB._emit("unlock")
          }
        },
        kB = () => {
          FB(), JB()
        },
        cB = IB => {
          if (FB(), "inTap" === TB) {
            if ("running" === BB.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), JB()
          } else "afterPaint" === TB && (TB = "queued", (0, oB.d)(IB.timeStamp, (() => {
            TB = "inTap", JB()
          })))
        };
      for (const oB of ["touchstart", "touchend"]) document.addEventListener(oB, kB, {
        capture: !0,
        signal: ZB.signal
      });
      for (const oB of GB.e) document.addEventListener(oB, cB, {
        capture: !0,
        signal: ZB.signal
      })
    });
    let NB = 0;
    const gB = null === (TB = vB._autoSuspend) || void 0 === TB ? void 0 : TB.bind(JB.Howler);

    function qB() {
      yB();
      const {
        ctx: BB,
        masterGain: IB
      } = vB;
      return BB && IB ? {
        ctx: BB,
        destination: IB,
        holdAwake: BB => {
          var IB, ZB;
          (NB += BB ? 1 : -1, BB) ? null === (IB = vB._autoResume) || void 0 === IB || IB.call(vB): null === (ZB = vB._autoSuspend) || void 0 === ZB || ZB.call(vB)
        },
        wake: () => {
          var IB;
          "running" !== BB.state && (null === (IB = vB._autoResume) || void 0 === IB || IB.call(vB), BB.resume().catch((() => {})))
        }
      } : null
    }

    function yB() {
      var BB;
      (vB.volume(), vB.ctx && vB.autoUnlock) && (null === (BB = vB._unlockAudio) || void 0 === BB || BB.call(vB))
    }
    gB && (vB._autoSuspend = () => NB > 0 ? JB.Howler : gB())
  },
  42581: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB,
      g: () => JB
    });
    const TB = ["recording", "freecam", "keyframe"];

    function JB() {
      const BB = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(BB[1]) << 32n | BigInt(BB[0])
    }
  },
  60677: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      HOLD_TIMEOUT_MS: () => cB,
      ReplayViewer: () => hB
    });
    var TB = ZB(36969),
      JB = ZB(37009),
      oB = ZB(37003),
      GB = ZB(37024),
      vB = ZB(4969),
      kB = ZB(42581);
    const cB = 1e4,
      nB = new Set(["oN"]);
    class hB {
      constructor(BB) {
        var IB;
        this.deps = BB, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (IB = BB.now) && void 0 !== IB ? IB : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== vB.sd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get sv() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? TB.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(BB, IB) {
        var ZB, oB, GB, kB;
        const {
          client: cB
        } = this.deps;
        if (!this.playback) {
          if (!cB.setPlayback(!0)) throw new Error(TB.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const nB = this.epoch;
        let hB;
        try {
          hB = await cB.open(BB, (() => (0, JB.b)(BB, IB)))
        } finally {
          this.loadingOpens--
        }
        if (nB !== this.epoch && "reloading" !== hB) throw new Error(TB.b.coreStopped.text);
        if ("opening" !== hB) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const BB = function(BB) {
            switch (BB) {
              case "reloading":
                return null;
              case "stopped":
              case vB.jd.ModuleTrap:
                return TB.b.coreStopped;
              case vB.jd.ModuleLoad:
                return TB.b.viewerLoadFailed;
              case vB.jd.TooLarge:
                return TB.b.cantOpen
            }
          }(hB);
          if (null === BB) return;
          throw new Error(BB.text)
        }
        return this.rejectSave(new Error(TB.b.saveClosed.text)), this.fileName = null !== (ZB = null !== (oB = IB.fileName) && void 0 !== oB ? oB : null === (GB = IB.fileHandle) || void 0 === GB ? void 0 : GB.name) && void 0 !== ZB ? ZB : null, this.fileHandle = null !== (kB = IB.fileHandle) && void 0 !== kB ? kB : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((BB, IB) => {
          this.pendingOpen = {
            resolve: BB,
            reject: IB
          }
        }))
      }
      play() {
        this.holds.has("oN") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("oN")
      }
      seek(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZB = this.lastView;
        null !== ZB && (IB || BB < ZB.Iz) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(BB, IB)
      }
      setSpeed(BB) {
        this.deps.client.setSpeed(BB)
      }
      setCameraMode(BB) {
        this.deps.client.setCameraMode(BB)
      }
      cycleCameraMode() {
        const BB = this.lastView;
        null !== BB && BB.state !== vB.sd.None && this.setCameraMode(kB.d[(kB.d.indexOf(BB.cameraMode) + 1) % kB.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(BB) {
        this.edited(this.deps.client.setKeyframe(BB))
      }
      moveKeyframe(BB, IB) {
        this.edited(this.deps.client.moveKeyframe(BB, IB))
      }
      deleteKeyframes(BB, IB) {
        this.edited(this.deps.client.deleteKeyframes(BB, IB))
      }
      setMark(BB) {
        this.edited(this.deps.client.setMark(BB))
      }
      crop(BB, IB) {
        return !(IB <= BB) && (null !== this.pendingSave ? (this.deps.notify(TB.b.saveBusy), !1) : !!this.deps.client.crop(BB, IB) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(TB.b.saveBusy.text)) : new Promise(((BB, IB) => {
          const ZB = {
            resolve: BB,
            reject: IB
          };
          this.pendingSave = ZB, this.editsAtSave = this.edits, this.deps.client.save((0, kB.g)()).then((BB => {
            this.pendingSave === ZB && this.saveStarted(BB)
          }), (BB => {
            this.pendingSave === ZB && this.rejectSave(BB instanceof Error ? BB : new Error(String(BB)))
          }))
        }))
      }
      saveStarted(BB) {
        switch (BB) {
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
      markSaved(BB, IB) {
        var ZB, TB;
        this.fileHandle = BB, this.fileName = null !== (ZB = null !== (TB = null === BB || void 0 === BB ? void 0 : BB.name) && void 0 !== TB ? TB : IB) && void 0 !== ZB ? ZB : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(TB.b.coreStopped.text)), this.rejectSave(new Error(TB.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var BB, IB, ZB;
        const TB = this.deps.client.view(),
          JB = TB !== this.lastView;
        this.lastView = TB, this.opening && null !== TB && TB.state !== vB.sd.None && TB.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, GB.f)()), this.cropAsked ? (this.cropAsked = !1, null !== TB && TB.state === vB.sd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== TB && TB.state !== vB.sd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const oB = 0 === this.settleFrames && 0 === (null !== (BB = null === (IB = (ZB = this.deps).meshPending) || void 0 === IB ? void 0 : IB.call(ZB)) && void 0 !== BB ? BB : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && oB && this.release("opening"), this.holds.has("seek") && oB && this.release("seek"), this.holds.has("crop") && !this.cropRunning && oB && this.release("crop");
        const kB = this.now();
        for (const [GB, vB] of this.holds) !nB.has(GB) && kB - vB >= cB && this.release(GB);
        this.saveRefused && !this.cropping && this.saveFailed(!1), JB && this.deps.onChange()
      }
      cropped() {
        (0, GB.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(BB) {
        switch (BB.reason) {
          case vB.jd.TooLarge:
            break;
          case vB.jd.Open:
          case vB.jd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const IB = (0, oB.e)(BB.version) ? TB.b.replayTooOld : TB.b.cantOpen;
            null === this.pendingOpen && this.deps.notify(IB), this.settleOpen(new Error(IB.text));
            break
          }
          case vB.jd.Crop:
            if (BB.code === vB.id.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(TB.b.cropFailed);
            break;
          case vB.jd.ModuleTrap:
          case vB.jd.ModuleLoad:
          case vB.jd.Port:
            this.moduleEnded(BB.reason === vB.jd.ModuleTrap ? TB.b.coreStopped : TB.b.cantOpen);
            break;
          case vB.jd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${BB.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(BB) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(BB), this.settleOpen(new Error(BB.text))
      }
      saveDone(BB) {
        const IB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === IB || void 0 === IB || IB.resolve(BB)
      }
      saveFailed(BB) {
        this.rejectSave(new Error(BB ? TB.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(BB) {
        BB && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(TB.b.cropBusy.text)) : this.deps.notify(TB.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(BB) {
        const IB = this.pendingOpen;
        this.pendingOpen = null, null === BB ? null === IB || void 0 === IB || IB.resolve() : null === IB || void 0 === IB || IB.reject(BB)
      }
      rejectSave(BB) {
        const IB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === IB || void 0 === IB || IB.reject(BB)
      }
      hold(BB) {
        const IB = 0 === this.holds.size;
        this.holds.set(BB, this.now()), IB && this.deps.setHoldDraws(!0)
      }
      release(BB) {
        this.holds.delete(BB) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  60674: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      MESH_TAIL_MS: () => cB,
      PLAY_START_TIMEOUT_MS: () => vB,
      startWasmReplayVideoExport: () => hB
    });
    var TB = ZB(39319),
      JB = ZB(60677),
      oB = ZB(4969),
      GB = ZB(2497);
    const vB = JB.HOLD_TIMEOUT_MS + 5e3,
      kB = 50,
      cB = 200;

    function nB(BB) {
      var IB;
      return (null === (IB = BB.view) || void 0 === IB ? void 0 : IB.state) === oB.sd.Cropping || BB.sv.includes("crop")
    }

    function hB(BB) {
      return (0, TB.b)((() => function(BB) {
        var IB, ZB, TB, JB, hB, zB;
        const FB = BB.viewer(),
          NB = null !== (IB = null === FB || void 0 === FB ? void 0 : FB.view) && void 0 !== IB ? IB : null,
          gB = BB.canvas();
        if (!FB || !NB || NB.state === oB.sd.None || 0 === NB.totalTicks || !gB || nB(FB)) return null;
        const qB = null !== (ZB = BB.now) && void 0 !== ZB ? ZB : () => performance.now(),
          yB = FB.id,
          UB = () => {
            const IB = BB.viewer();
            return IB === FB && IB.id === yB && IB.isOpen ? IB : null
          },
          WB = Math.min(null !== (TB = null === (JB = NB.mark) || void 0 === JB ? void 0 : JB.outTick) && void 0 !== TB ? TB : 1 / 0, NB.totalTicks - 1);
        let dB = null,
          CB = !1;
        const QB = () => {
          var BB, IB;
          return (null === (BB = UB()) || void 0 === BB || null === (IB = BB.view) || void 0 === IB ? void 0 : IB.state) === oB.sd.Playing
        };
        return {
          bM: oB.Dd,
          playbackMarkInTick: null !== (hB = null === (zB = NB.mark) || void 0 === zB ? void 0 : zB.inTick) && void 0 !== hB ? hB : null,
          startFailure: () => {
            const BB = UB();
            return null === BB ? "Another replay opened. Export it again from there." : nB(BB) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var BB, IB;
            return null !== (BB = null === (IB = UB()) || void 0 === IB ? void 0 : IB.fileName) && void 0 !== BB ? BB : null
          },
          playbackSpeed: () => {
            var BB, IB, ZB;
            return null !== (BB = null === (IB = UB()) || void 0 === IB || null === (ZB = IB.view) || void 0 === ZB ? void 0 : ZB.speed) && void 0 !== BB ? BB : 1
          },
          setPlaybackSpeed: BB => {
            var IB;
            null === (IB = UB()) || void 0 === IB || IB.setSpeed(BB)
          },
          play: () => {
            var BB;
            CB = !1, dB = qB(), null === (BB = UB()) || void 0 === BB || BB.play()
          },
          pause: () => {
            var BB;
            null === (BB = UB()) || void 0 === BB || BB.pause()
          },
          seekToTick: BB => {
            var IB;
            null === (IB = UB()) || void 0 === IB || IB.seek(BB, !0)
          },
          seekSettled: () => new Promise((BB => {
            const IB = setInterval((() => {
              const ZB = UB();
              null === ZB ? (clearInterval(IB), BB()) : ZB.sv.includes("seek") || (clearInterval(IB), setTimeout(BB, cB))
            }), kB)
          })),
          isPlaying: () => {
            var BB, IB, ZB;
            return null !== dB && null !== UB() && (!!QB() || !CB && (null !== (BB = null === (IB = UB()) || void 0 === IB || null === (ZB = IB.view) || void 0 === ZB ? void 0 : ZB.Iz) && void 0 !== BB ? BB : 0) < WB && qB() - dB < vB)
          },
          watchPlayback: IB => {
            const ZB = BB.watchViewer((() => {
                CB ||= null !== dB && QB(), IB()
              })),
              TB = setTimeout(IB, vB + 1);
            return () => {
              clearTimeout(TB), ZB()
            }
          },
          playbackFailure: () => {
            var BB, IB;
            const ZB = UB();
            return null === ZB ? "The replay closed before the video finished." : (null !== (BB = null === (IB = ZB.view) || void 0 === IB ? void 0 : IB.Iz) && void 0 !== BB ? BB : 0) >= WB ? null : CB ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => gB,
          closeViewer: () => {
            BB.requestViewer("close")
          },
          reopenViewer: () => {
            BB.requestViewer("open")
          },
          holdInput: GB.g
        }
      }(BB)))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);