export const id = 78;
export const ids = [72, 78, 108];
export const modules = {
  37813: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re,
      g: () => ke
    });
    var ye = He(610),
      be = He(35),
      Me = He(37775);
    const Ke = "replayFileKeptForReload",
      Ue = "replayFileKeptForReloadAt",
      Fe = "replayFileKeptForReloadTab",
      Je = 3e5,
      oe = 5e3;
    async function Re(ee, ie) {
      const He = Date.now(),
        Me = {
          at: He,
          bytes: ee,
          source: ie
        },
        Je = await Promise.race([(async () => await be.e.setItem(Ue, He) && be.e.setItem(Ke, Me))(), (0, ye.U)(oe).then((() => !1))]);
      Je || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const Re = {
        at: He,
        KR: Je
      };
      be.m.setItem(Fe, Re)
    }
    async function ke() {
      var ee;
      const ie = be.m.getItem(Fe);
      null !== ie && be.m.removeItem(Fe);
      const He = Date.now(),
        ye = await be.e.getItem(Ue),
        oe = null !== ie && He - ie.at <= Je,
        Re = null !== ie && ye === ie.at;
      let ke = null;
      if (null !== ye && (Re || ("number" !== typeof ye || He - ye > Je)) && (ke = oe && Re && ie.KR ? await be.e.getItem(Ke) : null, await Promise.all([be.e.removeItem(Ue), be.e.removeItem(Ke)])), !oe) return null;
      if ((null === (ee = ke) || void 0 === ee ? void 0 : ee.at) !== ie.at) throw new Error(Me.d.replayNotKept.text);
      return {
        bytes: ke.bytes,
        source: ke.source
      }
    }
  },
  37807: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      g: () => Me,
      j: () => be
    });
    const ye = [9];

    function be(ee) {
      return ye.includes(ee)
    }

    function Me(ee) {
      return null !== ee && ee >= 3 && ee < ye[0]
    }
  },
  37775: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke,
      g: () => Je,
      k: () => Fe
    });
    var ye = He(27);
    const be = 1500,
      Me = 1e3,
      Ke = {
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
      Ue = new Set(Object.values(Ke).filter((ee => "Error" === ee.type)).map((ee => ee.text)));

    function Fe(ee) {
      return ee instanceof Error && Ue.has(ee.message) ? ee.message : void 0
    }

    function Je(ee) {
      var ie;
      const He = null !== (ie = ee.timeoutMs) && void 0 !== ie ? ie : "Error" === ee.type ? be : Me;
      ye.h.yR("showBottomMessage", {
        message: ee.text,
        timeoutLength: He,
        type: ee.type
      })
    }
  },
  37825: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye,
      d: () => be
    });
    const ye = "data-replay-ui-active",
      be = [{
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
  37828: (ee, ie, He) => {
    He.d(ie, {
      e: () => Je,
      h: () => Re,
      i: () => oe
    });
    var ye = He(18),
      be = He(27),
      Me = He(37825);

    function Ke() {
      const ee = {};
      for (const {
          group: ie
        }
        of Me.d) ee[ie] = !0;
      return ee
    }
    let Ue = Ke();

    function Fe() {
      be.h.yR("replayViewer|uiVisibilityChanged")
    }

    function Je() {
      return Ue
    }

    function oe(ee, ie) {
      Ue[ee] !== ie && (Ue = {
        ...Ue,
        [ee]: ie
      }, "nametag" === ee && ye.e.set({
        areNametagsHidden: !ie
      }), Fe())
    }

    function Re() {
      Ue = Ke(), ye.e.set({
        areNametagsHidden: !1
      }), Fe()
    }
  },
  40101: (ee, ie, He) => {
    He.d(ie, {
      e: () => Pe
    });
    var ye = He(1790),
      be = He(1340),
      Me = He(59),
      Ke = He(1053),
      Ue = He.n(Ke),
      Fe = He(1438),
      Je = He(97);
    const oe = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      Re = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function ke(ee) {
      return "webm" === ee ? oe : Re
    }

    function qe(ee) {
      for (const ie of ee)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(ie)) return ie;
      return null
    }

    function fe(ee) {
      return null !== qe(ke(ee))
    }
    var Te = He(1228);
    const pe = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function Xe() {
      return fe("webm") ? "webm" : fe("mp4") ? "mp4" : "webm"
    }

    function ze(ee) {
      let {
        cards: ie
      } = ee;
      return (0, Te.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: ie.map((ee => (0, Te.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, Te.jsx)("div", {
            className: Ue()("ReplayVideoExportOptionCard", {
              Selected: ee.selected,
              Disabled: ee.disabled
            }),
            onClick: () => {
              ee.disabled || ee.onSelect()
            },
            children: (0, Te.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, Te.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: ee.label
              }), (0, Te.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: ee.description
              })]
            })
          }), ee.disabled && ee.disabledReason && (0, Te.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: ee.disabledReason
          })]
        }, ee.id)))
      })
    }
    const Be = (0, Me.memo)((function(ee) {
      let {
        hasPlaybackMark: ie,
        canIncludeUi: He,
        includeUiDisabledReason: ye,
        selectionRef: be,
        closePopup: Ke
      } = ee;
      const Ue = fe("webm") || fe("mp4"),
        [oe, Re] = (0, Me.useState)(Xe),
        [ke, qe] = (0, Me.useState)(He),
        Be = Ue && fe(oe);
      if (!Ue) {
        const ee = (0, Je.isMobile)() ? "screen recording" : "OBS";
        return (0, Te.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, Te.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, Te.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${ee}.`
          }), (0, Te.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, Te.jsx)(Fe.G, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                be.options = null, Ke()
              },
              children: "Close"
            })
          })]
        })
      }
      const Ee = ie ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        ge = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !ke,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            qe(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: ke,
          disabled: !He,
          disabledReason: ye,
          onSelect: () => {
            qe(!0)
          }
        }],
        Oe = pe.map((ee => {
          const ie = fe(ee.id);
          return {
            id: ee.id,
            label: ee.label,
            description: ee.description,
            selected: oe === ee.id,
            disabled: !ie,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              Re(ee.id)
            }
          }
        }));
      return (0, Te.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, Te.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, Te.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: Ee
        }), (0, Te.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Te.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, Te.jsx)(ze, {
            cards: ge
          })]
        }), (0, Te.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Te.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, Te.jsx)(ze, {
            cards: Oe
          })]
        }), (0, Te.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, Te.jsx)(Fe.m, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !Be,
            onClick: () => {
              be.options = {
                format: oe,
                includeUi: He && ke
              }, Ke()
            },
            children: "Export"
          }), (0, Te.jsx)(Fe.G, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              be.options = null, Ke()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var Ee = He(5338),
      ge = He(37825),
      Oe = He(37828);
    let de = null;

    function We() {
      return function() {
        const ee = (0, Oe.e)();
        for (const {
            group: ie,
            dataAttr: He
          }
          of ge.d)
          if (He && ee[ie]) return !0;
        return !1
      }() ? function() {
        var ee;
        return "function" === typeof(null === (ee = navigator.mediaDevices) || void 0 === ee ? void 0 : ee.getDisplayMedia)
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
    async function te(ee, ie, He) {
      return ee ? async function() {
        const ee = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const ie of ee.getAudioTracks()) ie.stop(), ee.removeTrack(ie);
        return ee
      }(): ie().captureStream(Math.max(1, Math.round(He)))
    }
    var Ze = He(39867);
    let we = !1;

    function De(ee) {
      ee.holdInput(!1), (0, Ze.f)(!1)
    }
    async function Pe(ee) {
      var ie, He;
      if ((0, Ze.d)() || we) return;
      const Me = ee();
      if (!Me) return;
      we = !0;
      let Ke = null;
      const Ue = Me.playbackMarkInTick,
        {
          canIncludeUi: Fe,
          includeUiDisabledReason: Je
        } = We();
      try {
        Ke = await async function(ee) {
          let {
            hasPlaybackMark: ie,
            canIncludeUi: He,
            includeUiDisabledReason: ye
          } = ee;
          const Me = {
              options: null
            },
            Ke = be.NotificationProvider.showCustomPopup({
              body: ee => (0, Te.jsx)(Be, {
                hasPlaybackMark: ie,
                canIncludeUi: He,
                includeUiDisabledReason: ye,
                selectionRef: Me,
                closePopup: ee
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await Ke.getResult() ? null : Me.options
        }({
          hasPlaybackMark: null !== Ue,
          canIncludeUi: Fe,
          includeUiDisabledReason: Je
        })
      } finally {
        we = !1
      }
      if (!Ke) return;
      const oe = null !== (ie = null === (He = Me.startFailure) || void 0 === He ? void 0 : He.call(Me)) && void 0 !== ie ? ie : null;
      if (null !== oe) return void be.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: oe
      });
      if (! function(ee) {
          return !(0, Ze.d)() && ((0, Ze.f)(!0), ee.holdInput(!0), !0)
        }(Me)) return;
      let Re = null;
      try {
        Re = await te(Ke.includeUi, (() => Me.canvas()), Me.lV)
      } catch (Ae) {
        return console.error("Failed to create video stream for export", Ae), De(Me), void be.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Ae instanceof Error ? Ae.message : "Could not start capture."
        })
      }
      let fe = null;
      const pe = [];
      let Xe = null,
        ze = null;
      try {
        var ge, Oe, Pe;
        fe = Me.playbackSpeed(), Me.closeViewer(), Me.setPlaybackSpeed(1), Me.pause(), Me.seekToTick(null !== Ue && void 0 !== Ue ? Ue : 0);
        const ee = await async function() {
          const ee = Ee.Howler.masterGain;
          if (!Ee.Howler.ctx || !ee) return null;
          await Ee.Howler.ctx.resume();
          const ie = Ee.Howler.ctx.createMediaStreamDestination();
          ee.connect(ie), de = ie;
          const [He] = ie.stream.getAudioTracks();
          return null !== He && void 0 !== He ? He : null
        }();
        ze = new MediaStream;
        for (const ye of Re.getVideoTracks()) ze.addTrack(ye);
        ee && ze.addTrack(ee);
        const ie = function(ee) {
          const ie = qe(ke(ee));
          if (!ie) throw new Error(`No MediaRecorder mime type available for ${ee}`);
          return ie
        }(Ke.format);
        Xe = new MediaRecorder(ze, {
          mimeType: ie,
          videoBitsPerSecond: 8e6
        }), Xe.ondataavailable = ee => {
          ee.data.size > 0 && pe.push(ee.data)
        };
        const He = new Promise((ee => {
          Xe.onstop = () => {
            ee()
          }
        }));
        await (null === (ge = Me.seekSettled) || void 0 === ge ? void 0 : ge.call(Me));
        const [Fe] = Re.getVideoTracks();
        Xe.start(250), Me.play();
        const Je = await
        function(ee, ie, He) {
          return new Promise((ye => {
            let be = !1;
            const Me = ee => {
                be || (be = !0, Ue(), ie.removeEventListener("ended", Ke), ye(ee))
              },
              Ke = () => {
                Me("captureLost")
              },
              Ue = ee.watchPlayback((() => {
                ee.isPlaying() || Me("completed")
              }));
            ie.addEventListener("ended", Ke), He.onerror = () => {
              Me("recorderError")
            }, "ended" !== ie.readyState ? ee.isPlaying() || Me("completed") : Me("captureLost")
          }))
        }(Me, Fe, Xe);
        if (Me.pause(), "inactive" !== Xe.state && Xe.stop(), await He, "captureLost" === Je) return void be.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === Je) return void be.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const oe = null !== (Oe = null === (Pe = Me.playbackFailure) || void 0 === Pe ? void 0 : Pe.call(Me)) && void 0 !== Oe ? Oe : null;
        if (null !== oe) return void be.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${oe} Nothing was saved.`
        });
        const Te = new Blob(pe, {
          type: ie
        });
        Te.size > 0 ? (0, ye.e)(Te, function(ee, ie) {
          const He = function(ee) {
            return "mp4" === ee ? "mp4" : "webm"
          }(ie);
          if (ee) return `${ee.replace(/\.bloxdreplay$/i,"")}.${He}`;
          return `bloxd-replay-${Date.now()}.${He}`
        }(Me.fileName(), Ke.format)) : be.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (Ae) {
        console.error("Replay video export failed", Ae), be.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Ae instanceof Error ? Ae.message : "Something went wrong while exporting."
        })
      } finally {
        if (Xe && "inactive" !== Xe.state) try {
          Xe.stop()
        } catch (Ae) {
          console.error("Failed to stop MediaRecorder", Ae)
        }! function() {
          const ee = Ee.Howler.masterGain;
          if (de && ee) {
            try {
              ee.disconnect(de)
            } catch (Ae) {
              console.error("Failed to disconnect Howler export tee", Ae)
            }
            de = null
          } else de = null
        }();
        for (const ee of Re.getTracks()) ee.stop();
        if (ze)
          for (const ee of ze.getTracks()) ee.stop();
        null !== fe && Me.setPlaybackSpeed(fe), Me.pause(), De(Me), Me.reopenViewer()
      }
    }
  },
  5338: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      Howl: () => be.Howl,
      Howler: () => be.Howler,
      musicOutput: () => pe,
      readyAudioContext: () => Xe
    });
    var ye, be = He(5340),
      Me = He(3791),
      Ke = He(5055);
    const Ue = be.Howler;

    function Fe() {
      var ee, ie;
      if (Ue.ctx || !Ue.usingWebAudio || "undefined" === typeof AudioContext || !(0, Ke.f)()) return;
      const He = navigator.audioSession;
      let ye;
      "auto" === (null === He || void 0 === He ? void 0 : He.type) && (He.type = "ambient");
      try {
        ye = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const be = ye.createGain();
      be.gain.setValueAtTime(Ue._muted ? 0 : null !== (ee = Ue._volume) && void 0 !== ee ? ee : 1, ye.currentTime), be.connect(ye.destination), Ue.ctx = ye, Ue.masterGain = be, null === (ie = Ue._setup) || void 0 === ie || ie.call(Ue)
    }
    Ue._mobileUnloaded = !0;
    const Je = Ue.volume.bind(be.Howler);
    Ue.volume = function() {
      return Fe(), Je(...arguments)
    };
    const oe = Ue.mute.bind(be.Howler);
    Ue.mute = ee => (Fe(), oe(ee));
    const Re = be.Howl.prototype,
      ke = Re.init;

    function qe() {
      for (; Ue._html5AudioPool.length < Ue.html5PoolSize;) {
        const ee = new Audio;
        ee._unlocked = !0, Ue._releaseHtml5Audio(ee)
      }
      for (const ie of Ue._howls)
        if (!ie._webAudio)
          for (const He of ie._getSoundIds()) {
            var ee;
            const ye = null === (ee = ie._soundById(He)) || void 0 === ee ? void 0 : ee._node;
            ye && !ye._unlocked && (ye._unlocked = !0, ye.load())
          }
    }
    Re.init = function(ee) {
      return Fe(), ke.call(this, ee)
    }, (0, Ke.f)() && (Ue._unlockAudio = () => {
      const ee = Ue.ctx;
      if (Ue._audioUnlocked || !ee) return;
      Ue.autoUnlock = !1;
      const ie = ee.createBuffer(1, 1, 22050);
      Ue._scratchBuffer = ie;
      const He = new AbortController;
      let ye = "afterPaint";
      const be = () => {
          var ye;
          if (Ue._audioUnlocked) return;
          null === (ye = Ue._autoResume) || void 0 === ye || ye.call(Ue);
          const be = ee.createBufferSource();
          be.buffer = ie, be.connect(ee.destination), be.start(0), ee.resume().catch((() => {})), be.onended = () => {
            be.disconnect(0), Ue._audioUnlocked = !0, He.abort();
            for (const ee of Ue._howls) ee._emit("unlock")
          }
        },
        Fe = () => {
          qe(), be()
        },
        Je = ie => {
          if (qe(), "inTap" === ye) {
            if ("running" === ee.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), be()
          } else "afterPaint" === ye && (ye = "queued", (0, Me.c)(ie.timeStamp, (() => {
            ye = "inTap", be()
          })))
        };
      for (const Me of ["touchstart", "touchend"]) document.addEventListener(Me, Fe, {
        capture: !0,
        signal: He.signal
      });
      for (const Me of Ke.b) document.addEventListener(Me, Je, {
        capture: !0,
        signal: He.signal
      })
    });
    let fe = 0;
    const Te = null === (ye = Ue._autoSuspend) || void 0 === ye ? void 0 : ye.bind(be.Howler);

    function pe() {
      Xe();
      const {
        ctx: ee,
        masterGain: ie
      } = Ue;
      return ee && ie ? {
        ctx: ee,
        destination: ie,
        holdAwake: ee => {
          var ie, He;
          (fe += ee ? 1 : -1, ee) ? null === (ie = Ue._autoResume) || void 0 === ie || ie.call(Ue): null === (He = Ue._autoSuspend) || void 0 === He || He.call(Ue)
        },
        wake: () => {
          var ie;
          "running" !== ee.state && (null === (ie = Ue._autoResume) || void 0 === ie || ie.call(Ue), ee.resume().catch((() => {})))
        }
      } : null
    }

    function Xe() {
      var ee;
      (Ue.volume(), Ue.ctx && Ue.autoUnlock) && (null === (ee = Ue._unlockAudio) || void 0 === ee || ee.call(Ue))
    }
    Te && (Ue._autoSuspend = () => fe > 0 ? be.Howler : Te())
  },
  54196: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye,
      e: () => be
    });
    const ye = ["recording", "freecam", "keyframe"];

    function be() {
      const ee = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(ee[1]) << 32n | BigInt(ee[0])
    }
  },
  63791: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      HOLD_TIMEOUT_MS: () => Je,
      ReplayViewer: () => Re
    });
    var ye = He(37775),
      be = He(37813),
      Me = He(37807),
      Ke = He(37828),
      Ue = He(5271),
      Fe = He(54196);
    const Je = 1e4,
      oe = new Set(["Zf"]);
    class Re {
      constructor(ee) {
        var ie;
        this.deps = ee, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (ie = ee.now) && void 0 !== ie ? ie : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Ue.Yc.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get lJ() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? ye.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(ee, ie) {
        var He, Me, Ke, Fe;
        const {
          client: Je
        } = this.deps;
        if (!this.playback) {
          if (!Je.setPlayback(!0)) throw new Error(ye.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const oe = this.epoch;
        let Re;
        try {
          Re = await Je.open(ee, (() => (0, be.c)(ee, ie)))
        } finally {
          this.loadingOpens--
        }
        if (oe !== this.epoch && "reloading" !== Re) throw new Error(ye.d.coreStopped.text);
        if ("opening" !== Re) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const ee = function(ee) {
            switch (ee) {
              case "reloading":
                return null;
              case "stopped":
              case Ue.Rc.ModuleTrap:
                return ye.d.coreStopped;
              case Ue.Rc.ModuleLoad:
                return ye.d.viewerLoadFailed;
              case Ue.Rc.TooLarge:
                return ye.d.cantOpen
            }
          }(Re);
          if (null === ee) return;
          throw new Error(ee.text)
        }
        return this.rejectSave(new Error(ye.d.saveClosed.text)), this.fileName = null !== (He = null !== (Me = ie.fileName) && void 0 !== Me ? Me : null === (Ke = ie.fileHandle) || void 0 === Ke ? void 0 : Ke.name) && void 0 !== He ? He : null, this.fileHandle = null !== (Fe = ie.fileHandle) && void 0 !== Fe ? Fe : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((ee, ie) => {
          this.pendingOpen = {
            resolve: ee,
            reject: ie
          }
        }))
      }
      play() {
        this.holds.has("Zf") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Zf")
      }
      seek(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = this.lastView;
        null !== He && (ie || ee < He.YR) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(ee, ie)
      }
      setSpeed(ee) {
        this.deps.client.setSpeed(ee)
      }
      setCameraMode(ee) {
        this.deps.client.setCameraMode(ee)
      }
      cycleCameraMode() {
        const ee = this.lastView;
        null !== ee && ee.state !== Ue.Yc.None && this.setCameraMode(Fe.b[(Fe.b.indexOf(ee.cameraMode) + 1) % Fe.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(ee) {
        this.edited(this.deps.client.setKeyframe(ee))
      }
      moveKeyframe(ee, ie) {
        this.edited(this.deps.client.moveKeyframe(ee, ie))
      }
      deleteKeyframes(ee, ie) {
        this.edited(this.deps.client.deleteKeyframes(ee, ie))
      }
      setMark(ee) {
        this.edited(this.deps.client.setMark(ee))
      }
      crop(ee, ie) {
        return !(ie <= ee) && (null !== this.pendingSave ? (this.deps.notify(ye.d.saveBusy), !1) : !!this.deps.client.crop(ee, ie) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(ye.d.saveBusy.text)) : new Promise(((ee, ie) => {
          const He = {
            resolve: ee,
            reject: ie
          };
          this.pendingSave = He, this.editsAtSave = this.edits, this.deps.client.save((0, Fe.e)()).then((ee => {
            this.pendingSave === He && this.saveStarted(ee)
          }), (ee => {
            this.pendingSave === He && this.rejectSave(ee instanceof Error ? ee : new Error(String(ee)))
          }))
        }))
      }
      saveStarted(ee) {
        switch (ee) {
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
      markSaved(ee, ie) {
        var He, ye;
        this.fileHandle = ee, this.fileName = null !== (He = null !== (ye = null === ee || void 0 === ee ? void 0 : ee.name) && void 0 !== ye ? ye : ie) && void 0 !== He ? He : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(ye.d.coreStopped.text)), this.rejectSave(new Error(ye.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var ee, ie, He;
        const ye = this.deps.client.view(),
          be = ye !== this.lastView;
        this.lastView = ye, this.opening && null !== ye && ye.state !== Ue.Yc.None && ye.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Ke.h)()), this.cropAsked ? (this.cropAsked = !1, null !== ye && ye.state === Ue.Yc.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== ye && ye.state !== Ue.Yc.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Me = 0 === this.settleFrames && 0 === (null !== (ee = null === (ie = (He = this.deps).meshPending) || void 0 === ie ? void 0 : ie.call(He)) && void 0 !== ee ? ee : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Me && this.release("opening"), this.holds.has("seek") && Me && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Me && this.release("crop");
        const Fe = this.now();
        for (const [Ke, Ue] of this.holds) !oe.has(Ke) && Fe - Ue >= Je && this.release(Ke);
        this.saveRefused && !this.cropping && this.saveFailed(!1), be && this.deps.onChange()
      }
      cropped() {
        (0, Ke.h)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(ee) {
        switch (ee.reason) {
          case Ue.Rc.TooLarge:
            break;
          case Ue.Rc.Open:
          case Ue.Rc.NothingStaged: {
            this.opening = !1, this.release("opening");
            const ie = (0, Me.g)(ee.version) ? ye.d.replayTooOld : ye.d.cantOpen;
            null === this.pendingOpen && this.deps.notify(ie), this.settleOpen(new Error(ie.text));
            break
          }
          case Ue.Rc.Crop:
            if (ee.code === Ue.Qc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(ye.d.cropFailed);
            break;
          case Ue.Rc.ModuleTrap:
          case Ue.Rc.ModuleLoad:
          case Ue.Rc.Port:
            this.moduleEnded(ee.reason === Ue.Rc.ModuleTrap ? ye.d.coreStopped : ye.d.cantOpen);
            break;
          case Ue.Rc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${ee.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(ee) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(ee), this.settleOpen(new Error(ee.text))
      }
      saveDone(ee) {
        const ie = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ie || void 0 === ie || ie.resolve(ee)
      }
      saveFailed(ee) {
        this.rejectSave(new Error(ee ? ye.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(ee) {
        ee && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(ye.d.cropBusy.text)) : this.deps.notify(ye.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(ee) {
        const ie = this.pendingOpen;
        this.pendingOpen = null, null === ee ? null === ie || void 0 === ie || ie.resolve() : null === ie || void 0 === ie || ie.reject(ee)
      }
      rejectSave(ee) {
        const ie = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ie || void 0 === ie || ie.reject(ee)
      }
      hold(ee) {
        const ie = 0 === this.holds.size;
        this.holds.set(ee, this.now()), ie && this.deps.setHoldDraws(!0)
      }
      release(ee) {
        this.holds.delete(ee) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  63783: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      MESH_TAIL_MS: () => Je,
      PLAY_START_TIMEOUT_MS: () => Ue,
      startWasmReplayVideoExport: () => Re
    });
    var ye = He(40101),
      be = He(63791),
      Me = He(5271),
      Ke = He(2503);
    const Ue = be.HOLD_TIMEOUT_MS + 5e3,
      Fe = 50,
      Je = 200;

    function oe(ee) {
      var ie;
      return (null === (ie = ee.view) || void 0 === ie ? void 0 : ie.state) === Me.Yc.Cropping || ee.lJ.includes("crop")
    }

    function Re(ee) {
      return (0, ye.e)((() => function(ee) {
        var ie, He, ye, be, Re, ke;
        const qe = ee.viewer(),
          fe = null !== (ie = null === qe || void 0 === qe ? void 0 : qe.view) && void 0 !== ie ? ie : null,
          Te = ee.canvas();
        if (!qe || !fe || fe.state === Me.Yc.None || 0 === fe.totalTicks || !Te || oe(qe)) return null;
        const pe = null !== (He = ee.now) && void 0 !== He ? He : () => performance.now(),
          Xe = qe.id,
          ze = () => {
            const ie = ee.viewer();
            return ie === qe && ie.id === Xe && ie.isOpen ? ie : null
          },
          Be = Math.min(null !== (ye = null === (be = fe.mark) || void 0 === be ? void 0 : be.outTick) && void 0 !== ye ? ye : 1 / 0, fe.totalTicks - 1);
        let Ee = null,
          ge = !1;
        const Oe = () => {
          var ee, ie;
          return (null === (ee = ze()) || void 0 === ee || null === (ie = ee.view) || void 0 === ie ? void 0 : ie.state) === Me.Yc.Playing
        };
        return {
          lV: Me.md,
          playbackMarkInTick: null !== (Re = null === (ke = fe.mark) || void 0 === ke ? void 0 : ke.inTick) && void 0 !== Re ? Re : null,
          startFailure: () => {
            const ee = ze();
            return null === ee ? "Another replay opened. Export it again from there." : oe(ee) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var ee, ie;
            return null !== (ee = null === (ie = ze()) || void 0 === ie ? void 0 : ie.fileName) && void 0 !== ee ? ee : null
          },
          playbackSpeed: () => {
            var ee, ie, He;
            return null !== (ee = null === (ie = ze()) || void 0 === ie || null === (He = ie.view) || void 0 === He ? void 0 : He.speed) && void 0 !== ee ? ee : 1
          },
          setPlaybackSpeed: ee => {
            var ie;
            null === (ie = ze()) || void 0 === ie || ie.setSpeed(ee)
          },
          play: () => {
            var ee;
            ge = !1, Ee = pe(), null === (ee = ze()) || void 0 === ee || ee.play()
          },
          pause: () => {
            var ee;
            null === (ee = ze()) || void 0 === ee || ee.pause()
          },
          seekToTick: ee => {
            var ie;
            null === (ie = ze()) || void 0 === ie || ie.seek(ee, !0)
          },
          seekSettled: () => new Promise((ee => {
            const ie = setInterval((() => {
              const He = ze();
              null === He ? (clearInterval(ie), ee()) : He.lJ.includes("seek") || (clearInterval(ie), setTimeout(ee, Je))
            }), Fe)
          })),
          isPlaying: () => {
            var ee, ie, He;
            return null !== Ee && null !== ze() && (!!Oe() || !ge && (null !== (ee = null === (ie = ze()) || void 0 === ie || null === (He = ie.view) || void 0 === He ? void 0 : He.YR) && void 0 !== ee ? ee : 0) < Be && pe() - Ee < Ue)
          },
          watchPlayback: ie => {
            const He = ee.watchViewer((() => {
                ge ||= null !== Ee && Oe(), ie()
              })),
              ye = setTimeout(ie, Ue + 1);
            return () => {
              clearTimeout(ye), He()
            }
          },
          playbackFailure: () => {
            var ee, ie;
            const He = ze();
            return null === He ? "The replay closed before the video finished." : (null !== (ee = null === (ie = He.view) || void 0 === ie ? void 0 : ie.YR) && void 0 !== ee ? ee : 0) >= Be ? null : ge ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => Te,
          closeViewer: () => {
            ee.requestViewer("close")
          },
          reopenViewer: () => {
            ee.requestViewer("open")
          },
          holdInput: Ke.f
        }
      }(ee)))
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);