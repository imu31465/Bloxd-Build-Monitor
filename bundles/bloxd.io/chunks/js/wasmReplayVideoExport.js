export const id = 66;
export const ids = [60, 66, 93];
export const modules = {
  37014: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => fS,
      d: () => kS
    });
    var tS = gS(680),
      bS = gS(45),
      XS = gS(36973);
    const xS = "replayFileKeptForReload",
      NS = "replayFileKeptForReloadAt",
      qS = "replayFileKeptForReloadTab",
      uS = 3e5,
      IS = 5e3;
    async function fS(SS, HS) {
      const gS = Date.now(),
        XS = {
          at: gS,
          bytes: SS,
          source: HS
        },
        uS = await Promise.race([(async () => await bS.e.setItem(NS, gS) && bS.e.setItem(xS, XS))(), (0, tS.Q)(IS).then((() => !1))]);
      uS || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const fS = {
        at: gS,
        ia: uS
      };
      bS.h.setItem(qS, fS)
    }
    async function kS() {
      var SS;
      const HS = bS.h.getItem(qS);
      null !== HS && bS.h.removeItem(qS);
      const gS = Date.now(),
        tS = await bS.e.getItem(NS),
        IS = null !== HS && gS - HS.at <= uS,
        fS = null !== HS && tS === HS.at;
      let kS = null;
      if (null !== tS && (fS || ("number" !== typeof tS || gS - tS > uS)) && (kS = IS && fS && HS.ia ? await bS.e.getItem(xS) : null, await Promise.all([bS.e.removeItem(NS), bS.e.removeItem(xS)])), !IS) return null;
      if ((null === (SS = kS) || void 0 === SS ? void 0 : SS.at) !== HS.at) throw new Error(XS.b.replayNotKept.text);
      return {
        bytes: kS.bytes,
        source: kS.source
      }
    }
  },
  37005: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS,
      e: () => XS,
      f: () => bS
    });
    const tS = [9];

    function bS(SS) {
      return tS.includes(SS)
    }

    function XS(SS) {
      return null !== SS && SS >= 3 && SS < tS[0]
    }
  },
  36973: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      c: () => uS,
      f: () => qS
    });
    var tS = gS(31);
    const bS = 1500,
      XS = 1e3,
      xS = {
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
      NS = new Set(Object.values(xS).filter((SS => "Error" === SS.type)).map((SS => SS.text)));

    function qS(SS) {
      return SS instanceof Error && NS.has(SS.message) ? SS.message : void 0
    }

    function uS(SS) {
      var HS;
      const gS = null !== (HS = SS.timeoutMs) && void 0 !== HS ? HS : "Error" === SS.type ? bS : XS;
      tS.k.cj("showBottomMessage", {
        message: SS.text,
        timeoutLength: gS,
        type: SS.type
      })
    }
  },
  37023: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS,
      f: () => bS
    });
    const tS = "data-replay-ui-active",
      bS = [{
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
  37029: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => uS,
      g: () => fS,
      j: () => IS
    });
    var tS = gS(24),
      bS = gS(31),
      XS = gS(37023);

    function xS() {
      const SS = {};
      for (const {
          group: HS
        }
        of XS.f) SS[HS] = !0;
      return SS
    }
    let NS = xS();

    function qS() {
      bS.k.cj("replayViewer|uiVisibilityChanged")
    }

    function uS() {
      return NS
    }

    function IS(SS, HS) {
      NS[SS] !== HS && (NS = {
        ...NS,
        [SS]: HS
      }, "nametag" === SS && tS.b.set({
        areNametagsHidden: !HS
      }), qS())
    }

    function fS() {
      NS = xS(), tS.b.set({
        areNametagsHidden: !1
      }), qS()
    }
  },
  39263: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => vS
    });
    var tS = gS(1860),
      bS = gS(1435),
      XS = gS(64),
      xS = gS(1121),
      NS = gS.n(xS),
      qS = gS(1528),
      uS = gS(104);
    const IS = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      fS = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function kS(SS) {
      return "webm" === SS ? IS : fS
    }

    function aS(SS) {
      for (const HS of SS)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(HS)) return HS;
      return null
    }

    function KS(SS) {
      return null !== aS(kS(SS))
    }
    var jS = gS(1181);
    const GS = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function CS() {
      return KS("webm") ? "webm" : KS("mp4") ? "mp4" : "webm"
    }

    function nS(SS) {
      let {
        cards: HS
      } = SS;
      return (0, jS.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: HS.map((SS => (0, jS.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, jS.jsx)("div", {
            className: NS()("ReplayVideoExportOptionCard", {
              Selected: SS.selected,
              Disabled: SS.disabled
            }),
            onClick: () => {
              SS.disabled || SS.onSelect()
            },
            children: (0, jS.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, jS.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: SS.label
              }), (0, jS.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: SS.description
              })]
            })
          }), SS.disabled && SS.disabledReason && (0, jS.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: SS.disabledReason
          })]
        }, SS.id)))
      })
    }
    const PS = (0, XS.memo)((function(SS) {
      let {
        hasPlaybackMark: HS,
        canIncludeUi: gS,
        includeUiDisabledReason: tS,
        selectionRef: bS,
        closePopup: xS
      } = SS;
      const NS = KS("webm") || KS("mp4"),
        [IS, fS] = (0, XS.useState)(CS),
        [kS, aS] = (0, XS.useState)(gS),
        PS = NS && KS(IS);
      if (!NS) {
        const SS = (0, uS.isMobile)() ? "screen recording" : "OBS";
        return (0, jS.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, jS.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, jS.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${SS}.`
          }), (0, jS.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, jS.jsx)(qS.L, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                bS.options = null, xS()
              },
              children: "Close"
            })
          })]
        })
      }
      const QS = HS ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        DS = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !kS,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            aS(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: kS,
          disabled: !gS,
          disabledReason: tS,
          onSelect: () => {
            aS(!0)
          }
        }],
        wS = GS.map((SS => {
          const HS = KS(SS.id);
          return {
            id: SS.id,
            label: SS.label,
            description: SS.description,
            selected: IS === SS.id,
            disabled: !HS,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              fS(SS.id)
            }
          }
        }));
      return (0, jS.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, jS.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, jS.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: QS
        }), (0, jS.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, jS.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, jS.jsx)(nS, {
            cards: DS
          })]
        }), (0, jS.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, jS.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, jS.jsx)(nS, {
            cards: wS
          })]
        }), (0, jS.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, jS.jsx)(qS.p, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !PS,
            onClick: () => {
              bS.options = {
                format: IS,
                includeUi: gS && kS
              }, xS()
            },
            children: "Export"
          }), (0, jS.jsx)(qS.L, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              bS.options = null, xS()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var QS = gS(5005),
      DS = gS(37023),
      wS = gS(37029);
    let hS = null;

    function ZS() {
      return function() {
        const SS = (0, wS.d)();
        for (const {
            group: HS,
            dataAttr: gS
          }
          of DS.f)
          if (gS && SS[HS]) return !0;
        return !1
      }() ? function() {
        var SS;
        return "function" === typeof(null === (SS = navigator.mediaDevices) || void 0 === SS ? void 0 : SS.getDisplayMedia)
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
    async function JS(SS, HS, gS) {
      return SS ? async function() {
        const SS = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const HS of SS.getAudioTracks()) HS.stop(), SS.removeTrack(HS);
        return SS
      }(): HS().captureStream(Math.max(1, Math.round(gS)))
    }
    var OS = gS(39106);
    let dS = !1;

    function cS(SS) {
      SS.holdInput(!1), (0, OS.g)(!1)
    }
    async function vS(SS) {
      var HS, gS;
      if ((0, OS.e)() || dS) return;
      const XS = SS();
      if (!XS) return;
      dS = !0;
      let xS = null;
      const NS = XS.playbackMarkInTick,
        {
          canIncludeUi: qS,
          includeUiDisabledReason: uS
        } = ZS();
      try {
        xS = await async function(SS) {
          let {
            hasPlaybackMark: HS,
            canIncludeUi: gS,
            includeUiDisabledReason: tS
          } = SS;
          const XS = {
              options: null
            },
            xS = bS.NotificationProvider.showCustomPopup({
              body: SS => (0, jS.jsx)(PS, {
                hasPlaybackMark: HS,
                canIncludeUi: gS,
                includeUiDisabledReason: tS,
                selectionRef: XS,
                closePopup: SS
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await xS.getResult() ? null : XS.options
        }({
          hasPlaybackMark: null !== NS,
          canIncludeUi: qS,
          includeUiDisabledReason: uS
        })
      } finally {
        dS = !1
      }
      if (!xS) return;
      const IS = null !== (HS = null === (gS = XS.startFailure) || void 0 === gS ? void 0 : gS.call(XS)) && void 0 !== HS ? HS : null;
      if (null !== IS) return void bS.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: IS
      });
      if (! function(SS) {
          return !(0, OS.e)() && ((0, OS.g)(!0), SS.holdInput(!0), !0)
        }(XS)) return;
      let fS = null;
      try {
        fS = await JS(xS.includeUi, (() => XS.canvas()), XS.YL)
      } catch (ES) {
        return console.error("Failed to create video stream for export", ES), cS(XS), void bS.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: ES instanceof Error ? ES.message : "Could not start capture."
        })
      }
      let KS = null;
      const GS = [];
      let CS = null,
        nS = null;
      try {
        var DS, wS, vS;
        KS = XS.playbackSpeed(), XS.closeViewer(), XS.setPlaybackSpeed(1), XS.pause(), XS.seekToTick(null !== NS && void 0 !== NS ? NS : 0);
        const SS = await async function() {
          const SS = QS.Howler.masterGain;
          if (!QS.Howler.ctx || !SS) return null;
          await QS.Howler.ctx.resume();
          const HS = QS.Howler.ctx.createMediaStreamDestination();
          SS.connect(HS), hS = HS;
          const [gS] = HS.stream.getAudioTracks();
          return null !== gS && void 0 !== gS ? gS : null
        }();
        nS = new MediaStream;
        for (const tS of fS.getVideoTracks()) nS.addTrack(tS);
        SS && nS.addTrack(SS);
        const HS = function(SS) {
          const HS = aS(kS(SS));
          if (!HS) throw new Error(`No MediaRecorder mime type available for ${SS}`);
          return HS
        }(xS.format);
        CS = new MediaRecorder(nS, {
          mimeType: HS,
          videoBitsPerSecond: 8e6
        }), CS.ondataavailable = SS => {
          SS.data.size > 0 && GS.push(SS.data)
        };
        const gS = new Promise((SS => {
          CS.onstop = () => {
            SS()
          }
        }));
        await (null === (DS = XS.seekSettled) || void 0 === DS ? void 0 : DS.call(XS));
        const [qS] = fS.getVideoTracks();
        CS.start(250), XS.play();
        const uS = await
        function(SS, HS, gS) {
          return new Promise((tS => {
            let bS = !1;
            const XS = SS => {
                bS || (bS = !0, NS(), HS.removeEventListener("ended", xS), tS(SS))
              },
              xS = () => {
                XS("captureLost")
              },
              NS = SS.watchPlayback((() => {
                SS.isPlaying() || XS("completed")
              }));
            HS.addEventListener("ended", xS), gS.onerror = () => {
              XS("recorderError")
            }, "ended" !== HS.readyState ? SS.isPlaying() || XS("completed") : XS("captureLost")
          }))
        }(XS, qS, CS);
        if (XS.pause(), "inactive" !== CS.state && CS.stop(), await gS, "captureLost" === uS) return void bS.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === uS) return void bS.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const IS = null !== (wS = null === (vS = XS.playbackFailure) || void 0 === vS ? void 0 : vS.call(XS)) && void 0 !== wS ? wS : null;
        if (null !== IS) return void bS.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${IS} Nothing was saved.`
        });
        const jS = new Blob(GS, {
          type: HS
        });
        jS.size > 0 ? (0, tS.c)(jS, function(SS, HS) {
          const gS = function(SS) {
            return "mp4" === SS ? "mp4" : "webm"
          }(HS);
          if (SS) return `${SS.replace(/\.bloxdreplay$/i,"")}.${gS}`;
          return `bloxd-replay-${Date.now()}.${gS}`
        }(XS.fileName(), xS.format)) : bS.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (ES) {
        console.error("Replay video export failed", ES), bS.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: ES instanceof Error ? ES.message : "Something went wrong while exporting."
        })
      } finally {
        if (CS && "inactive" !== CS.state) try {
          CS.stop()
        } catch (ES) {
          console.error("Failed to stop MediaRecorder", ES)
        }! function() {
          const SS = QS.Howler.masterGain;
          if (hS && SS) {
            try {
              SS.disconnect(hS)
            } catch (ES) {
              console.error("Failed to disconnect Howler export tee", ES)
            }
            hS = null
          } else hS = null
        }();
        for (const SS of fS.getTracks()) SS.stop();
        if (nS)
          for (const SS of nS.getTracks()) SS.stop();
        null !== KS && XS.setPlaybackSpeed(KS), XS.pause(), cS(XS), XS.reopenViewer()
      }
    }
  },
  5005: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      Howl: () => bS.Howl,
      Howler: () => bS.Howler,
      musicOutput: () => GS,
      readyAudioContext: () => CS
    });
    var tS, bS = gS(5011),
      XS = gS(3577),
      xS = gS(4775);
    const NS = bS.Howler;

    function qS() {
      var SS, HS;
      if (NS.ctx || !NS.usingWebAudio || "undefined" === typeof AudioContext || !(0, xS.k)()) return;
      const gS = navigator.audioSession;
      let tS;
      "auto" === (null === gS || void 0 === gS ? void 0 : gS.type) && (gS.type = "ambient");
      try {
        tS = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const bS = tS.createGain();
      bS.gain.setValueAtTime(NS._muted ? 0 : null !== (SS = NS._volume) && void 0 !== SS ? SS : 1, tS.currentTime), bS.connect(tS.destination), NS.ctx = tS, NS.masterGain = bS, null === (HS = NS._setup) || void 0 === HS || HS.call(NS)
    }
    NS._mobileUnloaded = !0;
    const uS = NS.volume.bind(bS.Howler);
    NS.volume = function() {
      return qS(), uS(...arguments)
    };
    const IS = NS.mute.bind(bS.Howler);
    NS.mute = SS => (qS(), IS(SS));
    const fS = bS.Howl.prototype,
      kS = fS.init;

    function aS() {
      for (; NS._html5AudioPool.length < NS.html5PoolSize;) {
        const SS = new Audio;
        SS._unlocked = !0, NS._releaseHtml5Audio(SS)
      }
      for (const HS of NS._howls)
        if (!HS._webAudio)
          for (const gS of HS._getSoundIds()) {
            var SS;
            const tS = null === (SS = HS._soundById(gS)) || void 0 === SS ? void 0 : SS._node;
            tS && !tS._unlocked && (tS._unlocked = !0, tS.load())
          }
    }
    fS.init = function(SS) {
      return qS(), kS.call(this, SS)
    }, (0, xS.k)() && (NS._unlockAudio = () => {
      const SS = NS.ctx;
      if (NS._audioUnlocked || !SS) return;
      NS.autoUnlock = !1;
      const HS = SS.createBuffer(1, 1, 22050);
      NS._scratchBuffer = HS;
      const gS = new AbortController;
      let tS = "afterPaint";
      const bS = () => {
          var tS;
          if (NS._audioUnlocked) return;
          null === (tS = NS._autoResume) || void 0 === tS || tS.call(NS);
          const bS = SS.createBufferSource();
          bS.buffer = HS, bS.connect(SS.destination), bS.start(0), SS.resume().catch((() => {})), bS.onended = () => {
            bS.disconnect(0), NS._audioUnlocked = !0, gS.abort();
            for (const SS of NS._howls) SS._emit("unlock")
          }
        },
        qS = () => {
          aS(), bS()
        },
        uS = HS => {
          if (aS(), "inTap" === tS) {
            if ("running" === SS.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), bS()
          } else "afterPaint" === tS && (tS = "queued", (0, XS.d)(HS.timeStamp, (() => {
            tS = "inTap", bS()
          })))
        };
      for (const XS of ["touchstart", "touchend"]) document.addEventListener(XS, qS, {
        capture: !0,
        signal: gS.signal
      });
      for (const XS of xS.e) document.addEventListener(XS, uS, {
        capture: !0,
        signal: gS.signal
      })
    });
    let KS = 0;
    const jS = null === (tS = NS._autoSuspend) || void 0 === tS ? void 0 : tS.bind(bS.Howler);

    function GS() {
      CS();
      const {
        ctx: SS,
        masterGain: HS
      } = NS;
      return SS && HS ? {
        ctx: SS,
        destination: HS,
        holdAwake: SS => {
          var HS, gS;
          (KS += SS ? 1 : -1, SS) ? null === (HS = NS._autoResume) || void 0 === HS || HS.call(NS): null === (gS = NS._autoSuspend) || void 0 === gS || gS.call(NS)
        },
        wake: () => {
          var HS;
          "running" !== SS.state && (null === (HS = NS._autoResume) || void 0 === HS || HS.call(NS), SS.resume().catch((() => {})))
        }
      } : null
    }

    function CS() {
      var SS;
      (NS.volume(), NS.ctx && NS.autoUnlock) && (null === (SS = NS._unlockAudio) || void 0 === SS || SS.call(NS))
    }
    jS && (NS._autoSuspend = () => KS > 0 ? bS.Howler : jS())
  },
  42596: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS,
      f: () => bS
    });
    const tS = ["recording", "freecam", "keyframe"];

    function bS() {
      const SS = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(SS[1]) << 32n | BigInt(SS[0])
    }
  },
  60676: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      HOLD_TIMEOUT_MS: () => uS,
      ReplayViewer: () => fS
    });
    var tS = gS(36973),
      bS = gS(37014),
      XS = gS(37005),
      xS = gS(37029),
      NS = gS(4926),
      qS = gS(42596);
    const uS = 1e4,
      IS = new Set(["bK"]);
    class fS {
      constructor(SS) {
        var HS;
        this.deps = SS, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (HS = SS.now) && void 0 !== HS ? HS : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== NS.qd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Ku() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? tS.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(SS, HS) {
        var gS, XS, xS, qS;
        const {
          client: uS
        } = this.deps;
        if (!this.playback) {
          if (!uS.setPlayback(!0)) throw new Error(tS.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const IS = this.epoch;
        let fS;
        try {
          fS = await uS.open(SS, (() => (0, bS.b)(SS, HS)))
        } finally {
          this.loadingOpens--
        }
        if (IS !== this.epoch && "reloading" !== fS) throw new Error(tS.b.coreStopped.text);
        if ("opening" !== fS) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const SS = function(SS) {
            switch (SS) {
              case "reloading":
                return null;
              case "stopped":
              case NS.ld.ModuleTrap:
                return tS.b.coreStopped;
              case NS.ld.ModuleLoad:
                return tS.b.viewerLoadFailed;
              case NS.ld.TooLarge:
                return tS.b.cantOpen
            }
          }(fS);
          if (null === SS) return;
          throw new Error(SS.text)
        }
        return this.rejectSave(new Error(tS.b.saveClosed.text)), this.fileName = null !== (gS = null !== (XS = HS.fileName) && void 0 !== XS ? XS : null === (xS = HS.fileHandle) || void 0 === xS ? void 0 : xS.name) && void 0 !== gS ? gS : null, this.fileHandle = null !== (qS = HS.fileHandle) && void 0 !== qS ? qS : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((SS, HS) => {
          this.pendingOpen = {
            resolve: SS,
            reject: HS
          }
        }))
      }
      play() {
        this.holds.has("bK") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("bK")
      }
      seek(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gS = this.lastView;
        null !== gS && (HS || SS < gS.mf) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(SS, HS)
      }
      setSpeed(SS) {
        this.deps.client.setSpeed(SS)
      }
      setCameraMode(SS) {
        this.deps.client.setCameraMode(SS)
      }
      cycleCameraMode() {
        const SS = this.lastView;
        null !== SS && SS.state !== NS.qd.None && this.setCameraMode(qS.c[(qS.c.indexOf(SS.cameraMode) + 1) % qS.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(SS) {
        this.edited(this.deps.client.setKeyframe(SS))
      }
      moveKeyframe(SS, HS) {
        this.edited(this.deps.client.moveKeyframe(SS, HS))
      }
      deleteKeyframes(SS, HS) {
        this.edited(this.deps.client.deleteKeyframes(SS, HS))
      }
      setMark(SS) {
        this.edited(this.deps.client.setMark(SS))
      }
      crop(SS, HS) {
        return !(HS <= SS) && (null !== this.pendingSave ? (this.deps.notify(tS.b.saveBusy), !1) : !!this.deps.client.crop(SS, HS) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(tS.b.saveBusy.text)) : new Promise(((SS, HS) => {
          const gS = {
            resolve: SS,
            reject: HS
          };
          this.pendingSave = gS, this.editsAtSave = this.edits, this.deps.client.save((0, qS.f)()).then((SS => {
            this.pendingSave === gS && this.saveStarted(SS)
          }), (SS => {
            this.pendingSave === gS && this.rejectSave(SS instanceof Error ? SS : new Error(String(SS)))
          }))
        }))
      }
      saveStarted(SS) {
        switch (SS) {
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
      markSaved(SS, HS) {
        var gS, tS;
        this.fileHandle = SS, this.fileName = null !== (gS = null !== (tS = null === SS || void 0 === SS ? void 0 : SS.name) && void 0 !== tS ? tS : HS) && void 0 !== gS ? gS : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(tS.b.coreStopped.text)), this.rejectSave(new Error(tS.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var SS, HS, gS;
        const tS = this.deps.client.view(),
          bS = tS !== this.lastView;
        this.lastView = tS, this.opening && null !== tS && tS.state !== NS.qd.None && tS.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, xS.g)()), this.cropAsked ? (this.cropAsked = !1, null !== tS && tS.state === NS.qd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== tS && tS.state !== NS.qd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const XS = 0 === this.settleFrames && 0 === (null !== (SS = null === (HS = (gS = this.deps).meshPending) || void 0 === HS ? void 0 : HS.call(gS)) && void 0 !== SS ? SS : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && XS && this.release("opening"), this.holds.has("seek") && XS && this.release("seek"), this.holds.has("crop") && !this.cropRunning && XS && this.release("crop");
        const qS = this.now();
        for (const [xS, NS] of this.holds) !IS.has(xS) && qS - NS >= uS && this.release(xS);
        this.saveRefused && !this.cropping && this.saveFailed(!1), bS && this.deps.onChange()
      }
      cropped() {
        (0, xS.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(SS) {
        switch (SS.reason) {
          case NS.ld.TooLarge:
            break;
          case NS.ld.Open:
          case NS.ld.NothingStaged: {
            this.opening = !1, this.release("opening");
            const HS = (0, XS.e)(SS.version) ? tS.b.replayTooOld : tS.b.cantOpen;
            null === this.pendingOpen && this.deps.notify(HS), this.settleOpen(new Error(HS.text));
            break
          }
          case NS.ld.Crop:
            if (SS.code === NS.jd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(tS.b.cropFailed);
            break;
          case NS.ld.ModuleTrap:
          case NS.ld.ModuleLoad:
          case NS.ld.Port:
            this.moduleEnded(SS.reason === NS.ld.ModuleTrap ? tS.b.coreStopped : tS.b.cantOpen);
            break;
          case NS.ld.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${SS.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(SS) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(SS), this.settleOpen(new Error(SS.text))
      }
      saveDone(SS) {
        const HS = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === HS || void 0 === HS || HS.resolve(SS)
      }
      saveFailed(SS) {
        this.rejectSave(new Error(SS ? tS.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(SS) {
        SS && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(tS.b.cropBusy.text)) : this.deps.notify(tS.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(SS) {
        const HS = this.pendingOpen;
        this.pendingOpen = null, null === SS ? null === HS || void 0 === HS || HS.resolve() : null === HS || void 0 === HS || HS.reject(SS)
      }
      rejectSave(SS) {
        const HS = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === HS || void 0 === HS || HS.reject(SS)
      }
      hold(SS) {
        const HS = 0 === this.holds.size;
        this.holds.set(SS, this.now()), HS && this.deps.setHoldDraws(!0)
      }
      release(SS) {
        this.holds.delete(SS) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  60670: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      MESH_TAIL_MS: () => uS,
      PLAY_START_TIMEOUT_MS: () => NS,
      startWasmReplayVideoExport: () => fS
    });
    var tS = gS(39263),
      bS = gS(60676),
      XS = gS(4926),
      xS = gS(2526);
    const NS = bS.HOLD_TIMEOUT_MS + 5e3,
      qS = 50,
      uS = 200;

    function IS(SS) {
      var HS;
      return (null === (HS = SS.view) || void 0 === HS ? void 0 : HS.state) === XS.qd.Cropping || SS.Ku.includes("crop")
    }

    function fS(SS) {
      return (0, tS.b)((() => function(SS) {
        var HS, gS, tS, bS, fS, kS;
        const aS = SS.viewer(),
          KS = null !== (HS = null === aS || void 0 === aS ? void 0 : aS.view) && void 0 !== HS ? HS : null,
          jS = SS.canvas();
        if (!aS || !KS || KS.state === XS.qd.None || 0 === KS.totalTicks || !jS || IS(aS)) return null;
        const GS = null !== (gS = SS.now) && void 0 !== gS ? gS : () => performance.now(),
          CS = aS.id,
          nS = () => {
            const HS = SS.viewer();
            return HS === aS && HS.id === CS && HS.isOpen ? HS : null
          },
          PS = Math.min(null !== (tS = null === (bS = KS.mark) || void 0 === bS ? void 0 : bS.outTick) && void 0 !== tS ? tS : 1 / 0, KS.totalTicks - 1);
        let QS = null,
          DS = !1;
        const wS = () => {
          var SS, HS;
          return (null === (SS = nS()) || void 0 === SS || null === (HS = SS.view) || void 0 === HS ? void 0 : HS.state) === XS.qd.Playing
        };
        return {
          YL: XS.Bd,
          playbackMarkInTick: null !== (fS = null === (kS = KS.mark) || void 0 === kS ? void 0 : kS.inTick) && void 0 !== fS ? fS : null,
          startFailure: () => {
            const SS = nS();
            return null === SS ? "Another replay opened. Export it again from there." : IS(SS) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var SS, HS;
            return null !== (SS = null === (HS = nS()) || void 0 === HS ? void 0 : HS.fileName) && void 0 !== SS ? SS : null
          },
          playbackSpeed: () => {
            var SS, HS, gS;
            return null !== (SS = null === (HS = nS()) || void 0 === HS || null === (gS = HS.view) || void 0 === gS ? void 0 : gS.speed) && void 0 !== SS ? SS : 1
          },
          setPlaybackSpeed: SS => {
            var HS;
            null === (HS = nS()) || void 0 === HS || HS.setSpeed(SS)
          },
          play: () => {
            var SS;
            DS = !1, QS = GS(), null === (SS = nS()) || void 0 === SS || SS.play()
          },
          pause: () => {
            var SS;
            null === (SS = nS()) || void 0 === SS || SS.pause()
          },
          seekToTick: SS => {
            var HS;
            null === (HS = nS()) || void 0 === HS || HS.seek(SS, !0)
          },
          seekSettled: () => new Promise((SS => {
            const HS = setInterval((() => {
              const gS = nS();
              null === gS ? (clearInterval(HS), SS()) : gS.Ku.includes("seek") || (clearInterval(HS), setTimeout(SS, uS))
            }), qS)
          })),
          isPlaying: () => {
            var SS, HS, gS;
            return null !== QS && null !== nS() && (!!wS() || !DS && (null !== (SS = null === (HS = nS()) || void 0 === HS || null === (gS = HS.view) || void 0 === gS ? void 0 : gS.mf) && void 0 !== SS ? SS : 0) < PS && GS() - QS < NS)
          },
          watchPlayback: HS => {
            const gS = SS.watchViewer((() => {
                DS ||= null !== QS && wS(), HS()
              })),
              tS = setTimeout(HS, NS + 1);
            return () => {
              clearTimeout(tS), gS()
            }
          },
          playbackFailure: () => {
            var SS, HS;
            const gS = nS();
            return null === gS ? "The replay closed before the video finished." : (null !== (SS = null === (HS = gS.view) || void 0 === HS ? void 0 : HS.mf) && void 0 !== SS ? SS : 0) >= PS ? null : DS ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => jS,
          closeViewer: () => {
            SS.requestViewer("close")
          },
          reopenViewer: () => {
            SS.requestViewer("open")
          },
          holdInput: xS.f
        }
      }(SS)))
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);