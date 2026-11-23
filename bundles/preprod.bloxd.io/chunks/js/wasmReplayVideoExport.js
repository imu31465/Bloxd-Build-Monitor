export const id = 66;
export const ids = [60, 66, 93];
export const modules = {
  36858: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => WC,
      i: () => NC
    });
    var QC = ZC(600),
      wC = ZC(38),
      bC = ZC(36811);
    const nC = "replayFileKeptForReload",
      fC = "replayFileKeptForReloadAt",
      oC = "replayFileKeptForReloadTab",
      qC = 3e5,
      FC = 5e3;
    async function WC(CC, zC) {
      const ZC = Date.now(),
        bC = {
          at: ZC,
          bytes: CC,
          source: zC
        },
        qC = await Promise.race([(async () => await wC.g.setItem(fC, ZC) && wC.g.setItem(nC, bC))(), (0, QC.N)(FC).then((() => !1))]);
      qC || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const WC = {
        at: ZC,
        lM: qC
      };
      wC.k.setItem(oC, WC)
    }
    async function NC() {
      var CC;
      const zC = wC.k.getItem(oC);
      null !== zC && wC.k.removeItem(oC);
      const ZC = Date.now(),
        QC = await wC.g.getItem(fC),
        FC = null !== zC && ZC - zC.at <= qC,
        WC = null !== zC && QC === zC.at;
      let NC = null;
      if (null !== QC && (WC || ("number" !== typeof QC || ZC - QC > qC)) && (NC = FC && WC && zC.lM ? await wC.g.getItem(nC) : null, await Promise.all([wC.g.removeItem(fC), wC.g.removeItem(nC)])), !FC) return null;
      if ((null === (CC = NC) || void 0 === CC ? void 0 : CC.at) !== zC.at) throw new Error(bC.c.replayNotKept.text);
      return {
        bytes: NC.bytes,
        source: NC.source
      }
    }
  },
  36851: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC,
      i: () => bC,
      l: () => wC
    });
    const QC = [9];

    function wC(CC) {
      return QC.includes(CC)
    }

    function bC(CC) {
      return null !== CC && CC >= 3 && CC < QC[0]
    }
  },
  36811: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      f: () => qC,
      i: () => oC
    });
    var QC = ZC(28);
    const wC = 1500,
      bC = 1e3,
      nC = {
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
      fC = new Set(Object.values(nC).filter((CC => "Error" === CC.type)).map((CC => CC.text)));

    function oC(CC) {
      return CC instanceof Error && fC.has(CC.message) ? CC.message : void 0
    }

    function qC(CC) {
      var zC;
      const ZC = null !== (zC = CC.timeoutMs) && void 0 !== zC ? zC : "Error" === CC.type ? wC : bC;
      QC.o.bp("showBottomMessage", {
        message: CC.text,
        timeoutLength: ZC,
        type: CC.type
      })
    }
  },
  36870: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC,
      g: () => wC
    });
    const QC = "data-replay-ui-active",
      wC = [{
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
  36873: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC,
      f: () => WC,
      g: () => FC
    });
    var QC = ZC(20),
      wC = ZC(28),
      bC = ZC(36870);

    function nC() {
      const CC = {};
      for (const {
          group: zC
        }
        of bC.g) CC[zC] = !0;
      return CC
    }
    let fC = nC();

    function oC() {
      wC.o.bp("replayViewer|uiVisibilityChanged")
    }

    function qC() {
      return fC
    }

    function FC(CC, zC) {
      fC[CC] !== zC && (fC = {
        ...fC,
        [CC]: zC
      }, "nametag" === CC && QC.b.set({
        areNametagsHidden: !zC
      }), oC())
    }

    function WC() {
      fC = nC(), QC.b.set({
        areNametagsHidden: !1
      }), oC()
    }
  },
  39094: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => YC
    });
    var QC = ZC(1664),
      wC = ZC(1307),
      bC = ZC(48),
      nC = ZC(1002),
      fC = ZC.n(nC),
      oC = ZC(1388),
      qC = ZC(77);
    const FC = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      WC = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function NC(CC) {
      return "webm" === CC ? FC : WC
    }

    function MC(CC) {
      for (const zC of CC)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(zC)) return zC;
      return null
    }

    function gC(CC) {
      return null !== MC(NC(CC))
    }
    var SC = ZC(1056);
    const pC = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function PC() {
      return gC("webm") ? "webm" : gC("mp4") ? "mp4" : "webm"
    }

    function GC(CC) {
      let {
        cards: zC
      } = CC;
      return (0, SC.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: zC.map((CC => (0, SC.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, SC.jsx)("div", {
            className: fC()("ReplayVideoExportOptionCard", {
              Selected: CC.selected,
              Disabled: CC.disabled
            }),
            onClick: () => {
              CC.disabled || CC.onSelect()
            },
            children: (0, SC.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, SC.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: CC.label
              }), (0, SC.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: CC.description
              })]
            })
          }), CC.disabled && CC.disabledReason && (0, SC.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: CC.disabledReason
          })]
        }, CC.id)))
      })
    }
    const RC = (0, bC.memo)((function(CC) {
      let {
        hasPlaybackMark: zC,
        canIncludeUi: ZC,
        includeUiDisabledReason: QC,
        selectionRef: wC,
        closePopup: nC
      } = CC;
      const fC = gC("webm") || gC("mp4"),
        [FC, WC] = (0, bC.useState)(PC),
        [NC, MC] = (0, bC.useState)(ZC),
        RC = fC && gC(FC);
      if (!fC) {
        const CC = (0, qC.isMobile)() ? "screen recording" : "OBS";
        return (0, SC.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, SC.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, SC.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${CC}.`
          }), (0, SC.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, SC.jsx)(oC.I, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                wC.options = null, nC()
              },
              children: "Close"
            })
          })]
        })
      }
      const AC = zC ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        xC = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !NC,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            MC(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: NC,
          disabled: !ZC,
          disabledReason: QC,
          onSelect: () => {
            MC(!0)
          }
        }],
        JC = pC.map((CC => {
          const zC = gC(CC.id);
          return {
            id: CC.id,
            label: CC.label,
            description: CC.description,
            selected: FC === CC.id,
            disabled: !zC,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              WC(CC.id)
            }
          }
        }));
      return (0, SC.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, SC.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, SC.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: AC
        }), (0, SC.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, SC.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, SC.jsx)(GC, {
            cards: xC
          })]
        }), (0, SC.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, SC.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, SC.jsx)(GC, {
            cards: JC
          })]
        }), (0, SC.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, SC.jsx)(oC.o, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !RC,
            onClick: () => {
              wC.options = {
                format: FC,
                includeUi: ZC && NC
              }, nC()
            },
            children: "Export"
          }), (0, SC.jsx)(oC.I, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              wC.options = null, nC()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var AC = ZC(4797),
      xC = ZC(36870),
      JC = ZC(36873);
    let IC = null;

    function iC() {
      return function() {
        const CC = (0, JC.b)();
        for (const {
            group: zC,
            dataAttr: ZC
          }
          of xC.g)
          if (ZC && CC[zC]) return !0;
        return !1
      }() ? function() {
        var CC;
        return "function" === typeof(null === (CC = navigator.mediaDevices) || void 0 === CC ? void 0 : CC.getDisplayMedia)
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
    async function vC(CC, zC, ZC) {
      return CC ? async function() {
        const CC = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const zC of CC.getAudioTracks()) zC.stop(), CC.removeTrack(zC);
        return CC
      }(): zC().captureStream(Math.max(1, Math.round(ZC)))
    }
    var eC = ZC(38923);
    let hC = !1;

    function KC(CC) {
      CC.holdInput(!1), (0, eC.g)(!1)
    }
    async function YC(CC) {
      var zC, ZC;
      if ((0, eC.e)() || hC) return;
      const bC = CC();
      if (!bC) return;
      hC = !0;
      let nC = null;
      const fC = bC.playbackMarkInTick,
        {
          canIncludeUi: oC,
          includeUiDisabledReason: qC
        } = iC();
      try {
        nC = await async function(CC) {
          let {
            hasPlaybackMark: zC,
            canIncludeUi: ZC,
            includeUiDisabledReason: QC
          } = CC;
          const bC = {
              options: null
            },
            nC = wC.NotificationProvider.showCustomPopup({
              body: CC => (0, SC.jsx)(RC, {
                hasPlaybackMark: zC,
                canIncludeUi: ZC,
                includeUiDisabledReason: QC,
                selectionRef: bC,
                closePopup: CC
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await nC.getResult() ? null : bC.options
        }({
          hasPlaybackMark: null !== fC,
          canIncludeUi: oC,
          includeUiDisabledReason: qC
        })
      } finally {
        hC = !1
      }
      if (!nC) return;
      const FC = null !== (zC = null === (ZC = bC.startFailure) || void 0 === ZC ? void 0 : ZC.call(bC)) && void 0 !== zC ? zC : null;
      if (null !== FC) return void wC.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: FC
      });
      if (! function(CC) {
          return !(0, eC.e)() && ((0, eC.g)(!0), CC.holdInput(!0), !0)
        }(bC)) return;
      let WC = null;
      try {
        WC = await vC(nC.includeUi, (() => bC.canvas()), bC.Jm)
      } catch (dC) {
        return console.error("Failed to create video stream for export", dC), KC(bC), void wC.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: dC instanceof Error ? dC.message : "Could not start capture."
        })
      }
      let gC = null;
      const pC = [];
      let PC = null,
        GC = null;
      try {
        var xC, JC, YC;
        gC = bC.playbackSpeed(), bC.closeViewer(), bC.setPlaybackSpeed(1), bC.pause(), bC.seekToTick(null !== fC && void 0 !== fC ? fC : 0);
        const CC = await async function() {
          const CC = AC.Howler.masterGain;
          if (!AC.Howler.ctx || !CC) return null;
          await AC.Howler.ctx.resume();
          const zC = AC.Howler.ctx.createMediaStreamDestination();
          CC.connect(zC), IC = zC;
          const [ZC] = zC.stream.getAudioTracks();
          return null !== ZC && void 0 !== ZC ? ZC : null
        }();
        GC = new MediaStream;
        for (const QC of WC.getVideoTracks()) GC.addTrack(QC);
        CC && GC.addTrack(CC);
        const zC = function(CC) {
          const zC = MC(NC(CC));
          if (!zC) throw new Error(`No MediaRecorder mime type available for ${CC}`);
          return zC
        }(nC.format);
        PC = new MediaRecorder(GC, {
          mimeType: zC,
          videoBitsPerSecond: 8e6
        }), PC.ondataavailable = CC => {
          CC.data.size > 0 && pC.push(CC.data)
        };
        const ZC = new Promise((CC => {
          PC.onstop = () => {
            CC()
          }
        }));
        await (null === (xC = bC.seekSettled) || void 0 === xC ? void 0 : xC.call(bC));
        const [oC] = WC.getVideoTracks();
        PC.start(250), bC.play();
        const qC = await
        function(CC, zC, ZC) {
          return new Promise((QC => {
            let wC = !1;
            const bC = CC => {
                wC || (wC = !0, fC(), zC.removeEventListener("ended", nC), QC(CC))
              },
              nC = () => {
                bC("captureLost")
              },
              fC = CC.watchPlayback((() => {
                CC.isPlaying() || bC("completed")
              }));
            zC.addEventListener("ended", nC), ZC.onerror = () => {
              bC("recorderError")
            }, "ended" !== zC.readyState ? CC.isPlaying() || bC("completed") : bC("captureLost")
          }))
        }(bC, oC, PC);
        if (bC.pause(), "inactive" !== PC.state && PC.stop(), await ZC, "captureLost" === qC) return void wC.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === qC) return void wC.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const FC = null !== (JC = null === (YC = bC.playbackFailure) || void 0 === YC ? void 0 : YC.call(bC)) && void 0 !== JC ? JC : null;
        if (null !== FC) return void wC.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${FC} Nothing was saved.`
        });
        const SC = new Blob(pC, {
          type: zC
        });
        SC.size > 0 ? (0, QC.e)(SC, function(CC, zC) {
          const ZC = function(CC) {
            return "mp4" === CC ? "mp4" : "webm"
          }(zC);
          if (CC) return `${CC.replace(/\.bloxdreplay$/i,"")}.${ZC}`;
          return `bloxd-replay-${Date.now()}.${ZC}`
        }(bC.fileName(), nC.format)) : wC.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (dC) {
        console.error("Replay video export failed", dC), wC.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: dC instanceof Error ? dC.message : "Something went wrong while exporting."
        })
      } finally {
        if (PC && "inactive" !== PC.state) try {
          PC.stop()
        } catch (dC) {
          console.error("Failed to stop MediaRecorder", dC)
        }! function() {
          const CC = AC.Howler.masterGain;
          if (IC && CC) {
            try {
              CC.disconnect(IC)
            } catch (dC) {
              console.error("Failed to disconnect Howler export tee", dC)
            }
            IC = null
          } else IC = null
        }();
        for (const CC of WC.getTracks()) CC.stop();
        if (GC)
          for (const CC of GC.getTracks()) CC.stop();
        null !== gC && bC.setPlaybackSpeed(gC), bC.pause(), KC(bC), bC.reopenViewer()
      }
    }
  },
  4797: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      Howl: () => wC.Howl,
      Howler: () => wC.Howler,
      musicOutput: () => pC,
      readyAudioContext: () => PC
    });
    var QC, wC = ZC(4801),
      bC = ZC(3419),
      nC = ZC(4587);
    const fC = wC.Howler;

    function oC() {
      var CC, zC;
      if (fC.ctx || !fC.usingWebAudio || "undefined" === typeof AudioContext || !(0, nC.h)()) return;
      const ZC = navigator.audioSession;
      let QC;
      "auto" === (null === ZC || void 0 === ZC ? void 0 : ZC.type) && (ZC.type = "ambient");
      try {
        QC = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const wC = QC.createGain();
      wC.gain.setValueAtTime(fC._muted ? 0 : null !== (CC = fC._volume) && void 0 !== CC ? CC : 1, QC.currentTime), wC.connect(QC.destination), fC.ctx = QC, fC.masterGain = wC, null === (zC = fC._setup) || void 0 === zC || zC.call(fC)
    }
    fC._mobileUnloaded = !0;
    const qC = fC.volume.bind(wC.Howler);
    fC.volume = function() {
      return oC(), qC(...arguments)
    };
    const FC = fC.mute.bind(wC.Howler);
    fC.mute = CC => (oC(), FC(CC));
    const WC = wC.Howl.prototype,
      NC = WC.init;

    function MC() {
      for (; fC._html5AudioPool.length < fC.html5PoolSize;) {
        const CC = new Audio;
        CC._unlocked = !0, fC._releaseHtml5Audio(CC)
      }
      for (const zC of fC._howls)
        if (!zC._webAudio)
          for (const ZC of zC._getSoundIds()) {
            var CC;
            const QC = null === (CC = zC._soundById(ZC)) || void 0 === CC ? void 0 : CC._node;
            QC && !QC._unlocked && (QC._unlocked = !0, QC.load())
          }
    }
    WC.init = function(CC) {
      return oC(), NC.call(this, CC)
    }, (0, nC.h)() && (fC._unlockAudio = () => {
      const CC = fC.ctx;
      if (fC._audioUnlocked || !CC) return;
      fC.autoUnlock = !1;
      const zC = CC.createBuffer(1, 1, 22050);
      fC._scratchBuffer = zC;
      const ZC = new AbortController;
      let QC = "afterPaint";
      const wC = () => {
          var QC;
          if (fC._audioUnlocked) return;
          null === (QC = fC._autoResume) || void 0 === QC || QC.call(fC);
          const wC = CC.createBufferSource();
          wC.buffer = zC, wC.connect(CC.destination), wC.start(0), CC.resume().catch((() => {})), wC.onended = () => {
            wC.disconnect(0), fC._audioUnlocked = !0, ZC.abort();
            for (const CC of fC._howls) CC._emit("unlock")
          }
        },
        oC = () => {
          MC(), wC()
        },
        qC = zC => {
          if (MC(), "inTap" === QC) {
            if ("running" === CC.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), wC()
          } else "afterPaint" === QC && (QC = "queued", (0, bC.c)(zC.timeStamp, (() => {
            QC = "inTap", wC()
          })))
        };
      for (const bC of ["touchstart", "touchend"]) document.addEventListener(bC, oC, {
        capture: !0,
        signal: ZC.signal
      });
      for (const bC of nC.c) document.addEventListener(bC, qC, {
        capture: !0,
        signal: ZC.signal
      })
    });
    let gC = 0;
    const SC = null === (QC = fC._autoSuspend) || void 0 === QC ? void 0 : QC.bind(wC.Howler);

    function pC() {
      PC();
      const {
        ctx: CC,
        masterGain: zC
      } = fC;
      return CC && zC ? {
        ctx: CC,
        destination: zC,
        holdAwake: CC => {
          var zC, ZC;
          (gC += CC ? 1 : -1, CC) ? null === (zC = fC._autoResume) || void 0 === zC || zC.call(fC): null === (ZC = fC._autoSuspend) || void 0 === ZC || ZC.call(fC)
        },
        wake: () => {
          var zC;
          "running" !== CC.state && (null === (zC = fC._autoResume) || void 0 === zC || zC.call(fC), CC.resume().catch((() => {})))
        }
      } : null
    }

    function PC() {
      var CC;
      (fC.volume(), fC.ctx && fC.autoUnlock) && (null === (CC = fC._unlockAudio) || void 0 === CC || CC.call(fC))
    }
    SC && (fC._autoSuspend = () => gC > 0 ? wC.Howler : SC())
  },
  42382: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC,
      i: () => wC
    });
    const QC = ["recording", "freecam", "keyframe"];

    function wC() {
      const CC = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(CC[1]) << 32n | BigInt(CC[0])
    }
  },
  60273: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      HOLD_TIMEOUT_MS: () => qC,
      ReplayViewer: () => WC
    });
    var QC = ZC(36811),
      wC = ZC(36858),
      bC = ZC(36851),
      nC = ZC(36873),
      fC = ZC(4727),
      oC = ZC(42382);
    const qC = 1e4,
      FC = new Set(["zg"]);
    class WC {
      constructor(CC) {
        var zC;
        this.deps = CC, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (zC = CC.now) && void 0 !== zC ? zC : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== fC.id.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get vq() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? QC.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(CC, zC) {
        var ZC, bC, nC, oC;
        const {
          client: qC
        } = this.deps;
        if (!this.playback) {
          if (!qC.setPlayback(!0)) throw new Error(QC.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const FC = this.epoch;
        let WC;
        try {
          WC = await qC.open(CC, (() => (0, wC.e)(CC, zC)))
        } finally {
          this.loadingOpens--
        }
        if (FC !== this.epoch && "reloading" !== WC) throw new Error(QC.c.coreStopped.text);
        if ("opening" !== WC) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const CC = function(CC) {
            switch (CC) {
              case "reloading":
                return null;
              case "stopped":
              case fC._c.ModuleTrap:
                return QC.c.coreStopped;
              case fC._c.ModuleLoad:
                return QC.c.viewerLoadFailed;
              case fC._c.TooLarge:
                return QC.c.cantOpen
            }
          }(WC);
          if (null === CC) return;
          throw new Error(CC.text)
        }
        return this.rejectSave(new Error(QC.c.saveClosed.text)), this.fileName = null !== (ZC = null !== (bC = zC.fileName) && void 0 !== bC ? bC : null === (nC = zC.fileHandle) || void 0 === nC ? void 0 : nC.name) && void 0 !== ZC ? ZC : null, this.fileHandle = null !== (oC = zC.fileHandle) && void 0 !== oC ? oC : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((CC, zC) => {
          this.pendingOpen = {
            resolve: CC,
            reject: zC
          }
        }))
      }
      play() {
        this.holds.has("zg") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("zg")
      }
      seek(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZC = this.lastView;
        null !== ZC && (zC || CC < ZC.ZN) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(CC, zC)
      }
      setSpeed(CC) {
        this.deps.client.setSpeed(CC)
      }
      setCameraMode(CC) {
        this.deps.client.setCameraMode(CC)
      }
      cycleCameraMode() {
        const CC = this.lastView;
        null !== CC && CC.state !== fC.id.None && this.setCameraMode(oC.e[(oC.e.indexOf(CC.cameraMode) + 1) % oC.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(CC) {
        this.edited(this.deps.client.setKeyframe(CC))
      }
      moveKeyframe(CC, zC) {
        this.edited(this.deps.client.moveKeyframe(CC, zC))
      }
      deleteKeyframes(CC, zC) {
        this.edited(this.deps.client.deleteKeyframes(CC, zC))
      }
      setMark(CC) {
        this.edited(this.deps.client.setMark(CC))
      }
      crop(CC, zC) {
        return !(zC <= CC) && (null !== this.pendingSave ? (this.deps.notify(QC.c.saveBusy), !1) : !!this.deps.client.crop(CC, zC) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(QC.c.saveBusy.text)) : new Promise(((CC, zC) => {
          const ZC = {
            resolve: CC,
            reject: zC
          };
          this.pendingSave = ZC, this.editsAtSave = this.edits, this.deps.client.save((0, oC.i)()).then((CC => {
            this.pendingSave === ZC && this.saveStarted(CC)
          }), (CC => {
            this.pendingSave === ZC && this.rejectSave(CC instanceof Error ? CC : new Error(String(CC)))
          }))
        }))
      }
      saveStarted(CC) {
        switch (CC) {
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
      markSaved(CC, zC) {
        var ZC, QC;
        this.fileHandle = CC, this.fileName = null !== (ZC = null !== (QC = null === CC || void 0 === CC ? void 0 : CC.name) && void 0 !== QC ? QC : zC) && void 0 !== ZC ? ZC : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(QC.c.coreStopped.text)), this.rejectSave(new Error(QC.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var CC, zC, ZC;
        const QC = this.deps.client.view(),
          wC = QC !== this.lastView;
        this.lastView = QC, this.opening && null !== QC && QC.state !== fC.id.None && QC.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, nC.f)()), this.cropAsked ? (this.cropAsked = !1, null !== QC && QC.state === fC.id.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== QC && QC.state !== fC.id.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const bC = 0 === this.settleFrames && 0 === (null !== (CC = null === (zC = (ZC = this.deps).meshPending) || void 0 === zC ? void 0 : zC.call(ZC)) && void 0 !== CC ? CC : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && bC && this.release("opening"), this.holds.has("seek") && bC && this.release("seek"), this.holds.has("crop") && !this.cropRunning && bC && this.release("crop");
        const oC = this.now();
        for (const [nC, fC] of this.holds) !FC.has(nC) && oC - fC >= qC && this.release(nC);
        this.saveRefused && !this.cropping && this.saveFailed(!1), wC && this.deps.onChange()
      }
      cropped() {
        (0, nC.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(CC) {
        switch (CC.reason) {
          case fC._c.TooLarge:
            break;
          case fC._c.Open:
          case fC._c.NothingStaged: {
            this.opening = !1, this.release("opening");
            const zC = (0, bC.i)(CC.version) ? QC.c.replayTooOld : QC.c.cantOpen;
            null === this.pendingOpen && this.deps.notify(zC), this.settleOpen(new Error(zC.text));
            break
          }
          case fC._c.Crop:
            if (CC.code === fC.Wc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(QC.c.cropFailed);
            break;
          case fC._c.ModuleTrap:
          case fC._c.ModuleLoad:
          case fC._c.Port:
            this.moduleEnded(CC.reason === fC._c.ModuleTrap ? QC.c.coreStopped : QC.c.cantOpen);
            break;
          case fC._c.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${CC.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(CC) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(CC), this.settleOpen(new Error(CC.text))
      }
      saveDone(CC) {
        const zC = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === zC || void 0 === zC || zC.resolve(CC)
      }
      saveFailed(CC) {
        this.rejectSave(new Error(CC ? QC.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(CC) {
        CC && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(QC.c.cropBusy.text)) : this.deps.notify(QC.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(CC) {
        const zC = this.pendingOpen;
        this.pendingOpen = null, null === CC ? null === zC || void 0 === zC || zC.resolve() : null === zC || void 0 === zC || zC.reject(CC)
      }
      rejectSave(CC) {
        const zC = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === zC || void 0 === zC || zC.reject(CC)
      }
      hold(CC) {
        const zC = 0 === this.holds.size;
        this.holds.set(CC, this.now()), zC && this.deps.setHoldDraws(!0)
      }
      release(CC) {
        this.holds.delete(CC) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  60271: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      MESH_TAIL_MS: () => qC,
      PLAY_START_TIMEOUT_MS: () => fC,
      startWasmReplayVideoExport: () => WC
    });
    var QC = ZC(39094),
      wC = ZC(60273),
      bC = ZC(4727),
      nC = ZC(2360);
    const fC = wC.HOLD_TIMEOUT_MS + 5e3,
      oC = 50,
      qC = 200;

    function FC(CC) {
      var zC;
      return (null === (zC = CC.view) || void 0 === zC ? void 0 : zC.state) === bC.id.Cropping || CC.vq.includes("crop")
    }

    function WC(CC) {
      return (0, QC.d)((() => function(CC) {
        var zC, ZC, QC, wC, WC, NC;
        const MC = CC.viewer(),
          gC = null !== (zC = null === MC || void 0 === MC ? void 0 : MC.view) && void 0 !== zC ? zC : null,
          SC = CC.canvas();
        if (!MC || !gC || gC.state === bC.id.None || 0 === gC.totalTicks || !SC || FC(MC)) return null;
        const pC = null !== (ZC = CC.now) && void 0 !== ZC ? ZC : () => performance.now(),
          PC = MC.id,
          GC = () => {
            const zC = CC.viewer();
            return zC === MC && zC.id === PC && zC.isOpen ? zC : null
          },
          RC = Math.min(null !== (QC = null === (wC = gC.mark) || void 0 === wC ? void 0 : wC.outTick) && void 0 !== QC ? QC : 1 / 0, gC.totalTicks - 1);
        let AC = null,
          xC = !1;
        const JC = () => {
          var CC, zC;
          return (null === (CC = GC()) || void 0 === CC || null === (zC = CC.view) || void 0 === zC ? void 0 : zC.state) === bC.id.Playing
        };
        return {
          Jm: bC.xd,
          playbackMarkInTick: null !== (WC = null === (NC = gC.mark) || void 0 === NC ? void 0 : NC.inTick) && void 0 !== WC ? WC : null,
          startFailure: () => {
            const CC = GC();
            return null === CC ? "Another replay opened. Export it again from there." : FC(CC) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var CC, zC;
            return null !== (CC = null === (zC = GC()) || void 0 === zC ? void 0 : zC.fileName) && void 0 !== CC ? CC : null
          },
          playbackSpeed: () => {
            var CC, zC, ZC;
            return null !== (CC = null === (zC = GC()) || void 0 === zC || null === (ZC = zC.view) || void 0 === ZC ? void 0 : ZC.speed) && void 0 !== CC ? CC : 1
          },
          setPlaybackSpeed: CC => {
            var zC;
            null === (zC = GC()) || void 0 === zC || zC.setSpeed(CC)
          },
          play: () => {
            var CC;
            xC = !1, AC = pC(), null === (CC = GC()) || void 0 === CC || CC.play()
          },
          pause: () => {
            var CC;
            null === (CC = GC()) || void 0 === CC || CC.pause()
          },
          seekToTick: CC => {
            var zC;
            null === (zC = GC()) || void 0 === zC || zC.seek(CC, !0)
          },
          seekSettled: () => new Promise((CC => {
            const zC = setInterval((() => {
              const ZC = GC();
              null === ZC ? (clearInterval(zC), CC()) : ZC.vq.includes("seek") || (clearInterval(zC), setTimeout(CC, qC))
            }), oC)
          })),
          isPlaying: () => {
            var CC, zC, ZC;
            return null !== AC && null !== GC() && (!!JC() || !xC && (null !== (CC = null === (zC = GC()) || void 0 === zC || null === (ZC = zC.view) || void 0 === ZC ? void 0 : ZC.ZN) && void 0 !== CC ? CC : 0) < RC && pC() - AC < fC)
          },
          watchPlayback: zC => {
            const ZC = CC.watchViewer((() => {
                xC ||= null !== AC && JC(), zC()
              })),
              QC = setTimeout(zC, fC + 1);
            return () => {
              clearTimeout(QC), ZC()
            }
          },
          playbackFailure: () => {
            var CC, zC;
            const ZC = GC();
            return null === ZC ? "The replay closed before the video finished." : (null !== (CC = null === (zC = ZC.view) || void 0 === zC ? void 0 : zC.ZN) && void 0 !== CC ? CC : 0) >= RC ? null : xC ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => SC,
          closeViewer: () => {
            CC.requestViewer("close")
          },
          reopenViewer: () => {
            CC.requestViewer("open")
          },
          holdInput: nC.f
        }
      }(CC)))
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);