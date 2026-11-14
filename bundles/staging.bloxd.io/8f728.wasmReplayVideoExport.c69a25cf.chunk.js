export const id = 56;
export const ids = [50, 56, 78];
export const modules = {
  35584: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      f: () => sc
    });
    var Vc = nc(35);
    const Ic = 1500,
      rB = 1e3,
      uc = {
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
      };

    function sc(cB) {
      var Bc;
      const nc = null !== (Bc = cB.timeoutMs) && void 0 !== Bc ? Bc : "Error" === cB.type ? Ic : rB;
      Vc.i.Vu("showBottomMessage", {
        message: cB.text,
        timeoutLength: nc,
        type: cB.type
      })
    }
  },
  35594: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc,
      g: () => Ic
    });
    const Vc = "data-replay-ui-active",
      Ic = [{
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
  35601: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Pc,
      e: () => Oc,
      f: () => qB
    });
    var Vc = nc(27),
      Ic = nc(35),
      rB = nc(35594);

    function uc() {
      const cB = {};
      for (const {
          group: Bc
        }
        of rB.g) cB[Bc] = !0;
      return cB
    }
    let sc = uc();

    function Mc() {
      Ic.i.Vu("replayViewer|uiVisibilityChanged")
    }

    function Pc() {
      return sc
    }

    function qB(cB, Bc) {
      sc[cB] !== Bc && (sc = {
        ...sc,
        [cB]: Bc
      }, "nametag" === cB && Vc.d.set({
        areNametagsHidden: !Bc
      }), Mc())
    }

    function Oc() {
      sc = uc(), Vc.d.set({
        areNametagsHidden: !1
      }), Mc()
    }
  },
  37673: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Zc
    });
    var Vc = nc(1517),
      Ic = nc(1194),
      rB = nc(73),
      uc = nc(912),
      sc = nc.n(uc),
      Mc = nc(1255),
      Pc = nc(107);
    const qB = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      Oc = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function Tc(cB) {
      return "webm" === cB ? qB : Oc
    }

    function fc(cB) {
      for (const Bc of cB)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(Bc)) return Bc;
      return null
    }

    function mB(cB) {
      return null !== fc(Tc(cB))
    }
    var ec = nc(957);
    const tB = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function Sc() {
      return mB("webm") ? "webm" : mB("mp4") ? "mp4" : "webm"
    }

    function yB(cB) {
      let {
        cards: Bc
      } = cB;
      return (0, ec.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: Bc.map((cB => (0, ec.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, ec.jsx)("div", {
            className: sc()("ReplayVideoExportOptionCard", {
              Selected: cB.selected,
              Disabled: cB.disabled
            }),
            onClick: () => {
              cB.disabled || cB.onSelect()
            },
            children: (0, ec.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, ec.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: cB.label
              }), (0, ec.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: cB.description
              })]
            })
          }), cB.disabled && cB.disabledReason && (0, ec.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: cB.disabledReason
          })]
        }, cB.id)))
      })
    }
    const zB = (0, rB.memo)((function(cB) {
      let {
        hasPlaybackMark: Bc,
        canIncludeUi: nc,
        includeUiDisabledReason: Vc,
        selectionRef: Ic,
        closePopup: uc
      } = cB;
      const sc = mB("webm") || mB("mp4"),
        [qB, Oc] = (0, rB.useState)(Sc),
        [Tc, fc] = (0, rB.useState)(nc),
        zB = sc && mB(qB);
      if (!sc) {
        const cB = (0, Pc.isMobile)() ? "screen recording" : "OBS";
        return (0, ec.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, ec.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, ec.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${cB}.`
          }), (0, ec.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, ec.jsx)(Mc.L, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                Ic.options = null, uc()
              },
              children: "Close"
            })
          })]
        })
      }
      const pc = Bc ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        hc = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !Tc,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            fc(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: Tc,
          disabled: !nc,
          disabledReason: Vc,
          onSelect: () => {
            fc(!0)
          }
        }],
        aB = tB.map((cB => {
          const Bc = mB(cB.id);
          return {
            id: cB.id,
            label: cB.label,
            description: cB.description,
            selected: qB === cB.id,
            disabled: !Bc,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              Oc(cB.id)
            }
          }
        }));
      return (0, ec.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, ec.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, ec.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: pc
        }), (0, ec.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, ec.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, ec.jsx)(yB, {
            cards: hc
          })]
        }), (0, ec.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, ec.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, ec.jsx)(yB, {
            cards: aB
          })]
        }), (0, ec.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, ec.jsx)(Mc.n, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !zB,
            onClick: () => {
              Ic.options = {
                format: qB,
                includeUi: nc && Tc
              }, uc()
            },
            children: "Export"
          }), (0, ec.jsx)(Mc.L, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              Ic.options = null, uc()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var pc = nc(3907),
      hc = nc(35594),
      aB = nc(35601);
    let lc = null;

    function Yc() {
      return function() {
        const cB = (0, aB.b)();
        for (const {
            group: Bc,
            dataAttr: nc
          }
          of hc.g)
          if (nc && cB[Bc]) return !0;
        return !1
      }() ? function() {
        var cB;
        return "function" === typeof(null === (cB = navigator.mediaDevices) || void 0 === cB ? void 0 : cB.getDisplayMedia)
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
    async function Lc(cB, Bc, nc) {
      return cB ? async function() {
        const cB = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const Bc of cB.getAudioTracks()) Bc.stop(), cB.removeTrack(Bc);
        return cB
      }(): Bc().captureStream(Math.max(1, Math.round(nc)))
    }
    var gB = nc(37554);
    let Uc = !1;

    function bB(cB) {
      cB.holdInput(!1), (0, gB.f)(!1)
    }
    async function Zc(cB) {
      var Bc, nc;
      if ((0, gB.c)() || Uc) return;
      const rB = cB();
      if (!rB) return;
      Uc = !0;
      let uc = null;
      const sc = rB.playbackMarkInTick,
        {
          canIncludeUi: Mc,
          includeUiDisabledReason: Pc
        } = Yc();
      try {
        uc = await async function(cB) {
          let {
            hasPlaybackMark: Bc,
            canIncludeUi: nc,
            includeUiDisabledReason: Vc
          } = cB;
          const rB = {
              options: null
            },
            uc = Ic.NotificationProvider.showCustomPopup({
              body: cB => (0, ec.jsx)(zB, {
                hasPlaybackMark: Bc,
                canIncludeUi: nc,
                includeUiDisabledReason: Vc,
                selectionRef: rB,
                closePopup: cB
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await uc.getResult() ? null : rB.options
        }({
          hasPlaybackMark: null !== sc,
          canIncludeUi: Mc,
          includeUiDisabledReason: Pc
        })
      } finally {
        Uc = !1
      }
      if (!uc) return;
      const qB = null !== (Bc = null === (nc = rB.startFailure) || void 0 === nc ? void 0 : nc.call(rB)) && void 0 !== Bc ? Bc : null;
      if (null !== qB) return void Ic.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: qB
      });
      if (! function(cB) {
          return !(0, gB.c)() && ((0, gB.f)(!0), cB.holdInput(!0), !0)
        }(rB)) return;
      let Oc = null;
      try {
        Oc = await Lc(uc.includeUi, (() => rB.canvas()), rB.WBc)
      } catch (Qc) {
        return console.error("Failed to create video stream for export", Qc), bB(rB), void Ic.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Qc instanceof Error ? Qc.message : "Could not start capture."
        })
      }
      let mB = null;
      const tB = [];
      let Sc = null,
        yB = null;
      try {
        var hc, aB, Zc;
        mB = rB.playbackSpeed(), rB.closeViewer(), rB.setPlaybackSpeed(1), rB.pause(), rB.seekToTick(null !== sc && void 0 !== sc ? sc : 0);
        const cB = await async function() {
          const cB = pc.d.masterGain;
          if (!pc.d.ctx || !cB) return null;
          await pc.d.ctx.resume();
          const Bc = pc.d.ctx.createMediaStreamDestination();
          cB.connect(Bc), lc = Bc;
          const [nc] = Bc.stream.getAudioTracks();
          return null !== nc && void 0 !== nc ? nc : null
        }();
        yB = new MediaStream;
        for (const Vc of Oc.getVideoTracks()) yB.addTrack(Vc);
        cB && yB.addTrack(cB);
        const Bc = function(cB) {
          const Bc = fc(Tc(cB));
          if (!Bc) throw new Error(`No MediaRecorder mime type available for ${cB}`);
          return Bc
        }(uc.format);
        Sc = new MediaRecorder(yB, {
          mimeType: Bc,
          videoBitsPerSecond: 8e6
        }), Sc.ondataavailable = cB => {
          cB.data.size > 0 && tB.push(cB.data)
        };
        const nc = new Promise((cB => {
          Sc.onstop = () => {
            cB()
          }
        }));
        await (null === (hc = rB.seekSettled) || void 0 === hc ? void 0 : hc.call(rB));
        const [Mc] = Oc.getVideoTracks();
        Sc.start(250), rB.play();
        const Pc = await
        function(cB, Bc, nc) {
          return new Promise((Vc => {
            let Ic = !1;
            const rB = cB => {
                Ic || (Ic = !0, sc(), Bc.removeEventListener("ended", uc), Vc(cB))
              },
              uc = () => {
                rB("captureLost")
              },
              sc = cB.watchPlayback((() => {
                cB.isPlaying() || rB("completed")
              }));
            Bc.addEventListener("ended", uc), nc.onerror = () => {
              rB("recorderError")
            }, "ended" !== Bc.readyState ? cB.isPlaying() || rB("completed") : rB("captureLost")
          }))
        }(rB, Mc, Sc);
        if (rB.pause(), "inactive" !== Sc.state && Sc.stop(), await nc, "captureLost" === Pc) return void Ic.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === Pc) return void Ic.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const qB = null !== (aB = null === (Zc = rB.playbackFailure) || void 0 === Zc ? void 0 : Zc.call(rB)) && void 0 !== aB ? aB : null;
        if (null !== qB) return void Ic.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${qB} Nothing was saved.`
        });
        const ec = new Blob(tB, {
          type: Bc
        });
        ec.size > 0 ? (0, Vc.c)(ec, function(cB, Bc) {
          const nc = function(cB) {
            return "mp4" === cB ? "mp4" : "webm"
          }(Bc);
          if (cB) return `${cB.replace(/\.bloxdreplay$/i,"")}.${nc}`;
          return `bloxd-replay-${Date.now()}.${nc}`
        }(rB.fileName(), uc.format)) : Ic.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (Qc) {
        console.error("Replay video export failed", Qc), Ic.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Qc instanceof Error ? Qc.message : "Something went wrong while exporting."
        })
      } finally {
        if (Sc && "inactive" !== Sc.state) try {
          Sc.stop()
        } catch (Qc) {
          console.error("Failed to stop MediaRecorder", Qc)
        }! function() {
          const cB = pc.d.masterGain;
          if (lc && cB) {
            try {
              cB.disconnect(lc)
            } catch (Qc) {
              console.error("Failed to disconnect Howler export tee", Qc)
            }
            lc = null
          } else lc = null
        }();
        for (const cB of Oc.getTracks()) cB.stop();
        if (yB)
          for (const cB of yB.getTracks()) cB.stop();
        null !== mB && rB.setPlaybackSpeed(mB), rB.pause(), bB(rB), rB.reopenViewer()
      }
    }
  },
  3907: (cB, Bc, nc) => {
    nc.d(Bc, {
      Howl: () => Vc.Howl,
      d: () => Vc.Howler
    });
    var Vc = nc(3909);
    Vc.Howler._mobileUnloaded = !0
  },
  40530: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc,
      h: () => Ic
    });
    const Vc = ["recording", "freecam", "keyframe"];

    function Ic() {
      const cB = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(cB[1]) << 32n | BigInt(cB[0])
    }
  },
  40573: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      HOLD_TIMEOUT_MS: () => sc,
      ReplayViewer: () => Pc
    });
    var Vc = nc(35584),
      Ic = nc(35601),
      rB = nc(3838),
      uc = nc(40530);
    const sc = 1e4,
      Mc = new Set(["qI"]);
    class Pc {
      constructor(cB) {
        var Bc;
        this.deps = cB, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Bc = cB.now) && void 0 !== Bc ? Bc : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== rB.Ac.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get XB() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Vc.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(cB, Bc) {
        var nc, Ic, uc, sc;
        const {
          client: Mc
        } = this.deps;
        if (!this.playback) {
          if (!Mc.setPlayback(!0)) throw new Error(Vc.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Pc = this.epoch;
        let qB;
        try {
          qB = await Mc.open(cB)
        } finally {
          this.loadingOpens--
        }
        if (Pc !== this.epoch) throw new Error(Vc.b.coreStopped.text);
        if ("opening" !== qB) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const cB = function(cB) {
            switch (cB) {
              case "reloading":
                return null;
              case "stopped":
              case rB.uc.ModuleTrap:
                return Vc.b.coreStopped;
              case rB.uc.ModuleLoad:
                return Vc.b.viewerLoadFailed;
              case rB.uc.TooLarge:
                return Vc.b.cantOpen
            }
          }(qB);
          if (null === cB) return;
          throw new Error(cB.text)
        }
        return this.rejectSave(new Error(Vc.b.saveClosed.text)), this.fileName = null !== (nc = null !== (Ic = Bc.fileName) && void 0 !== Ic ? Ic : null === (uc = Bc.fileHandle) || void 0 === uc ? void 0 : uc.name) && void 0 !== nc ? nc : null, this.fileHandle = null !== (sc = Bc.fileHandle) && void 0 !== sc ? sc : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((cB, Bc) => {
          this.pendingOpen = {
            resolve: cB,
            reject: Bc
          }
        }))
      }
      play() {
        this.holds.has("qI") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("qI")
      }
      seek(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const nc = this.lastView;
        null !== nc && (Bc || cB < nc.cn) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(cB, Bc)
      }
      setSpeed(cB) {
        this.deps.client.setSpeed(cB)
      }
      setCameraMode(cB) {
        this.deps.client.setCameraMode(cB)
      }
      cycleCameraMode() {
        const cB = this.lastView;
        null !== cB && cB.state !== rB.Ac.None && this.setCameraMode(uc.d[(uc.d.indexOf(cB.cameraMode) + 1) % uc.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(cB) {
        this.edited(this.deps.client.setKeyframe(cB))
      }
      moveKeyframe(cB, Bc) {
        this.edited(this.deps.client.moveKeyframe(cB, Bc))
      }
      deleteKeyframes(cB, Bc) {
        this.edited(this.deps.client.deleteKeyframes(cB, Bc))
      }
      setMark(cB) {
        this.edited(this.deps.client.setMark(cB))
      }
      crop(cB, Bc) {
        return !(Bc <= cB) && (null !== this.pendingSave ? (this.deps.notify(Vc.b.saveBusy), !1) : !!this.deps.client.crop(cB, Bc) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Vc.b.saveBusy.text)) : new Promise(((cB, Bc) => {
          const nc = {
            resolve: cB,
            reject: Bc
          };
          this.pendingSave = nc, this.editsAtSave = this.edits, this.deps.client.save((0, uc.h)()).then((cB => {
            this.pendingSave === nc && this.saveStarted(cB)
          }), (cB => {
            this.pendingSave === nc && this.rejectSave(cB instanceof Error ? cB : new Error(String(cB)))
          }))
        }))
      }
      saveStarted(cB) {
        switch (cB) {
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
      markSaved(cB, Bc) {
        var nc, Vc;
        this.fileHandle = cB, this.fileName = null !== (nc = null !== (Vc = null === cB || void 0 === cB ? void 0 : cB.name) && void 0 !== Vc ? Vc : Bc) && void 0 !== nc ? nc : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Vc.b.coreStopped.text)), this.rejectSave(new Error(Vc.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var cB, Bc, nc;
        const Vc = this.deps.client.view(),
          uc = Vc !== this.lastView;
        this.lastView = Vc, this.opening && null !== Vc && Vc.state !== rB.Ac.None && Vc.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Ic.e)()), this.cropAsked ? (this.cropAsked = !1, null !== Vc && Vc.state === rB.Ac.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Vc && Vc.state !== rB.Ac.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Pc = 0 === this.settleFrames && 0 === (null !== (cB = null === (Bc = (nc = this.deps).meshPending) || void 0 === Bc ? void 0 : Bc.call(nc)) && void 0 !== cB ? cB : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Pc && this.release("opening"), this.holds.has("seek") && Pc && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Pc && this.release("crop");
        const qB = this.now();
        for (const [Ic, rB] of this.holds) !Mc.has(Ic) && qB - rB >= sc && (this.release(Ic), "opening" === Ic && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), uc && this.deps.onChange()
      }
      cropped() {
        (0, Ic.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(cB) {
        switch (cB.reason) {
          case rB.uc.TooLarge:
            break;
          case rB.uc.Open:
          case rB.uc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Vc.b.cantOpen), this.settleOpen(new Error(Vc.b.cantOpen.text));
            break;
          case rB.uc.Crop:
            if (cB.code === rB.sc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Vc.b.cropFailed);
            break;
          case rB.uc.ModuleTrap:
          case rB.uc.ModuleLoad:
          case rB.uc.Port:
            this.moduleEnded(cB.reason === rB.uc.ModuleTrap ? Vc.b.coreStopped : Vc.b.cantOpen);
            break;
          case rB.uc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${cB.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(cB) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(cB), this.settleOpen(new Error(cB.text))
      }
      saveDone(cB) {
        const Bc = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Bc || void 0 === Bc || Bc.resolve(cB)
      }
      saveFailed(cB) {
        this.rejectSave(new Error(cB ? Vc.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(cB) {
        cB && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Vc.b.cropBusy.text)) : this.deps.notify(Vc.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(cB) {
        const Bc = this.pendingOpen;
        this.pendingOpen = null, null === cB ? null === Bc || void 0 === Bc || Bc.resolve() : null === Bc || void 0 === Bc || Bc.reject(cB)
      }
      rejectSave(cB) {
        const Bc = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Bc || void 0 === Bc || Bc.reject(cB)
      }
      hold(cB) {
        const Bc = 0 === this.holds.size;
        this.holds.set(cB, this.now()), Bc && this.deps.setHoldDraws(!0)
      }
      release(cB) {
        this.holds.delete(cB) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  40565: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      MESH_TAIL_MS: () => Pc,
      PLAY_START_TIMEOUT_MS: () => sc,
      startWasmReplayVideoExport: () => Oc
    });
    var Vc = nc(37673),
      Ic = nc(40573),
      rB = nc(3838),
      uc = nc(1940);
    const sc = Ic.HOLD_TIMEOUT_MS + 5e3,
      Mc = 50,
      Pc = 200;

    function qB(cB) {
      var Bc;
      return (null === (Bc = cB.view) || void 0 === Bc ? void 0 : Bc.state) === rB.Ac.Cropping || cB.XB.includes("crop")
    }

    function Oc(cB) {
      return (0, Vc.b)((() => function(cB) {
        var Bc, nc, Vc, Ic, Oc, Tc;
        const fc = cB.viewer(),
          mB = null !== (Bc = null === fc || void 0 === fc ? void 0 : fc.view) && void 0 !== Bc ? Bc : null,
          ec = cB.canvas();
        if (!fc || !mB || mB.state === rB.Ac.None || 0 === mB.totalTicks || !ec || qB(fc)) return null;
        const tB = null !== (nc = cB.now) && void 0 !== nc ? nc : () => performance.now(),
          Sc = fc.id,
          yB = () => {
            const Bc = cB.viewer();
            return Bc === fc && Bc.id === Sc && Bc.isOpen ? Bc : null
          },
          zB = Math.min(null !== (Vc = null === (Ic = mB.mark) || void 0 === Ic ? void 0 : Ic.outTick) && void 0 !== Vc ? Vc : 1 / 0, mB.totalTicks - 1);
        let pc = null,
          hc = !1;
        const aB = () => {
          var cB, Bc;
          return (null === (cB = yB()) || void 0 === cB || null === (Bc = cB.view) || void 0 === Bc ? void 0 : Bc.state) === rB.Ac.Playing
        };
        return {
          WBc: rB.Mc,
          playbackMarkInTick: null !== (Oc = null === (Tc = mB.mark) || void 0 === Tc ? void 0 : Tc.inTick) && void 0 !== Oc ? Oc : null,
          startFailure: () => {
            const cB = yB();
            return null === cB ? "Another replay opened. Export it again from there." : qB(cB) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var cB, Bc;
            return null !== (cB = null === (Bc = yB()) || void 0 === Bc ? void 0 : Bc.fileName) && void 0 !== cB ? cB : null
          },
          playbackSpeed: () => {
            var cB, Bc, nc;
            return null !== (cB = null === (Bc = yB()) || void 0 === Bc || null === (nc = Bc.view) || void 0 === nc ? void 0 : nc.speed) && void 0 !== cB ? cB : 1
          },
          setPlaybackSpeed: cB => {
            var Bc;
            null === (Bc = yB()) || void 0 === Bc || Bc.setSpeed(cB)
          },
          play: () => {
            var cB;
            hc = !1, pc = tB(), null === (cB = yB()) || void 0 === cB || cB.play()
          },
          pause: () => {
            var cB;
            null === (cB = yB()) || void 0 === cB || cB.pause()
          },
          seekToTick: cB => {
            var Bc;
            null === (Bc = yB()) || void 0 === Bc || Bc.seek(cB, !0)
          },
          seekSettled: () => new Promise((cB => {
            const Bc = setInterval((() => {
              const nc = yB();
              null === nc ? (clearInterval(Bc), cB()) : nc.XB.includes("seek") || (clearInterval(Bc), setTimeout(cB, Pc))
            }), Mc)
          })),
          isPlaying: () => {
            var cB, Bc, nc;
            return null !== pc && null !== yB() && (!!aB() || !hc && (null !== (cB = null === (Bc = yB()) || void 0 === Bc || null === (nc = Bc.view) || void 0 === nc ? void 0 : nc.cn) && void 0 !== cB ? cB : 0) < zB && tB() - pc < sc)
          },
          watchPlayback: Bc => {
            const nc = cB.watchViewer((() => {
                hc ||= null !== pc && aB(), Bc()
              })),
              Vc = setTimeout(Bc, sc + 1);
            return () => {
              clearTimeout(Vc), nc()
            }
          },
          playbackFailure: () => {
            var cB, Bc;
            const nc = yB();
            return null === nc ? "The replay closed before the video finished." : (null !== (cB = null === (Bc = nc.view) || void 0 === Bc ? void 0 : Bc.cn) && void 0 !== cB ? cB : 0) >= zB ? null : hc ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => ec,
          closeViewer: () => {
            cB.requestViewer("close")
          },
          reopenViewer: () => {
            cB.requestViewer("open")
          },
          holdInput: uc.f
        }
      }(cB)))
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);