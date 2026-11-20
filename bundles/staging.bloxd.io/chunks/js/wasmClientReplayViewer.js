export const id = 57;
export const ids = [57];
export const modules = {
  36524: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU,
      h: () => pU
    });
    const tU = "data-replay-ui-active",
      pU = [{
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
  36527: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU,
      f: () => GU,
      g: () => cU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(36524);

    function PU() {
      const UU = {};
      for (const {
          group: RU
        }
        of EU.h) UU[RU] = !0;
      return UU
    }
    let TU = PU();

    function qU() {
      pU.p.yh("replayViewer|uiVisibilityChanged")
    }

    function KU() {
      return TU
    }

    function cU(UU, RU) {
      TU[UU] !== RU && (TU = {
        ...TU,
        [UU]: RU
      }, "nametag" === UU && tU.b.set({
        areNametagsHidden: !RU
      }), qU())
    }

    function GU() {
      TU = PU(), tU.b.set({
        areNametagsHidden: !1
      }), qU()
    }
  },
  41963: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      HOLD_TIMEOUT_MS: () => TU,
      ReplayViewer: () => KU
    });
    var tU = gU(36515),
      pU = gU(36527),
      EU = gU(4449),
      PU = gU(41923);
    const TU = 1e4,
      qU = new Set(["Fu"]);
    class KU {
      constructor(UU) {
        var RU;
        this.deps = UU, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (RU = UU.now) && void 0 !== RU ? RU : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== EU.kd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get WT() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? tU.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(UU, RU) {
        var gU, pU, PU, TU;
        const {
          client: qU
        } = this.deps;
        if (!this.playback) {
          if (!qU.setPlayback(!0)) throw new Error(tU.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const KU = this.epoch;
        let cU;
        try {
          cU = await qU.open(UU)
        } finally {
          this.loadingOpens--
        }
        if (KU !== this.epoch) throw new Error(tU.b.coreStopped.text);
        if ("opening" !== cU) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const UU = function(UU) {
            switch (UU) {
              case "reloading":
                return null;
              case "stopped":
              case EU.Zc.ModuleTrap:
                return tU.b.coreStopped;
              case EU.Zc.ModuleLoad:
                return tU.b.viewerLoadFailed;
              case EU.Zc.TooLarge:
                return tU.b.cantOpen
            }
          }(cU);
          if (null === UU) return;
          throw new Error(UU.text)
        }
        return this.rejectSave(new Error(tU.b.saveClosed.text)), this.fileName = null !== (gU = null !== (pU = RU.fileName) && void 0 !== pU ? pU : null === (PU = RU.fileHandle) || void 0 === PU ? void 0 : PU.name) && void 0 !== gU ? gU : null, this.fileHandle = null !== (TU = RU.fileHandle) && void 0 !== TU ? TU : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((UU, RU) => {
          this.pendingOpen = {
            resolve: UU,
            reject: RU
          }
        }))
      }
      play() {
        this.holds.has("Fu") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Fu")
      }
      seek(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gU = this.lastView;
        null !== gU && (RU || UU < gU.HG) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(UU, RU)
      }
      setSpeed(UU) {
        this.deps.client.setSpeed(UU)
      }
      setCameraMode(UU) {
        this.deps.client.setCameraMode(UU)
      }
      cycleCameraMode() {
        const UU = this.lastView;
        null !== UU && UU.state !== EU.kd.None && this.setCameraMode(PU.b[(PU.b.indexOf(UU.cameraMode) + 1) % PU.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(UU) {
        this.edited(this.deps.client.setKeyframe(UU))
      }
      moveKeyframe(UU, RU) {
        this.edited(this.deps.client.moveKeyframe(UU, RU))
      }
      deleteKeyframes(UU, RU) {
        this.edited(this.deps.client.deleteKeyframes(UU, RU))
      }
      setMark(UU) {
        this.edited(this.deps.client.setMark(UU))
      }
      crop(UU, RU) {
        return !(RU <= UU) && (null !== this.pendingSave ? (this.deps.notify(tU.b.saveBusy), !1) : !!this.deps.client.crop(UU, RU) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(tU.b.saveBusy.text)) : new Promise(((UU, RU) => {
          const gU = {
            resolve: UU,
            reject: RU
          };
          this.pendingSave = gU, this.editsAtSave = this.edits, this.deps.client.save((0, PU.f)()).then((UU => {
            this.pendingSave === gU && this.saveStarted(UU)
          }), (UU => {
            this.pendingSave === gU && this.rejectSave(UU instanceof Error ? UU : new Error(String(UU)))
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
      markSaved(UU, RU) {
        var gU, tU;
        this.fileHandle = UU, this.fileName = null !== (gU = null !== (tU = null === UU || void 0 === UU ? void 0 : UU.name) && void 0 !== tU ? tU : RU) && void 0 !== gU ? gU : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(tU.b.coreStopped.text)), this.rejectSave(new Error(tU.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var UU, RU, gU;
        const tU = this.deps.client.view(),
          PU = tU !== this.lastView;
        this.lastView = tU, this.opening && null !== tU && tU.state !== EU.kd.None && tU.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, pU.f)()), this.cropAsked ? (this.cropAsked = !1, null !== tU && tU.state === EU.kd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== tU && tU.state !== EU.kd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const KU = 0 === this.settleFrames && 0 === (null !== (UU = null === (RU = (gU = this.deps).meshPending) || void 0 === RU ? void 0 : RU.call(gU)) && void 0 !== UU ? UU : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && KU && this.release("opening"), this.holds.has("seek") && KU && this.release("seek"), this.holds.has("crop") && !this.cropRunning && KU && this.release("crop");
        const cU = this.now();
        for (const [pU, EU] of this.holds) !qU.has(pU) && cU - EU >= TU && (this.release(pU), "opening" === pU && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), PU && this.deps.onChange()
      }
      cropped() {
        (0, pU.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(UU) {
        switch (UU.reason) {
          case EU.Zc.TooLarge:
            break;
          case EU.Zc.Open:
          case EU.Zc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(tU.b.cantOpen), this.settleOpen(new Error(tU.b.cantOpen.text));
            break;
          case EU.Zc.Crop:
            if (UU.code === EU.Wc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(tU.b.cropFailed);
            break;
          case EU.Zc.ModuleTrap:
          case EU.Zc.ModuleLoad:
          case EU.Zc.Port:
            this.moduleEnded(UU.reason === EU.Zc.ModuleTrap ? tU.b.coreStopped : tU.b.cantOpen);
            break;
          case EU.Zc.NotLive:
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
        const RU = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === RU || void 0 === RU || RU.resolve(UU)
      }
      saveFailed(UU) {
        this.rejectSave(new Error(UU ? tU.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(UU) {
        UU && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(tU.b.cropBusy.text)) : this.deps.notify(tU.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(UU) {
        const RU = this.pendingOpen;
        this.pendingOpen = null, null === UU ? null === RU || void 0 === RU || RU.resolve() : null === RU || void 0 === RU || RU.reject(UU)
      }
      rejectSave(UU) {
        const RU = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === RU || void 0 === RU || RU.reject(UU)
      }
      hold(UU) {
        const RU = 0 === this.holds.size;
        this.holds.set(UU, this.now()), RU && this.deps.setHoldDraws(!0)
      }
      release(UU) {
        this.holds.delete(UU) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);