export const id = 72;
export const ids = [72];
export const modules = {
  37913: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => LM,
      h: () => mM
    });
    var OM = iM(625),
      SM = iM(30),
      jM = iM(37872);
    const aM = "replayFileKeptForReload",
      PM = "replayFileKeptForReloadAt",
      nM = "replayFileKeptForReloadTab",
      QM = 3e5,
      zM = 5e3;
    async function LM(MM, rM) {
      const iM = Date.now(),
        jM = {
          at: iM,
          bytes: MM,
          source: rM
        },
        QM = await Promise.race([(async () => await SM.f.setItem(PM, iM) && SM.f.setItem(aM, jM))(), (0, OM.Q)(zM).then((() => !1))]);
      QM || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const LM = {
        at: iM,
        ML: QM
      };
      SM.k.setItem(nM, LM)
    }
    async function mM() {
      var MM;
      const rM = SM.k.getItem(nM);
      null !== rM && SM.k.removeItem(nM);
      const iM = Date.now(),
        OM = await SM.f.getItem(PM),
        zM = null !== rM && iM - rM.at <= QM,
        LM = null !== rM && OM === rM.at;
      let mM = null;
      if (null !== OM && (LM || ("number" !== typeof OM || iM - OM > QM)) && (mM = zM && LM && rM.ML ? await SM.f.getItem(aM) : null, await Promise.all([SM.f.removeItem(PM), SM.f.removeItem(aM)])), !zM) return null;
      if ((null === (MM = mM) || void 0 === MM ? void 0 : MM.at) !== rM.at) throw new Error(jM.c.replayNotKept.text);
      return {
        bytes: mM.bytes,
        source: mM.source
      }
    }
  },
  37905: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM,
      h: () => jM,
      i: () => SM
    });
    const OM = [9];

    function SM(MM) {
      return OM.includes(MM)
    }

    function jM(MM) {
      return null !== MM && MM >= 3 && MM < OM[0]
    }
  },
  37926: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM,
      c: () => SM
    });
    const OM = "data-replay-ui-active",
      SM = [{
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
  37935: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => QM,
      f: () => LM,
      g: () => zM
    });
    var OM = iM(19),
      SM = iM(22),
      jM = iM(37926);

    function aM() {
      const MM = {};
      for (const {
          group: rM
        }
        of jM.c) MM[rM] = !0;
      return MM
    }
    let PM = aM();

    function nM() {
      SM.i.Tz("replayViewer|uiVisibilityChanged")
    }

    function QM() {
      return PM
    }

    function zM(MM, rM) {
      PM[MM] !== rM && (PM = {
        ...PM,
        [MM]: rM
      }, "nametag" === MM && OM.d.set({
        areNametagsHidden: !rM
      }), nM())
    }

    function LM() {
      PM = aM(), OM.d.set({
        areNametagsHidden: !1
      }), nM()
    }
  },
  63239: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      HOLD_TIMEOUT_MS: () => QM,
      ReplayViewer: () => LM
    });
    var OM = iM(37872),
      SM = iM(37913),
      jM = iM(37905),
      aM = iM(37935),
      PM = iM(5198),
      nM = iM(53658);
    const QM = 1e4,
      zM = new Set(["nh"]);
    class LM {
      constructor(MM) {
        var rM;
        this.deps = MM, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (rM = MM.now) && void 0 !== rM ? rM : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== PM.hd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get sQ() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? OM.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(MM, rM) {
        var iM, jM, aM, nM;
        const {
          client: QM
        } = this.deps;
        if (!this.playback) {
          if (!QM.setPlayback(!0)) throw new Error(OM.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const zM = this.epoch;
        let LM;
        try {
          LM = await QM.open(MM, (() => (0, SM.d)(MM, rM)))
        } finally {
          this.loadingOpens--
        }
        if (zM !== this.epoch && "reloading" !== LM) throw new Error(OM.c.coreStopped.text);
        if ("opening" !== LM) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const MM = function(MM) {
            switch (MM) {
              case "reloading":
                return null;
              case "stopped":
              case PM.Zc.ModuleTrap:
                return OM.c.coreStopped;
              case PM.Zc.ModuleLoad:
                return OM.c.viewerLoadFailed;
              case PM.Zc.TooLarge:
                return OM.c.cantOpen
            }
          }(LM);
          if (null === MM) return;
          throw new Error(MM.text)
        }
        return this.rejectSave(new Error(OM.c.saveClosed.text)), this.fileName = null !== (iM = null !== (jM = rM.fileName) && void 0 !== jM ? jM : null === (aM = rM.fileHandle) || void 0 === aM ? void 0 : aM.name) && void 0 !== iM ? iM : null, this.fileHandle = null !== (nM = rM.fileHandle) && void 0 !== nM ? nM : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((MM, rM) => {
          this.pendingOpen = {
            resolve: MM,
            reject: rM
          }
        }))
      }
      play() {
        this.holds.has("nh") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("nh")
      }
      seek(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = this.lastView;
        null !== iM && (rM || MM < iM.bL) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(MM, rM)
      }
      setSpeed(MM) {
        this.deps.client.setSpeed(MM)
      }
      setCameraMode(MM) {
        this.deps.client.setCameraMode(MM)
      }
      cycleCameraMode() {
        const MM = this.lastView;
        null !== MM && MM.state !== PM.hd.None && this.setCameraMode(nM.c[(nM.c.indexOf(MM.cameraMode) + 1) % nM.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(MM) {
        this.edited(this.deps.client.setKeyframe(MM))
      }
      moveKeyframe(MM, rM) {
        this.edited(this.deps.client.moveKeyframe(MM, rM))
      }
      deleteKeyframes(MM, rM) {
        this.edited(this.deps.client.deleteKeyframes(MM, rM))
      }
      setMark(MM) {
        this.edited(this.deps.client.setMark(MM))
      }
      crop(MM, rM) {
        return !(rM <= MM) && (null !== this.pendingSave ? (this.deps.notify(OM.c.saveBusy), !1) : !!this.deps.client.crop(MM, rM) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(OM.c.saveBusy.text)) : new Promise(((MM, rM) => {
          const iM = {
            resolve: MM,
            reject: rM
          };
          this.pendingSave = iM, this.editsAtSave = this.edits, this.deps.client.save((0, nM.e)()).then((MM => {
            this.pendingSave === iM && this.saveStarted(MM)
          }), (MM => {
            this.pendingSave === iM && this.rejectSave(MM instanceof Error ? MM : new Error(String(MM)))
          }))
        }))
      }
      saveStarted(MM) {
        switch (MM) {
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
      markSaved(MM, rM) {
        var iM, OM;
        this.fileHandle = MM, this.fileName = null !== (iM = null !== (OM = null === MM || void 0 === MM ? void 0 : MM.name) && void 0 !== OM ? OM : rM) && void 0 !== iM ? iM : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(OM.c.coreStopped.text)), this.rejectSave(new Error(OM.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var MM, rM, iM;
        const OM = this.deps.client.view(),
          SM = OM !== this.lastView;
        this.lastView = OM, this.opening && null !== OM && OM.state !== PM.hd.None && OM.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, aM.f)()), this.cropAsked ? (this.cropAsked = !1, null !== OM && OM.state === PM.hd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== OM && OM.state !== PM.hd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const jM = 0 === this.settleFrames && 0 === (null !== (MM = null === (rM = (iM = this.deps).meshPending) || void 0 === rM ? void 0 : rM.call(iM)) && void 0 !== MM ? MM : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && jM && this.release("opening"), this.holds.has("seek") && jM && this.release("seek"), this.holds.has("crop") && !this.cropRunning && jM && this.release("crop");
        const nM = this.now();
        for (const [aM, PM] of this.holds) !zM.has(aM) && nM - PM >= QM && this.release(aM);
        this.saveRefused && !this.cropping && this.saveFailed(!1), SM && this.deps.onChange()
      }
      cropped() {
        (0, aM.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(MM) {
        switch (MM.reason) {
          case PM.Zc.TooLarge:
            break;
          case PM.Zc.Open:
          case PM.Zc.NothingStaged: {
            this.opening = !1, this.release("opening");
            const rM = (0, jM.h)(MM.version) ? OM.c.replayTooOld : OM.c.cantOpen;
            null === this.pendingOpen && this.deps.notify(rM), this.settleOpen(new Error(rM.text));
            break
          }
          case PM.Zc.Crop:
            if (MM.code === PM.Xc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(OM.c.cropFailed);
            break;
          case PM.Zc.ModuleTrap:
          case PM.Zc.ModuleLoad:
          case PM.Zc.Port:
            this.moduleEnded(MM.reason === PM.Zc.ModuleTrap ? OM.c.coreStopped : OM.c.cantOpen);
            break;
          case PM.Zc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${MM.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(MM) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(MM), this.settleOpen(new Error(MM.text))
      }
      saveDone(MM) {
        const rM = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === rM || void 0 === rM || rM.resolve(MM)
      }
      saveFailed(MM) {
        this.rejectSave(new Error(MM ? OM.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(MM) {
        MM && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(OM.c.cropBusy.text)) : this.deps.notify(OM.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(MM) {
        const rM = this.pendingOpen;
        this.pendingOpen = null, null === MM ? null === rM || void 0 === rM || rM.resolve() : null === rM || void 0 === rM || rM.reject(MM)
      }
      rejectSave(MM) {
        const rM = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === rM || void 0 === rM || rM.reject(MM)
      }
      hold(MM) {
        const rM = 0 === this.holds.size;
        this.holds.set(MM, this.now()), rM && this.deps.setHoldDraws(!0)
      }
      release(MM) {
        this.holds.delete(MM) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);